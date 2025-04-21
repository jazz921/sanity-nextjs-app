import { defineArrayMember, defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const widgetType = defineType({
  name: "widget",
  title: "Widget",
  type: "document",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "viewType",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "layoutVariant",
      type: "string",
    }),
    defineField({
      name: "mainTitle",
      type: "string",
    }),
    defineField({
      name: "subTitle",
      type: "string",
    }),
    defineField({
      name: "mainText",
      type: "text",
    }),
    defineField({
      name: "subText",
      type: "text",
    }),
    defineField({
      name: "mainItems",
      type: "array",
      of: [defineArrayMember({ type: 'reference', to: { type: 'component' } })]
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "Alt",
          type: "string",
          title: "Alternative Text",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context?.parent as { asset?: { _ref?: string } };

              return !value && parent?.asset?._ref
                ? "Alt text is required when an image isp resent"
                : true;
            }),
        }),
      ],
    }),
  ],
});
