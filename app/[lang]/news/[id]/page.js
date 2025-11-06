const ArticlePage = ({ params }) => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <article class="lg:col-span-3">
        <header class="mb-8">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
            Turn Your Devices From Distractions Into Time Savers Either
          </h1>
        </header>

        <div class="mb-8">
          <img
            src="./assets/articles/article-1.jpg"
            alt="Ferris wheel against sky"
            class="w-full h-auto rounded-lg shadow-sm"
          />
        </div>

        <div class="prose prose-lg max-w-none">
          <p class="text-lg leading-relaxed mb-6">
            Every January, I usually purge old snail mail, clothes and unwanted
            knickknacks to start the year anew. This time, I focused on my
            digital spaces instead.
          </p>

          <p class="text-lg leading-relaxed mb-8">
            My virtual Marie Kondo-ing forced me to think about the
            indispensable apps and features on my devices—and on the flip side,
            the time thieves that make it hard to leave the couch.
          </p>
        </div>

        <div class="flex items-center space-x-6 mb-8">
          <button class="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
            <span>Share</span>
          </button>

          <button class="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            <span>Bookmark</span>
          </button>

          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>7 min read</span>
          </div>
        </div>
      </article>

      <aside class="lg:col-span-1">
        <div class="sticky top-8 space-y-6">
          <div>
            <h3 class="text-lg font-medium mb-2">Yagami Sonichrou</h3>
            <p class="text-sm text-gray-600 mb-4">
              January 30, 2024 9:43 am ET
            </p>
          </div>

          <div>
            <p class="text-lg font-medium mb-2">38 comments</p>
            <a
              href="#"
              class="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Join the discussion
            </a>
          </div>

          <div>
            <p class="text-sm text-gray-600 mb-1">Category</p>
            <p class="font-medium">Acute Social Issues</p>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default ArticlePage;
