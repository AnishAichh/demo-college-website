export default function PostgraduateAdmissionPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="section__title">Postgraduate Admissions</p>
          <p className="section__subtitle">
            Join our M.Tech and research programs to develop advanced technical
            expertise paired with industry interaction.
          </p>
          <div className="cards-grid">
            <article className="card">
              <div className="card__body">
                <h3 className="card__title">Program structure</h3>
                <p className="card__copy">
                  Specialization tracks in AI, power systems, automobile
                  engineering, and emerging technologies.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__body">
                <h3 className="card__title">Selection criteria</h3>
                <p className="card__copy">
                  Admission through entrance scores, academic background, and
                  interview performance.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__body">
                <h3 className="card__title">Research focus</h3>
                <p className="card__copy">
                  Access to labs, research centers, and faculty mentorship for
                  thesis-led innovation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
