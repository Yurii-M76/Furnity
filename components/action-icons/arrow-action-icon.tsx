import { FC } from "react";

type TArrowActionIcon = {
  direction: "left" | "right";
  isDisabled?: boolean;
  clickHandler?: () => void;
};

const ArrowActionIcon: FC<TArrowActionIcon> = ({
  direction,
  clickHandler,
  isDisabled,
}) => {
  const iconClasses = [direction === "right" && "rotate-180"]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`flex flex-row w-[50px] h-[50px] items-center justify-center bg-white rounded-[50%] shadow-2xs 
        ${!isDisabled ? "cursor-pointer active:translate-y-[1px]" : "cursor-not-allowed"}
        ${isDisabled && "text-gray-400"} `}
      onClick={clickHandler}
    >
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClasses}
      >
        <path
          d="M19.6958 7.43548H2.48568M2.48568 7.43548C2.48568 7.43548 7.36397 4.22725 8.35524 1.56592M2.48568 7.43548C2.48568 7.43548 6.79826 10.45 8.35524 13.305"
          stroke="currentColor"
          strokeWidth="2.17391"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export default ArrowActionIcon;
