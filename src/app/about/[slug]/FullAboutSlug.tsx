'use client'
import { useParams } from "next/navigation"
import { Dasha } from "./Dasha"



export function FullAboutSlug() {
    const param = useParams<{ slug: string }>()
    if (param.slug === 'choreographer') {
        return (
            <div>
                <Dasha/>
            </div>
        )
    }
    if (param.slug === "director") {
        return (
        <div>
            <h1>Директор</h1>

        </div>
        )
    }
  return <p></p>
}

