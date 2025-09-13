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
        label: "Tools",
        list: [{ to: "/", label: "Image to Video" }],
      },
      {
        label: "Contact Us",
        list: [
          {
            to: "mailto:support@imgvid.app",
            label: "support@imgvid.app",
            target: "_blank",
          },
        ],
      },
      {
        label: "Legal",
        list: [
          { to: "/legal/terms", label: "Terms of Use", target: "_blank" },
          { to: "/legal/privacy", label: "Privacy Policy", target: "_blank" },
          { to: "/legal/refund", label: "Refund Policy", target: "_blank" },
          { to: "/legal/cookie", label: "Cookie Policy", target: "_blank" },
        ],
      },
    ],
    friendlyLinks: [
      { to: "https://ghiblistyleai.app", label: "Ghibli Style AI" },
      { to: "https://ocmaker.app", label: "OC Maker" },
    ],
    brandDescription:
      "From still to stunning, transform static images into dynamic videos with AI. Create professional animations in minutes.",
    copyright: `© ${new Date().getFullYear()} ImgVid All Rights Reserved.`,
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
