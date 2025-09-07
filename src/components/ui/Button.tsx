import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  size:number
};
export function Button({children, size}:ButtonProps) {
const sizeClasses =
    size === 1 ? "w-[178px] lg:w-[258px]" : size === 2 ? "w-[196px] lg:w-[285px]" : "w-auto";
    return(
        <button  className={` ${sizeClasses} py-3  border-2 font-cactus-classical rounded-2xl px-10 lg:px-15 text-sm lg:text-xl hover:bg-red-950 transition-colors duration-150 border-[#F0C471] bg-[#520000] text-[#F0C471] cursor-pointer `}>{children}</button>
    )

}