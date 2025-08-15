'use client'

import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ children, onClose }: Props) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose} // клик по фону закрывает модалку
    >
      <div
        className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-lg max-w-full max-h-full overflow-auto p-6"
        onClick={(e) => e.stopPropagation()} // клик по контенту не закрывает
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-4 text-3xl text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
