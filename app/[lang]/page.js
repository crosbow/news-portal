import ArticleList from "@/components/ArticleList";
import FeaturedStory from "@/components/FeaturedStory";
import FeaturedStorySkeleton from "@/components/skeletons/FeaturedStorySkeleton";
import { Suspense } from "react";

export default function Home({ params: { lang } }) {
  return (
    <div>
      <Suspense fallback={<FeaturedStorySkeleton />}>
        <FeaturedStory locale={lang} />
      </Suspense>

      <Suspense fallback={<h2>Loading...</h2>}>
        <ArticleList locale={lang} />
      </Suspense>
    </div>
  );
}
