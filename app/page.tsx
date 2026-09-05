const services = [
  {
    no: "01",
    title: "Commercial Production",
    text: "End-to-end visual production for brands, campaigns and commercial projects.",
  },
  {
    no: "02",
    title: "Photography",
    text: "Product, fashion, lifestyle and commercial photography with a refined visual approach.",
  },
  {
    no: "03",
    title: "Cinematography",
    text: "Cinematic visual storytelling designed around your brand, message and audience.",
  },
  {
    no: "04",
    title: "Video Production",
    text: "Creative videos, brand films, promotional content and social media campaigns.",
  },
  {
    no: "05",
    title: "Post Production",
    text: "Professional editing, color grading, sound and finishing for polished final content.",
  },
  {
    no: "06",
    title: "Models & Casting",
    text: "Model sourcing and casting support for commercial, fashion and creative productions.",
  },
];

const packages = [
  {
    name: "Essential",
    label: "For small projects",
    text: "A simple production solution for businesses that need quality content without a large production setup.",
    features: [
      "Creative consultation",
      "Photography or video session",
      "Professional editing",
      "Digital delivery",
    ],
  },
  {
    name: "Professional",
    label: "Most popular",
    text: "A complete creative production package for brands that want consistent and professional visual content.",
    features: [
      "Creative direction",
      "Photography & cinematography",
      "Professional production",
      "Advanced post production",
      "Social media content",
    ],
    featured: true,
  },
  {
    name: "Campaign",
    label: "For bigger productions",
    text: "A complete production experience for campaigns, launches, fashion and larger commercial projects.",
    features: [
      "Full production planning",
      "Creative direction",
      "Photography & video",
      "Models & casting",
      "Advanced post production",
      "Campaign assets",
    ],
  },
];

const process = [
  ["01", "Discover", "We understand your brand, idea, audience and project goals."],
  ["02", "Plan", "We develop the creative direction, production plan and quotation."],
  ["03", "Prepare", "Location, models, crew, equipment and schedule are organized."],
  ["04", "Create", "Our team produces the photography and video content."],
  ["05", "Refine", "Editing, color grading and final visual finishing take place."],
  ["06", "Deliver", "Final approved content is delivered ready for use."],
];

