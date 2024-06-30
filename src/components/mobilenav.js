import { myTitle } from "../../config";
import { useRouter } from "next/router";

export default function navbar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path ? 'text-gray-100 border-b-4 rounded border-blue-400' : 'hover:text-gray-400';
  return (
    <nav className="w-full py-4 px-9 items-center bg-neutral-900/[.85] backdrop-blur bottom-0 md:hidden fixed max-w-7xl z-50 rounded-t-3xl border-2 border-neutral-700">
      <div className="w-full flex justify-around text-base font-medium text-gray-500">
        <a href="/" className={`${isActive('/')} mx-3 transition ease-out`}>Home</a>
        <a href="/about" className={`${isActive('/about')} mx-3 transition ease-out`}>About</a>
        <a href="/portfolio" className={`${isActive('/portfolio')} mx-3 transition ease-out`}>Portfolio</a>
      </div>
    </nav>
  );
};
