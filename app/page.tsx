"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Commercial Production",
    text: "High-quality commercial films and branded visual content designed to make your brand stand out.",
  },
  {
    number: "02",
    title: "Photography",
    text: "Professional fashion, product, lifestyle and campaign photography with a cinematic visual approach.",
  },
  {
    number: "03",
    title: "Video Production",
    text: "From concept to final delivery — promotional videos, social content, documentaries and campaigns.",
  },
  {
    number: "04",
    title: "Post Production",
    text: "Professional editing, color grading, sound design, motion graphics and final delivery.",
  },
];

const packages = [
  {
    title: "Starter",
    text: "For small businesses and social media campaigns.",
    features: ["Creative planning", "Photography / Video", "Basic editing", "Social media delivery"],
  },
  {
    title: "Professional",
    text: "For brands that need a complete visual campaign.",
    features: ["Creative direction", "Full production", "Professional editing", "Color grading", "Multiple deliverables"],
  },
  {
    title: "Premium",
    text: "Complete visual production for major campaigns.",
    features: ["Concept development", "Full production team", "Cinematic production", "Advanced post-production", "Campaign deliverables"],
  },
];

const process = [
  ["01", "Discovery", "We understand your brand, audience and project goals."],
  ["02", "Planning", "We develop the concept, visual direction and production plan."],
  ["03", "Production", "Our team brings the concept to life through photography and filmmaking."],
  ["04", "Post Production", "Editing, color, sound and finishing create the final experience."],
  ["05", "Delivery", "Your final content is delivered ready for web, social and advertising."],
];

