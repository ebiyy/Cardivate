import { NextImage } from "@/ui";

const VERCEL_LOGO_SIZE = 20;

export const VercelLogo = () => {
  return (
    <NextImage src="/vercel.svg" alt="Vercel Logo" size={VERCEL_LOGO_SIZE} />
  );
};
