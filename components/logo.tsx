import Image from "next/image";
import Link from "next/link";
import { ChevronsDown } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="font-bold text-lg flex items-center">
      <div className="relative w-[179px] h-[35px] max-sm:w-[129px] max-sm:h-[25px] ">
        <Image
          src="/finantex-logo.png"
          alt="Trading Logo"
          layout="fill"
          objectFit="contain" 
          priority
        />
      </div>
    </Link>
  );
}