import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";

const MarqueeBanner = async ({ locale }) => {
  const dict = await getDictionary(locale);

  return (
    <div className="bg-zinc-700 text-white py-3 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        <span className="text-sm">{dict.marqueeText}</span>
      </div>
    </div>
  );
};
export default MarqueeBanner;
