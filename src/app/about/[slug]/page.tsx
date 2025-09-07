import { Dasha } from "./Dasha"

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
        <h1>Директор</h1>
      </div>
    )
  }

  return <p>Нет такой страницы</p>
}
