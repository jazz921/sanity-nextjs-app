import { defineArrayMember, defineField, defineType } from "sanity";
import { FolderIcon } from "@sanity/icons";

export const pageContentType = defineType({
  name: "pageContent",
  title: "Page Content",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "pagePlacements",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "widget" } })],
    }),
  ],
});
