import ArticleDetails from "@/components/ArticleDetails";
import {
  default as DetailsPageSidebar,
  default as DetailsPageSidebarSkeleton,
} from "@/components/DetailsPageSidebar";
import ArticleCardSkeleton from "@/components/skeletons/ArticleCardSkeleton";
import { getSingleArticle } from "@/data/data";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const ArticlePage = async ({ params }) => {
  const article = await getSingleArticle(params.id);

  if (!article) {
    return notFound();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <Suspense fallback={<ArticleCardSkeleton />}>
        <ArticleDetails article={article} locale={params.lang} />
      </Suspense>

      <Suspense fallback={<DetailsPageSidebarSkeleton />}>
        <DetailsPageSidebar article={article} locale={params.lang} />
      </Suspense>
    </div>
  );
};
export default ArticlePage;
