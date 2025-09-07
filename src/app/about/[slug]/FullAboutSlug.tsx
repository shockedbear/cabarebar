'use client'
import { useParams } from "next/navigation"
import { Dasha } from "./Dasha"



export function FullAboutSlug() {
    const {param} = useParams()
    if (param === 'choreographer') {
        return (
            <div>
                <Dasha/>
            </div>
        )
    }
    if (param === "director") {
        return (
        <div>
            <h1>Директор</h1>

        </div>
        )
    }
  return <p></p>
}

