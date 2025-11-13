'use client';

import { useEffect, useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { apiFetch, ApiResponse } from '@/lib/api';

type HealthResult = {
  tried: string[];
  successPath?: string;
  response?: ApiResponse;
};

const defaultCandidates = ['/health', '/api/health', '/status'];

export default function HealthPage() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  const [customPath, setCustomPath] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<HealthResult>({ tried: [] });

  const friendlyBase = useMemo(() => (baseUrl || '(not set, using relative URLs)'), [baseUrl]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const tried: string[] = [];
      let successPath: string | undefined;
      let response: ApiResponse | undefined;

      for (const p of defaultCandidates) {
        tried.push(p);
        const res = await apiFetch(p, { method: 'GET' });
        if (res.ok) {
          successPath = p;
          response = res;
          break;
        }
      }
      setResult({ tried, successPath, response });
      setLoading(false);
    })();
  }, []);

  async function handleTest(path: string) {
    if (!path) return;
    setLoading(true);
    const res = await apiFetch(path, { method: 'GET' });
    setResult({ tried: [path], successPath: res.ok ? path : undefined, response: res });
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">API Health Check</h1>
      <p className="text-sm text-neutral-600">
        Base URL: <span className="font-mono">{friendlyBase}</span>
      </p>

      <Card className="p-4 space-y-3">
        <div>
          <h2 className="font-medium">Automatic probing</h2>
          <p className="text-sm text-neutral-600">Tries: {defaultCandidates.join(', ')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {defaultCandidates.map((p) => (
            <Button key={p} variant="secondary" onClick={() => handleTest(p)} disabled={loading}>
              Test {p}
            </Button>
          ))}
        </div>
        <Separator />
        <div className="space-y-2">
          <label className="text-sm font-medium">Custom path</label>
          <div className="flex gap-2">
            <Input
              placeholder="/health"
              value={customPath}
              onChange={(e) => setCustomPath(e.target.value)}
            />
            <Button onClick={() => handleTest(customPath)} disabled={loading || !customPath}>
              Test
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <h2 className="font-medium">Result</h2>
        <div className="text-sm">
          <div>Tried: {result.tried.join(', ') || '—'}</div>
          <div className="mt-1">
            Success path: <span className="font-mono">{result.successPath || 'none'}</span>
          </div>
          <div className="mt-1">
            Status code: <span className="font-mono">{result.response?.status ?? '—'}</span>
          </div>
        </div>
        <Separator />
        <div>
          <h3 className="text-sm font-medium mb-2">Response</h3>
          <pre className="bg-muted rounded-md p-3 overflow-auto text-xs">
            {result.response
              ? result.response.data
                ? JSON.stringify(result.response.data, null, 2)
                : (result.response.text || '')
              : '—'}
          </pre>
        </div>
      </Card>
    </div>
  );
}
