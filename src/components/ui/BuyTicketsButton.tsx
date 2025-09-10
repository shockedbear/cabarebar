import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  dataTcEvent:string,
  dataTcToken:string
};
export function BuyTicketsButton({children, dataTcEvent, dataTcToken}:ButtonProps) {

    return(
        <button data-tc-event={dataTcEvent}  data-tc-token={dataTcToken} className= "w-[196px] lg:w-[285px]  py-3  border-2 font-cactus-classical rounded-2xl px-10 lg:px-15 text-sm lg:text-xl hover:bg-red-950 transition-colors duration-150 border-[#F0C471] bg-[#520000] text-[#F0C471] cursor-pointer ">{children}</button>
    )

}