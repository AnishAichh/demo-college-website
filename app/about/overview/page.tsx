export default function OverviewPage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <h1 className="hero__title">Overview of HSOE</h1>
            <p className="hero__text">
              Discover the rich history, academic excellence, and innovative spirit that defines HSOE Hohai School of Engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div>
              <h2>Academic Excellence</h2>
              <p>HSOE offers a comprehensive range of undergraduate and postgraduate programs in engineering disciplines,
              designed to meet the evolving needs of industry and society. Our curriculum integrates theoretical knowledge
              with practical applications, preparing students for successful careers in engineering.</p>
            </div>
            <div>
              <h2>Research & Innovation</h2>
              <p>Our research centers focus on cutting-edge technologies in hydraulics, sustainable engineering,
              renewable energy, and advanced materials. We collaborate with industry partners and international
              institutions to address global challenges.</p>
            </div>
            <div>
              <h2>Campus Facilities</h2>
              <p>State-of-the-art laboratories, modern classrooms, well-equipped workshops, and recreational facilities
              provide an ideal environment for learning, research, and personal development.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