const faqs = [
  ["What services does Chitrokotha Studio provide?", "We provide commercial photography, video production, fashion content, product photography, promotional videos, editing, color grading and other creative production services."],
  ["Do you work with brands and companies?", "Yes. We work with businesses, brands, agencies, entrepreneurs, creators and organizations."],
  ["Can I hire models through Chitrokotha Studio?", "Yes. Our model and casting network allows brands and production teams to find suitable models for paid and collaboration projects."],
  ["Can you handle the complete production?", "Yes. Depending on the project, we can handle creative planning, production, photography, videography, editing and final delivery."],
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  const toggleMobile = (name: string) => {
    setOpenMobile(openMobile === name ? null : name);
  };

  const closeMenu = () => {
    setMobileMenu(false);
    setOpenMobile(null);
  };

  return (
    <main className="min-h-screen bg-white text-black">

      {/* ================= HEADER ================= */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* LOGO */}
          <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-sm font-bold">
              C
            </div>

            <div>
              <div className="text-sm font-bold tracking-[0.25em]">
                CHITROKOTHA
              </div>
              <div className="text-[9px] uppercase tracking-[0.35em] text-white/50">
                Creative Studio
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-7 lg:flex">

            <a href="#home" className="text-sm text-white/80 transition hover:text-white">
              Home
            </a>

            {/* WORK */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm text-white/80 transition hover:text-white">
                Work <span className="text-xs">⌄</span>
              </button>

              <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 translate-y-3 rounded-xl border border-white/10 bg-black p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                <a href="#work" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Photography</a>
                <a href="#work" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Video</a>
                <a href="#work" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Commercial</a>
                <a href="#work" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Fashion</a>
              </div>
            </div>

            {/* SERVICES */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm text-white/80 transition hover:text-white">
                Services <span className="text-xs">⌄</span>
              </button>

              <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-3 rounded-xl border border-white/10 bg-black p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                <a href="#services" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Production</a>
                <a href="#services" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Photography</a>
                <a href="#services" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Video Production</a>
                <a href="#services" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Post Production</a>
              </div>
            </div>

            <a href="#packages" className="text-sm text-white/80 transition hover:text-white">
              Packages
            </a>

            {/* MODELS */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm text-white/80 transition hover:text-white">
                Models <span className="text-xs">⌄</span>
              </button>

              <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-3 rounded-xl border border-white/10 bg-black p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                <a href="#models" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Our Models</a>
                <a href="#models" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Paid Casting</a>
                <a href="#models" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Become a Model</a>
              </div>
            </div>

            {/* STUDIO */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm text-white/80 transition hover:text-white">
                Studio <span className="text-xs">⌄</span>
              </button>

              <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 translate-y-3 rounded-xl border border-white/10 bg-black p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                <a href="#about" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">About</a>
                <a href="#process" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Our Process</a>
                <a href="#clients" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Clients</a>
                <a href="#testimonials" className="block rounded-lg px-4 py-3 text-sm hover:bg-white/10">Testimonials</a>
              </div>
            </div>

            <a href="#contact" className="text-sm text-white/80 transition hover:text-white">
              Contact
            </a>

            <a
              href="#quote"
              className="rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-white/80"
            >
              Request a Quote
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl lg:hidden"
            aria-label="Open menu"
          >
            {mobileMenu ? "×" : "☰"}
          </button>
        </div>

        {/* ================= MOBILE NAV ================= */}
        {mobileMenu && (
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/10 bg-black lg:hidden">

            <div className="mx-auto max-w-7xl px-5 py-5">

              <a
                href="#home"
                onClick={closeMenu}
                className="block border-b border-white/10 py-4 text-lg"
              >
                Home
              </a>

              {/* MOBILE WORK */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleMobile("work")}
                  className="flex w-full items-center justify-between py-4 text-left text-lg"
                >
                  Work
                  <span>{openMobile === "work" ? "−" : "+"}</span>
                </button>

                {openMobile === "work" && (
                  <div className="pb-3 pl-4">
                    <a href="#work" onClick={closeMenu} className="block py-2 text-sm text-white/60">Photography</a>
                    <a href="#work" onClick={closeMenu} className="block py-2 text-sm text-white/60">Video</a>
                    <a href="#work" onClick={closeMenu} className="block py-2 text-sm text-white/60">Commercial</a>
                    <a href="#work" onClick={closeMenu} className="block py-2 text-sm text-white/60">Fashion</a>
                  </div>
                )}
              </div>

              {/* MOBILE SERVICES */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleMobile("services")}
                  className="flex w-full items-center justify-between py-4 text-left text-lg"
                >
                  Services
                  <span>{openMobile === "services" ? "−" : "+"}</span>
                </button>

                {openMobile === "services" && (
                  <div className="pb-3 pl-4">
                    <a href="#services" onClick={closeMenu} className="block py-2 text-sm text-white/60">Production</a>
                    <a href="#services" onClick={closeMenu} className="block py-2 text-sm text-white/60">Photography</a>
                    <a href="#services" onClick={closeMenu} className="block py-2 text-sm text-white/60">Video Production</a>
                    <a href="#services" onClick={closeMenu} className="block py-2 text-sm text-white/60">Post Production</a>
                  </div>
                )}
              </div>

              <a
                href="#packages"
                onClick={closeMenu}
                className="block border-b border-white/10 py-4 text-lg"
              >
                Packages
              </a>

              {/* MOBILE MODELS */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleMobile("models")}
                  className="flex w-full items-center justify-between py-4 text-left text-lg"
                >
                  Models
                  <span>{openMobile === "models" ? "−" : "+"}</span>
                </button>

                {openMobile === "models" && (
                  <div className="pb-3 pl-4">
                    <a href="#models" onClick={closeMenu} className="block py-2 text-sm text-white/60">Our Models</a>
                    <a href="#models" onClick={closeMenu} className="block py-2 text-sm text-white/60">Paid Casting</a>
                    <a href="#models" onClick={closeMenu} className="block py-2 text-sm text-white/60">Become a Model</a>
                  </div>
                )}
              </div>

              {/* MOBILE STUDIO */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => toggleMobile("studio")}
                  className="flex w-full items-center justify-between py-4 text-left text-lg"
                >
                  Studio
                  <span>{openMobile === "studio" ? "−" : "+"}</span>
                </button>

                {openMobile === "studio" && (
                  <div className="pb-3 pl-4">
                    <a href="#about" onClick={closeMenu} className="block py-2 text-sm text-white/60">About</a>
                    <a href="#process" onClick={closeMenu} className="block py-2 text-sm text-white/60">Our Process</a>
                    <a href="#clients" onClick={closeMenu} className="block py-2 text-sm text-white/60">Clients</a>
                    <a href="#testimonials" onClick={closeMenu} className="block py-2 text-sm text-white/60">Testimonials</a>
                  </div>
                )}
              </div>

              <a
                href="#contact"
                onClick={closeMenu}
                className="block border-b border-white/10 py-4 text-lg"
              >
                Contact
              </a>

              <a
                href="#quote"
                onClick={closeMenu}
                className="mt-5 block rounded-full bg-white px-5 py-4 text-center text-sm font-bold uppercase tracking-wider text-black"
              >
                Request a Quote
              </a>

            </div>
          </div>
        )}
      </header>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-black px-5 pt-20 text-white sm:px-8"
      >
        <div className="absolute right-[-120px] top-[15%] h-72 w-72 rounded-full border border-white/10 sm:h-[500px] sm:w-[500px] animate-[spin_25s_linear_infinite]" />
        <div className="absolute right-[15%] top-[30%] h-40 w-40 rounded-full border border-white/10 sm:h-64 sm:w-64" />

        <div className="relative mx-auto w-full max-w-7xl py-24 sm:py-32">

          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/50">
            Creative Production Studio
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Stories
            <br />
            in every
            <br />
            <span className="text-white/30">frame.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-black transition hover:bg-white/80"
            >
              Explore Our Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Start a Project →
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-5 text-[10px] uppercase tracking-[0.35em] text-white/30 sm:left-8">
          Chitrokotha Studio — Bangladesh
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-end">

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-black/40">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              We create visuals
              <br />
              that <span className="text-black/30">move people.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-black/60 sm:text-lg">
              Chitrokotha Studio is a creative production studio focused on
              photography, filmmaking and visual storytelling. We help brands,
              businesses and people turn ideas into powerful visual experiences.
            </p>
          </div>

        </div>
      </section>


      {/* ================= WORK ================= */}
      <section id="work" className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
                Selected Work
              </p>

              <h2 className="text-4xl font-bold sm:text-6xl">
                Featured Work
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              A selection of visual projects created with a cinematic and
              contemporary approach.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {[
              ["01", "Commercial Film", "Brand Campaign"],
              ["02", "Fashion Story", "Editorial"],
              ["03", "Product Visuals", "Photography"],
              ["04", "Social Campaign", "Digital Content"],
            ].map(([number, title, category]) => (
              <div
                key={number}
                className="group relative flex min-h-[330px] overflow-hidden rounded-2xl bg-white/[0.06] p-7 transition hover:bg-white/[0.1] sm:min-h-[430px]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-40 w-40 rounded-full border border-white/10 transition duration-700 group-hover:scale-150" />
                </div>

                <div className="relative mt-auto">
                  <p className="mb-2 text-xs text-white/30">{number}</p>

                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm text-white/40">
                    {category}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section id="services" className="px-5 py-24 sm:px-8 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
              What We Do
            </p>

            <h2 className="text-4xl font-bold sm:text-6xl">
              Our Services
            </h2>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">

            {services.map((service) => (
              <div
                key={service.number}
                className="group grid gap-5 py-9 transition hover:px-3 sm:grid-cols-[80px_1fr_1fr] sm:items-center"
              >
                <div className="text-sm text-black/30">
                  {service.number}
                </div>

                <h3 className="text-2xl font-bold sm:text-3xl">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-black/50">
                  {service.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= PACKAGES ================= */}
      <section id="packages" className="bg-[#f5f5f5] px-5 py-24 sm:px-8 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
              Flexible Solutions
            </p>

            <h2 className="text-4xl font-bold sm:text-6xl">
              Packages
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">

            {packages.map((pack, index) => (
              <div
                key={pack.title}
                className={`rounded-2xl p-7 sm:p-9 ${
                  index === 1
                    ? "bg-black text-white"
                    : "bg-white"
                }`}
              >

                <p className={`text-xs uppercase tracking-[0.25em] ${
                  index === 1 ? "text-white/40" : "text-black/40"
                }`}>
                  Package {index + 1}
                </p>

                <h3 className="mt-5 text-3xl font-bold">
                  {pack.title}
                </h3>

                <p className={`mt-4 text-sm leading-7 ${
                  index === 1 ? "text-white/50" : "text-black/50"
                }`}>
                  {pack.text}
                </p>

                <div className={`my-8 border-t ${
                  index === 1 ? "border-white/10" : "border-black/10"
                }`} />

                <div className="space-y-4">

                  {pack.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-3 text-sm"
                    >
                      <span>✓</span>
                      <span className={
                        index === 1 ? "text-white/70" : "text-black/60"
                      }>
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>

                <a
                  href="#quote"
                  className={`mt-9 block rounded-full px-5 py-3 text-center text-sm font-bold ${
                    index === 1
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  Get a Quote
                </a>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= WHY US ================= */}
      <section className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
              Why Chitrokotha
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
              Creative thinking.
              <br />
              <span className="text-white/30">
                Cinematic execution.
              </span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">

            {[
              ["01", "Creative Direction", "Every project starts with a clear visual idea and purpose."],
              ["02", "Professional Quality", "We focus on clean visuals, strong composition and polished delivery."],
              ["03", "Flexible Production", "From small shoots to complete campaigns, we adapt to the project."],
              ["04", "One Creative Partner", "Planning, production and post-production can all be handled by one team."],
            ].map(([number, title, text]) => (
              <div key={number}>
                <p className="text-xs text-white/30">{number}</p>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/40">{text}</p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section id="process" className="px-5 py-24 sm:px-8 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
              How We Work
            </p>

            <h2 className="text-4xl font-bold sm:text-6xl">
              Our Process
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-5">

            {process.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-black/10 p-6"
              >
                <p className="text-xs text-black/30">{number}</p>

                <h3 className="mt-8 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/50">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= MODELS ================= */}
      <section id="models" className="bg-[#f5f5f5] px-5 py-24 sm:px-8 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
                Casting Network
              </p>

              <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
                Models &
                <br />
                <span className="text-black/30">Casting</span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-black/60">
                Our growing model network connects brands, photographers,
                agencies and production teams with suitable talent for
                campaigns, fashion shoots, commercial productions and
                creative projects.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="rounded-full bg-black px-6 py-3 text-center text-sm font-bold text-white"
                >
                  Hire a Model
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-black/20 px-6 py-3 text-center text-sm font-bold"
                >
                  Become a Model
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CLIENTS ================= */}
      <section id="clients" className="px-5 py-24 sm:px-8 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              Trusted By
            </p>
          </div>

          <div className="grid grid-cols-2 border-y border-black/10 sm:grid-cols-4">

            {["BRAND ONE", "BRAND TWO", "BRAND THREE", "BRAND FOUR"].map((client) => (
              <div
                key={client}
                className="flex h-28 items-center justify-center border-black/10 text-center text-xs font-bold tracking-[0.2em] text-black/30 even:border-l sm:border-l"
              >
                {client}
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
            Client Stories
          </p>

          <blockquote className="text-3xl font-medium leading-tight sm:text-5xl">
            “Great visuals are not just about looking good.
            They are about making people feel something.”
          </blockquote>

          <p className="mt-8 text-sm text-white/40">
            — Chitrokotha Studio
          </p>

        </div>
      </section>


      {/* ================= FAQ ================= */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">

        <div className="mx-auto max-w-4xl">

          <div className="mb-12">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
              FAQ
            </p>

            <h2 className="text-4xl font-bold sm:text-6xl">
              Questions?
            </h2>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">

            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-6">

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
                  <span>{question}</span>
                  <span className="text-2xl font-normal text-black/30 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-black/50">
                  {answer}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="bg-[#f5f5f5] px-5 py-24 sm:px-8 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
              About The Studio
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
              Built around
              <br />
              visual storytelling.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-black/60 sm:text-lg">
              Chitrokotha Studio brings together creativity, cinematography,
              photography and post-production to create meaningful visual
              content. Our goal is simple — to turn ideas into visuals that
              people remember.
            </p>

            <p className="mt-6 text-base leading-8 text-black/60 sm:text-lg">
              Whether it is a product campaign, fashion story, commercial
              video or social media content, we approach every project with
              attention to detail and a strong visual identity.
            </p>
          </div>

        </div>
      </section>


      {/* ================= QUOTE ================= */}
      <section id="quote" className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Have a Project?
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Let's create
            <br />
            something remarkable.
          </h2>

          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-white/80"
          >
            Request a Quote →
          </a>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-black/40">
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold sm:text-6xl">
              Start a
              <br />
              conversation.
            </h2>
          </div>

          <div className="space-y-7">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/30">
                Email
              </p>

              <p className="mt-2 text-lg font-medium">
                hello@chitrokotha.com
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/30">
                Location
              </p>

              <p className="mt-2 text-lg font-medium">
                Dhaka, Bangladesh
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/30">
                Availability
              </p>

              <p className="mt-2 text-lg font-medium">
                Available for selected projects
              </p>
            </div>

            <a
              href="mailto:hello@chitrokotha.com"
              className="inline-block rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              Email Us →
            </a>

          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-black px-5 py-12 text-white sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">

            <div>
              <div className="text-lg font-bold tracking-[0.25em]">
                CHITROKOTHA
              </div>

              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/30">
                Creative Studio
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-white/50">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#models" className="hover:text-white">Models</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>

          </div>

          <div className="flex flex-col gap-3 pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 Chitrokotha Studio. All rights reserved.
            </p>

            <p>
              Photography • Film • Creative Production
            </p>

          </div>

        </div>
      </footer>

    </main>
  );
}