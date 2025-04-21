import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "pageContents",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "pageContent" } })],
    }),
  ]
})