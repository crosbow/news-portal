const FeaturedStorySkeleton = () => {
  return (
    <section className="mb-12 animate-pulse">
      <article className="bg-zinc-950 rounded-lg shadow-sm overflow-hidden news-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Text/Content Area - Order 2 on mobile, 1 on desktop */}
          <div className="order-2 lg:order-1 p-8">
            {/* Category and Read Time placeholders */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-zinc-800 text-transparent text-xs rounded-full w-16 h-5">
                {/* Text is hidden, just showing the background shape */}
                Featured
              </span>
              <div className="bg-gray-700 text-sm text-transparent rounded w-20 h-4">
                5 min read
              </div>
            </div>

            {/* Title placeholder */}
            <div className="mb-4">
              <div className="h-8 bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-8 bg-gray-700 rounded w-5/6"></div>
            </div>

            {/* Description placeholder */}
            <div className="mb-6 leading-relaxed space-y-2">
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-11/12"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>

            {/* Author and Read More placeholder */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Avatar placeholder */}
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div>
                  {/* Author Name placeholder */}
                  <div className="h-4 bg-gray-700 rounded w-24 mb-1"></div>
                  {/* Date placeholder */}
                  <div className="h-3 bg-gray-700 rounded w-16"></div>
                </div>
              </div>
              {/* Read more link placeholder */}
              <div className="h-4 bg-gray-700 rounded w-20"></div>
            </div>
          </div>

          {/* Image Area - Order 1 on mobile, 2 on desktop */}
          <div className="order-1 lg:order-2">
            <div className="w-full h-64 lg:h-full bg-gray-800 object-cover">
              {/* Image placeholder */}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeaturedStorySkeleton;
