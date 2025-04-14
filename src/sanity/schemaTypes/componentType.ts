import { defineArrayMember, defineField, defineType } from "sanity";
import {ComponentIcon} from '@sanity/icons'

export const componentType = defineType({
  name: 'component',
  title: 'Component',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'itemTitle',
      type: 'string',
    }),
    defineField({
      name: "itemText",
      type: "text",
    }),
    defineField({
      title: 'itemLink',
      name: 'link',
      type: 'object',
      fields: [
        {
          title: 'URL',
          name: 'href',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: "itemImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context?.parent as { asset?: { _ref?: string } };

              return !value && parent?.asset?._ref
                ? "Alt text is required when an image is present"
                : true;
            }),
        }),
      ],
    }),

  ]
})