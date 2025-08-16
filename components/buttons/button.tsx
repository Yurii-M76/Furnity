import { FC } from "react";
import { TColors, TSizes } from "@/types";

type TButton = {
  label: string;
  size?: Exclude<TSizes, "sm">;
  color?: Exclude<TColors, "white">;
  disabled?: boolean;
};

const Button: FC<TButton> = ({ label, size, color, disabled }) => {
  const colorClass =
    !color || color === "accent"
      ? "bg-(--accent-color)"
      : color === "black"
      ? "bg-(--foreground)"
      : "bg-(--watermelon-color)";

  const sizeClass =
    !size || size === "lg"
      ? "h-[60px] font-bold pl-[36px] pr-[36px]"
      : "h-[45px] pl-[20px] pr-[20px]";

  const disabledClasses = !disabled
    ? "cursor-pointer active:translate-y-[1px]"
    : "cursor-not-allowed";

  const buttonClasses = [
    "rounded-full",
    "text-(length:--text-size-md-1)",
    "text-(--background)",
    "shrink-0",
    sizeClass,
    colorClass,
    disabledClasses,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
