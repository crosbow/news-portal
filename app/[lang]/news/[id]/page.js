import ArticleDetails from "@/components/ArticleDetails";
import { getSingleArticle } from "@/data/data";
import { getDate } from "@/utils/formateDate";
import { notFound } from "next/navigation";

const ArticlePage = async ({ params }) => {
  const article = await getSingleArticle(params.id);

  if (!article) {
    return notFound();
  }

  const {
    author: authorName,
    image_url,
    category,
    pubDate,
    comments,
  } = article;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <ArticleDetails article={article} />

      <aside className="lg:col-span-1">
        <div className="sticky top-8 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">{authorName}</h3>
            <p className="text-sm text-gray-200 mb-4">{getDate(pubDate)}</p>
          </div>

          <div>
            <p className="text-lg font-medium mb-2">{comments} comments</p>
            <a
              href="#"
              className="text-sm text-gray-200 hover:text-white transition-colors"
            >
              Join the discussion
            </a>
          </div>

          <div>
            <p className="text-sm text-gray-200 mb-1">Category</p>
            <p className="font-medium">{category}</p>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default ArticlePage;
