import { defineType } from "sanity";
import { FaVideo as icon } from "react-icons/fa";
import { F } from "../tool";

export const mediaGridWithText = defineType(
  F.object({
    name: "mediaGridWithText",
    icon,
    fields: [
      F.text({
        name: "heading",
      }),
      F.text({
        name: "text",
        title: "Description",
        rows: 3,
      }),
      F.image({
        name: "image",
        hotspot: true,
      }),
      F.file({
        name: "video",
        accept: "video/*",
      }),
      F.reference({
        name: "navLink",
        to: [{ type: "navigation" }],
        title: "Navigation Link",
      }),
    ],

    preview: {
      select: {
        title: "heading",
        subtitle: "text",
        media: "image",
      },
      prepare({
        title,
        subtitle,
        media,
      }: {
        title?: string;
        subtitle?: string;
        media?: any;
      }) {
        return {
          title: title || "MediaGrid Section",
          subtitle: subtitle
            ? subtitle.slice(0, 50) + "..."
            : "No description yet",
          media,
        };
      },
    },
  })
);
