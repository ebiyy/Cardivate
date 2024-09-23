import type { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren) => (
  <footer className="flex gap-6 row-start-3 font-sans">{children}</footer>
);
