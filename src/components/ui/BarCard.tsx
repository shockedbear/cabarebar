import Image from "next/image"

type BarCardProps = {
  img: string;
};

export function BarCard({ img }: BarCardProps) {
  return (
    <div>
      <Image src={img} alt="img" width={500} height={500} data-aos="zoom-in"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="1500"
      loading="lazy"
 />
    </div>
  );
}