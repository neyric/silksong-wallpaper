import { env } from "cloudflare:workers";
import { data, Outlet, useLoaderData, useRouteLoaderData } from "react-router";
import { checkHasSession, getSessionHandler } from "~/.server/libs/session";

import stylesUrl from "~/app.css?url";
import { ErrorPage } from "~/components/pages/error-page";
import { Document } from "~/features/document";
import { createOrganizationSchema } from "~/utils/structured-data";
import type { Route } from "./+types/root";

import "@fontsource-variable/inter";
import "ldrs/react/Ring2.css";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export const loader = async ({ request }: Route.LoaderArgs) => {
  let theme: "light" | "dark" = "light";

  if (await checkHasSession(request)) {
    const [session] = await getSessionHandler(request);
    theme = session.get("theme") ?? "light";
  }

  return data({
    theme,
    DOMAIN: env.DOMAIN,
    CDN_URL: env.CDN_URL,
    SITE_NAME: env.SITE_NAME,
    SITE_LOGO: new URL("/assets/logo.webp", env.DOMAIN).toString(),
    GOOGLE_ANALYTICS_ID: env.GOOGLE_ANALYTICS_ID,
    GOOGLE_ADS_ID: env.GOOGLE_ADS_ID,
    CLARITY_ID: env.CLARITY_ID,
  });
};

export const useRootLoader = () => {
  return useRouteLoaderData<typeof loader>("root");
};

export const Layout = ({ children }: React.PropsWithChildren) => {
  const data = useLoaderData<typeof loader>();

  let structure: Record<string, unknown> | undefined = undefined;
  if (data) {
    structure = createOrganizationSchema({
      url: data.DOMAIN,
      name: data.SITE_NAME,
      logo: data.SITE_LOGO,
      email: "support@imgvid.app",
      sameAs: [
        "https://github.com/neyric",
        "https://linktr.ee/neyric",
        "https://x.com/zissy_w",
        "https://about.me/neyric/",
        "https://gravatar.com/neyricw",
        "https://www.deviantart.com/fine54",
      ],
    });
  }

  return (
    <Document
      theme={data?.theme}
      structure={structure}
      DOMAIN={data?.DOMAIN}
      GOOGLE_ADS_ID={data?.GOOGLE_ADS_ID}
      GOOGLE_ANALYTICS_ID={data?.GOOGLE_ANALYTICS_ID}
      CLARITY_ID={data?.CLARITY_ID}
    >
      {children}
    </Document>
  );
};
export default function App(_: Route.ComponentProps) {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <ErrorPage error={error} />;
}
