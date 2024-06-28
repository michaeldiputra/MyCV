import { myTitle } from "../../config";
import { useRouter } from "next/router";

export default function navbar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path ? 'text-gray-100 border-b-4 rounded border-blue-400' : 'hover:text-gray-400';
  return (
    <nav className="w-full flex justify-between py-8 items-center bg-neutral-900/[.85] backdrop-blur px-2 top-0 fixed max-w-7xl">
      <a className="font-semibold text-xl text-blue-400 hover:text-blue-300" href="/">{myTitle}</a>
      <div className="w-fit flex justify-between text-base font-medium text-gray-500">
        <a href="/" className={`${isActive('/')} mx-3 transition ease-out`}>Home</a>
        <a href="/about" className={`${isActive('/about')} mx-3 transition ease-out`}>About</a>
        <a href="/portfolio" className={`${isActive('/portfolio')} mx-3 transition ease-out`}>Portfolio</a>
      </div>
      <a href="https://github.com/michaeldiputra/" target="_blank">
        <img src="github.svg" className="w-9"></img>
      </a>
    </nav>
  );
};
