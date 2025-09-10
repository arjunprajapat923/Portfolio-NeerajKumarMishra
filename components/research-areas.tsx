import { Badge } from "@/components/ui/badge"

const AREAS = [
  "Renewable Energy (Wind & Solar)",
  "Electric Vehicles",
  "Power Electronics",
  "Electrical Machines & Drives",
  "Six‑Phase DFIG",
  "Typhoon HIL Simulation",
  "MATLAB & Python",
  "Power System Optimization",
]

export default function ResearchAreas() {
  return (
    <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
      {AREAS.map((a) => (
        <Badge key={a} variant="outline" className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1">
          {a}
        </Badge>
      ))}
    </div>
  )
}
