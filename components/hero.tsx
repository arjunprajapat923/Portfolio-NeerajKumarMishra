import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden ring-4 ring-white/20">
            {/* Using placeholder; replace with a real portrait later */}
            <Image
              src='https://i.ibb.co/WNLTJRqz/NKMSir-Photo.jpg'
              alt="Portrait of Dr. Neeraj Kumar Mishra"
              fill
              sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 max-w-none md:max-w-2xl">
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-90">
              Assistant Professor — Electrical Engineering, NIT Hamirpur
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-balance leading-tight">
              Dr. Neeraj Kumar Mishra
            </h1>
            <p className="mt-3 text-sm sm:text-base text-pretty leading-relaxed text-primary-foreground/90">
              Renewable Energy Systems | Six‑Phase DFIG Pioneer | Power Electronics & Electric Vehicles | Author & IEEE
              Reviewer
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <a href="#contact" aria-label="Get in touch">
                  Get in touch
                </a>
              </Button>
              <Button asChild className="w-full sm:w-auto bg-accent text-accent-foreground hover:opacity-90">
                <a href="#" aria-label="Download CV">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
