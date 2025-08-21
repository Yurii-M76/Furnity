import { FC, ReactNode } from "react";
import { Tabs } from "../tabs";
import { ProductCard } from "../product-card";
import { products } from "@/mocks";

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
  const items = products.map((item) => (
    <ProductCard
      key={item.id}
      category={item.category}
      image={item.image}
      label={item.label}
      price={item.price}
    />
  ));

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
      <div className="grid grid-cols-4 gap-x-[42px] gap-y-[20px]">{items}</div>
    </section>
  );
};

export default Products;
