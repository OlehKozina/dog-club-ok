import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  projectId: "fqinbqr2",
  dataset: "production",
  title: "Bakery Website",
  apiVersion: "2024-07-17",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S) => {
        const singletons = ["header", "footer", "privacyPolicy"];

        return S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Header")
              .id("header")
              .schemaType("header")
              .child(S.document().schemaType("header").documentId("header")),

            S.listItem()
              .title("Footer")
              .id("footer")
              .schemaType("footer")
              .child(S.document().schemaType("footer").documentId("footer")),

            S.listItem()
              .title("Privacy Policy")
              .id("privacyPolicy")
              .schemaType("privacyPolicy")
              .child(
                S.document()
                  .schemaType("privacyPolicy")
                  .documentId("privacyPolicy")
              ),
            ...S.documentTypeListItems().filter(
              (item) => !singletons.includes(item.getId() ?? "")
            ),
          ]);
      },
    }),
    visionTool(),
  ],
  schema: { types: schemas },
});
