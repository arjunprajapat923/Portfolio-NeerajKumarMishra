import { Card, CardContent } from "@/components/ui/card"

const PUBS = [
  {
    title: "Representative Publication Title",
    venue: "Journal / Conference",
    year: "2024",
    notes: "Multi‑phase machine control; reliability",
  },
  {
    title: "Representative Publication Title",
    venue: "Journal / Conference",
    year: "2023",
    notes: "Wind energy systems; converter topology",
  },
  {
    title: "Representative Publication Title",
    venue: "Journal / Conference",
    year: "2022",
    notes: "DFIG performance optimization",
  },
]

export default function Publications() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {PUBS.map((p, i) => (
        <Card key={i}>
          <CardContent className="py-4">
            <h3 className="font-medium text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {p.venue} • {p.year}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{p.notes}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
