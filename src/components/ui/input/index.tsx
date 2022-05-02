import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface InputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return <input {...rest} className={clsx(className, "border p-2 rounded-md outline-none focus:ring")} />;
};
