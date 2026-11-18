const services = [
  {
    title: "Service one",
    body: "A short description of what you offer and who it is for.",
  },
  {
    title: "Service two",
    body: "A short description of what you offer and who it is for.",
  },
  {
    title: "Service three",
    body: "A short description of what you offer and who it is for.",
  },
];

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="logo">
            Bonjac
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Your company tagline goes here.</h1>
            <p className="lead">
              One or two sentences that explain what Bonjac does and why it
              matters to your customers.
            </p>
            <a href="#contact" className="button">
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About</h2>
            <p>
              Introduce the company here: when it was founded, what it
              believes in, and what makes it different.
            </p>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="container">
            <h2>Services</h2>
            <div className="grid">
              {services.map((service) => (
                <article key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <p>
              Email us at{" "}
              <a href="mailto:contact@example.com">contact@example.com</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Bonjac. All rights reserved.
        </div>
      </footer>
    </>
  );
}
