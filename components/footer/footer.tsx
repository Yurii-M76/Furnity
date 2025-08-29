import { FC, ReactNode } from "react";
import { Logo } from "../logo";

type TFooter = {
  children?: ReactNode;
};

const Footer: FC<TFooter> = ({ children }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-row w-full h-full bg-(--black-color)  items-top justify-center text-white">
      <section className="flex flex-row items-center justify-between w-[1200px]">
        <Logo />
        {children}
        <div>@ {year} Furnity, All Rights Reserved</div>
      </section>
    </footer>
  );
};

export default Footer;
