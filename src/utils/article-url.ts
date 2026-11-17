export function getArticleUrl(id: string, url?: string): string {
  const path = (url ?? `articles/${id}`).replace(/^\/+|\/+$/g, "");
  return `/${path}/`;
}

export function getArticleRouteId(id: string, url?: string): string {
  return getArticleUrl(id, url)
    .replace(/^\/articles\//, "")
    .replace(/\/$/, "");
}
