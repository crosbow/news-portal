import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        className="w-8 h-8 inline-block mr-2"
        height={24}
        width={24}
      />
      <h1 className="text-xl font-bold tracking-wider">The News Island</h1>
    </Link>
  );
};
export default Logo;
