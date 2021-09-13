export default function getRelativeUrl(url: URL): string {
  const { pathname, search, hash } = url
  return pathname + search + hash
}
