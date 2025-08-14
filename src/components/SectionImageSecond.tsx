import Image from "next/image"

export  function SectionImageSecond() {
    return(
        <div className="mx-auto max-w-5xl mt-4">
            <Image src='/images/121.png' alt="img" width={500} height={500} priority className="w-full"/>
        </div>
    )
}