import { defineArrayMember, defineField, defineType } from "sanity";
import {EarthGlobeIcon} from '@sanity/icons'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: "navigations",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "page" } })],
    }),
  ]
})