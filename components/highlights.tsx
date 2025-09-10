import { Badge } from "@/components/ui/badge"

export default function Highlights() {
  return (
    <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
        <Badge className="bg-accent text-accent-foreground hover:opacity-90 w-fit text-xs">PhD Pioneer</Badge>
        <p className="leading-relaxed">
          Six‑Phase DFIG for Wind Energy Generation — pioneering research in wound rotor induction generators.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
        <Badge variant="secondary" className="w-fit text-xs">
          Best Paper
        </Badge>
        <p className="leading-relaxed">
          Best Paper Award at ICAET-2019, IIT Madras for outstanding research contribution.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
        <Badge variant="secondary" className="w-fit text-xs">
          Author
        </Badge>
        <p className="leading-relaxed">
          Published "Basic Electrical Engineering" (Infinite Research Publication, 2023) and multiple SCI/Scopus papers.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
        <Badge variant="secondary" className="w-fit text-xs">
          IEEE Reviewer
        </Badge>
        <p className="leading-relaxed">
          Active reviewer for IEEE, IET, and international journals in power systems and renewable energy.
        </p>
      </div>
    </div>
  )
}
