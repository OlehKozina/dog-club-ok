import { defineType } from "sanity";
import { FaCheckCircle as icon } from "react-icons/fa";
import { F } from "../tool";

export const marquee = defineType(
  F.object({
    name: "marquee",
    icon,

    fields: [
      F.array({
        name: "advantages",
        of: [F.string({ name: "advantage" })],
      }),
    ],

    preview: {
      select: {
        heading: "heading",
        advantages: "advantages",
      },
      prepare({
        heading,
        advantages,
      }: {
        heading?: string;
        advantages?: string[];
      }) {
        const firstAdvantage =
          Array.isArray(advantages) && advantages.length
            ? advantages[0]
            : undefined;

        return {
          title: heading || "Features section",
          subtitle: firstAdvantage
            ? `${firstAdvantage}…`
            : "No advantages added yet",
          media: icon,
        };
      },
    },
  })
);
