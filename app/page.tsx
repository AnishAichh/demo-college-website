import Link from "next/link";

const programs = [
  {
    title: "Electronics & Communication",
    description: "Hands-on labs, industry projects and strong placement support.",
    href: "/programs",
    image: "/images/program-1.svg",
  },
  {
    title: "Computer Science & AI",
    description: "Advanced computing, data science, and AI-focused training.",
    href: "/programs",
    image: "/images/program-2.svg",
  },
  {
    title: "Mechanical Engineering",
    description: "Practical design labs, automation, and mechanical systems.",
    href: "/programs",
    image: "/images/program-3.svg",
  },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "300+", label: "Faculty Members" },
  { value: "5500+", label: "Students Enrolled" },
  { value: "600+", label: "Patents Filed" },
  { value: "3835+", label: "Research Papers" },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <p className="hero__eyebrow">Engineering. Research. Campus Life.</p>
            <h1 className="hero__title">
              Build your future with a modern engineering college experience.
            </h1>
            <p className="hero__text">
              Discover flexible programs, industry-aligned training, and a
              supportive campus environment designed for academic success.
            </p>
            <div className="hero__actions">
              <Link href="/admissions" className="hero__button">
                Apply for admissions
              </Link>
              <Link href="/programs" className="secondary-button">
                View programs
              </Link>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero-card">
              <p className="hero-card__tag">Campus spotlight</p>
              <h2 className="hero-card__heading">Silver Jubilee year</h2>
              <p className="hero-card__detail">
                Join our celebration of 25 years of innovation, strong placements,
                and next-level student experiences in Bangalore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <p className="section__title">Programs built for career success</p>
            <p className="section__subtitle">
              Choose from undergraduate and postgraduate programs with project
              work, research labs, and mentorship that matches modern industry
              demand.
            </p>
          </div>

          <div className="cards-grid">
            {programs.map((program) => (
              <article key={program.title} className="card">
                <img
                  src={program.image}
                  alt={program.title}
                  className="card__image"
                />
                <div className="card__body">
                  <p className="card__eyebrow">Popular stream</p>
                  <h3 className="card__title">{program.title}</h3>
                  <p className="card__copy">{program.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="stat-card__value">{stat.value}</p>
                <p className="stat-card__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p className="section__title">Latest news & events</p>
            <p className="section__subtitle">
              Stay informed with campus highlights, workshops, competitions, and
              upcoming community driving events.
            </p>
          </div>
          <div className="cards-grid">
            <article className="card">
              <img src="/images/news-1.svg" alt="Campus festival" className="card__image" />
              <div className="card__body">
                <p className="card__eyebrow">Event highlight</p>
                <h3 className="card__title">Unity Run 2026</h3>
                <p className="card__copy">A campus marathon and community fitness drive that brings students and staff together.</p>
              </div>
            </article>
            <article className="card">
              <img src="/images/news-2.svg" alt="Innovation challenge" className="card__image" />
              <div className="card__body">
                <p className="card__eyebrow">Research award</p>
                <h3 className="card__title">AI Challenge winners</h3>
                <p className="card__copy">Student teams from Electronics and Computer Science won top honors in the national robotics hackathon.</p>
              </div>
            </article>
            <article className="card">
              <img src="/images/news-3.svg" alt="Conferences" className="card__image" />
              <div className="card__body">
                <p className="card__eyebrow">Campus story</p>
                <h3 className="card__title">Industry partner day</h3>
                <p className="card__copy">Corporate visits, live mentoring, and placement previews for our final-year students.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container cta-card">
          <div>
            <h2>Ready to start your admission journey?</h2>
            <p>
              Explore the programs, request course details, or connect with our
              admissions team to take the next step.
            </p>
            <Link href="/admissions" className="cta-card__button">
              Apply now
            </Link>
          </div>
          <img src="/images/campus-hero.svg" alt="Campus life" style={{ borderRadius: 24, width: "100%", minWidth: 0 }} />
        </div>
      </section>
    </main>
  );
}
