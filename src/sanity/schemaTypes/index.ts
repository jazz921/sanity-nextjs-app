import { type SchemaTypeDefinition } from "sanity";

import { pageType } from "./pageType";
import { widgetType } from "./widgetType";
import { componentType } from "./componentType";
import { navigationType } from "./navigationType";
import { pageContentType } from "./pageContentType";
import { testType } from "./testType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navigationType,
    pageType,
    pageContentType,
    widgetType,
    componentType,
    testType
  ],
};
