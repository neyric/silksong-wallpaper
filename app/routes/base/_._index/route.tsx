import { Fragment } from "react";
import { HeroSection } from "~/components/pages/landing";
import { createCanonical, createHomeAlternatives } from "~/utils/meta";
import { createSocialTags } from "~/utils/og";
import type { Route } from "./+types/route";
import contents from "./contents";
import { list } from "./list";
import { SetupGuide } from "./setup-guide";
import { WaterfallLayout } from "./waterfall-layout";

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
  return (
    <Fragment>
      <HeroSection />

      <section className="py-12">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Silksong Wallpaper Collection
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Explore our curated collection of high-quality Hollow Knight:
              Silksong wallpapers. Available in multiple resolutions for all
              your devices.
            </p>
          </div>
          <WaterfallLayout items={list} />
        </div>
      </section>

      <SetupGuide />
    </Fragment>
  );
}
