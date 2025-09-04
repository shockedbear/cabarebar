import Image from "next/image"

type Props = {
  img: string;
};

export function BarCardMain({ img }: Props) {
  return (
    <div>
      <Image src={img} alt="img" width={1000} height={500} 
       loading="lazy"
       data-aos="flip-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000" 
 />
    </div>
  );
}