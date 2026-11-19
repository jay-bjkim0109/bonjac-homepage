import type { Metadata } from "next";
import { asset } from "../asset";
import { CopyText } from "../copy-text";
import { Footer, Header, News, SelvaticoTitle, Stores, Tech } from "../site";

// Direction B (이미지 매거진) from the design canvas; a comparison page, not indexed
export const metadata: Metadata = {
  robots: { index: false },
};

const nav = [
  { href: "#about", label: "About" },
  { href: "#selvatico", label: "Selvatico" },
  { href: "#tech", label: "Tech" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

const facts = [
  {
    label: "Brand",
    value: "2022",
    body: "한국에서 프래그런스 브랜드 Selvatico를 시작했습니다.",
  },
  {
    label: "Origin",
    value: "Grasse, France",
    body: "모든 향은 향수의 고향 프랑스 그라스에서 만듭니다.",
  },
  {
    label: "Technology",
    value: "2026.10.17",
    body: "Accord Seoul 2026에서 IT 서비스로 첫걸음을 뗐습니다.",
  },
];

const tiles = [
  {
    label: "Collection",
    title: "향수부터 바디 케어까지",
    body: "오 드 퍼퓸 7가지 향과 핸드·바디 워시, 크림, 바디 미스트, 핸드 솔루션.",
    image: asset("/images/selvatico-collection.jpg"),
    alt: "향수, 핸드 앤 바디 워시, 크림이 나란히 놓인 Selvatico 제품 컬렉션",
  },
  {
    label: "Packaging",
    title: "책을 닮은 패키지",
    body: "향의 이야기를 담는 또 하나의 챕터로, 책의 구조와 타이포그래피를 입혔습니다.",
    image: asset("/images/selvatico-packaging.jpg"),
    alt: "책처럼 쌓아 올린 Selvatico 패키지 상자",
  },
];

export default function DirectionB() {
  return (
    <>
      <Header nav={nav} />

      <main>
        <section>
          <img
            draggable={false}
            src={asset("/images/selvatico-perfume.jpg")}
            alt="빛을 받아 초록 그림자를 드리운 Selvatico 오 드 퍼퓸 병"
            className="photo photo-hero"
          />
          <div className="band band-first">
            <div className="container split split-end split-hero">
              <div className="stack gap-16">
                <p className="eyebrow">Beauty &amp; Technology</p>
                <h1 className="headline headline-b">
                  향에서 시작해, 기술로 확장합니다.
                </h1>
              </div>
              <div className="stack start">
                <p className="copy measure-lead">
                  본작은 프래그런스 브랜드 Selvatico를 운영하며,
                  <br />
                  향과 기술을 잇는 뷰티테크 기업으로 나아가고 있습니다.
                </p>
                <div className="button-row">
                  <a href="#selvatico" className="button-gray">
                    브랜드 보기
                  </a>
                  <a href="#tech" className="button-gray">
                    뷰티테크 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="band">
          <div className="container stack">
            <h2 className="band-title">About</h2>
            <div className="stack gap-16">
              <p className="card-title measure">
                주식회사 본작은 프래그런스 브랜드 Selvatico로 시작했습니다.
                <br />
                브랜드를 만들고 운영하며 쌓은 향에 대한 이해를 바탕으로, 뷰티와
                기술이 만나는 뷰티테크 기업으로의 전환을 준비하고 있습니다.
              </p>
              <p className="copy measure">
                그 첫걸음으로, 2026년 10월 서울 성수에서 열린 향 축제{" "}
                <strong>Accord Seoul 2026</strong>에 참여해 디지털 기술과 향
                문화를 연결하는 새로운 경험을 선보였습니다.
              </p>
            </div>
            <div className="grid grid-facts">
              {facts.map((fact) => (
                <div key={fact.label} className="panel stack gap-8">
                  <p className="card-label">{fact.label}</p>
                  <p className="card-title">{fact.value}</p>
                  <p className="copy">{fact.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="selvatico" className="band">
          <div className="container stack">
            <div className="band-head stack gap-8">
              <p className="eyebrow">Fragrance Brand</p>
              <SelvaticoTitle />
              <p className="copy measure">
                Perfume is literature in the air. 셀바티코는 향수를 새로운
                문학으로 정의하며, 향기를 읽는 새로운 경험을 만듭니다.
              </p>
            </div>

            <div className="split split-center">
              <img
                draggable={false}
                src={asset("/images/selvatico-reading.jpg")}
                alt="테이블에 앉아 책을 읽는 여성의 뒷모습"
                loading="lazy"
                className="photo ratio-4-3"
              />
              <div className="stack gap-16">
                <p className="card-label">Brand Story</p>
                <h3 className="card-title">
                  Read Your Scent, Inhale Your Moment.
                </h3>
                <p className="copy">
                  프랑스 그라스와 서울 사이를 오가며, 피어나는 이야기를 향기로
                  옮깁니다. 하나의 향기는 하나의 장면에서 출발하고, 여러 향기가
                  나란히 놓이면 책 한 권처럼 하나의 세계관을 완성합니다.
                </p>
                <p className="copy">
                  ‘야생의’라는 뜻의 라틴어에서 온 이름에는, 있는 그대로의 모습을
                  존중한다는 브랜드 철학을 담았습니다.
                </p>
              </div>
            </div>

            <div className="split split-center split-reverse">
              <div className="stack gap-8">
                <p className="card-label">Our Scents</p>
                <h3 className="card-title">그라스에서 만든 향</h3>
                <p className="copy">
                  1850년부터 역사를 이어온 향료 하우스와 함께 원료를 고릅니다.
                </p>
              </div>
              <img
                draggable={false}
                src={asset("/images/grasse.jpg")}
                alt="언덕 위에 자리한 프랑스 그라스의 마을 전경"
                loading="lazy"
                className="photo ratio-4-3"
              />
            </div>

            <div className="grid">
              {tiles.map((tile) => (
                <article key={tile.label} className="stack gap-16">
                  <img
                    draggable={false}
                    src={tile.image}
                    alt={tile.alt}
                    loading="lazy"
                    className="photo ratio-4-3"
                  />
                  <div className="stack gap-8">
                    <p className="card-label">{tile.label}</p>
                    <h3 className="card-title">{tile.title}</h3>
                    <p className="copy">{tile.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <Stores />
          </div>
        </section>

        <Tech />

        <News />

        <section id="contact" className="band band-compact">
          <div className="container split split-aside">
            <h2 className="band-title">Contact</h2>
            <div className="contact-row">
              <CopyText value="bonjac@bonjac.kr" />
              <span className="contact-dot" aria-hidden="true">
                ·
              </span>
              <CopyText value="02-3442-7722" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
