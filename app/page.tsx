const businesses = [
  {
    label: "Fragrance Brand",
    title: "Selvatico",
    body: "프랑스의 장면에서 영감을 얻은 향을 오 드 퍼퓸, 핸드·바디 케어로 선보이는 프래그런스 브랜드입니다.",
    href: "https://selvatico.co/",
    linkText: "selvatico.co",
  },
  {
    label: "IT Service",
    title: "obbu",
    body: "본작의 IT 서비스입니다. 독립 조향사들의 향 축제 Accord Seoul 2026에서 부스 맵과 세미나 안내 등 행사 서비스를 지원했습니다.",
    href: "https://obbu.app/",
    linkText: "obbu.app",
  },
];

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="logo">
            BONJAC
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#business">Business</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Beauty-Tech Company</p>
            <h1>향에서 시작해, 기술로 확장합니다.</h1>
            <p className="lead">
              본작은 프래그런스 브랜드 Selvatico를 운영하며, 향과 기술을 잇는
              뷰티테크 기업으로 나아가고 있습니다.
            </p>
            <a href="#business" className="button">
              사업 소개 보기
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About</h2>
            <p>
              주식회사 본작은 프래그런스 브랜드 Selvatico로 시작했습니다.
              브랜드를 만들고 운영하며 쌓은 향에 대한 이해를 바탕으로, 뷰티와
              기술이 만나는 뷰티테크 기업으로의 전환을 준비하고 있습니다.
            </p>
            <p>
              그 첫걸음으로 2026년 10월 서울 성수에서 열린 향 축제 Accord
              Seoul 2026에 IT 서비스 obbu로 함께했습니다.
            </p>
          </div>
        </section>

        <section id="business" className="section">
          <div className="container">
            <h2>Business</h2>
            <div className="grid">
              {businesses.map((business) => (
                <article key={business.title} className="card">
                  <p className="card-label">{business.label}</p>
                  <h3>{business.title}</h3>
                  <p>{business.body}</p>
                  <a
                    href={business.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    {business.linkText} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <p>
              제휴 및 문의는 이메일로 연락해 주세요.
              <br />
              <a href="mailto:bonjac@bonjac.kr">bonjac@bonjac.kr</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            주식회사 본작 · 대표 배형진 · 사업자등록번호 589-88-01121
            <br />
            서울 영등포구 국제금융로2길 17 7층 (여의도동) · 02-3442-7722
          </p>
          <p>© {new Date().getFullYear()} Bonjac Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
