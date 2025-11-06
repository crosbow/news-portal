import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import { getSingleArticle } from "@/data/data";
import extractImage from "@/utils/extractImage";
import { formateDate } from "@/utils/formateDate";
import Image from "next/image";
import Link from "next/link";

const ID = "248f550e46e14e8367be435aefae1ff4";

const FeaturedStory = async ({ locale }) => {
  const {
    title,
    author: authorName,
    description,
    content,
    image_url,
    pubDate,
    avatar,
  } = await getSingleArticle(ID);

  const extractedImageUrl = await extractImage(image_url);

  const dict = await getDictionary(locale);
  return (
    <section className="mb-12">
      <article className="bg-zinc-950 rounded-lg shadow-sm overflow-hidden news-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="order-2 lg:order-1 p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-zinc-800 text-white text-xs rounded-full">
                {dict.featured}
              </span>
              <span className="text-sm text-gray-200">5 {dict.minRead}</span>
            </div>
            <Link
              href={`/news/${ID}`}
              className="text-xl font-medium mb-3 leading-tight hover:underline"
            >
              {title}
            </Link>
            <p className="text-gray-200 mb-6 leading-relaxed">{description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full">
                  <Image src={avatar} alt={authorName} height={32} width={32} />
                </div>
                <div>
                  <p className="text-sm font-medium">{authorName}</p>
                  <p className="text-xs text-gray-300">
                    {formateDate(pubDate, locale)}
                  </p>
                </div>
              </div>
              <Link
                href={`/news/${ID}`}
                className="text-sm hover:text-gray-600 transition-colors"
              >
                {dict.readMore} →
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src={extractedImageUrl}
              alt={title}
              className="w-full h-64 lg:h-full object-cover"
              height={192}
              width={500}
            />
          </div>
        </div>
      </article>
    </section>
  );
};
export default FeaturedStory;
