import Link from "next/link";

const benefits = [
  "Flexible fee support",
  "Scholarship guidance",
  "Dedicated counseling team",
  "Industry-aligned curriculum",
];

export default function AdmissionsPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="section__title">Admissions</p>
          <p className="section__subtitle">
            Discover entry requirements, important dates, and guided support for
            our courses.
          </p>
          <div className="cards-grid">
            {benefits.map((item) => (
              <div key={item} className="card">
                <div className="card__body">
                  <h3 className="card__title">{item}</h3>
                  <p className="card__copy">
                    {item} is part of our admissions process to help students join
                    with confidence.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "32px" }}>
            <Link href="/admissions/undergraduate" className="hero__button" style={{ marginRight: "16px" }}>
              Undergraduate details
            </Link>
            <Link href="/admissions/postgraduate" className="secondary-button">
              Postgraduate details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
