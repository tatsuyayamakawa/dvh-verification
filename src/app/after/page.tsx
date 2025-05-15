"use client";

import Image from "next/image";
import photo from "./assets/after.jpg";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function AfterPage() {
  const [deviceHeight, setDeviceHeight] = useState<number>(0);

  useEffect(() => {
    // 初回レンダリング時にデバイスの高さを計算
    const calculateHeight = () => {
      const vh = window.innerHeight;
      setDeviceHeight(vh);
    };

    calculateHeight();
  }, []);

  return (
    <main>
      <div
        className="relative"
        style={{ height: deviceHeight ? `${deviceHeight}px` : "h-dvh" }}
      >
        <Image
          src={photo}
          alt=""
          priority
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
