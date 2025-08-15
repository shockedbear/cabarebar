'use client'

import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ children, onClose }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClose = () => {
    setIsVisible(false); 
    setTimeout(onClose, 300); 
  };

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 
        transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white dark:bg-zinc-900 rounded-xl shadow-lg max-w-full max-h-full overflow-auto p-6 border border-[#F0C471]
          transform transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
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
