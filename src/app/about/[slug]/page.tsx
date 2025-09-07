import { Dasha } from "./Dasha"

type Props = {
    params: {
        slug: string
    }
}
export function generateStaticParams() {
  return [
    { slug: "director" },
    { slug: "choreographer" },
  ]
}
export default function AboutSlug({params}:Props) {
    if (params.slug === 'choreographer') {
        return (
            <div>
                <Dasha/>
            </div>
        )
    }
    if (params.slug === "choreographer") {
        return (
        <div>
            <h1>Хореограф</h1>
            {/* тут компонент хореографа */}
        </div>
        )
    }
  return <p></p>
}