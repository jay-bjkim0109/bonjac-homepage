// Shared parts of the /b and /c landing-page directions (design canvas TypeB, TypeC)

export function Header({ nav }: { nav: { href: string; label: string }[] }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo" draggable={false}>
          BONJAC
        </a>
        <nav className="nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href} draggable={false}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
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
  );
}

// Section title that links to the brand store (DESIGN.md, Title link)
export function SelvaticoTitle() {
  return (
    <h2 className="band-title">
      <a
        href="https://selvatico.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="title-link"
      >
        Selvatico
      </a>
    </h2>
  );
}

const stores = [
  "성수동 LCDC 서울 (팝업)",
  "무신사 뷰티 성수 메가스토어",
  "무신사 뷰티 홍대 플래그십 스토어",
  "현대백화점 킨텍스점",
  "커넥트 현대 청주",
  "아이파크몰 용산점",
];

const onlineStores = [
  { name: "셀바티코 공식몰", href: "https://selvatico.co/" },
  { name: "네이버 스마트스토어", href: "https://smartstore.naver.com/selvatico-official" },
  { name: "무신사 뷰티", href: "https://www.musinsa.com/brand/selvatico?gf=A" },
  { name: "신세계 브이", href: "https://www.shinsegaev.com/dispctg/initBrandCtg.siv?disp_ctg_no=2607247333" },
  { name: "더블유컨셉", href: "https://display.wconcept.co.kr/rn/brand/110650" },
  { name: "더현대하이", href: "https://hi.thehyundai.com/brand/506746?target=brand&targetCode=136659" },
  { name: "카카오톡선물하기", href: "https://gift.kakao.com/brand/15609" },
];

export function Stores() {
  return (
    <div className="split">
      <img
        src="/images/selvatico-popup.jpg"
        alt="책장과 꽃으로 꾸민 Selvatico 팝업 스토어"
        loading="lazy"
        className="photo ratio-16-9"
      />
      <div className="split split-lists">
        <a
          href="https://selvatico.co/brand/store.html?board_no=3001"
          target="_blank"
          rel="noopener noreferrer"
          className="block-link"
        >
          <p className="rule-list-head">
            <span className="card-label">Stores</span>
          </p>
          <ul className="rule-list">
            {stores.map((store) => (
              <li key={store}>{store}</li>
            ))}
          </ul>
        </a>
        <div>
          <p className="rule-list-head">
            <span className="card-label">Online</span>
          </p>
          <ul className="rule-list rule-list-links">
            {onlineStores.map((store) => (
              <li key={store.name}>
                <a href={store.href} target="_blank" rel="noopener noreferrer">
                  {store.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const services: {
  label: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  href?: string;
}[] = [
  {
    label: "Support Event",
    title: "ACCORD SEOUL",
    body: "조향사들의 향 축제 Accord Seoul에서 부스 맵과 세미나 안내 등 행사 서비스를 지원했습니다.",
    image: "/images/accord-seoul.jpg",
    alt: "방문객으로 가득 찬 Accord Seoul 2026 행사장",
    href: "https://obbu.app/accordseoul-2026",
  },
  {
    label: "AI SCENT FINDER",
    title: "AI Scent Finder",
    body: "원하는 향을 찾는 추천 서비스입니다. 프로파일링 질문에 답하면 어울리는 제품을 제안하고, 매장에서의 혜택과 고객 관리로 이어집니다.",
    image: "/images/scent-finder.jpg",
    alt: "Selvatico AI Scent Finder 시작 화면",
    href: "https://scentid.store/selvatico/ciie-2026/start",
  },
];

export function Tech() {
  return (
    <section id="tech" className="band">
      <div className="container stack">
        <div className="band-head stack gap-8">
          <p className="eyebrow">IT Service</p>
          <h2 className="band-title">
            Beyond Fragrance, Through Technology
          </h2>
          <p className="copy measure">
            브랜드를 운영하며 쌓은 향에 대한 이해를 서비스로 옮깁니다. 향을
            고르는 순간과 향을 만나는 현장을 기술로 잇습니다.
          </p>
        </div>
        <div className="grid">
          {services.map((service) => {
            const content = (
              <>
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="photo ratio-16-10"
                />
                <div className="media-card-body">
                  <p className="card-label">{service.label}</p>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="copy">{service.body}</p>
                </div>
              </>
            );
            // A service with a page of its own is one link across the whole card
            return service.href ? (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="media-card"
              >
                {content}
              </a>
            ) : (
              <article key={service.title} className="media-card">
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const news = [
  {
    date: "2026.11.13",
    title: "로레알, 국내 스타트업 3곳과 中 수입박람회 참가…AI·바이오 기술 선봬",
    source: "지디넷코리아",
    href: "https://zdnet.co.kr/view/?no=20261113184711",
  },
  {
    date: "2026.09.28",
    title: "두 개의 세계, 하나의 시선으로 향의 새로운 경험을 선사하다, 본작",
    source: "경제인뉴스",
    href: "https://www.newseconomy.kr/news/articleView.html?idxno=21067",
  },
  {
    date: "2026.06.19",
    title:
      "[VivaTech 2026] Beauty-Tech Innovator BONJAC Inc. Showcases ‘Scent ID’ AI Curation Platform",
    source: "YouTube",
    href: "https://www.youtube.com/watch?v=V0nDhHGN5aM",
  },
  {
    date: "2026.06.11",
    title: "본작, ‘2026 로레알 빅뱅’ 선정… 로레알코리아와 AI 향 큐레이션 검증",
    source: "플래텀",
    href: "https://platum.kr/archives/288675",
  },
  {
    date: "2023.12.15",
    title: "배형진 본작 대표 “세계 최고를 꿈꾸며 참고, 설득하고, 기다렸다.”",
    source: "플래텀",
    href: "https://platum.kr/archives/217898",
  },
];

export function News() {
  return (
    <section id="news" className="band">
      <div className="container stack">
        <h2 className="band-title">News</h2>
        <div className="grid">
          {news.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel stack gap-8"
            >
              <span className="date">{item.date}</span>
              <span className="item-title">{item.title}</span>
              <span className="meta">{item.source} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
