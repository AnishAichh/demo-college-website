const departments = [
  "Computer Science & Engineering",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Information Science",
  "Artificial Intelligence",
];

export default function DepartmentsPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="section__title">Departments</p>
          <p className="section__subtitle">
            Explore our academic departments, each with dedicated faculty,
            labs, and industry-approved syllabi.
          </p>
          <div className="cards-grid">
            {departments.map((department) => (
              <article key={department} className="card">
                <div className="card__body">
                  <h3 className="card__title">{department}</h3>
                  <p className="card__copy">
                    A vibrant curriculum, project-based learning and strong
                    placement preparation.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
