import { createFileRoute } from "@tanstack/react-router";
import { Card, Section } from "@/components/Primitives";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Download, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gerta Xhepi" },
      { name: "description", content: "Get in touch with Gerta Xhepi about product roles, collaborations or thoughtful conversations." },
      { property: "og:title", content: "Contact — Gerta Xhepi" },
      { property: "og:description", content: "Let's build products that matter." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const channels = [
  { icon: Mail, label: "Email", value: "hello@gertaxhepi.com", href: "mailto:hello@gertaxhepi.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gertaxhepi", href: "https://www.linkedin.com/" },
  { icon: MapPin, label: "Based in", value: "Germany · Open to remote" },
];

function Contact() {
  return (
    <Section className="pt-20 md:pt-28">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.18em] text-primary/80 mb-4">Contact</div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
          Let's build products that <span className="font-display italic text-primary">matter</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl">
          Whether it's a senior PM role, a founding product hire, or simply a conversation about how to build well — I'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {channels.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <Card className="h-full">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
              <div className="mt-1.5 text-base font-medium flex items-center gap-1.5">
                {value}
                {href && <ArrowUpRight className="size-4 text-muted-foreground" />}
              </div>
            </Card>
          );
          return href ? (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
              {content}
            </a>
          ) : (
            <div key={label}>{content}</div>
          );
        })}
      </div>

      <Card className="mt-10 p-8 md:p-10 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <div className="text-lg font-medium">Prefer the long version?</div>
          <p className="text-sm text-muted-foreground mt-1">Grab the resume — experience, references and the path so far.</p>
        </div>
        <Button asChild className="rounded-full">
          <a href="/resume.pdf" download>
            <Download className="mr-1" /> Download Resume
          </a>
        </Button>
      </Card>
    </Section>
  );
}
