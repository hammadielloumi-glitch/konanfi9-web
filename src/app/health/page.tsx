"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HealthPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function checkHealth() {
    setLoading(true);

    const paths = ["/health", "/api/health", "/status"];

    for (const p of paths) {
      const res = await apiRequest(p, "GET");
      if (res.ok) {
        setResult({ path: p, ...res });
        setLoading(false);
        return;
      }
    }

    setResult({ ok: false, error: "No health endpoint responded." });
    setLoading(false);
  }

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <Card className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Health Check</h1>
      <Separator />

      {loading && <p>Checking...</p>}

      {result && (
        <pre className="bg-black text-white p-4 rounded text-sm overflow-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </Card>
  );
}
