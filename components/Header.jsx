import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import Link from "next/link";
import Logo from "./Logo";

const Header = async ({ locale }) => {
  const dict = await getDictionary(locale);

  const { world, lifestyle, business } = dict.header;
  return (
    <header className="bg-zinc-800 border-b border-gray-700 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Logo />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-podcast-icon lucide-podcast"
              >
                <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
                <path d="M8 14a5 5 0 1 1 8 0" />
                <circle cx="12" cy="11" r="1" />
                <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
              </svg>
            </div>
            <span className="text-sm font-medium">5,810</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {world}
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {business}
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              {lifestyle}
            </Link>

            <div className="flex items-center space-x-2 text-sm">
              <button className="px-2 py-1 bg-black text-white rounded transition-colors">
                EN
              </button>
              <span className="text-gray-400">|</span>
              <button className="px-2 py-1 hover:bg-gray-100 rounded transition-colors">
                বাং
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
