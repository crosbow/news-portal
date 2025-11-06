const ArticleCardSkeleton = () => {
  return (
    <article className="bg-zinc-950 rounded-lg shadow-sm overflow-hidden news-card">
      <div className="w-full h-48 bg-gray-800 animate-pulse" />

      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-16 h-4 bg-gray-700 rounded animate-pulse" />
          <div className="w-12 h-4 bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="mb-3">
          <div className="h-6 bg-gray-700 rounded w-full mb-2 animate-pulse" />
          <div className="h-6 bg-gray-700 rounded w-4/5 animate-pulse" />
        </div>

        <div className="text-sm mb-4 leading-relaxed space-y-2">
          <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-800 rounded w-11/12 animate-pulse" />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-700 rounded-full animate-pulse" />
            <div className="w-20 h-4 bg-gray-700 rounded animate-pulse" />
          </div>
          <div className="w-16 h-4 bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </article>
  );
};

export default ArticleCardSkeleton;
