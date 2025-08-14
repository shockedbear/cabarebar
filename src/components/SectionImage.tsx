import Image from 'next/image';

export default function SectionImage() {
  return (
    <section >
      <Image
    src="/images/hero.jpg"
    alt="img"
    width={900}
    height={500}

  />
      
    </section>
  );
}
