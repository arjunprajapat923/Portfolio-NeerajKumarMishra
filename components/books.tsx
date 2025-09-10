import { Card, CardContent } from "@/components/ui/card"

const BOOKS = [
  {
    title: "Basic Electrical Engineering",
    role: "Author",
    year: "2023",
    publisher: "Infinite Research Publication",
  },
  {
    title: "SCI/Scopus Indexed Research Papers",
    role: "Author/Co-Author",
    year: "Multiple Years",
    publisher: "IEEE, IET & International Journals",
  },
]

export default function Books() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {BOOKS.map((b, i) => (
        <Card key={i}>
          <CardContent className="py-4">
            <h3 className="font-medium text-foreground">{b.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {b.role} • {b.publisher} • {b.year}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
