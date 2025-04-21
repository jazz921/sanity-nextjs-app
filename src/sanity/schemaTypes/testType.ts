import { defineField, defineType } from "sanity";

export const testType = defineType({
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ]
})