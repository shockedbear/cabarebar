import Image from "next/image"

export  function SectionImageBarEnd() {
    return(
        <div className="mx-auto max-w-5xl  mt-5  lg:mt-45">
            <div className="mx-6">
                <Image  className="rounded-lg" src='/images/bar/mainEnd.png' alt="img" width={1000} height={200} priority />
            </div>
        </div>
    )
}