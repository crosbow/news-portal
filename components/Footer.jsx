import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import Link from "next/link";

const Footer = async ({ locale }) => {
  const dict = await getDictionary(locale);
  const { date, brand, right } = dict.footer;
  return (
    <footer className="bg-zinc-800 border-t border-gray-500 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-200">
          © {date}{" "}
          <Link
            href="https://learnwithsumit.com/"
            target="_blank"
            title="Learn with Sumit"
            className="text-gray-200 hover:underline"
          >
            {brand}
          </Link>
          . {right}.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
