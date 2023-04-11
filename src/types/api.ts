import { MangaAttributes, MangaRelationships } from './manga';

type Pagination = {
  first: string;
  last: string;
  next?: string;
};

export type ResponseListStructure<T> = {
  data: T[];
  meta: {
    count: number;
  };
  links: Pagination;
};

export type ResponseItemStructure = {
  data: {
    attributes: MangaAttributes;
    relationships: MangaRelationships;
    links: {
      self: string;
    };
    type: string;
    id: string;
  };
};
