const ArticleDetailsSkeleton = () => {
  return (
    <article className="lg:col-span-3">
      <header className="mb-8">
        <div className="space-y-4">
          <div className="h-10 bg-gray-700 rounded w-full animate-pulse" />
          <div className="h-10 bg-gray-700 rounded w-5/6 animate-pulse" />
        </div>
      </header>

      <div className="mb-8">
        <div className="w-full h-96 bg-gray-800 rounded-lg shadow-sm animate-pulse" />
      </div>

      <div className="prose prose-lg max-w-none space-y-4">
        <div className="h-6 bg-gray-700 rounded w-full animate-pulse" />
        <div className="h-6 bg-gray-700 rounded w-11/12 animate-pulse" />

        <div className="space-y-3 pt-4">
          <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-800 rounded w-10/12 animate-pulse" />
          <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-800 rounded w-9/12 animate-pulse" />
        </div>
      </div>

      <div className="flex items-center space-x-6 mt-10">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" />
          <div className="w-12 h-4 bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" />
          <div className="w-16 h-4 bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" />
          <div className="w-16 h-4 bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </article>
  );
};

export default ArticleDetailsSkeleton;
