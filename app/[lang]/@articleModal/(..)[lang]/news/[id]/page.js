import ArticleDetails from "@/components/ArticleDetails";
import Modal from "@/components/Modal";
import ArticleDetailsSkeleton from "@/components/skeletons/ArticleDetailsSkeleton";
import { getSingleArticle } from "@/data/data";
import { Suspense } from "react";

const ArticleModal = async ({ params }) => {
  const article = await getSingleArticle(params.id);

  return (
    <Modal>
      <div className="">
        <Suspense fallback={<ArticleDetailsSkeleton />}>
          <ArticleDetails article={article} locale={params.lang} />
        </Suspense>
      </div>
    </Modal>
  );
};
export default ArticleModal;
