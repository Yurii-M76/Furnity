"use client";
import { useState } from "react";
import { ProductCard } from "../product-card";
import { CircleButton } from "../buttons";
import { products } from "@/mocks";

const Slider = () => {
  const [translateX, setTranslateX] = useState(0);

  const items = products.map((item) => (
    <ProductCard
      key={item.id}
      category={item.category}
      image={item.image}
      label={item.label}
      price={item.price}
    />
  ));

  const translateLeftHandler = () => {
    if (translateX > 0) {
      setTranslateX(0);
    }
  };

  const translateRightHandler = () => {
    if (translateX === 0) {
      setTranslateX(1240);
    }
  };

  const classesItems = [
    "flex",
    "flex-row",
    "gap-[42px]",
    translateX && "translate-x-[-1240px]",
    "transition",
    "ease-in-out",
    "duration-1250",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="relative">
      <div className="absolute top-[214px] left-[-25px] z-10">
        <CircleButton
          variant="arrow-left"
          disabled={translateX === 0}
          onClick={translateLeftHandler}
          shadow
        />
      </div>
      <div className="overflow-hidden">
        <div className={classesItems}>{items}</div>
      </div>
      <div className="absolute top-[214px] right-[-25px] z-10">
        <CircleButton
          variant="arrow-right"
          disabled={translateX > 0}
          onClick={translateRightHandler}
          shadow
        />
      </div>
    </section>
  );
};

export default Slider;
