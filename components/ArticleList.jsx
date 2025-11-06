import { getAllArticle } from "@/data/data";
import Article from "./Article";

const ArticleList = async () => {
  const articles = await getAllArticle();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Article key={article.article_id} article={article} />
      ))}
    </div>
  );
};
export default ArticleList;
