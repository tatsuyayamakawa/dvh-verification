import { HeroImage } from "@/components/hero-image";
import { Button } from "@/components/ui/button";

export default function HeroExample() {
  return (
    <main className="relative">
      {/* ヒーロー画像セクション */}
      <HeroImage src="/images/hero.jpg" alt="ヒーロー画像" />

      {/* ヒーロー画像の上に表示するコンテンツ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ヒーローセクション
        </h1>
        <p className="text-xl mb-8">Tailwind CSSと100dvhを使った全画面表示</p>
        <Button variant="default" size="lg">
          詳細を見る
        </Button>
      </div>
    </main>
  );
}
