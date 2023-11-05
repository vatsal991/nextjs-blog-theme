import { useRouter } from "next/router";
import queryString from "query-string";
export const Pagination = ({ count }: { count: number }) => {
  const totalPages = Math.ceil(count / 15);

  const router = useRouter();
  let { page, search, category } = router.query;
  const prevPage = () => {
    try {
      if (page && Number(page) > 1) {
        page = (Number(page) - 1).toString();
      } else {
        page = "1";
      }
    } catch (error) {
      page = "1";
    }
    router.push(`?${queryString.stringify({ page, search })}`);
  };

  const nextPage = () => {
    try {
      if (page) {
        page = (Number(page) + 1).toString();
      } else {
        page = "2";
      }
    } catch (error) {
      page = "2";
    }
    router.push(`?${queryString.stringify({ page, search, category })}`);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-400">
        Showing <span className="font-semibold text-graymain">{page || 1}</span>{" "}
        to <span className="font-semibold text-graymain">15</span> of{" "}
        <span className="font-semibold text-graymain">{totalPages}</span> Pages
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={page ? (Number(page) <= 1 ? true : false) : false}
          onClick={() => prevPage()}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Prev
        </button>
        <button
          disabled={page && Number(page) >= totalPages ? true : false}
          onClick={() => nextPage()}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};
