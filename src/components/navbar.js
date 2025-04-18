import { myTitle } from "../../config";
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path ? 'text-gray-100 border-b-4 rounded border-blue-400' : 'hover:text-gray-400';
  return (
    <nav className="w-full flex justify-between py-8 xl:px-2 px-9 items-center bg-neutral-900/[.85] backdrop-blur top-0 md:fixed max-w-7xl z-50">
      <Link className="font-semibold text-xl text-blue-400 hover:text-blue-300" href="/">{myTitle}</Link>
      <div className="hidden w-fit justify-between text-base font-medium text-gray-500 md:flex">
        <Link href="/" className={`${isActive('/')} mx-3 transition ease-out`}>Home</Link>
        <Link href="/about" className={`${isActive('/about')} mx-3 transition ease-out`}>About</Link>
        <Link href="/portfolio" className={`${isActive('/portfolio')} mx-3 transition ease-out`}>Portfolio</Link>
      </div>
      <Link href="https://github.com/michaeldiputra/" target="_blank">
        <Image src="github.svg" alt="github" className="w-9" width={1000} height={1000} />
      </Link>
    </nav>
  );
};
