import { Card } from "@/components/ui/card";

type LegalPageProps = {
  page: {
    title: string;
    intro: string;
    sections: string[];
  };
};

export function LegalPage({ page }: LegalPageProps) {
  return (
    <section className="section-shell">
      <div className="container-soft max-w-4xl">
        <p className="eyebrow">Policy</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{page.intro}</p>
        <Card className="mt-10">
          <ol className="grid gap-5">
            {page.sections.map((section, index) => (
              <li className="flex gap-4 leading-7 text-muted-foreground" key={section}>
                <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-md bg-secondary text-xs font-semibold text-foreground">
                  {index + 1}
                </span>
                <span>{section}</span>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </section>
  );
}
