import Image from "next/image"

export function SectionDirector() {
    return(
        <div className="max-w-5xl mx-auto mt-20">
            <div className="mx-6 ">
                 <h1 className="text-center text-white text-6xl    mb-10 font-stretch-50% ">Наш директор</h1>
                <Image src='/images/aivar.jpeg' alt='img' width={400} height={500}/>
            </div>
            <p>ТУФЫЛВЫФДВЖ</p>
        </div>
    )
}