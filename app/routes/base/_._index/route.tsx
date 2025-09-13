import { Fragment } from "react";

import {
  EffectShowcaseSection,
  FAQsSection,
  FooterCTASection,
  HeroSection,
  PartnersSection,
  UseCasesSection,
  WhyImgVidSection,
} from "~/components/pages/landing";

import { createCanonical, createHomeAlternatives } from "~/utils/meta";
import { createSocialTags } from "~/utils/og";
import type { Route } from "./+types/route";
import contents, {
  ctaButtons,
  effectShowcase,
  faqs,
  features,
  howItWorkSteps,
  useCases,
} from "./contents";

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
    matches[0].loaderData.DOMAIN,
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
      <HeroSection
        title={content.hero.title}
        description={content.hero.description}
      />
      <EffectShowcaseSection
        title={content.effectShowcase.title}
        description={content.effectShowcase.description}
        showcaseItems={effectShowcase}
        howItWorkTitle={content.howItWork.title}
        howItWorkDescription={content.howItWork.description}
        steps={howItWorkSteps}
      />
      <WhyImgVidSection
        title={content.why.title}
        description={content.why.description}
        features={features}
      />
      <UseCasesSection
        title={content.useCase.title}
        description={content.useCase.description}
        useCases={useCases}
      />
      <FAQsSection
        title={content.faqs.title}
        description={content.faqs.description}
        faqs={faqs}
      />
      <FooterCTASection
        title={content.cta.title}
        description={content.cta.description}
        buttons={ctaButtons}
      />
    </Fragment>
  );
}
