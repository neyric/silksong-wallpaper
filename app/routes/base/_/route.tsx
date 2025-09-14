import { Outlet } from "react-router";
import { BaseLayout, type BaseLayoutProps } from "~/features/layout";
import type { Route } from "./+types/route";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const header: BaseLayoutProps["header"] = {
    navLinks: [
      {
        to: "https://www.reddit.com/r/Silksong/",
        label: "r/Silksong",
        target: "_blank",
      },
      {
        to: "https://www.artstation.com/search?sort_by=relevance&query=silksong",
        label: "ArtStation",
        target: "_blank",
      },
      {
        to: "https://www.deviantart.com/search/deviations?q=silksong",
        label: "DeviantArt",
        target: "_blank",
      },
      {
        to: "https://github.com/neyric/silksong-wallpaper",
        label: "Github Repo",
        target: "_blank",
      },
    ],
  };

  const footer: BaseLayoutProps["footer"] = {
    navLinks: [
      {
        label: "Legal",
        list: [
          { to: "/legal/terms", label: "Terms of Use", target: "_blank" },
          { to: "/legal/privacy", label: "Privacy Policy", target: "_blank" },
          { to: "/legal/cookie", label: "Cookie Policy", target: "_blank" },
        ],
      },
    ],
    friendlyLinks: [
      { to: "https://ghiblistyleai.app", label: "Ghibli Style AI" },
      { to: "https://ocmaker.app", label: "OC Maker" },
      { to: "https://imgvid.app", label: "ImgVid AI" },
    ],
    brandDescription: "Free Hollow Knight: Silksong Wallpaper Collections.",
    copyright: `© ${new Date().getFullYear()} Silksong Wallpaper Pics All Rights Reserved.`,
  };

  return { header, footer };
};

export default function Layout({
  loaderData: { header, footer },
}: Route.ComponentProps) {
  return (
    <BaseLayout header={{ ...header }} footer={footer}>
      <Outlet />
    </BaseLayout>
  );
}
