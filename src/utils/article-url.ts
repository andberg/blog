import type { CollectionEntry } from "astro:content";

export function getArticleUrl(id: string, url?: string): string {
  const path = (url ?? `articles/${id}`).replace(/^\/+|\/+$/g, "");
  return `/${path}/`;
}

export function getSiblingArticleUrl(
  article: CollectionEntry<"articles">,
  articles: CollectionEntry<"articles">[],
  language: "sve" | "eng",
): string | undefined {
  const articleGroupId = article.id.replace(/_(?:en|sv)$/i, "");
  const sibling = articles.find(
    (candidate) =>
      candidate.data.language === language &&
      candidate.id.replace(/_(?:en|sv)$/i, "") === articleGroupId,
  );

  return sibling ? getArticleUrl(sibling.id, sibling.data.url) : undefined;
}

export function getArticleRouteId(id: string, url?: string): string {
  return getArticleUrl(id, url)
    .replace(/^\/articles\//, "")
    .replace(/\/$/, "");
}
