import Image from "next/image";

interface NextImageProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export const NextImage = ({
  src,
  alt,
  size = 20,
  className = "",
}: NextImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    className={`dark:invert ${className}`}
  />
);
