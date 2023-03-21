import { RouterData } from 'types/route';

// TODO: remove after correct Hook Router implementation
export const routes: RouterData = {
  home: {
    name: 'home',
    path: '/',
    title: 'Home',
  },
  about: {
    name: 'about',
    path: '/about',
    title: 'About Us',
  },
  forms: {
    name: 'forms',
    path: '/forms',
    title: 'Forms',
  },
  unknown: {
    name: 'unknown',
    path: '*',
    title: 'Not Found',
  },
};
