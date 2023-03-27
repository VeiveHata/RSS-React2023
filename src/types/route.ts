export type Pages = 'library' | 'about' | 'forms' | 'unknown';

export type PageInfo = {
  name: Pages;
  path: string;
  title: string;
  testId: string;
};

export type PagesData = Record<Pages, PageInfo>;
