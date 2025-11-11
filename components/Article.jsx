import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import extractImage from "@/utils/extractImage";
import { formateDate } from "@/utils/formateDate";
import { trancate } from "@/utils/trancate";
import Image from "next/image";
import Link from "next/link";

const Article = async ({ article, locale }) => {
  const {
    article_id,
    title,
    author: authorName,
    description,
    image_url,
    category,
    pubDate,
    avatar,
  } = article;

  const extractedImageUrl = await extractImage(image_url);

  const dict = await getDictionary(locale);
  return (
    <article className="bg-zinc-950 rounded-lg shadow-sm overflow-hidden news-card">
      <Link href={`/news/${article_id}`}>
        {extractedImageUrl ? (
          <Image
            src={extractedImageUrl}
            alt={title}
            className="w-full h-48 object-cover"
            height={184}
            width={200}
          />
        ) : (
          <div className="w-full h-48 object-cover flex justify-center items-center text-2xl">
            Image not Found
          </div>
        )}
      </Link>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xs text-black bg-gray-100 px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-xs text-gray-300">3 {dict.minRead}</span>
        </div>
        <Link
          href={`/news/${article_id}`}
          className="text-xl font-medium mb-3 leading-tight hover:underline"
        >
          {title}
        </Link>
        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
          {description && trancate(description, 50).concat("...")}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full">
              <Image src={avatar} alt={authorName} width={24} height={24} />
            </div>
            <span className="text-xs text-gray-300">{authorName}</span>
          </div>
          <span className="text-xs text-gray-100">
            {formateDate(pubDate, locale)}
          </span>
        </div>
      </div>
    </article>
  );
};
export default Article;
