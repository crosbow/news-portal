import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import { getAllArticle } from "@/data/data";
import { Suspense } from "react";
import Article from "./Article";
import ArticleCardSkeleton from "./skeletons/ArticleCardSkeleton";

const ArticleList = async ({ locale }) => {
  const articles = await getAllArticle();
  const dict = await getDictionary(locale);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">{dict.latestStories}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Suspense key={article.article_id} fallback={<ArticleCardSkeleton />}>
            <Article article={article} locale={locale} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};
export default ArticleList;
