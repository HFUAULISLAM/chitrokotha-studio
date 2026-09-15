"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    category: "Automotive",
    title: "Motion that makes machines feel alive.",
    description:
      "Cinematic automotive films built around movement, atmosphere, detail and character.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    category: "Brand Film",
    title: "Stories people remember.",
    description:
      "Visual storytelling designed to give brands a stronger identity and a human point of view.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    category: "Portrait / Fashion",
    title: "People are the story.",
    description:
      "Editorial portraits, model films and social content with a natural cinematic language.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85",
  },
];

const services = [
  {
    no: "01",
    title: "Film & Video",
    text: "Commercials, brand films, social campaigns, reels, documentaries and cinematic promotional content.",
  },
  {
    no: "02",
    title: "Photography",
    text: "Automotive, products, portraits, lifestyle, fashion and campaign photography.",
  },
  {
    no: "03",
    title: "Creative Direction",
    text: "From the first idea to the final frame — concept, visual direction, storytelling and execution.",
  },
  {
    no: "04",
    title: "Post Production",
    text: "Editing, color, sound, motion graphics and final delivery built around the story.",
  },
  {
    no: "05",
    title: "Social Content",
    text: "Short-form content designed for Instagram, Facebook, TikTok and modern brand communication.",
  },
  {
    no: "06",
    title: "Design",
    text: "Campaign banners, promotional graphics and visual assets that keep the brand language consistent.",
  },
];

const process = [
  {
    no: "01",
    title: "Discover",
    text: "We understand the brand, product, audience and the reason behind the project.",
  },
  {
    no: "02",
    title: "Define",
    text: "The idea becomes a clear visual direction, treatment and production plan.",
  },
  {
    no: "03",
    title: "Create",
    text: "Production begins — camera, light, people, movement and details come together.",
  },
  {
    no: "04",
    title: "Refine",
    text: "Editing, sound, color and design shape the final story.",
  },
  {
    no: "05",
    title: "Deliver",
    text: "The final content is prepared for the exact platforms and purposes it needs to serve.",
  },
];

