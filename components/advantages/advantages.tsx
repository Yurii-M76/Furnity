import { FC, ReactNode } from "react";
import Image from "next/image";
import {
  iconLoaderCircle,
  iconPackage,
  iconTargetLock,
  iconUserPin,
} from "../icons";
import { Button } from "../buttons";

type TAdvantages = {
  children?: ReactNode;
};

const Advantages: FC<TAdvantages> = () => {
  return (
    <section className="flex flex-row w-[1200px] h-[569px] justify-between font-family text-(length:--text-size-md-1) text-(--gray-3)">
      <section className="flex flex-col items-start gap-[40px]">
        <div className="grid grid-cols-[235px_235px] grid-rows-[198px] items-start justify-items-start w-[547px] gap-[60px] shrink-0 flex-wrap text-lg">
          <div className="flex flex-col gap-[15px]">
            {iconPackage}
            <div className="flex flex-col gap-[5px]">
              <h2 className="">Fast and safe delivery</h2>
              please login and buy our products, safe delivery guaranteed
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            {iconLoaderCircle}
            <div className="flex flex-col gap-[5px]">
              <h2 className="">Quick and easy returns</h2>
              Items that do not match we are ready to replace, please return
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            {iconUserPin}
            <div className="flex flex-col gap-[5px]">
              <h2 className="">24 hour customer service</h2>
              Our customer service is ready to serve you at any time, dont
              hesitate to contact us
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            {iconTargetLock}
            <div className="flex flex-col gap-[5px]">
              <h2 className="">the price match is very fitting</h2>
              The price of the products we offer is very in accordance with the
              quality of the goods
            </div>
          </div>
        </div>
        <Button label="Start Shopping" color="watermelon" size="lg" />
      </section>
      <div className="flex flex-row w-[487px] h-full shrink-0 rounded-[15px] overflow-hidden">
        <Image
          src="/image-9.jpg"
          alt="image"
          width={550}
          height={550}
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Advantages;
