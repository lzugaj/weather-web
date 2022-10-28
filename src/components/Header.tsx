import React from "react";

type HeaderProps = {
  title: string;
  styling: string;
};

export default function Header({ title, styling }: HeaderProps) {
  return <h1 className={styling}>{title}</h1>;
}
