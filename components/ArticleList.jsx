import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import { getAllArticle } from "@/data/data";
import Article from "./Article";

const ArticleList = async ({ locale }) => {
  const articles = await getAllArticle();
  const dict = await getDictionary(locale);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">{dict.latestStories}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Article key={article.article_id} article={article} locale={locale} />
        ))}
      </div>
    </section>
  );
};
export default ArticleList;
