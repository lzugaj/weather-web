import React from "react";

type ImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  onClick?: () => void;
};

export default function Image({ alt, ...props }: ImageProps) {
  return <img {...props} alt={alt} />;
}
