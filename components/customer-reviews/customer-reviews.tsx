import Image from "next/image";
import { FC, ReactNode } from "react";
import { CircleButton } from "../buttons";

type TCustomerReviews = {
  children?: ReactNode;
};

const CustomerReviews: FC<TCustomerReviews> = () => {
  return (
    <section className="relative flex flex-row items-center justify-center text-white bg-[#19191B] w-full pt-[70px] pb-[70px]">
      <div className="absolute left-48 rotate-[-30deg] w-[172px] h-[897px] bg-white opacity-4" />
      <section className="flex flex-row items-center justify-between w-(--w-section)">
        <div className="flex flex-col w-[517px] gap-[50px]">
          <h2 style={{ color: "currentcolor" }}>What are they saying ?</h2>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-row gap-[15px]">
              <div className="flex flex-row w-[50px] h-[50px] shrink-0 rounded-[50%] overflow-hidden">
                <Image
                  src="/avatar-1.png"
                  alt="avatar"
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="font-bold">Jane Lowis</span>
                <span className="text-(length:--text-size-sm) opacity-70">
                  Housewife
                </span>
              </div>
            </div>
            <p className="max-h-[190px] overflow-auto">
              the services and products offered are very good, matched what I
              was looking for. now my room is more beautiful and aesthetic.
            </p>
            <div className="flex flex-row gap-[20px] mt-[10px]">
              <CircleButton
                variant="bracket-left"
                color="watermelon"
                disabled
              />
              <CircleButton variant="bracket-right" color="watermelon" />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[488px] h-[462px] shrink-0 rounded-[15px] overflow-hidden">
          <Image
            src="/image-10.jpg"
            alt="image"
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition ease-in-out duration-1250"
          />
        </div>
      </section>
    </section>
  );
};

export default CustomerReviews;
