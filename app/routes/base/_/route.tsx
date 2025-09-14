import { Outlet } from "react-router";
import { BaseLayout, type BaseLayoutProps } from "~/features/layout";
import type { Route } from "./+types/route";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const header: BaseLayoutProps["header"] = {
    navLinks: [
      { to: "/", label: "Home" },
      { to: "/pricing", label: "Pricing" },
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
    ],
    brandDescription:
      "Free Hollow Knight: Silksong Wallpaper Collections.",
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
