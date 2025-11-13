import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Home() {
  const btn = "inline-flex items-center justify-center rounded-md font-medium transition-colors h-10 px-4 text-sm";
  const primary = "bg-black text-white hover:bg-neutral-800";
  const secondary = "bg-neutral-100 text-black hover:bg-neutral-200";
  return (
    <div className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">konanfi9-web</h1>
      <p className="text-sm text-neutral-600">
        Next.js + TS + Tailwind + shadcn-like UI toolkit for backend integration.
      </p>
      <Card className="p-4 space-y-3">
        <h2 className="font-medium">Tools</h2>
        <Separator />
        <div className="flex gap-2">
          <Link className={`${btn} ${primary}`} href="/health">Health</Link>
          <Link className={`${btn} ${secondary}`} href="/tester">Endpoint Tester</Link>
          <Link className={`${btn} ${secondary}`} href="/demo">Demo</Link>
        </div>
      </Card>
    </div>
  );
}