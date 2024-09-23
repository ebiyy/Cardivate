import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

export const Item = ({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren) => (
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    {...props}
  >
    {children}
  </a>
);