const testimonials = [
  {
    quote:
      "Good visuals don't just show a product. They change the way people feel about it.",
    name: "Your Client",
    role: "Brand / Business",
  },
  {
    quote:
      "The goal is not to make something look expensive. The goal is to make it feel intentional.",
    name: "Your Client",
    role: "Creative Project",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="site">
      {/* NAVIGATION */}
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#top" className="brand">
          <span className="brand-mark">C</span>
          <span className="brand-name">CHITROKOTHA</span>
        </a>

        <nav className="desktop-nav">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-contact">
            Start a project
          </a>
        </nav>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span />
          <span />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          <span className="menu-label">Navigation</span>

          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Start a project
          </a>

          <div className="mobile-menu-bottom">
            <span>Dhaka, Bangladesh</span>
            <span>Chitrokotha Studio</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-video">
          <div className="hero-overlay" />
          <div className="hero-grain" />
        </div>

        <div className="hero-content">
          <div className="hero-kicker">
            <span />
            Visual storytelling studio
          </div>

          <h1>
            Stories
            <br />
            <em>in every frame.</em>
          </h1>

          <p className="hero-description">
            Chitrokotha is an independent visual studio creating films,
            photography and visual experiences for brands, people and ideas.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button button-light">
              Explore our work
              <span>↗</span>
            </a>

            <a href="#contact" className="text-link">
              Start a conversation
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>Dhaka — Bangladesh</span>
          <span>Scroll to explore</span>
          <span>© {new Date().getFullYear()} Chitrokotha</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro section">
        <div className="container">
          <div className="section-label">
            <span>01</span>
            <span>What we believe</span>
          </div>

          <div className="intro-grid">
            <h2>
              Not just content.
              <br />
              <span>Visual stories.</span>
            </h2>

            <div className="intro-copy">
              <p>
                Every brand has something worth saying. Our job is to find the
                visual language that makes people stop, look and remember.
              </p>

              <p>
                From a single frame to a complete campaign, Chitrokotha brings
                cinematography, photography, editing and design together under
                one visual direction.
              </p>

              <a href="#about" className="arrow-link">
                More about Chitrokotha <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="work section-dark">
        <div className="container">
          <div className="section-top">
            <div className="section-label light">
              <span>02</span>
              <span>Selected stories</span>
            </div>

            <p className="section-side-text">
              A selection of films, images and visual stories.
            </p>
          </div>

          <div className="projects">
            {projects.map((project, index) => (
              <article
                className={`project ${
                  activeProject === index ? "project-active" : ""
                }`}
                key={project.number}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />

                <div className="project-shade" />

                <div className="project-info">
                  <div className="project-number">{project.number}</div>

                  <div>
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <button className="project-link">
                      View story <span>↗</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="work-footer">
            <span>More stories coming soon.</span>
            <a href="#contact">Have a project? Let&apos;s talk ↗</a>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto section">
        <div className="container">
          <div className="manifesto-mark">“</div>

          <h2>
            We believe the best visual stories are not the loudest.
            <span>They are the ones people remember.</span>
          </h2>

          <div className="manifesto-bottom">
            <span>Chitrokotha Studio</span>
            <span>Film / Photo / Design</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-top">
            <div className="section-label">
              <span>03</span>
              <span>What we do</span>
            </div>

            <h2 className="section-title">
              One studio.
              <br />
              <em>Many ways to tell a story.</em>
            </h2>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <div className="service-row" key={service.no}>
                <span className="service-number">{service.no}</span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <span className="service-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEHIND THE FRAME */}
      <section className="behind section-dark">
        <div className="behind-image">
          <div className="behind-overlay" />
        </div>

        <div className="container behind-content">
          <div className="section-label light">
            <span>04</span>
            <span>Behind the frame</span>
          </div>

          <div className="behind-copy">
            <span className="small-eyebrow">The process behind the picture</span>

            <h2>
              The frame is only
              <br />
              <em>the beginning.</em>
            </h2>

            <p>
              A great image doesn't happen by accident. It starts with an idea,
              grows through preparation and becomes real through people,
              light, movement, timing and attention to detail.
            </p>

            <a href="#process" className="button button-outline-light">
              How we work <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* BRAND NEEDS */}
      <section className="brand-needs section">
        <div className="container">
          <div className="section-label">
            <span>05</span>
            <span>For brands</span>
          </div>

          <div className="brand-needs-heading">
            <h2>
              Whatever your brand needs to
              <br />
              <em>be seen differently.</em>
            </h2>
          </div>

          <div className="needs-grid">
            <div className="need-large">
              <span>01</span>
              <h3>Launching something new?</h3>
              <p>
                Build a visual campaign around your product, service or
                announcement.
              </p>
            </div>

            <div className="need">
              <span>02</span>
              <h3>Need social content?</h3>
              <p>
                Reels, short films, photography and campaign assets designed
                for modern platforms.
              </p>
            </div>

            <div className="need">
              <span>03</span>
              <h3>Need a stronger identity?</h3>
              <p>
                Create a consistent visual language across film, photography
                and design.
              </p>
            </div>

            <div className="need">
              <span>04</span>
              <h3>Have an idea?</h3>
              <p>
                Bring us the idea. We can help turn it into something people
                can see and feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process section-dark">
        <div className="container">
          <div className="section-top">
            <div className="section-label light">
              <span>06</span>
              <span>Our process</span>
            </div>

            <p className="section-side-text">
              Simple enough to understand.
              <br />
              Detailed enough to work.
            </p>
          </div>

          <div className="process-list">
            {process.map((item) => (
              <div className="process-row" key={item.no}>
                <span>{item.no}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASTING */}
      <section className="casting section">
        <div className="container">
          <div className="casting-grid">
            <div>
              <div className="section-label">
                <span>07</span>
                <span>Casting</span>
              </div>

              <h2>
                People make
                <br />
                <em>the picture.</em>
              </h2>
            </div>

            <div className="casting-copy">
              <p>
                Chitrokotha is building a growing collection of models,
                creators and people for upcoming visual projects.
              </p>

              <p>
                If you are a model, creator or performer and want to work with
                us, you can submit your profile through our casting form.
              </p>

              <a
                href="#contact"
                className="button button-dark"
              >
                Join our model collection <span>↗</span>
              </a>
            </div>
          </div>

          <div className="casting-strip">
            <span>Models</span>
            <span>Creators</span>
            <span>Actors</span>
            <span>Artists</span>
            <span>Collaborators</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial section-dark">
        <div className="container">
          <div className="section-label light">
            <span>08</span>
            <span>Words from the work</span>
          </div>

          <div className="testimonial-main">
            <div className="testimonial-quote">“</div>

            <div>
              <blockquote>
                {testimonials[activeProject % testimonials.length].quote}
              </blockquote>

              <div className="testimonial-author">
                <strong>
                  {testimonials[activeProject % testimonials.length].name}
                </strong>
                <span>
                  {testimonials[activeProject % testimonials.length].role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about section">
        <div className="container">
          <div className="section-label">
            <span>09</span>
            <span>About</span>
          </div>

          <div className="about-grid">
            <h2>
              A small studio
              <br />
              with a <em>big frame.</em>
            </h2>

            <div className="about-text">
              <p>
                Chitrokotha Studio is an independent creative studio based in
                Dhaka, Bangladesh.
              </p>

              <p>
                We work across cinematography, photography, editing,
                animation, design and visual storytelling — creating work for
                brands, businesses and people who want to communicate with
                intention.
              </p>

              <p>
                We keep the team flexible, the process collaborative and the
                visual language honest.
              </p>

              <div className="about-details">
                <div>
                  <span>Based in</span>
                  <strong>Dhaka, Bangladesh</strong>
                </div>

                <div>
                  <span>Focus</span>
                  <strong>Film / Photo / Design</strong>
                </div>

                <div>
                  <span>Available for</span>
                  <strong>Projects / Collaborations</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="contact section-dark">
        <div className="contact-bg" />

        <div className="container contact-content">
          <div className="section-label light">
            <span>10</span>
            <span>Start something</span>
          </div>

          <div className="contact-heading">
            <span>Have an idea?</span>

            <h2>
              Let&apos;s make
              <br />
              <em>it visible.</em>
            </h2>
          </div>

          <div className="contact-bottom">
            <p>
              Tell us what you are building, launching or imagining. We&apos;ll
              take it from there.
            </p>

            <a href="mailto:hello@chitrokotha.com" className="contact-email">
              hello@chitrokotha.com
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-logo">CHITROKOTHA</div>
              <p>Visual storytelling studio.</p>
            </div>

            <div className="footer-links">
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-links">
              <a href="#">Instagram ↗</a>
              <a href="#">Facebook ↗</a>
              <a href="#">Behance ↗</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Chitrokotha Studio</span>
            <span>Dhaka, Bangladesh</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}