"use client";
import { useState } from "react";
import { ProductCard } from "../product-card";
import { ArrowActionIcon } from "../action-icons";
import { products } from "./mock";

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
      <div className="absolute top-[220px] left-[-25px] z-10">
        <ArrowActionIcon
          direction="left"
          clickHandler={translateLeftHandler}
          isDisabled={translateX === 0}
        />
      </div>
      <div className="overflow-hidden">
        <div className={classesItems}>{items}</div>
      </div>
      <div className="absolute top-[220px] right-[-25px] z-10">
        <ArrowActionIcon
          direction="right"
          clickHandler={translateRightHandler}
          isDisabled={translateX > 0}
        />
      </div>
    </section>
  );
};

export default Slider;
