export type Pages = 'home' | 'about' | 'forms' | 'unknown';

type RouteInfo = {
  name: Pages;
  path: string;
  title: string;
};

export type RouterData = Record<Pages, RouteInfo>;
