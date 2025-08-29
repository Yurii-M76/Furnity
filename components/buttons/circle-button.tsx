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
  const transition = "transition ease-in-out duration-50";

  const disabledClasses = !disabled
    ? "cursor-pointer active:translate-y-[1px]"
    : "cursor-not-allowed text-gray-400";

  const colorClass = disabled
    ? variant === "bracket-left" || variant === "bracket-right"
      ? "bg-[#313136]"
      : "bg-white"
    : !color || color === "white"
    ? `bg-white hover:bg-(--gray-1) ${transition}`
    : color === "accent"
    ? `bg-(--accent-color) hover:bg-(--accent-color-hover) ${transition} text-white`
    : color === "black"
    ? `bg-(--foreground) hover:bg-(--foreground-hover) ${transition} text-white`
    : `bg-(--watermelon-color) hover:bg-(--watermelon-color-hover) ${transition} text-white`;

  const buttonClasses = [
    "flex",
    "flex-row",
    "w-[50px]",
    "h-[50px]",
    "items-center",
    "justify-center",
    "rounded-[50%]",
    "shrink-0",
    shadow && "shadow-[0_7px_19px_rgba(0,0,0,0.06)]",
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
