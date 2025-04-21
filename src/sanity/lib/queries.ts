import { defineQuery } from "next-sanity";

export const GET_PAGE = defineQuery(`
    *[_type == "page" && slug.current == $slug]{
    slug,
    title,
    pageContents[]->{
      title,
      pagePlacements[]-> {
        name,
        viewType,
        layoutVariant,
        mainTitle,
        subTitle,
        mainText,
        subText,
        mainImage {
          ...,
          asset-> {
            url
          }
        },
        mainItems[]-> {
          _id,
          itemTitle,
          itemText,
          itemLink,
          itemImage,
          ...,
        }
      }
    }
  }
`);
