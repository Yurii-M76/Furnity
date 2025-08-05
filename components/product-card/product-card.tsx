import { FC } from "react";
import Image from "next/image";
import { TProduct } from "@/types";

const ProductCard: FC<Omit<TProduct, "id">> = ({
  category,
  label,
  price,
  image,
}) => {
  return (
    <div className="relative pt-[42px] w-[268px]">
      <div className="grid grid-rows-[240px_252px] overflow-hidden w-full h-full rounded-3xl">
        <Image
          src={image}
          width={220}
          height={220}
          alt="image-1"
          className="absolute top-[-6px] left-6"
        />
        <div className="bg-(--gray-0)" />
        <div className="flex flex-col pt-[14px] pl-[21px] pr-[21px] gap-[20px] bg-(--white)">
          <section>
            <span>{category}</span>
            <h3>{label}</h3>
          </section>
          <section className="flex flex-col-2 justify-between">
            <span>$ {price}</span>
            <button type="button">+</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
