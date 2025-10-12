import { createClient, groq } from "next-sanity";
import { componentsQuery } from "./queries/componentsQuery";

const client = createClient({
  apiVersion: "2024-07-17",
  dataset: "production",
  projectId: "fqinbqr2",
  useCdn: false,
});

export const formQuery = `{
    name, 
    fields,
    buttonLabel
}
`;

export async function getPageHome() {
  return client.fetch(`*[_type == "pageHome"]{
    ...,
    hero[0]{
      heading,
      "image": image.asset->url,
      "privacyPolicy": *[_type == "privacyPolicy"][0].content,
      "form": *[_type == "form"][0]${formQuery},
    },
      ${componentsQuery}
    }`);
}

export function getHeader() {
  return client.fetch(groq`*[_type == "header"][0]{
    navigation[]{ title, sectionId },
    "privacyPolicy": *[_type == "privacyPolicy"][0].content,
    "form": *[_type == "form"][0]${formQuery},
  }`);
}

export function getFooter() {
  return client.fetch(groq`*[_type == "footer"][0]{
    navigation[]{ title, sectionId },
    phone,
    email,
    address,
    socialLinks,
    footerImages{
    "left": leftImage.asset->url,
    "right": rightImage.asset->url
    },
    "privacyPolicy": privacyPolicy->content,
  }`);
}
