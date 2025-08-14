import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};
export function Button({children}:ButtonProps) {
    return(
        <button className="py-3  border-2 font-cactus-classical rounded-2xl px-10 lg:px-15 text-sm lg:text-xl hover:bg-red-950 transition-colors duration-150 border-[#F0C471] bg-[#520000] text-[#F0C471] cursor-pointer ">{children}</button>
    )

}