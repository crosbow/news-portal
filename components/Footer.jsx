import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 border-t border-gray-500 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © 2025{" "}
          <Link
            href="https://learnwithsumit.com/"
            target="_blank"
            title="Learn with Sumit"
            className="text-gray-600 hover:underline"
          >
            Learn with Sumit
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
