import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  variant = "contained",
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "border p-2 rounded-md w-40 hover:bg-white text-white uppercase text-base font-medium focus:ring-1 ring-blue-200",
        {
          "bg-blue-500 text-white hover:text-blue-500":
            color === "primary" && variant === "contained",

          "bg-red-500 text-white hover:text-red-500":
            color === "secondary" && variant === "contained",
          "disabled:opacity-60": disabled,
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
