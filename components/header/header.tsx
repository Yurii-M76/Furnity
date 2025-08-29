"use client";
import { FC, ReactNode, useState } from "react";
import { Logo } from "../logo";
import { Modal } from "../modal";
import { Button } from "../buttons";
import { iconBasket } from "../icons";

type THeader = {
  slider?: ReactNode;
  children?: ReactNode;
};

const Header: FC<THeader> = ({ children, slider }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="grid grid-cols-1 grid-rows-[192px_274px_480px] items-start justify-items-center w-full h-full bg-top bg-no-repeat bg-[url(/cover.png)] font-family">
      <section className="flex flex-row flex-none items-top justify-between mt-[24px] w-(--w-section) gap-[8px]">
        <Logo />
        {children}
        <div className="flex flex-row flex-none justify-end gap-[36px]">
          {iconBasket}
        </div>
      </section>
      <section className="flex flex-col flex-none items-center justify-center text-center w-[645px] h-full gap-[6px]">
        <h1>
          Offer products to make your interior{" "}
          <span className="text-(--accent-color)">Minimalist.</span>
        </h1>
        <p className="w-[405px] text-[1.12rem] font-normal mb-[16px]">
          we have helped more than 1000+ people to give perfect comfort to the
          interior of their home
        </p>
        <Button
          label="Find Produk"
          color="accent"
          size="lg"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </section>
      {slider && (
        <section className="w-[1240px] pl-[20px] pr-[20px] mt-[30px]">
          {slider}
        </section>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        title="Find Produk"
      >
        <p>
          ollit pariatur enim consectetur non ut consectetur culpa quis ut magna
          consectetur. Aute ipsum proident et elit id occaecat deserunt elit
          incididunt aliqua. Voluptate nulla aute ipsum sit proident eu non
          ipsum aliquip ut minim esse. Laborum deserunt dolore duis ut magna
          reprehenderit dolore ea veniam non dolor irure elit ad. Tempor
          occaecat consequat aliquip cupidatat minim do deserunt.
        </p>
        <Button
          label="close"
          size="md"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </Modal>
    </header>
  );
};

export default Header;
