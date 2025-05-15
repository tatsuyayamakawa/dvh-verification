"use client";

import Image from "next/image";
import photo from "./assets/after.jpg";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

// カスタムフックを作成してロジックを分離
function useInitialViewHeight(): string {
  // 初期値も計算済みの値を使用してちらつきを防止（初期レンダリングで使用）
  const [viewHeight, setViewHeight] = useState<string>("calc(100dvh - 48px)");

  useEffect(() => {
    // 初回レンダリング時にのみ高さを計算
    // CSS変数の100dvhはモバイルでスクロール時に変動することがあるため
    // window.innerHeightで固定値をピクセル単位で取得して再計算を防止
    const height = window.innerHeight;
    setViewHeight(`${height}px`);
    // 空の依存配列で初回レンダリング時のみ実行
  }, []);
  return viewHeight;
}

export default function AfterPage() {
  const viewHeight = useInitialViewHeight();
  return (
    <main>
      <div
        className="relative mt-12"
        style={{ height: `calc(${viewHeight} - 48px)` }}
      >
        <Image
          src={photo}
          alt=""
          priority
          placeholder="blur"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-4xl font-bold text-shadow-lg">
          修正後
        </div>
        <div className="absolute bottom-6 inset-0 z-10 mt-6 flex items-end justify-center opacity-70">
          <div className="flex flex-col items-center">
            <span className="text-white text-xs font-medium tracking-wider">
              SCROLL DOWN
            </span>
            <ChevronDown className="text-white mt-1 h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
      <div className="h-40 flex items-center justify-center text-xl font-bold">
        <ChevronDown className="text-foreground h-10 w-10" />
      </div>
      <div className="h-40 flex items-center justify-center text-xl font-bold">
        <ChevronDown className="text-foreground h-10 w-10" />
      </div>
      <div className="h-40 flex items-center justify-center text-xl font-bold">
        <ChevronDown className="text-foreground h-10 w-10" />
      </div>
      <div className="h-40 flex items-center justify-center text-xl font-bold">
        <ChevronDown className="text-foreground h-10 w-10" />
      </div>
      <div className="h-40 flex items-center justify-center text-xl font-bold">
        <ChevronDown className="text-foreground h-10 w-10" />
      </div>
    </main>
  );
}
