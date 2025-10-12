import { PortableTextBlock } from "next-sanity";
import { FormType } from "./ContactType";

export type HeroType = {
  _id?: string;
  _createdAt?: Date;
  heading: string;
  image?: string;
  privacyPolicy?: PortableTextBlock;
  form?: FormType;
};
