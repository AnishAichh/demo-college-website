export default function PresidentMessagePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <h1 className="hero__title">President's Message</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="message-content">
            <img src="/images/president.jpg" alt="President" className="message__image" />
            <div>
              <h2>Dr. John Smith</h2>
              <p className="message__role">President, HSOE Hohai School of Engineering</p>
              <p>Dear Students, Faculty, and Stakeholders,</p>
              <p>At HSOE, we are committed to nurturing the next generation of engineering leaders who will shape
              the future through innovation and excellence. Our focus on quality education, research, and industry
              collaboration ensures that our graduates are well-prepared to meet global challenges.</p>
              <p>With state-of-the-art facilities and a dedicated faculty, HSOE continues to uphold the highest
              standards in engineering education. We invite you to join our community of innovators and achievers.</p>
              <p>Best regards,<br />Dr. John Smith</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
