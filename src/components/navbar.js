import { myTitle } from "../../config";
import { useRouter } from "next/router";
import Link from "next/link";

export default function navbar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path ? 'text-gray-100 border-b-4 rounded border-blue-400' : '';
  return (
    <nav className="w-full flex justify-between py-8 items-center bg-neutral-900/[.35] backdrop-blur">
      <a className="font-semibold text-xl text-blue-400 hover:text-blue-300 ">{myTitle}</a>
      <div className="w-fit flex justify-between text-base font-medium text-gray-500">
        <a href="/" className={`hover:text-gray-400 ${isActive('/')} mx-3`}>Home</a>
        <a href="/about" className={`hover:text-gray-400 ${isActive('/about')} mx-3`}>About</a>
        <a href="/portfolio" className={`hover:text-gray-400 ${isActive('/portfolio')} mx-3`}>Portfolio</a>
      </div>
      <a>
        <img src="github.png" className="w-9 invert"></img>
      </a>
    </nav>
  );
};
