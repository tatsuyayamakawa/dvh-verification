import { MenuIcon } from "lucide-react";
import logo from "./assets/vercel.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-12 px-4 flex flex-row items-center justify-between fixed top-0 left-0 right-0 z-10">
      <Link href="/">
        <Image src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
      </Link>
      <MenuIcon className="w-8 h-8" />
    </div>
  );
}
