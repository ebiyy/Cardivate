import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
  <main className="flex flex-col gap-8 row-start-2">{children}</main>
);
