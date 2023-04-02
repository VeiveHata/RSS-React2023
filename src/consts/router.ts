import { Pages, PagesData } from 'types/route';

export const routesPath: Record<Pages, string> = {
  library: '/library',
  about: '/about',
  forms: '/forms',
  unknown: '*',
};

export const pagesData: PagesData = {
  library: {
    name: 'library',
    path: routesPath.library,
    title: 'Library',
    testId: 'libraryPage',
  },
  about: {
    name: 'about',
    path: routesPath.about,
    title: 'About Us',
    testId: 'aboutPage',
  },
  forms: {
    name: 'forms',
    path: routesPath.forms,
    title: 'Forms',
    testId: 'formsPage',
  },
  unknown: {
    name: 'unknown',
    path: routesPath.unknown,
    title: 'Not Found',
    testId: 'notFoundPage',
  },
};
