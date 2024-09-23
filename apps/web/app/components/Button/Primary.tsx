import { VercelLogo } from "../Logo";
import { VERCEL_DEPLOY_URL } from "./constants";

export const Primary = () => (
  <a
    className="flex items-center justify-center gap-2 px-5 py-3 text-base font-medium rounded-full bg-foreground text-background hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
    href={VERCEL_DEPLOY_URL}
    target="_blank"
    rel="noopener noreferrer"
  >
    <VercelLogo />
    Deploy now
  </a>
);
