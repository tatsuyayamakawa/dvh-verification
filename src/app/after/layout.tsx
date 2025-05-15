import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "修正後",
};

export default function AfterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
