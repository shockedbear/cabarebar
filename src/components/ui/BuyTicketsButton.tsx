import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  dataTcEvent:string,
  dataTcToken:string
};
export function BuyTicketsButton({children, dataTcEvent, dataTcToken}:ButtonProps) {

    return(
<button
      data-tc-event={dataTcEvent}
      data-tc-theme="custom"
      data-tc-token={dataTcToken}
      style={{
        width: "196px",
        paddingTop: "12px",   // py-3
        paddingBottom: "12px",
        paddingLeft: "40px", // px-10
        paddingRight: "40px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#F0C471",
        borderRadius: "1rem", // rounded-2xl
        fontFamily: "Cactus Classical, serif",
        fontSize: "14px", // text-sm
        lineHeight: "20px",
        color: "#F0C471",
        backgroundColor: "#520000",
        cursor: "pointer",
        transition: "background-color 150ms",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#3d0000" // hover:bg-red-950
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#520000"
      }}
    >
      {children}
    </button>    )

}