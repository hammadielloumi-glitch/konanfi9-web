"use client";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ApiResponse<T = unknown> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  console.warn("NEXT_PUBLIC_API_BASE_URL is not defined.");
}

export async function apiRequest<T = unknown>(
  path: string,
  method: HttpMethod = "GET",
  body?: unknown,
  extraHeaders?: Record<string, string>
): Promise<ApiResponse<T>> {
  const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...extraHeaders,
  };

  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const contentType = res.headers.get("content-type");
    const json = contentType?.includes("application/json") ? await res.json() : null;

    return {
      ok: res.ok,
      status: res.status,
      data: json ?? undefined,
      error: !res.ok ? json?.detail || "Unknown error" : undefined,
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      error: (error as Error).message ?? "Network error",
    };
  }
}
