type Props = {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">{title}</h2>
      {subtitle ? <p className="mt-2 text-muted-foreground leading-relaxed">{subtitle}</p> : null}
    </div>
  )
}
