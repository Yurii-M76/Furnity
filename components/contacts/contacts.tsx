"use client";
import { useState } from "react";
import { Button } from "../buttons";
import { Modal } from "../modal";

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="flex flex-row items-center justify-between w-[1200px] mt-[50px] mb-[50px]">
        <h2 className="w-[727px]">
          Contact us if you need anything, we are ready to serve you
        </h2>
        <Button
          label="Contact us"
          color="accent"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        title="Contacts"
      >
        <p>
          Occaecat ea consequat non consectetur amet et id. Velit cupidatat id
          velit proident proident magna quis non. Lorem velit ullamco ad
          voluptate do. Adipisicing adipisicing fugiat consectetur esse commodo
          anim ex dolore et enim esse laboris incididunt. Qui aliqua deserunt
          magna do ea ea. Laborum nostrud aliqua veniam pariatur eiusmod enim
          nisi adipisicing Lorem sint anim esse esse. Aliqua cupidatat est
          occaecat est sunt reprehenderit ipsum dolor.
        </p>
        <Button
          label="close"
          size="md"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </Modal>
    </>
  );
};

export default Contacts;
