import Image from "next/image"

type BarCardProps = {
  img: string;
};

export function BarCard({ img }: BarCardProps) {
  return (
    <div>
      <Image src={img} alt="img" width={500} height={500} 
      loading="lazy"
 />
    </div>
  );
}