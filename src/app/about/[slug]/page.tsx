import { FullAboutSlug } from "./FullAboutSlug"

export default function AboutSlug({ params }: { params: { slug: string } }) {
    return(
        <>
            <FullAboutSlug params={params}/>
        </>
    )
}