import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Choose your mode', desc: 'Jump between video and music tabs instantly.' },
    { n: '02', title: 'Search with intent', desc: 'Use smart chips and filters to narrow your style.' },
    { n: '03', title: 'Preview & download', desc: 'Open quick previews and move straight into your edit.' }
  ];

  return (
    <section id="how-it-works" className="section-wrap py-16 sm:py-20">
      <div className="mb-10 max-w-xl">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-200">How it Works</p>
        <h2 className="text-3xl font-semibold">Fast enough for deadline mode.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.n} className="glass rounded-2xl p-6">
            <p className="mb-3 text-xs tracking-[0.2em] text-cyan-200">{step.n}</p>
            <h3 className="mb-2 font-medium">{step.title}</h3>
            <p className="text-sm text-slate-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PreviewSection() {
  return (
    <section id="preview" className="section-wrap py-16 sm:py-20">
      <div className="glass overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-200">Live Preview</p>
            <h3 className="text-3xl font-semibold">A dashboard built for modern editing teams.</h3>
            <p className="mt-4 text-slate-300">
              Explore trend-first rows, visual card previews, and polished interactions that make sourcing assets feel effortless.
            </p>
            <Link href="/dashboard" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:scale-[1.02] transition">
              Open Dashboard
            </Link>
          </div>
          <div className="noise relative rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <div className="mb-4 h-8 rounded-lg bg-white/10" />
            <div className="grid gap-3 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="h-24 rounded-xl bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-wrap pb-16 pt-6 sm:pb-20">
      <div className="rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 p-8 text-center sm:p-12">
        <h3 className="text-3xl font-semibold">Ready to upgrade your creative sourcing flow?</h3>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">Launch MediaFinder and curate your next edit with visual and audio assets in one premium workspace.</p>
        <Link href="/dashboard" className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-medium text-slate-900 transition hover:scale-[1.03]">
          Get Started Free
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <PreviewSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
