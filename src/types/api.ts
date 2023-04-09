type Pagination = {
  first: string;
  last: string;
  next: string;
};

export type ResponseStructure<T> = {
  data: T;
  meta: {
    count: number;
  };
  links: Pagination;
};
