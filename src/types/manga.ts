import { Nullable } from './utils';

type Dimension = {
  width: number;
  height: number;
};

export enum PosterSize {
  tiny = 'tiny',
  small = 'small',
  medium = 'medium',
  original = 'original',
  large = 'large',
  tiny_webp = 'tiny_webp',
  small_webp = 'small_webp',
  large_webp = 'large_webp',
}

export type Poster = {
  [PosterSize.tiny]?: string;
  [PosterSize.small]?: string;
  [PosterSize.medium]?: string;
  [PosterSize.original]?: string;
  [PosterSize.large]?: string;
  [PosterSize.tiny_webp]?: string;
  [PosterSize.small_webp]?: string;
  [PosterSize.large_webp]?: string;
  meta: {
    dimensions: {
      [PosterSize.tiny]?: Dimension;
      [PosterSize.small]?: Dimension;
      [PosterSize.medium]?: Dimension;
      [PosterSize.original]?: Dimension;
      [PosterSize.large]?: Dimension;
      [PosterSize.tiny_webp]?: Dimension;
      [PosterSize.small_webp]?: Dimension;
      [PosterSize.large_webp]?: Dimension;
    };
  };
};

type Links = {
  self: string;
  related: string;
};

export enum TitleLanguage {
  en = 'en',
  en_us = 'en_us',
  en_jp = 'en_jp',
  ja_jp = 'ja_jp',
}
export type Titles = {
  [TitleLanguage.en]?: Nullable<string>;
  [TitleLanguage.en_us]?: Nullable<string>;
  [TitleLanguage.en_jp]?: Nullable<string>;
  [TitleLanguage.ja_jp]?: Nullable<string>;
};

export type MangaStatus = 'finished' | 'current' | 'tba';

export type MangaAttributes = {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: Nullable<string>;
  ratingFrequencies: Record<string, string>;
  userCount: number;
  favoritesCount: number;
  startDate: Nullable<string>;
  endDate: Nullable<string>;
  nextRelease: Nullable<string>;
  popularityRank: number;
  ratingRank: Nullable<number>;
  ageRating: Nullable<string>;
  ageRatingGuide: Nullable<string>;
  subtype: string;
  status: Nullable<MangaStatus>;
  tba: Nullable<string>;
  posterImage: Poster;
  coverImage: Nullable<Poster>;
  chapterCount: Nullable<number>;
  volumeCount: number;
  serialization: Nullable<string>;
  mangaType: string;
};

type RelationshipData = { links: Links };

export type MangaRelationships = {
  genres: RelationshipData;
  categories: RelationshipData;
  castings: RelationshipData;
  installments: RelationshipData;
  mappings: RelationshipData;
  reviews: RelationshipData;
  mediaRelationships: RelationshipData;
  characters: RelationshipData;
  staff: RelationshipData;
  productions: RelationshipData;
  quotes: RelationshipData;
  chapters: RelationshipData;
  mangaCharacters: RelationshipData;
  mangaStaff: RelationshipData;
};

export interface Manga {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: MangaAttributes;
  relationships: MangaRelationships;
}

type RelationshipType = 'genres';
export interface Genre {
  id: string;
  type: RelationshipType;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    name: string;
    slug: string;
    description: Nullable<string>;
  };
}

export interface Category {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    title: string;
    description: string;
    totalMediaCount: number;
    slug: string;
    nsfw: boolean;
    childCount: number;
  };
  relationships: {
    parent: {
      links: Links;
    };
    anime: {
      links: Links;
    };
    drama: {
      links: Links;
    };
    manga: {
      links: Links;
    };
  };
}
