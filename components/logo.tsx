import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="">
      <div className="relative w-[180px] h-[85px] max-sm:w-[160px] max-sm:h-[40px]">
        <Image
          src="/finantex-logo.png"
          alt="Trading Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
