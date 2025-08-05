import { FC, ReactNode } from "react";

type TNavigation = {
  children?: ReactNode;
};

const Navigation: FC<TNavigation> = () => {
  return (
    <nav>
      <ul className="flex flex-row items-center justify-center gap-[50px] text-[14px] text-(--foreground-light)">
        <li>Badroom</li>
        <li>Living Room</li>
        <li>Dining Room</li>
        <li>Office</li>
        <li>Kitchen</li>
        <li>Sofa</li>
      </ul>
    </nav>
  );
};

export default Navigation;
