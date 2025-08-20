import { FC, ReactNode } from "react";
import { Tabs } from "../tabs";

type TProducts = {
  children?: ReactNode;
};

const mockTabs = [
  "Badroom",
  "Living Room",
  "Dining Room",
  "Office",
  "Kitchen",
  "Sofa",
];

const Products: FC<TProducts> = () => {
  return (
    <section className="flex flex-col w-full items-center mt-[45px] gap-[50px]">
      <div className="flex flex-col items-center gap-[10px] mb-[9px]">
        <div className="w-[717px] text-center">
          <h2>Various collections of furniture to fill your interior</h2>
        </div>
        <div className="w-[535px] text-center">
          <p className="text-(length:--text-size-md-1) text-(--gray-3)">
            We provide a variety of goods with the best quality for you to find
            the right one to meet your interior needs
          </p>
        </div>
      </div>
      <Tabs tabs={mockTabs} />
      <div>cards</div>
    </section>
  );
};

export default Products;
