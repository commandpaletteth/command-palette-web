import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background text-center md:text-left">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">
            Where <span className="text-primary">Logic</span> Meets <span className="text-accent">Creativity</span>.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We don&apos;t just build websites. We engineer <span className="font-semibold text-foreground">digital assets</span> that work for you while you sleep.
          </p>
        </div>
      </section>

      {/* The Philosophy Section (Split) */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Command Side */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50">
            <div className="text-4xl mb-4">⌘</div>
            <h2 className="text-3xl font-bold mb-4">Command</h2>
            <p className="text-muted-foreground">
              Represents the logic, the code, the structure, and the <strong>engineering precision</strong> required to build high-performance systems. We obsess over milliseconds because speed is the new currency.
            </p>
          </div>

          {/* Palette Side */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50">
            <div className="text-4xl mb-4">🎨</div>
            <h2 className="text-3xl font-bold mb-4">Palette</h2>
            <p className="text-muted-foreground">
              Represents the artistry, the user experience, the emotion, and the <strong>design thinking</strong> that connects with human beings. A fast website is meaningless if it lacks soul.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Mission: Stop Renting, Start Owning.</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-primary">Obsessed with Performance</h3>
            <p className="text-sm text-muted-foreground">We don&apos;t tolerate slow. Every line of code is optimized for speed and SEO.</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-primary">Data-Driven Design</h3>
            <p className="text-sm text-muted-foreground">We don&apos;t guess. We use logic and user data to drive every pixel.</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-primary">AI-First Approach</h3>
            <p className="text-sm text-muted-foreground">We integrate AI to automate the mundane, so you can focus on the extraordinary.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Digital Asset?</h2>
        <p className="text-lg mb-8 opacity-90">The future belongs to those who build it.</p>
        <Link href="/">
          <Button variant="secondary" size="lg" className="text-lg px-8">
            Start Your Project
          </Button>
        </Link>
      </section>
    </div>
  );
}