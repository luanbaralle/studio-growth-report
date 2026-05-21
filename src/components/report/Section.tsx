import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ink/30" />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
                {eyebrow}
              </span>
            </div>
          )}
          <h2 className="font-display text-4xl leading-[1.05] text-ink md:text-6xl">{title}</h2>
          {intro && (
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">{intro}</p>
          )}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
