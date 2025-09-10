import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Hero from "@/components/hero"
import SectionHeading from "@/components/section-heading"
import Highlights from "@/components/highlights"
import ResearchAreas from "@/components/research-areas"
import Books from "@/components/books"
import Publications from "@/components/publications"
import ContactCard from "@/components/contact-card"

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-16 mx-auto max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl text-balance">About Dr. Neeraj Kumar Mishra</CardTitle>
            </CardHeader>
            <CardContent className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3 sm:space-y-4">
              <p>
                Dr. Neeraj Kumar Mishra is a Professor at the National Institute of Technology (NIT) Hamirpur,
                specializing in power systems, renewable energy integration, and advanced control of electrical
                machines. He completed his PhD on six‑phase Doubly‑Fed Induction Generators (DFIG)—research he
                identifies as the only work of its kind globally—covering reliability, fault tolerance, and performance
                optimization for multi‑phase wind energy systems.
              </p>
              <p>
                He has contributed to multiple books and publications, and his current interests include multi‑phase
                machine modeling and control, converter topologies for high‑availability systems, condition monitoring
                and diagnostics, and resilient grid integration of renewables.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">At a glance</CardTitle>
            </CardHeader>
            <CardContent>
              <Highlights />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-16 mx-auto max-w-5xl">
        <SectionHeading
          title="Research Areas"
          subtitle="Focus across power systems, renewables, and multi‑phase machines"
        />
        <ResearchAreas />
      </section>

      <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-16 mx-auto max-w-5xl">
        <SectionHeading title="Books & Chapters" subtitle="Selected contributions and editorial work" />
        <Books />
      </section>

      <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-16 mx-auto max-w-5xl">
        <SectionHeading title="Recent Publications" subtitle="Representative peer‑reviewed work" />
        <Publications />
        <div className="mt-4 sm:mt-6">
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <a href="#contact" aria-label="Request full publication list">
              Request full list
            </a>
          </Button>
        </div>
      </section>

      <section id="contact" className="px-4 sm:px-6 py-8 sm:py-12 md:py-16 mx-auto max-w-5xl">
        <SectionHeading title="Contact" subtitle="Collaborations, supervision, and consulting" />
        <ContactCard />
      </section>
    </main>
  )
}
