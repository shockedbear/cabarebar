'use client'
import { useParams } from "next/navigation"
import { Dasha } from "./Dasha"



export function FullAboutSlug() {
    const {slug} = useParams()
    if (slug === 'choreographer') {
        return (
            <div>
                <Dasha/>
            </div>
        )
    }
    if (slug === "director") {
        return (
        <div>
            <h1>Директор</h1>

        </div>
        )
    }
  return <p></p>
}

