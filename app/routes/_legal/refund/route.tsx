import { parseMarkdown } from "~/.server/libs/markdown";

import { Legal } from "~/components/pages/legal";
import { createCanonical } from "~/utils/meta";
import type { Route } from "./+types/route";
import content from "./content.md?raw";

export const meta: Route.MetaFunction = ({ matches }) => {
  return [
    { title: "Refund Policy - ImgVid" },
    {
      name: "description",
      content:
        "Review the Refund Policy for ImgVid, outlining our 7-day refund guarantee and the process for requesting refunds on our AI character creation services.",
    },
    createCanonical("/legal/refund", matches[0].data.DOMAIN),
  ];
};

export const loader = (_: Route.LoaderArgs) => {
  const { node } = parseMarkdown(content);
  return { node };
};

export default function Page({ loaderData: { node } }: Route.ComponentProps) {
  return <Legal node={node} />;
}
