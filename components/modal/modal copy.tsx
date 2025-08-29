"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import { CircleButton } from "../buttons";
import { createPortal } from "react-dom";

type TModal = {
  title?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

const Modal: FC<TModal> = ({ title, children, isOpen, onClose }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const scrollbarWidth: number = innerWidth - clientWidth;
  const duration = 850;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);
      setClientWidth(document.documentElement.clientWidth);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      const durationTimeout = setTimeout(() => {
        document.body.style.paddingRight = `${0}px`;
        document.body.style.overflow = "";
      }, duration);

      return () => {
        clearTimeout(durationTimeout);
      };
    }
  }, [isOpen, scrollbarWidth]);

  return isOpen && (
    createPortal(
      <div id="modal">
        <div
          id="overlay"
          className={`${
            isOpen ? "opacity-70" : `opacity-0`
          } transition-opacity ease-in-out duration-${duration} fixed top-0 left-0 z-98 flex w-full h-full bg-(--foreground)`}
          onClick={onClose}
        />
        <div
          className={`${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out duration-${duration} fixed top-[50%] left-[50%] z-99 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[620px] gap-5 bg-white p-[20px] rounded-2xl`}
        >
          <CircleButton variant="plus" onClick={onClose} />
          <h4>{title ? title : "Title"}</h4>
          {children ? children : "no content"}
        </div>
      </div>,
      document.body
    )
  );
};

export default Modal;
