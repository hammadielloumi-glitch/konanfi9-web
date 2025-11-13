/**
 * Minimal API client for browser-side usage.
 * - Base URL: process.env.NEXT_PUBLIC_API_BASE_URL
 * - If localStorage.auth_token exists (client-side), injects Authorization: Bearer &lt;token&gt;
 * - Returns structured response with status and parsed JSON/text.
 */

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ApiResponse&lt;T = unknown&gt; = {
  ok: boolean;
  status: number;
  data?: T;
  text?: string;
  error?: string;
  url: string;
};

function joinUrl(base: string, path: string): string {
  if (!base) return path;
  if (!path.startsWith('/')) return `${base}/${path}`;
  return `${base}${path}`;
}

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function getToken(): string | null {
  if (!isBrowser()) return null;
  try {
    return localStorage.getItem('auth_token');
  } catch {
    return null;
  }
}

export async function apiFetch&lt;T = unknown&gt;(
  path: string,
  options: RequestInit &amp; { baseUrl?: string } = {}
): Promise&lt;ApiResponse&lt;T&gt;&gt; {
  const baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
  const url = joinUrl(baseUrl ?? '', path);

  const headers = new Headers(options.headers || {});
  // Only inject Authorization if not already set and token exists
  if (!headers.has('Authorization')) {
    const token = getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  }
  if (!headers.has('Accept')) headers.set('Accept', 'application/json');

  const init: RequestInit = {
    ...options,
    headers,
  };

  try {
    const res = await fetch(url, init);
    const contentType = res.headers.get('content-type') || '';
    let data: any = undefined;
    let text: string | undefined = undefined;

    if (contentType.includes('application/json')) {
      try {
        data = await res.json();
      } catch {
        text = await res.text();
      }
    } else {
      text = await res.text();
      // Try to parse JSON if it looks like JSON
      if (text &amp;&amp; text.trim().startsWith('{')) {
        try {
          data = JSON.parse(text);
          text = undefined;
        } catch {
          // keep as text
        }
      }
    }

    return {
      ok: res.ok,
      status: res.status,
      data,
      text,
      url,
      error: res.ok ? undefined : (data?.message || data?.error || text || `HTTP ${res.status}`),
    };
  } catch (e: any) {
    return {
      ok: false,
      status: 0,
      url,
      error: e?.message || 'Network error',
    };
  }
}