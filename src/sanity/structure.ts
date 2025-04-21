import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('CMS Site')
    .items([
      S.documentTypeListItem('navigation').title('Navigation'),
      S.documentTypeListItem('page').title('Page'),
      S.documentTypeListItem('pageContent').title('Page Content'),
      S.documentTypeListItem('widget').title('Widget'),
      S.documentTypeListItem('component').title('Component'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['navigation', 'page', 'pageContent', 'widget', 'component'].includes(item.getId()!),
      ),
    ])
