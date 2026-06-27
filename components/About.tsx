import { Reveal } from "./motion";
import { Icon } from "./icons";

const points = [
  "Deep expertise in Pakistani tax law & SECP regulations",
  "Serving startups, SMEs, NGOs & international firms",
  "Efficient processes with a client-focused approach",
  "End-to-end setup, operation & growth support",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A professional firm built on trust & compliance
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Burney Tomar Tax Consultants is a professional firm providing
              comprehensive tax, corporate, and regulatory consultancy services.
              Our mission is to support businesses and individuals in navigating
              complex legal and financial systems through expert guidance,
              efficient processes, and a client-focused approach.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              With deep expertise in Pakistani tax law, SECP regulations,
              licensing, and compliance, we assist startups, SMEs, NGOs, and
              international firms in setting up, operating, and growing within a
              compliant business framework.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon name="check" width={18} height={18} />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
