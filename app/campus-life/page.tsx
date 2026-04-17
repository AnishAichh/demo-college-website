export default function CampusLifePage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="section__title">Campus Life</p>
          <p className="section__subtitle">
            A supportive environment with student clubs, competitions, and
            cultural events that enrich every day on campus.
          </p>
          <div className="cards-grid">
            <article className="card">
              <img src="/images/campus-1.svg" alt="Student event" className="card__image" />
              <div className="card__body">
                <h3 className="card__title">Student communities</h3>
                <p className="card__copy">
                  Technical societies, sports teams, and cultural groups building
                  leadership and teamwork.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/campus-2.svg" alt="Learning spaces" className="card__image" />
              <div className="card__body">
                <h3 className="card__title">Modern facilities</h3>
                <p className="card__copy">
                  Spacious classrooms, innovation labs, and collaborative study
                  areas for every student.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/campus-3.svg" alt="Research lab" className="card__image" />
              <div className="card__body">
                <h3 className="card__title">Events and workshops</h3>
                <p className="card__copy">
                  Hackathons, speaker sessions, and placement readiness bootcamps
                  throughout the year.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
