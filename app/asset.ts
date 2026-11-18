// Path of a file in public/. GitHub Pages serves the site under /<repo>, so the base path goes in front
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
