import React, { ChangeEvent } from "react";

type InputProps = {
  type: "text" | "numeric";
  placeholder: string;
  styling: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ styling, ...props }: InputProps) {
  return <input {...props} className={styling} />;
}
