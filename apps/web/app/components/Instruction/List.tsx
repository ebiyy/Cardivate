import type { PropsWithChildren } from "react";

export const List = ({ children }: PropsWithChildren) => (
  <ol className="font-mono text-sm leading-6 tracking-tight list-inside flex flex-col gap-2">
    {children}
  </ol>
);
