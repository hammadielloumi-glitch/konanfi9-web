"use client";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ApiResponse<T = unknown> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  console.warn("NEXT_PUBLIC_API_BASE_URL is not defined. Using empty string as fallback.");
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
    const url = `${API_BASE_URL}${path}`;
    const res = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const contentType = res.headers.get("content-type");
    let json: T | null = null;
    
    if (contentType?.includes("application/json")) {
      try {
        json = (await res.json()) as T;
      } catch (e) {
        // Si le JSON est invalide, json reste null
      }
    }

    return {
      ok: res.ok,
      status: res.status,
      data: json ?? undefined,
      error: !res.ok ? (json && typeof json === "object" && "detail" in json ? String(json.detail) : "Unknown error") : undefined,
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      error: (error as Error).message ?? "Network error",
    };
  }
}