const faqs = [
  [
    "What type of projects do you work on?",
    "We work on commercial photography, video production, brand content, product photography, fashion projects, social media content and creative productions.",
  ],
  [
    "Can you provide models for our project?",
    "Yes. Our model and casting network can help brands find suitable talent for commercial, fashion and creative productions.",
  ],
  [
    "Do you offer custom packages?",
    "Yes. The packages shown on the website are starting points. We can create a custom quotation based on your exact requirements.",
  ],
  [
    "Do you work outside Dhaka?",
    "Yes. Location-based productions can be arranged depending on the project requirements and schedule.",
  ],
  [
    "How do I start a project?",
    "Send us your project details through the Request a Quote section. We will review the requirements and contact you for the next steps.",
  ],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f7f5] text-[#111]">

      {/* ================= HEADER ================= */}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">

          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-white/40 text-xs transition duration-500 group-hover:rotate-45 group-hover:border-white">
              C
            </div>

            <div className="leading-none">
              <div className="text-[15px] font-semibold tracking-[0.22em]">
                CHITROKOTHA
              </div>

              <div className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/40">
                Creative Studio
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-1 lg:flex">

            <a
              href="#home"
              className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Home
            </a>

            {/* WORK */}

            <div className="group relative">
              <button className="rounded-full px-4 py-2 text-sm text-white/80 transition group-hover:bg-white/10 group-hover:text-white">
                Work <span className="ml-2 text-[10px]">⌄</span>
              </button>

              <div className="invisible absolute left-0 top-full w-64 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="border border-white/10 bg-black/95 p-3 shadow-2xl">
                  <a href="#work" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    All Projects
                  </a>
                  <a href="#work" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Commercial
                  </a>
                  <a href="#work" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Photography
                  </a>
                  <a href="#work" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Films & Videos
                  </a>
                  <a href="#work" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Fashion
                  </a>
                </div>
              </div>
            </div>

            {/* SERVICES */}

            <div className="group relative">
              <button className="rounded-full px-4 py-2 text-sm text-white/80 transition group-hover:bg-white/10 group-hover:text-white">
                Services <span className="ml-2 text-[10px]">⌄</span>
              </button>

              <div className="invisible absolute left-0 top-full w-72 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="border border-white/10 bg-black/95 p-3 shadow-2xl">
                  {services.slice(0, 5).map((service) => (
                    <a
                      key={service.no}
                      href="#services"
                      className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#packages"
              className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Packages
            </a>

            {/* MODELS */}

            <div className="group relative">
              <button className="rounded-full px-4 py-2 text-sm text-white/80 transition group-hover:bg-white/10 group-hover:text-white">
                Models <span className="ml-2 text-[10px]">⌄</span>
              </button>

              <div className="invisible absolute left-0 top-full w-64 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="border border-white/10 bg-black/95 p-3 shadow-2xl">
                  <a href="#models" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Model Portfolio
                  </a>
                  <a href="#models" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Paid Casting
                  </a>
                  <a href="#models" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Collaboration
                  </a>
                  <a href="#models" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Become a Model
                  </a>
                </div>
              </div>
            </div>

            {/* STUDIO */}

            <div className="group relative">
              <button className="rounded-full px-4 py-2 text-sm text-white/80 transition group-hover:bg-white/10 group-hover:text-white">
                Studio <span className="ml-2 text-[10px]">⌄</span>
              </button>

              <div className="invisible absolute left-0 top-full w-64 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="border border-white/10 bg-black/95 p-3">
                  <a href="#about" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    About Us
                  </a>
                  <a href="#process" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Our Process
                  </a>
                  <a href="#clients" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Clients
                  </a>
                  <a href="#testimonials" className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white">
                    Testimonials
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Contact
            </a>
          </nav>

          <a
            href="#quote"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-105 lg:block"
          >
            Request a Quote
          </a>

          <button className="flex h-10 w-10 items-center justify-center border border-white/20 lg:hidden">
            <span className="text-xl">☰</span>
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-black text-white"
      >

        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-white/10 blur-[150px] animate-pulse" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_75%)]" />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 lg:px-10">

          <div className="max-w-6xl">

            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-white/50" />

              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Creative Production Studio · Bangladesh
              </p>
            </div>

            <h1 className="text-6xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl lg:text-[9rem]">

              <span className="block">
                Stories
              </span>

              <span className="ml-[8vw] block text-white/35">
                in every
              </span>

              <span className="block">
                frame.
              </span>

            </h1>

            <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">

              <p className="max-w-xl text-base leading-8 text-white/50 md:text-lg">
                Chitrokotha Studio creates photography, cinematography,
                commercial content and visual experiences for brands,
                businesses and creative projects.
              </p>

              <a
                href="#work"
                className="group flex w-fit items-center gap-4 border-b border-white/30 pb-3 text-sm uppercase tracking-[0.2em] transition hover:border-white"
              >
                Explore our work

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

            </div>

          </div>

          <div className="absolute bottom-8 right-6 hidden items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/30 md:flex lg:right-10">
            <span>Scroll to explore</span>
            <span className="h-10 w-px bg-white/20" />
          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}

      <section className="border-b border-black/10 bg-[#f7f7f5] py-28">

        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-10">

          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              The Studio
            </p>
          </div>

          <div className="lg:col-span-8">

            <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              We turn ideas into visual stories that people can see, feel and
              remember.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/50">
              From a simple product shoot to a complete commercial campaign,
              Chitrokotha brings creative direction, production and
              post-production together in one place.
            </p>

            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-3 border-b border-black/20 pb-2 text-sm"
            >
              Discover Chitrokotha
              <span>→</span>
            </a>

          </div>
        </div>
      </section>


      {/* ================= WORK ================= */}

      <section id="work" className="border-b border-black/10 bg-white py-28">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                Selected Work
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
                Our Work
              </h2>
            </div>

            <a
              href="#work"
              className="w-fit border-b border-black/20 pb-2 text-sm"
            >
              View all projects →
            </a>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-12">

            {[
              ["Commercial", "Brand Campaign", "01", "md:col-span-7", "aspect-[16/10]", "bg-[#e9e9e6]"],
              ["Photography", "Editorial", "02", "md:col-span-5", "aspect-[4/5]", "bg-[#dededb]"],
              ["Fashion", "Visual Story", "03", "md:col-span-5", "aspect-[16/10]", "bg-[#e5e5e2]"],
              ["Video Production", "Brand Film", "04", "md:col-span-7", "aspect-[16/10]", "bg-[#d9d9d6]"],
            ].map(([category, title, number, columns, aspect, background]) => (
              <div
                key={number}
                className={`group relative overflow-hidden ${columns} ${aspect} ${background}`}
              >

                <div className="absolute inset-0 flex items-end p-8 transition duration-700 group-hover:scale-105">

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                      {category}
                    </p>

                    <h3 className="mt-2 text-3xl font-medium">
                      {title}
                    </h3>
                  </div>

                </div>

                <span className="absolute right-7 top-7 text-sm opacity-40">
                  {number}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}

      <section id="services" className="border-b border-black/10 py-28">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            What We Do
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Creative services
            <br />
            built for brands.
          </h2>

          <div className="mt-16 border-t border-black/10">

            {services.map((service) => (
              <div
                key={service.no}
                className="group grid gap-5 border-b border-black/10 py-8 transition duration-500 hover:px-4 md:grid-cols-[100px_1fr_1fr] md:items-center"
              >

                <span className="text-sm text-black/30">
                  {service.no}
                </span>

                <h3 className="text-2xl font-medium md:text-3xl">
                  {service.title}
                </h3>

                <div className="flex items-center justify-between gap-5">

                  <p className="max-w-md text-sm leading-7 text-black/45">
                    {service.text}
                  </p>

                  <span className="text-xl opacity-0 transition duration-300 group-hover:opacity-100">
                    ↗
                  </span>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= PACKAGES ================= */}

      <section id="packages" className="bg-black py-28 text-white">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Production Options
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Packages
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45">
              Every project is different. Choose a starting package or ask us
              for a completely custom production plan.
            </p>

          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">

            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`group relative border p-8 transition duration-500 hover:-translate-y-2 ${
                  pkg.featured
                    ? "border-white bg-white text-black"
                    : "border-white/15 hover:border-white/40"
                }`}
              >

                {pkg.featured && (
                  <div className="absolute right-7 top-7 rounded-full bg-black px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                    Popular
                  </div>
                )}

                <p
                  className={`text-xs uppercase tracking-[0.25em] ${
                    pkg.featured ? "text-black/40" : "text-white/40"
                  }`}
                >
                  {pkg.label}
                </p>

                <h3 className="mt-5 text-4xl font-medium">
                  {pkg.name}
                </h3>

                <p
                  className={`mt-5 min-h-[110px] text-sm leading-7 ${
                    pkg.featured ? "text-black/50" : "text-white/45"
                  }`}
                >
                  {pkg.text}
                </p>

                <div
                  className={`my-8 h-px ${
                    pkg.featured ? "bg-black/10" : "bg-white/10"
                  }`}
                />

                <ul className="space-y-4">

                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <span>+</span>
                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                <a
                  href="#quote"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-full py-3.5 text-sm transition ${
                    pkg.featured
                      ? "bg-black text-white"
                      : "border border-white/20 hover:bg-white hover:text-black"
                  }`}
                >
                  Request Pricing
                </a>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= WHY US ================= */}

      <section className="border-b border-black/10 py-28">

        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-10">

          <div className="lg:col-span-5">

            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              Why Chitrokotha
            </p>

            <h2 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
              More than
              <br />
              just production.
            </h2>

          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">

            {[
              ["01", "Creative Thinking", "We start with the idea, not just the camera."],
              ["02", "Professional Execution", "Every production is planned with attention to detail."],
              ["03", "One Creative Partner", "Creative direction, production and post-production in one place."],
              ["04", "Built Around Your Brand", "We adapt the visual approach to your brand and audience."],
            ].map(([number, title, text]) => (
              <div key={number}>

                <span className="text-4xl">
                  {number}
                </span>

                <h3 className="mt-6 text-xl font-medium">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/50">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PROCESS ================= */}

      <section id="process" className="border-b border-black/10 py-28">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            How We Work
          </p>

          <h2 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
            Our Process
          </h2>

          <div className="mt-16 border-y border-black/10">

            {process.map(([number, title, description]) => (
              <div
                key={number}
                className="grid gap-5 border-b border-black/10 py-8 last:border-0 md:grid-cols-[100px_280px_1fr] md:items-center"
              >

                <span className="text-sm text-black/30">
                  {number}
                </span>

                <h3 className="text-2xl font-medium">
                  {title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-black/50">
                  {description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= MODELS ================= */}

      <section id="models" className="bg-[#e9e9e5] py-28">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                Casting Network
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
                Models &
                <br />
                Casting.
              </h2>

            </div>

            <div>

              <p className="max-w-xl text-lg leading-8 text-black/55">
                Need the right face for your campaign? Chitrokotha connects
                brands and production teams with models for commercial,
                fashion and creative projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="#quote"
                  className="rounded-full bg-black px-6 py-3 text-sm text-white"
                >
                  Book a Model
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-black/20 px-6 py-3 text-sm"
                >
                  Casting Inquiry
                </a>

              </div>

            </div>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {["01", "02", "03"].map((number) => (
              <div
                key={number}
                className="group relative aspect-[4/5] overflow-hidden bg-black/10"
              >

                <div className="absolute inset-0 flex items-end p-7 transition duration-700 group-hover:scale-105">

                  <div>

                    <p className="text-xs uppercase tracking-widest text-black/40">
                      Model Portfolio
                    </p>

                    <h3 className="mt-2 text-2xl font-medium">
                      Model {number}
                    </h3>

                  </div>

                </div>

              </div>
            ))}

          </div>

          <div className="mt-8 flex flex-col justify-between gap-5 border border-black/10 bg-white p-8 md:flex-row md:items-center">

            <div>

              <h3 className="text-2xl font-medium">
                Want to join our model network?
              </h3>

              <p className="mt-2 text-sm text-black/50">
                Submit your profile for future paid and collaboration projects.
              </p>

            </div>

            <a
              href="#contact"
              className="w-fit rounded-full bg-black px-6 py-3 text-sm text-white"
            >
              Become a Model →
            </a>

          </div>

        </div>
      </section>


      {/* ================= CLIENTS ================= */}

      <section id="clients" className="border-b border-black/10 py-24">

        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-10">

          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            Selected Clients
          </p>

          <h2 className="mt-4 text-3xl font-medium">
            Brands & Businesses
          </h2>

          <div className="mt-14 grid grid-cols-2 border-l border-t border-black/10 md:grid-cols-4">

            {[
              "BRAND ONE",
              "BRAND TWO",
              "BRAND THREE",
              "BRAND FOUR",
              "BRAND FIVE",
              "BRAND SIX",
              "BRAND SEVEN",
              "BRAND EIGHT",
            ].map((brand) => (
              <div
                key={brand}
                className="border-b border-r border-black/10 px-5 py-10 text-xs tracking-[0.2em] text-black/30"
              >
                {brand}
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= TESTIMONIAL ================= */}

      <section id="testimonials" className="bg-black py-28 text-white">

        <div className="mx-auto max-w-[1200px] px-6 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Client Experience
          </p>

          <blockquote className="mt-10 text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            “Good visual content is not just about looking beautiful.
            It is about making people remember the brand.”
          </blockquote>

          <div className="mt-10 text-sm text-white/40">
            Client Name · Company
          </div>

        </div>
      </section>


      {/* ================= FAQ ================= */}

      <section className="border-b border-black/10 py-28">

        <div className="mx-auto max-w-5xl px-6">

          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            Frequently Asked
          </p>

          <h2 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
            FAQ
          </h2>

          <div className="mt-14 border-y border-black/10">

            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group border-b border-black/10 py-7 last:border-0"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-lg font-medium md:text-xl">

                  {question}

                  <span className="text-2xl font-light transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="mt-5 max-w-3xl leading-8 text-black/50">
                  {answer}
                </p>

              </details>
            ))}

          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="border-b border-black/10 py-28">

        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-10">

          <div className="lg:col-span-4">

            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              About Chitrokotha
            </p>

          </div>

          <div className="lg:col-span-8">

            <h2 className="text-4xl font-medium leading-tight md:text-6xl">
              A creative studio focused on turning ideas into meaningful
              visual experiences.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/50">
              Chitrokotha Studio works with brands, businesses and creative
              teams to create photography, video and visual content that
              communicates clearly and leaves an impression.
            </p>

          </div>

        </div>
      </section>


      {/* ================= QUOTE ================= */}

      <section id="quote" className="relative overflow-hidden bg-[#e1e1dc] py-32">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-black/10 animate-[spin_25s_linear_infinite]" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            Start a Project
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
            Have an idea?
            <br />
            Let&apos;s make it real.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-black/50">
            Tell us about your project, campaign or creative idea and let us
            help you bring it to life.
          </p>

          <a
            href="mailto:hello@chitrokotha.com"
            className="mt-10 inline-flex items-center gap-5 rounded-full bg-black px-7 py-4 text-sm text-white transition hover:scale-105"
          >
            Request a Quote
            <span>→</span>
          </a>

        </div>
      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="bg-black py-24 text-white">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-16 md:grid-cols-2">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Contact
              </p>

              <h2 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
                Let&apos;s talk.
              </h2>

            </div>

            <div className="space-y-10">

              <div>

                <p className="text-xs uppercase tracking-widest text-white/30">
                  Email
                </p>

                <a
                  href="mailto:hello@chitrokotha.com"
                  className="mt-3 inline-block text-xl underline underline-offset-8"
                >
                  hello@chitrokotha.com
                </a>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-white/30">
                  Location
                </p>

                <p className="mt-3 text-xl">
                  Dhaka, Bangladesh
                </p>

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-white/30">
                  Social
                </p>

                <div className="mt-4 flex gap-5 text-sm text-white/60">

                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>

                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>

                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-black py-10 text-white">

        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 lg:px-10">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <div className="text-2xl font-semibold tracking-[0.18em]">
                CHITROKOTHA
              </div>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/30">
                Creative Production Studio
              </p>

            </div>

            <div className="flex flex-wrap gap-6 text-xs text-white/40">

              <a href="#home" className="hover:text-white">
                Home
              </a>

              <a href="#work" className="hover:text-white">
                Work
              </a>

              <a href="#services" className="hover:text-white">
                Services
              </a>

              <a href="#packages" className="hover:text-white">
                Packages
              </a>

              <a href="#contact" className="hover:text-white">
                Contact
              </a>

            </div>

          </div>

          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/25 md:flex-row">

            <p>
              © 2026 Chitrokotha Studio. All rights reserved.
            </p>

            <p>
              Dhaka · Bangladesh
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}