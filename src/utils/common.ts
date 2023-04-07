import { MangaStatus } from 'types/manga';
import { Nullable } from 'types/utils';

export const statusOptions: Record<MangaStatus, string> = {
  finished: 'Finished',
  current: 'Ongoing',
  tba: 'To be announced',
};

export const getStatusTitle = (status: Nullable<MangaStatus>) => {
  return status ? statusOptions[status] : 'Not known';
};
