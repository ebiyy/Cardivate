import type { PropsWithChildren } from "react";

export const CodeSnippet = ({ children }: PropsWithChildren) => (
  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded font-semibold">
    {children}
  </code>
);
