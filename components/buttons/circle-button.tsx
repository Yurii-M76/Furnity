import { FC } from "react";
import { TColors } from "@/types";
import {
  iconArrowLeft,
  iconArrowRight,
  iconBracketLeft,
  iconBracketRight,
  iconPlus,
} from "../icons";

type TCircleButton = {
  variant:
    | "arrow-left"
    | "arrow-right"
    | "plus"
    | "bracket-left"
    | "bracket-right";
  color?: TColors;
  shadow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const CircleButton: FC<TCircleButton> = ({
  variant,
  color,
  shadow,
  disabled,
  onClick,
}) => {
  const disabledClasses = !disabled
    ? "cursor-pointer active:translate-y-[1px]"
    : "cursor-not-allowed text-gray-400";

  const colorClass =
    !color || color === "white"
      ? "bg-white"
      : color === "accent"
      ? "bg-(--accent-color) text-white"
      : color === "black"
      ? "bg-(--foreground) text-white"
      : "bg-(--watermelon-color) text-white";

  const buttonClasses = [
    "flex",
    "flex-row",
    "w-[50px]",
    "h-[50px]",
    "items-center",
    "justify-center",
    "rounded-[50%]",
    "shrink-0",
    shadow && "shadow-2xs",
    disabledClasses,
    colorClass,
  ]
    .filter(Boolean)
    .join(" ");

  const icon =
    variant === "arrow-left"
      ? iconArrowLeft
      : variant === "arrow-right"
      ? iconArrowRight
      : variant === "bracket-left"
      ? iconBracketLeft
      : variant === "bracket-right"
      ? iconBracketRight
      : iconPlus;

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {icon}
    </button>
  );
};

export default CircleButton;
