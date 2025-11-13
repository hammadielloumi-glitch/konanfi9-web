'use client';

import { useEffect, useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { apiFetch, ApiResponse, HttpMethod } from '@/lib/api';

type HeaderRow = { key: string; value: string };

const methods: HttpMethod[] = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

export default function TesterPage() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  const [method, setMethod] = useState<HttpMethod>('GET');
  const [path, setPath] = useState<string>('/');
  const [headers, setHeaders] = useState<HeaderRow[]>([{ key: 'Content-Type', value: 'application/json' }]);
  const [body, setBody] = useState<string>('');
  const [resp, setResp] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string>('');

  const friendlyBase = useMemo(() => (baseUrl || '(not set, using relative URLs)'), [baseUrl]);

  useEffect(() => {
    try {
      const t = localStorage.getItem('auth_token');
      if (t) setToken(t);
    } catch {}
  }, []);

  function updateHeader(idx: number, field: 'key' | 'value', value: string) {
    setHeaders((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: value };
      return copy;
    });
  }

  function addHeader() {
    setHeaders((prev) => [...prev, { key: '', value: '' }]);
  }

  function removeHeader(idx: number) {
    setHeaders((prev) => prev.filter((_, i) => i !== idx));
  }

  function saveToken() {
    try {
      localStorage.setItem('auth_token', token);
    } catch {}
  }
  function clearToken() {
    try {
      localStorage.removeItem('auth_token');
      setToken('');
    } catch {}
  }

  async function send() {
    setLoading(true);
    setResp(null);
    const headerObj: Record<string, string> = {};
    headers.forEach(({ key, value }) => {
      if (key) headerObj[key] = value;
    });

    let bodyInit: BodyInit | undefined = undefined;
    if (body && method !== 'GET') {
      try {
        bodyInit = JSON.stringify(JSON.parse(body));
      } catch {
        bodyInit = body; // send as-is if not valid JSON
      }
    }

    const res = await apiFetch(path, {
      method,
      headers: headerObj,
      body: bodyInit,
    });
    setResp(res);
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-5xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Endpoint Tester</h1>
      <p className="text-sm text-neutral-600">
        Base URL: <span className="font-mono">{friendlyBase}</span>
      </p>

      <Card className="p-4 space-y-3">
        <h2 className="font-medium">Authorization Token</h2>
        <div className="flex gap-2">
          <Input
            placeholder="Bearer token (without 'Bearer ')"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <Button onClick={saveToken}>Save</Button>
          <Button variant="secondary" onClick={clearToken}>Clear</Button>
        </div>
        <p className="text-xs text-neutral-600">
          Saved to localStorage.auth_token. Automatically injected as Authorization: Bearer &lt;token&gt;.
        </p>
      </Card>

      <Card className="p-4 space-y-4">
        <div className="flex flex-wrap gap-2 items-center">
          <label className="text-sm font-medium">Method</label>
          <div className="flex gap-2">
            {methods.map((m) => (
              <Button
                key={m}
                variant={m === method ? 'default' : 'secondary'}
                onClick={() => setMethod(m)}
                className="uppercase"
              >
                {m}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Path (relative to base)</label>
          <Input placeholder="/path" value={path} onChange={(e) => setPath(e.target.value)} />
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Headers</label>
            <Button variant="secondary" size="sm" onClick={addHeader}>Add header</Button>
          </div>
          <div className="space-y-2">
            {headers.map((h, i) => (
              <div key={i} className="flex gap-2">
                <Input
                  placeholder="Header key"
                  value={h.key}
                  onChange={(e) => updateHeader(i, 'key', e.target.value)}
                />
                <Input
                  placeholder="Header value"
                  value={h.value}
                  onChange={(e) => updateHeader(i, 'value', e.target.value)}
                />
                <Button variant="destructive" onClick={() => removeHeader(i)}>Remove</Button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Body (JSON or raw)</label>
          <Textarea
            className="min-h-[120px]"
            placeholder='{"example": true}'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={send} disabled={loading}>Send</Button>
          {loading && <span className="text-sm text-neutral-600">Sending...</span>}
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <h2 className="font-medium">Response</h2>
        <div className="text-sm">
          Status code: <span className="font-mono">{resp?.status ?? '—'}</span>
        </div>
        <Separator />
        <pre className="bg-muted rounded-md p-3 overflow-auto text-xs">
{resp
  ? resp.data
    ? JSON.stringify(resp.data, null, 2)
    : (resp.text || '')
  : '—'}
        </pre>
      </Card>
    </div>
  );
}
