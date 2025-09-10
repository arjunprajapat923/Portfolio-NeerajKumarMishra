import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactCard() {
  return (
    <Card>
      <CardContent className="p-4 sm:py-6">
        <div className="flex flex-col gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg text-foreground font-medium">Connect with Dr. Mishra</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
              For collaborations, student supervision, consulting, or speaking invitations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button asChild variant="secondary" className="w-full sm:w-auto text-sm">
              <a href="mailto:99neer@gmail.com" aria-label="Email Dr. Mishra">
                Email
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto text-sm bg-transparent">
              <a href="tel:+918894914686" aria-label="Call Dr. Mishra">
                Call
              </a>
            </Button>
            <Button asChild className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-90 text-sm">
              <a href="#" aria-label="View CV">
                View CV
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
