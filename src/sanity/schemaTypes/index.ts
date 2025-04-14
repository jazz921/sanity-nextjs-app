import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { pageType } from "./pageType";
import { contentType } from "./contentType";
import { componentType } from "./componentType";
import { navigationType } from "./navigationType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, 
    categoryType, 
    postType, 
    authorType, 
    navigationType,
    pageType,
    contentType,
    componentType
  ],
};
