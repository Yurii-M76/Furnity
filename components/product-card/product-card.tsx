import { FC } from "react";
import Image from "next/image";
import { CircleButton } from "../buttons";
import { TProduct } from "@/types";

const ProductCard: FC<Omit<TProduct, "id">> = ({
  category,
  label,
  price,
  image,
}) => {
  return (
    <div className="relative pt-[42px] w-[268px] shrink-0 font-family">
      <div className="grid grid-rows-[240px_252px] overflow-hidden w-full h-full rounded-3xl">
        <Image
          src={image}
          width={220}
          height={220}
          alt="image-1"
          className="absolute top-[-6px] left-6"
        />
        <div className="bg-(--gray-0)" />
        <div className="flex flex-col pt-[14px] pl-[21px] pr-[21px] gap-[30px] bg-white">
          <section className="flex flex-col">
            <span className="text-[16.5px] text-(--gray-2)">{category}</span>
            <h3>{label}</h3>
          </section>
          <section className="flex items-center justify-between">
            <div className="flex flex-row items-top gap-[3px] text-[21.33px] font-semibold">
              <span className="text-[15.2px]">$</span> {price}
            </div>
            <CircleButton variant="plus" color="accent" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
