import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "konanfi9-web",
  description: "Toolkit (health & tester) for backend integration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}