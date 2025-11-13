"use client";

import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function TesterPage() {
  const [path, setPath] = useState("/health");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState<any>(null);

  async function sendRequest() {
    let payload = undefined;
    try {
      payload = body ? JSON.parse(body) : undefined;
    } catch {
      alert("Invalid JSON");
      return;
    }

    const res = await apiRequest(path, method as any, payload);
    setResponse(res);
  }

  return (
    <Card className="p-6 space-y-4">
      <h1 className="text-xl font-bold">API Tester</h1>
      <Separator />

      <Input value={path} onChange={(e) => setPath(e.target.value)} placeholder="/api/chat" />

      <select
        className="border p-2 rounded"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>PATCH</option>
        <option>DELETE</option>
      </select>

      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='{"message": "hello"}'
      />

      <Button onClick={sendRequest}>Send</Button>

      {response && (
        <pre className="bg-black text-white p-4 rounded text-sm overflow-auto">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </Card>
  );
}
