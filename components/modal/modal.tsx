"use client";
import React, { useState, useEffect, FC } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  duration?: number;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "Title",
  children,
  duration = 300,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [innerWidth, setInnerWidth] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const scrollbarWidth: number = innerWidth - clientWidth;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);
      setClientWidth(document.documentElement.clientWidth);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setIsVisible(false), duration);
      const durationTimeout = setTimeout(() => {
        document.body.style.paddingRight = `${0}px`;
        document.body.style.overflow = "";
      }, duration);

      return () => {
        clearTimeout(durationTimeout);
      };
    }
  }, [isOpen, duration, scrollbarWidth]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      e.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!isVisible) return null;

  return createPortal(
    <div id="modal" className="fixed inset-0 z-50 flex items-center justify-center font-family">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-${duration} ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Dialog */}
      <div
        className={`relative z-10 w-[620px] bg-white rounded-2xl p-6 shadow-lg transition-all duration-${duration} ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-5"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Title */}
        <h4 className="text-lg mb-4">{title}</h4>

        {/* Content */}
        <div className="flex flex-col gap-6 items-start">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
