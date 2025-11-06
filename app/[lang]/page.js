import ArticleList from "@/components/ArticleList";
import FeaturedStory from "@/components/FeaturedStory";
import FeaturedStorySkeleton from "@/components/skeletons/FeaturedStorySkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<FeaturedStorySkeleton />}>
        <FeaturedStory />
      </Suspense>

      <section>
        <h2 className="text-2xl font-bold mb-8">Latest Stories</h2>

        <Suspense fallback={<h2>Loading...</h2>}>
          <ArticleList />
        </Suspense>
      </section>
    </div>
  );
}
