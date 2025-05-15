import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <div className="fixed m-auto inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">dvhのカクつき検証</h1>
        <p className="text-base mb-8 text-muted-foreground">
          スマートフォンで見てください
        </p>
        <div className="flex flex-row justify-center gap-6 mb-16">
          <Button variant="outline" size="lg" asChild>
            <Link href="/before">修正前</Link>
          </Button>
          <Button variant="default" size="lg" asChild>
            <Link href="after">修正後</Link>
          </Button>
        </div>
        <Button variant="link" size="lg" asChild>
          <a
            href="https://qiita.com/tatsuyayamakawa/items/8a43f1d87815d7e8e112"
            target="_blank"
            rel="noopener noreferrer"
          >
            Qiitaの記事
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
      <Button
        variant="default"
        size="icon"
        className="rounded-full fixed bottom-5 right-5"
      >
        <a
          href="https://github.com/tatsuyayamakawa/dvh-verification"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
}
