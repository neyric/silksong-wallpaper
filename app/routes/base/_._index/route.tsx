import { Fragment } from "react";
import { Image } from "~/components/common";
import { HeroSection } from "~/components/pages/landing";
import { createCanonical, createHomeAlternatives } from "~/utils/meta";
import { createSocialTags } from "~/utils/og";
import type { Route } from "./+types/route";
import contents from "./contents";
import { list } from "./list";

export function meta({ matches }: Route.MetaArgs) {
  const canonical = createCanonical("/", matches[0].loaderData.DOMAIN);
  const alternatives = createHomeAlternatives(matches[0].loaderData.DOMAIN);
  const og = createSocialTags(
    {
      title: contents.meta.title,
      description: contents.meta.description,
      url: "/",
      siteName: matches[0].loaderData.SITE_NAME,
    },
    matches[0].loaderData.DOMAIN
  );

  return [
    { title: contents.meta.title },
    {
      name: "description",
      content: contents.meta.description,
    },
    canonical,
    ...alternatives,
    ...og,
  ];
}

export default function Home(_: Route.ComponentProps) {
  const content = contents.contents;

  return (
    <Fragment>
      <HeroSection />
      <div className="container">
        <div className="grid grid-cols-2">
          {list.map((item) => (
            <Image src={`/assets/download/${item.src}`} alt={item.alt} key={item.src} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
