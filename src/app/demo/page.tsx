'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { apiFetch } from '@/lib/api';

type Conversation = { id: string; title?: string; message_user?: string };

export default function DemoPage() {
  const [items, setItems] = useState<Conversation[]>([]);
  const [status, setStatus] = useState<string>('loading');

  useEffect(() => {
    (async () => {
      const res = await apiFetch('/api/conversations?limit=5', { method: 'GET' });
      if (res.ok && res.data && (res.data as any).items) {
        setItems((res.data as any).items);
        setStatus(`OK ${res.status}`);
      } else {
        setStatus(res.error || `HTTP ${res.status}`);
      }
    })();
  }, []);

  return (
    <div className="mx-auto max-w-4xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Demo: Conversations list</h1>
      <p className="text-sm text-neutral-600">Status: {status}</p>
      <Card className="p-4">
        <h2 className="font-medium mb-2">Items</h2>
        <Separator />
        <ul className="mt-3 space-y-2">
          {items.length === 0 ? (
            <li className="text-sm text-neutral-600">No items</li>
          ) : (
            items.map((c) => (
              <li key={c.id} className="text-sm">
                <span className="font-mono">{c.id}</span>{" "}
                <span className="text-neutral-600">— {c.title || c.message_user || "(no title)"}</span>
              </li>
            ))
          )}
        </ul>
      </Card>
    </div>
  );
}