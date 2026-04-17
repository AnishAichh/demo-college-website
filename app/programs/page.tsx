const programDetails = [
  {
    title: "Bachelor of Technology (B.Tech)",
    subtitle: "Undergraduate engineering programs",
    items: ["Computer Science & Engineering", "Electronics & Communication", "Mechanical Engineering"],
  },
  {
    title: "Master of Technology (M.Tech)",
    subtitle: "Postgraduate specialization options",
    items: ["Data Science & AI", "Power Systems", "Automobile Engineering"],
  },
  {
    title: "Doctoral research",
    subtitle: "Research-led doctoral and M.Sc. programs",
    items: ["AI & Robotics", "Sustainable Technology", "Material Science"],
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="section__title">Programs</p>
          <p className="section__subtitle">
            Explore our engineering programs designed with academic rigor and
            practical experience.
          </p>
          <div className="cards-grid">
            {programDetails.map((program) => (
              <article key={program.title} className="card">
                <div className="card__body">
                  <p className="card__eyebrow">{program.subtitle}</p>
                  <h3 className="card__title">{program.title}</h3>
                  <ul style={{ margin: 0, paddingLeft: "20px", color: "#4b6288" }}>
                    {program.items.map((item) => (
                      <li key={item} style={{ marginBottom: "10px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
