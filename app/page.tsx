import { asset } from "./asset";

// No landing page of its own yet: the root sends visitors to direction B.
// A static export has no server redirects, so this is a meta refresh with a link as fallback.
const target = asset("/b/");

export default function Home() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <main className="band band-first">
        <div className="container">
          <a href={target}>본작 홈페이지로 이동</a>
        </div>
      </main>
    </>
  );
}
