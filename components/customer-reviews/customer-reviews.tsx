"use client";
import Image from "next/image";
import { useState } from "react";
import { CircleButton } from "../buttons";
import { customerReviews } from "@/mocks/customer-reviews";
import { TCustomerReview } from "@/types";

const CustomerReviews = () => {
  const [currentNumReview, setCurrentNumReview] = useState(0);
  const itemReview: TCustomerReview = customerReviews[currentNumReview];
  const reviewsLength = customerReviews.length;

  return (
    <section className="relative flex flex-row items-center justify-center text-white bg-[#19191B] w-full pt-[70px] pb-[70px]">
      <div className="absolute left-48 rotate-[-30deg] w-[172px] h-[897px] bg-white opacity-4" />
      <section className="flex flex-row items-center justify-between w-(--w-section)">
        <div className="flex flex-col w-[517px] gap-[50px]">
          <h2 style={{ color: "currentcolor" }}>What are they saying ?</h2>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row gap-[15px]">
                <div className="flex flex-row w-[50px] h-[50px] shrink-0 rounded-[50%] overflow-hidden">
                  <Image
                    src={itemReview.avatar}
                    alt="user-photo"
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <span className="font-bold">{itemReview.name}</span>
                  <span className="text-(length:--text-size-sm) opacity-70">
                    {itemReview.profession}
                  </span>
                </div>
              </div>
              <p className="max-h-[190px] overflow-auto">
                {itemReview.message}
              </p>
            </div>
            <div className="flex flex-row gap-[20px] mt-[10px]">
              <CircleButton
                variant="bracket-left"
                color="watermelon"
                onClick={() =>
                  currentNumReview > 0 &&
                  setCurrentNumReview(currentNumReview - 1)
                }
                disabled={!currentNumReview}
              />
              <CircleButton
                variant="bracket-right"
                color="watermelon"
                onClick={() =>
                  currentNumReview !== reviewsLength - 1 &&
                  setCurrentNumReview(currentNumReview + 1)
                }
                disabled={currentNumReview === reviewsLength - 1}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[488px] h-[462px] shrink-0 rounded-[15px] overflow-hidden">
          <Image
            src={itemReview.productImage}
            alt="image"
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
            className="hover:scale-110 transition ease-in-out duration-1250"
            loading="lazy"
          />
        </div>
      </section>
    </section>
  );
};

export default CustomerReviews;
