import articles from "./data.json";

export const getAllArticle = async () => {
  return articles;
};

export const getSingleArticle = async (id) => {
  const article = articles.find((a) => a.article_id === id.trim());

  if (!article) {
    return null;
  }

  return article;
};
