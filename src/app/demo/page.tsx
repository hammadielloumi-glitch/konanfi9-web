"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Conversation = {
  id: string;
  title?: string;
  message_user?: string;
};

export default function DemoPage() {
  const [data, setData] = useState<Conversation[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const res = await apiRequest("/api/conversations", "GET");

      if (!res.ok) {
        setError(res.error ?? "Error fetching conversations");
        return;
      }

      setData(res.data || []);
    }

    load();
  }, []);

  return (
    <Card className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Conversations Demo</h1>
      <Separator />

      {error && <p className="text-red-500">{error}</p>}

      <pre className="bg-black text-white p-4 rounded text-sm overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </Card>
  );
}
