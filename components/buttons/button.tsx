import { FC } from "react";
import { TColors, TSizes } from "@/types";

type TButton = {
  label: string;
  size?: Exclude<TSizes, "sm">;
  color?: Exclude<TColors, "white">;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: FC<TButton> = ({
  label,
  size,
  color,
  active,
  disabled,
  onClick,
}) => {
  const transition = "transition ease-in-out duration-50";

  const colorClass =
    !color || color === "accent"
      ? `bg-(--accent-color) hover:bg-(--accent-color-hover) ${transition}`
      : color === "black"
      ? `bg-(--foreground) hover:bg-(--foreground-hover) ${transition}`
      : color === "transparent" && !active
      ? `bg-transparent text-(--foreground) hover:bg-(--gray-1) ${transition}`
      : color === "transparent" && active
      ? `bg-(--foreground) hover:bg-(--foreground-hover) ${transition}`
      : `bg-(--watermelon-color) hover:bg-(--watermelon-color-hover) ${transition}`;

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
    <button type="button" className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
