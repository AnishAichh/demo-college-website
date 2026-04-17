export default function UndergraduateAdmissionPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="section__title">Undergraduate Admissions</p>
          <p className="section__subtitle">
            Apply to B.Tech programs with modern labs, mentorship, and academic
            support for every student.
          </p>
          <div className="cards-grid">
            <article className="card">
              <div className="card__body">
                <h3 className="card__title">Eligibility</h3>
                <p className="card__copy">
                  Completion of higher secondary education with required science
                  subjects and minimum qualifying marks.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__body">
                <h3 className="card__title">Application process</h3>
                <p className="card__copy">
                  Submit the online form, attach marks cards, and follow the
                  counseling schedule for your selected branch.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card__body">
                <h3 className="card__title">Scholarships</h3>
                <p className="card__copy">
                  Merit-based and needs-based scholarships help eligible students
                  reduce fees and support academic excellence.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
