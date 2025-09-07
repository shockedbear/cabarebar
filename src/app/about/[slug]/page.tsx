import { Dasha } from "./Dasha"
import { Director } from "./Director"

export function generateStaticParams() {
  return [
    { slug: "director" },
    { slug: "choreographer" },
  ]
}

export default async function FullAboutSlug({params}: {params: Promise<{ slug: string }>}) {
  const { slug } = await params

  if (slug === "choreographer") {
    return (
      <div>
        <Dasha />
      </div>
    )
  }

  if (slug === "director") {
    return (
      <div>
        <Director/>
      </div>
    )
  }

  return <p>Нет такой страницы</p>
}
