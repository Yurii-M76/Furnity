import { FC, ReactNode } from "react";

type TNavigation = {
  children?: ReactNode;
};

const Navigation: FC<TNavigation> = () => {
  return (
    <nav>
      <ul className="flex flex-row items-center justify-center gap-[50px] text-[14px]">
        <li><a href="#">Badroom</a></li>
        <li><a href="#">Living Room</a></li>
        <li><a href="#">Dining Room</a></li>
        <li><a href="#">Office</a></li>
        <li><a href="#">Kitchen</a></li>
        <li><a href="#">Sofa</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
