import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "34px" }}>
          <div>
            <p className="section__title">About New Horizon College</p>
            <p className="section__subtitle">
              An autonomous college focused on practical engineering education,
              research, and a supportive student community.
            </p>
          </div>

          <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <h3>Our mission</h3>
              <p>
                To empower students with a strong academic foundation, technical
                skills, and real-world exposure for high-impact careers.
              </p>
            </div>
            <div>
              <h3>Why choose us</h3>
              <p>
                Accredited by top national bodies, the college blends classroom
                excellence with industrial collaborations and modern campus life.
              </p>
            </div>
          </div>

          <div className="cards-grid">
            <article className="card">
              <div className="card__body">
                <p className="card__eyebrow">Campus strength</p>
                <h3 className="card__title">Innovative labs</h3>
                <p className="card__copy">
                  State-of-the-art research and engineering labs supporting
                  AI, robotics, mechanical design, and electronics projects.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__body">
                <p className="card__eyebrow">Student success</p>
                <h3 className="card__title">Strong placements</h3>
                <p className="card__copy">
                  Dedicated placement support, industry mentoring, and internship
                  opportunities with top technology employers.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__body">
                <p className="card__eyebrow">Community</p>
                <h3 className="card__title">Campus life</h3>
                <p className="card__copy">
                  Clubs, cultural events, sports, and student-led innovation
                  activities make campus life engaging and memorable.
                </p>
              </div>
            </article>
          </div>

          <Link href="/contact" className="hero__button" style={{ width: "max-content" }}>
            Contact the college
          </Link>
        </div>
      </section>
    </main>
  );
}
