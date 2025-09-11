
export function generateStaticParams() {
  return (
    [
      {id: "1"}
    ]
  )
}

export default async function Booking({params}: {params: Promise<{ id: string }>})  {
  const {id} = await params

  if (id === '1') {
    return(
      <span data-tc-event-inline="68c19087f1f567b1d7d091f8" data-tc-token="eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjhjMDM0MjAxZTM3MjJlZDM0MzM4ZjQ4In0.iSIxulT2fYCyWpgCGEgLuA2DkQkWH51szZYSu1Y9aE0"></span>
    )
  }

  
}
