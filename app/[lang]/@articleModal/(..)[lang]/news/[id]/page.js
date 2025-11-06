import ArticleDetails from "@/components/ArticleDetails";
import Modal from "@/components/Modal";
import { getSingleArticle } from "@/data/data";

const ArticleModal = async ({ params }) => {
  const article = await getSingleArticle(params.id);

  return (
    <Modal>
      <div className="">
        <ArticleDetails article={article} locale={params.lang} />
      </div>
    </Modal>
  );
};
export default ArticleModal;
