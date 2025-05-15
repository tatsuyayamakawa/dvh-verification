import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "修正前",
};

export default function BeforeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
