import React from "react";

type ParagraphProps = {
  title: string;
  styling?: string;
};

export default function Paragraph({ title, styling }: ParagraphProps) {
  return <p className={styling}>{title}</p>;
}
