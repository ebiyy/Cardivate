import { MIN_BUTTON_WIDTH, NEXTJS_DOCS_URL } from "./constants";

export const Secondary = () => (
  <a
    className={`flex items-center justify-center px-5 py-3 text-base font-medium rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[${MIN_BUTTON_WIDTH}px]`}
    href={NEXTJS_DOCS_URL}
    target="_blank"
    rel="noopener noreferrer"
  >
    Read our docs
  </a>
);
