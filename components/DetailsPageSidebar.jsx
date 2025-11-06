import { getDictionary } from "@/app/[lang]/dictionaries/dictionary";
import { getDate } from "@/utils/formateDate";

const DetailsPageSidebar = async ({ locale, article }) => {
  const { authorName, pubDate, comments, category } = article;

  const dict = await getDictionary(locale);

  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-8 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">{authorName}</h3>
          <p className="text-sm text-gray-200 mb-4">
            {getDate(pubDate, locale)}
          </p>
        </div>

        <div>
          <p className="text-lg font-medium mb-2">{comments} comments</p>
          <a
            href="#"
            className="text-sm text-gray-200 hover:text-white transition-colors"
          >
            {dict.joinDiscussion}
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-200 mb-1">{dict.category}</p>
          <p className="font-medium">{category}</p>
        </div>
      </div>
    </aside>
  );
};
export default DetailsPageSidebar;
