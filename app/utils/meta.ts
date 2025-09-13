type MetaDescriptor = {
  tagName: "link";
  rel: "canonical" | "alternate";
  href: string;
  hrefLang?: string;
};

export const createCanonical = (
  pathname: string,
  domain: string,
): MetaDescriptor => {
  const href = new URL(pathname, domain).toString();

  return { tagName: "link", rel: "canonical", href };
};

export const createAlternative = (
  pathname: string,
  domain: string,
  language: string,
  lang?: string,
): MetaDescriptor => {
  const hrefLang = lang || language;
  const href = new URL(pathname, domain).toString();

  return { tagName: "link", rel: "alternate", href, hrefLang };
};

export const createAlternatives = (
  domain: string,
  languages: Array<{ code: string; path: string; hrefLang?: string }>,
): MetaDescriptor[] => {
  return languages.map(({ code, path, hrefLang }) => {
    return createAlternative(path, domain, code, hrefLang);
  });
};

export const createHomeAlternatives = (domain: string): MetaDescriptor[] => {
  return createAlternatives(domain, [
    { code: "en", path: "/", hrefLang: "en" },
    { code: "zh-Hans", path: "/zh", hrefLang: "zh-Hans" },
  ]);
};

export const createPricingAlternatives = (domain: string): MetaDescriptor[] => {
  return createAlternatives(domain, [
    { code: "en", path: "/pricing", hrefLang: "en" },
    { code: "zh-Hans", path: "/zh/pricing", hrefLang: "zh-Hans" },
  ]);
};
