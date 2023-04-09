import { Category, Genre, Manga } from 'types/manga';

export const mockCardItem: Manga = {
  id: '1',
  type: 'manga',
  links: {
    self: 'https://kitsu.io/api/edge/manga/1',
  },
  attributes: {
    createdAt: '2013-12-18T13:48:24.164Z',
    updatedAt: '2023-03-15T12:00:12.264Z',
    slug: 'guardian-dog',
    synopsis:
      'Gengo Kurosaka leads a normal life until a run-away alien called "Six-eyes" decides to take refuge in his body. From then on, Gengo becomes Ishtar\'s target, a beautiful alien in charge of making sure the aliens don\'t turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...',
    description:
      'Gengo Kurosaka leads a normal life until a run-away alien called "Six-eyes" decides to take refuge in his body. From then on, Gengo becomes Ishtar\'s target, a beautiful alien in charge of making sure the aliens don\'t turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...',
    coverImageTopOffset: 0,
    titles: {
      en: null,
      en_jp: 'Guardian Dog',
      en_us: 'Guardian Dog',
    },
    canonicalTitle: 'Guardian Dog',
    abbreviatedTitles: ['Guardian Dog'],
    averageRating: '71.58',
    ratingFrequencies: {
      '2': '1',
      '3': '0',
      '4': '1',
      '5': '0',
      '6': '0',
      '7': '0',
      '8': '1',
      '9': '0',
      '10': '7',
      '11': '0',
      '12': '26',
      '13': '1',
      '14': '44',
      '15': '0',
      '16': '13',
      '17': '0',
      '18': '5',
      '19': '0',
      '20': '5',
    },
    userCount: 129,
    favoritesCount: 1,
    startDate: '2005-01-01',
    endDate: null,
    nextRelease: null,
    popularityRank: 7726,
    ratingRank: 6596,
    ageRating: null,
    ageRatingGuide: null,
    subtype: 'manga',
    status: 'current',
    tba: null,
    posterImage: {
      tiny: 'https://media.kitsu.io/manga/1/poster_image/tiny-b4be97beecfca5ba4eb744291405db76.jpeg',
      large:
        'https://media.kitsu.io/manga/1/poster_image/large-3210684af7bee6996926c63e5f16559e.jpeg',
      small:
        'https://media.kitsu.io/manga/1/poster_image/small-8014f18506a324ddf8318c4a74bf4c12.jpeg',
      medium:
        'https://media.kitsu.io/manga/1/poster_image/medium-5c1bd30a5d7538f9925796d3bbc013f4.jpeg',
      original: 'https://media.kitsu.io/manga/poster_images/1/original.jpg',
      meta: {
        dimensions: {
          tiny: {
            width: 110,
            height: 156,
          },
          large: {
            width: 550,
            height: 780,
          },
          small: {
            width: 284,
            height: 402,
          },
          medium: {
            width: 390,
            height: 554,
          },
        },
      },
    },
    coverImage: null,
    chapterCount: 22,
    volumeCount: 4,
    serialization: 'Comic Rush',
    mangaType: 'manga',
  },
  relationships: {
    genres: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/genres',
        related: 'https://kitsu.io/api/edge/manga/1/genres',
      },
    },
    categories: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/categories',
        related: 'https://kitsu.io/api/edge/manga/1/categories',
      },
    },
    castings: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/castings',
        related: 'https://kitsu.io/api/edge/manga/1/castings',
      },
    },
    installments: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/installments',
        related: 'https://kitsu.io/api/edge/manga/1/installments',
      },
    },
    mappings: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/mappings',
        related: 'https://kitsu.io/api/edge/manga/1/mappings',
      },
    },
    reviews: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/reviews',
        related: 'https://kitsu.io/api/edge/manga/1/reviews',
      },
    },
    mediaRelationships: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/media-relationships',
        related: 'https://kitsu.io/api/edge/manga/1/media-relationships',
      },
    },
    characters: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/characters',
        related: 'https://kitsu.io/api/edge/manga/1/characters',
      },
    },
    staff: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/staff',
        related: 'https://kitsu.io/api/edge/manga/1/staff',
      },
    },
    productions: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/productions',
        related: 'https://kitsu.io/api/edge/manga/1/productions',
      },
    },
    quotes: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/quotes',
        related: 'https://kitsu.io/api/edge/manga/1/quotes',
      },
    },
    chapters: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/chapters',
        related: 'https://kitsu.io/api/edge/manga/1/chapters',
      },
    },
    mangaCharacters: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/manga-characters',
        related: 'https://kitsu.io/api/edge/manga/1/manga-characters',
      },
    },
    mangaStaff: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/manga-staff',
        related: 'https://kitsu.io/api/edge/manga/1/manga-staff',
      },
    },
  },
};

export const emptyMockItem: Manga = {
  id: '1',
  type: 'manga',
  links: {
    self: 'https://kitsu.io/api/edge/manga/1',
  },
  attributes: {
    createdAt: '2013-12-18T13:48:24.164Z',
    updatedAt: '2023-03-15T12:00:12.264Z',
    slug: 'guardian-dog',
    synopsis:
      'Gengo Kurosaka leads a normal life until a run-away alien called "Six-eyes" decides to take refuge in his body. From then on, Gengo becomes Ishtar\'s target, a beautiful alien in charge of making sure the aliens don\'t turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...',
    description:
      'Gengo Kurosaka leads a normal life until a run-away alien called "Six-eyes" decides to take refuge in his body. From then on, Gengo becomes Ishtar\'s target, a beautiful alien in charge of making sure the aliens don\'t turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...',
    coverImageTopOffset: 0,
    titles: {
      en: null,
      en_jp: 'Guardian Dog',
      en_us: 'Guardian Dog',
    },
    canonicalTitle: 'Guardian Dog',
    abbreviatedTitles: ['Guardian Dog'],
    averageRating: null,
    ratingFrequencies: {
      '2': '1',
      '3': '0',
      '4': '1',
      '5': '0',
      '6': '0',
      '7': '0',
      '8': '1',
      '9': '0',
      '10': '7',
      '11': '0',
      '12': '26',
      '13': '1',
      '14': '44',
      '15': '0',
      '16': '13',
      '17': '0',
      '18': '5',
      '19': '0',
      '20': '5',
    },
    userCount: 129,
    favoritesCount: 1,
    startDate: '2005-01-01',
    endDate: null,
    nextRelease: null,
    popularityRank: 7726,
    ratingRank: 6596,
    ageRating: null,
    ageRatingGuide: null,
    subtype: 'manga',
    status: 'current',
    tba: null,
    posterImage: {
      tiny: 'https://media.kitsu.io/manga/1/poster_image/tiny-b4be97beecfca5ba4eb744291405db76.jpeg',
      large:
        'https://media.kitsu.io/manga/1/poster_image/large-3210684af7bee6996926c63e5f16559e.jpeg',
      small:
        'https://media.kitsu.io/manga/1/poster_image/small-8014f18506a324ddf8318c4a74bf4c12.jpeg',
      medium:
        'https://media.kitsu.io/manga/1/poster_image/medium-5c1bd30a5d7538f9925796d3bbc013f4.jpeg',
      original: 'https://media.kitsu.io/manga/poster_images/1/original.jpg',
      meta: {
        dimensions: {
          tiny: {
            width: 110,
            height: 156,
          },
          large: {
            width: 550,
            height: 780,
          },
          small: {
            width: 284,
            height: 402,
          },
          medium: {
            width: 390,
            height: 554,
          },
        },
      },
    },
    coverImage: null,
    chapterCount: 22,
    volumeCount: 4,
    serialization: null,
    mangaType: 'manga',
  },
  relationships: {
    genres: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/genres',
        related: 'https://kitsu.io/api/edge/manga/1/genres',
      },
    },
    categories: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/categories',
        related: 'https://kitsu.io/api/edge/manga/1/categories',
      },
    },
    castings: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/castings',
        related: 'https://kitsu.io/api/edge/manga/1/castings',
      },
    },
    installments: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/installments',
        related: 'https://kitsu.io/api/edge/manga/1/installments',
      },
    },
    mappings: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/mappings',
        related: 'https://kitsu.io/api/edge/manga/1/mappings',
      },
    },
    reviews: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/reviews',
        related: 'https://kitsu.io/api/edge/manga/1/reviews',
      },
    },
    mediaRelationships: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/media-relationships',
        related: 'https://kitsu.io/api/edge/manga/1/media-relationships',
      },
    },
    characters: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/characters',
        related: 'https://kitsu.io/api/edge/manga/1/characters',
      },
    },
    staff: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/staff',
        related: 'https://kitsu.io/api/edge/manga/1/staff',
      },
    },
    productions: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/productions',
        related: 'https://kitsu.io/api/edge/manga/1/productions',
      },
    },
    quotes: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/quotes',
        related: 'https://kitsu.io/api/edge/manga/1/quotes',
      },
    },
    chapters: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/chapters',
        related: 'https://kitsu.io/api/edge/manga/1/chapters',
      },
    },
    mangaCharacters: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/manga-characters',
        related: 'https://kitsu.io/api/edge/manga/1/manga-characters',
      },
    },
    mangaStaff: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/1/relationships/manga-staff',
        related: 'https://kitsu.io/api/edge/manga/1/manga-staff',
      },
    },
  },
};

export const apiTestMangaItem: Manga = {
  id: '8',
  type: 'manga',
  links: {
    self: 'https://kitsu.io/api/edge/manga/8',
  },
  attributes: {
    createdAt: '2013-12-18T13:48:25.461Z',
    updatedAt: '2023-04-09T12:00:17.813Z',
    slug: 'berserk',
    synopsis:
      "His name is Guts, the Black Swordsman, a feared warrior spoken of only in whispers. Bearer of a gigantic sword, an iron hand, and the scars of countless battles and tortures, his flesh is also indelibly marked with The Brand, an unholy symbol that draws the forces of darkness to him and dooms him as their sacrifice. But Guts won't take his fate lying down; he'll cut a crimson swath of carnage through the ranks of the damned—and anyone else foolish enough to oppose him! Accompanied by Puck the Elf, more an annoyance than a companion, Guts relentlessly follows a dark, bloodstained path that leads only to death...or vengeance.\n\n(Source: Dark Horse)\n\nNotes:\n- Volumes 1-5 contain the 16 prequel chapters 0A - 0P.\n- Chapter 83 was omitted from Volume 13 due to the author’s request.\n- Volume 14 includes “Berserk: The Prototype”.\n- Due to the author's passing, starting from Chapter 365, the manga is illustrated by Studio Gaga (Miura's assistants) and supervised by Kouji Mori (a close friend of Miura's).",
    description:
      "His name is Guts, the Black Swordsman, a feared warrior spoken of only in whispers. Bearer of a gigantic sword, an iron hand, and the scars of countless battles and tortures, his flesh is also indelibly marked with The Brand, an unholy symbol that draws the forces of darkness to him and dooms him as their sacrifice. But Guts won't take his fate lying down; he'll cut a crimson swath of carnage through the ranks of the damned—and anyone else foolish enough to oppose him! Accompanied by Puck the Elf, more an annoyance than a companion, Guts relentlessly follows a dark, bloodstained path that leads only to death...or vengeance.\n\n(Source: Dark Horse)\n\nNotes:\n- Volumes 1-5 contain the 16 prequel chapters 0A - 0P.\n- Chapter 83 was omitted from Volume 13 due to the author’s request.\n- Volume 14 includes “Berserk: The Prototype”.\n- Due to the author's passing, starting from Chapter 365, the manga is illustrated by Studio Gaga (Miura's assistants) and supervised by Kouji Mori (a close friend of Miura's).",
    coverImageTopOffset: 200,
    titles: {
      en: 'Berserk',
      en_jp: 'Berserk',
      en_us: 'Berserk',
      ja_jp: 'ベルセルク',
    },
    canonicalTitle: 'Berserk',
    abbreviatedTitles: ['Berserk: The Prototype'],
    averageRating: '84.22',
    ratingFrequencies: {
      '2': '1579',
      '3': '22',
      '4': '48',
      '5': '25',
      '6': '40',
      '7': '11',
      '8': '1043',
      '9': '11',
      '10': '87',
      '11': '26',
      '12': '185',
      '13': '34',
      '14': '1731',
      '15': '75',
      '16': '1143',
      '17': '236',
      '18': '2175',
      '19': '398',
      '20': '12651',
    },
    userCount: 29647,
    favoritesCount: 2755,
    startDate: '1989-08-25',
    endDate: null,
    nextRelease: null,
    popularityRank: 20,
    ratingRank: 24,
    ageRating: 'R',
    ageRatingGuide: 'Horror',
    subtype: 'manga',
    status: 'current',
    tba: null,
    posterImage: {
      tiny: 'https://media.kitsu.io/manga/8/poster_image/tiny-ad1df8a063d11baf9fda08160deffc00.jpeg',
      large:
        'https://media.kitsu.io/manga/8/poster_image/large-f598ed525107bcb69ebda5bf36c6910d.jpeg',
      small:
        'https://media.kitsu.io/manga/8/poster_image/small-bdf7be96b4337627856b36e0be0241fb.jpeg',
      medium:
        'https://media.kitsu.io/manga/8/poster_image/medium-8edd6ddb0c6ec34a54521487ee81fb02.jpeg',
      original: 'https://media.kitsu.io/manga/8/poster_image/67d602c20d1bf0eeb43e1a363c59ed5b.jpg',
      meta: {
        dimensions: {
          tiny: {
            width: 110,
            height: 156,
          },
          large: {
            width: 550,
            height: 780,
          },
          small: {
            width: 284,
            height: 402,
          },
          medium: {
            width: 390,
            height: 554,
          },
        },
      },
    },
    coverImage: {
      tiny: 'https://media.kitsu.io/manga/8/cover_image/tiny-a61e4ae3c11698a65c0ecdd6cd3e86bd.gif',
      large:
        'https://media.kitsu.io/manga/8/cover_image/large-d976a1baf3051d321608d4ebb7da4220.gif',
      small:
        'https://media.kitsu.io/manga/8/cover_image/small-dd96d5ac1412ccabb1bcca3fe89747f5.gif',
      tiny_webp:
        'https://media.kitsu.io/manga/8/cover_image/tiny_webp-90fec06d293be542b08f362b457bce04.webp',
      large_webp:
        'https://media.kitsu.io/manga/8/cover_image/large_webp-e735c50a70351a02998742aa8f1424a6.webp',
      small_webp:
        'https://media.kitsu.io/manga/8/cover_image/small_webp-645e5266280fa6c4032f54823eb6413a.webp',
      original: 'https://media.kitsu.io/manga/cover_images/8/original.jpg',
      meta: {
        dimensions: {
          tiny: {
            width: 840,
            height: 200,
          },
          large: {
            width: 3360,
            height: 800,
          },
          small: {
            width: 1680,
            height: 400,
          },
          tiny_webp: {
            width: 840,
            height: 200,
          },
          large_webp: {
            width: 3360,
            height: 800,
          },
          small_webp: {
            width: 1680,
            height: 400,
          },
        },
      },
    },
    chapterCount: null,
    volumeCount: 0,
    serialization: 'Young Animal',
    mangaType: 'manga',
  },
  relationships: {
    genres: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/genres',
        related: 'https://kitsu.io/api/edge/manga/8/genres',
      },
    },
    categories: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/categories',
        related: 'https://kitsu.io/api/edge/manga/8/categories',
      },
    },
    castings: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/castings',
        related: 'https://kitsu.io/api/edge/manga/8/castings',
      },
    },
    installments: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/installments',
        related: 'https://kitsu.io/api/edge/manga/8/installments',
      },
    },
    mappings: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/mappings',
        related: 'https://kitsu.io/api/edge/manga/8/mappings',
      },
    },
    reviews: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/reviews',
        related: 'https://kitsu.io/api/edge/manga/8/reviews',
      },
    },
    mediaRelationships: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/media-relationships',
        related: 'https://kitsu.io/api/edge/manga/8/media-relationships',
      },
    },
    characters: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/characters',
        related: 'https://kitsu.io/api/edge/manga/8/characters',
      },
    },
    staff: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/staff',
        related: 'https://kitsu.io/api/edge/manga/8/staff',
      },
    },
    productions: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/productions',
        related: 'https://kitsu.io/api/edge/manga/8/productions',
      },
    },
    quotes: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/quotes',
        related: 'https://kitsu.io/api/edge/manga/8/quotes',
      },
    },
    chapters: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/chapters',
        related: 'https://kitsu.io/api/edge/manga/8/chapters',
      },
    },
    mangaCharacters: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/manga-characters',
        related: 'https://kitsu.io/api/edge/manga/8/manga-characters',
      },
    },
    mangaStaff: {
      links: {
        self: 'https://kitsu.io/api/edge/manga/8/relationships/manga-staff',
        related: 'https://kitsu.io/api/edge/manga/8/manga-staff',
      },
    },
  },
};

export const mangaList: Manga[] = [
  {
    id: '1',
    type: 'manga',
    links: {
      self: 'https://kitsu.io/api/edge/manga/1',
    },
    attributes: {
      createdAt: '2013-12-18T13:48:24.164Z',
      updatedAt: '2023-03-15T12:00:12.264Z',
      slug: 'guardian-dog',
      synopsis:
        'Gengo Kurosaka leads a normal life until a run-away alien called "Six-eyes" decides to take refuge in his body. From then on, Gengo becomes Ishtar\'s target, a beautiful alien in charge of making sure the aliens don\'t turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...',
      description:
        'Gengo Kurosaka leads a normal life until a run-away alien called "Six-eyes" decides to take refuge in his body. From then on, Gengo becomes Ishtar\'s target, a beautiful alien in charge of making sure the aliens don\'t turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...',
      coverImageTopOffset: 0,
      titles: {
        en: null,
        en_jp: 'Guardian Dog',
        en_us: 'Guardian Dog',
      },
      canonicalTitle: 'Guardian Dog',
      abbreviatedTitles: ['Guardian Dog'],
      averageRating: '71.58',
      ratingFrequencies: {
        '2': '1',
        '3': '0',
        '4': '1',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '1',
        '9': '0',
        '10': '7',
        '11': '0',
        '12': '26',
        '13': '1',
        '14': '44',
        '15': '0',
        '16': '13',
        '17': '0',
        '18': '5',
        '19': '0',
        '20': '5',
      },
      userCount: 129,
      favoritesCount: 1,
      startDate: '2005-01-01',
      endDate: null,
      nextRelease: null,
      popularityRank: 7726,
      ratingRank: 6596,
      ageRating: null,
      ageRatingGuide: null,
      subtype: 'manga',
      status: 'current',
      tba: null,
      posterImage: {
        tiny: 'https://media.kitsu.io/manga/1/poster_image/tiny-b4be97beecfca5ba4eb744291405db76.jpeg',
        large:
          'https://media.kitsu.io/manga/1/poster_image/large-3210684af7bee6996926c63e5f16559e.jpeg',
        small:
          'https://media.kitsu.io/manga/1/poster_image/small-8014f18506a324ddf8318c4a74bf4c12.jpeg',
        medium:
          'https://media.kitsu.io/manga/1/poster_image/medium-5c1bd30a5d7538f9925796d3bbc013f4.jpeg',
        original: 'https://media.kitsu.io/manga/poster_images/1/original.jpg',
        meta: {
          dimensions: {
            tiny: {
              width: 110,
              height: 156,
            },
            large: {
              width: 550,
              height: 780,
            },
            small: {
              width: 284,
              height: 402,
            },
            medium: {
              width: 390,
              height: 554,
            },
          },
        },
      },
      coverImage: null,
      chapterCount: 22,
      volumeCount: 4,
      serialization: 'Comic Rush',
      mangaType: 'manga',
    },
    relationships: {
      genres: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/genres',
          related: 'https://kitsu.io/api/edge/manga/1/genres',
        },
      },
      categories: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/categories',
          related: 'https://kitsu.io/api/edge/manga/1/categories',
        },
      },
      castings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/castings',
          related: 'https://kitsu.io/api/edge/manga/1/castings',
        },
      },
      installments: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/installments',
          related: 'https://kitsu.io/api/edge/manga/1/installments',
        },
      },
      mappings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/mappings',
          related: 'https://kitsu.io/api/edge/manga/1/mappings',
        },
      },
      reviews: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/reviews',
          related: 'https://kitsu.io/api/edge/manga/1/reviews',
        },
      },
      mediaRelationships: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/media-relationships',
          related: 'https://kitsu.io/api/edge/manga/1/media-relationships',
        },
      },
      characters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/characters',
          related: 'https://kitsu.io/api/edge/manga/1/characters',
        },
      },
      staff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/staff',
          related: 'https://kitsu.io/api/edge/manga/1/staff',
        },
      },
      productions: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/productions',
          related: 'https://kitsu.io/api/edge/manga/1/productions',
        },
      },
      quotes: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/quotes',
          related: 'https://kitsu.io/api/edge/manga/1/quotes',
        },
      },
      chapters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/chapters',
          related: 'https://kitsu.io/api/edge/manga/1/chapters',
        },
      },
      mangaCharacters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/manga-characters',
          related: 'https://kitsu.io/api/edge/manga/1/manga-characters',
        },
      },
      mangaStaff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/1/relationships/manga-staff',
          related: 'https://kitsu.io/api/edge/manga/1/manga-staff',
        },
      },
    },
  },
  {
    id: '2',
    type: 'manga',
    links: {
      self: 'https://kitsu.io/api/edge/manga/2',
    },
    attributes: {
      createdAt: '2013-12-18T13:48:24.820Z',
      updatedAt: '2023-03-15T12:00:12.264Z',
      slug: 'boku-no-mune-ga-itakutemo-glass',
      synopsis:
        "When Kousei Matsumoto finds a a man apparently suffering from heatstroke alone out on the street, he takes him despite his better judgement. The young man is a mystery with a scar he won't explain, and the only clue to his past is the whispered name “Mori.” Despite this, Kousei finds his heart becoming entangled, and the pair forge a fragile relationship. When the past literally comes knocking at his door and the truth of the young man's true identity comes out, Kousei comes to a decision that literally tears the pair apart. But is it the right choice, and can the lonely, waif-like stray face his past and forge a future that includes Kousei?\n(Source Digital Manga)",
      description:
        "When Kousei Matsumoto finds a a man apparently suffering from heatstroke alone out on the street, he takes him despite his better judgement. The young man is a mystery with a scar he won't explain, and the only clue to his past is the whispered name “Mori.” Despite this, Kousei finds his heart becoming entangled, and the pair forge a fragile relationship. When the past literally comes knocking at his door and the truth of the young man's true identity comes out, Kousei comes to a decision that literally tears the pair apart. But is it the right choice, and can the lonely, waif-like stray face his past and forge a future that includes Kousei?\n(Source Digital Manga)",
      coverImageTopOffset: 0,
      titles: {
        en: 'The Pain in My Heart',
        en_jp: 'Boku no Mune ga Itakutemo - Glass',
        en_us: 'The Pain in My Heart',
        ja_jp: 'ぼくの胸が痛くても GLASS',
      },
      canonicalTitle: 'Boku no Mune ga Itakutemo - Glass',
      abbreviatedTitles: [],
      averageRating: null,
      ratingFrequencies: {
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
        '9': '0',
        '10': '0',
        '11': '0',
        '12': '1',
        '13': '1',
        '14': '0',
        '15': '0',
        '16': '0',
        '17': '0',
        '18': '0',
        '19': '0',
        '20': '1',
      },
      userCount: 14,
      favoritesCount: 0,
      startDate: '2006-01-01',
      endDate: '2006-01-01',
      nextRelease: null,
      popularityRank: 30637,
      ratingRank: null,
      ageRating: 'PG',
      ageRatingGuide: null,
      subtype: 'manga',
      status: 'finished',
      tba: null,
      posterImage: {
        tiny: 'https://media.kitsu.io/manga/2/poster_image/tiny-43a600639bb9b74e9a73b3e0ea2067aa.jpeg',
        large:
          'https://media.kitsu.io/manga/2/poster_image/large-d3fd8ae93e6621deb2f46dc66aaec749.jpeg',
        small:
          'https://media.kitsu.io/manga/2/poster_image/small-abcfd52c0f0970063481da8b74633e0c.jpeg',
        medium:
          'https://media.kitsu.io/manga/2/poster_image/medium-4008eba46e0f10fa5d58df7497b005a6.jpeg',
        original: 'https://media.kitsu.io/manga/poster_images/2/original.jpg',
        meta: {
          dimensions: {
            tiny: {
              width: 110,
              height: 156,
            },
            large: {
              width: 550,
              height: 780,
            },
            small: {
              width: 284,
              height: 402,
            },
            medium: {
              width: 390,
              height: 554,
            },
          },
        },
      },
      coverImage: null,
      chapterCount: null,
      volumeCount: 1,
      serialization: 'Aqua Comics',
      mangaType: 'manga',
    },
    relationships: {
      genres: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/genres',
          related: 'https://kitsu.io/api/edge/manga/2/genres',
        },
      },
      categories: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/categories',
          related: 'https://kitsu.io/api/edge/manga/2/categories',
        },
      },
      castings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/castings',
          related: 'https://kitsu.io/api/edge/manga/2/castings',
        },
      },
      installments: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/installments',
          related: 'https://kitsu.io/api/edge/manga/2/installments',
        },
      },
      mappings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/mappings',
          related: 'https://kitsu.io/api/edge/manga/2/mappings',
        },
      },
      reviews: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/reviews',
          related: 'https://kitsu.io/api/edge/manga/2/reviews',
        },
      },
      mediaRelationships: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/media-relationships',
          related: 'https://kitsu.io/api/edge/manga/2/media-relationships',
        },
      },
      characters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/characters',
          related: 'https://kitsu.io/api/edge/manga/2/characters',
        },
      },
      staff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/staff',
          related: 'https://kitsu.io/api/edge/manga/2/staff',
        },
      },
      productions: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/productions',
          related: 'https://kitsu.io/api/edge/manga/2/productions',
        },
      },
      quotes: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/quotes',
          related: 'https://kitsu.io/api/edge/manga/2/quotes',
        },
      },
      chapters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/chapters',
          related: 'https://kitsu.io/api/edge/manga/2/chapters',
        },
      },
      mangaCharacters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/manga-characters',
          related: 'https://kitsu.io/api/edge/manga/2/manga-characters',
        },
      },
      mangaStaff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/2/relationships/manga-staff',
          related: 'https://kitsu.io/api/edge/manga/2/manga-staff',
        },
      },
    },
  },
  {
    id: '4',
    type: 'manga',
    links: {
      self: 'https://kitsu.io/api/edge/manga/4',
    },
    attributes: {
      createdAt: '2013-12-18T13:48:25.068Z',
      updatedAt: '2023-03-15T16:38:01.489Z',
      slug: 'monster',
      synopsis:
        "Dr. Kenzo Tenma is a renowned young brain surgeon of Japanese descent working in Europe. Highly lauded by his peers as one of the great young minds that will revolutionize the field, he is blessed with a beautiful fiancé and is on the cusp of a high promotion in the hospital he works at. However, all of that is about to change with one critical decision that Dr. Tenma faces one night – whether to save the life of a young child or that of the town's mayor. Despite being pressured by his superiors to perform surgery on the mayor, his morals force him to perform the surgery on the young child, saving his life and forfeiting the mayor’s. All of a sudden, Dr. Tenma’s world is turned upside down by his decision leading to the loss of everything he previously had. A doctor is taught to believe that all life is equal; however, when a series of murders occur in the vicinity of Dr. Tenma, all of the evidence pointing to the young child who he saved, Tenma’s beliefs are shaken.\nNaoki Urasawa’s Monster is a tale full of mystery, suspense and intrigue as Dr. Tenma journeys to find out the true identity of the young child. In turn, the fate of the world may depend on it.\n\n(Source: MAL Rewrite)",
      description:
        "Dr. Kenzo Tenma is a renowned young brain surgeon of Japanese descent working in Europe. Highly lauded by his peers as one of the great young minds that will revolutionize the field, he is blessed with a beautiful fiancé and is on the cusp of a high promotion in the hospital he works at. However, all of that is about to change with one critical decision that Dr. Tenma faces one night – whether to save the life of a young child or that of the town's mayor. Despite being pressured by his superiors to perform surgery on the mayor, his morals force him to perform the surgery on the young child, saving his life and forfeiting the mayor’s. All of a sudden, Dr. Tenma’s world is turned upside down by his decision leading to the loss of everything he previously had. A doctor is taught to believe that all life is equal; however, when a series of murders occur in the vicinity of Dr. Tenma, all of the evidence pointing to the young child who he saved, Tenma’s beliefs are shaken.\nNaoki Urasawa’s Monster is a tale full of mystery, suspense and intrigue as Dr. Tenma journeys to find out the true identity of the young child. In turn, the fate of the world may depend on it.\n\n(Source: MAL Rewrite)",
      coverImageTopOffset: 240,
      titles: {
        en: 'Monster',
        en_jp: 'Monster',
        ja_jp: 'MONSTER',
      },
      canonicalTitle: 'Monster',
      abbreviatedTitles: [],
      averageRating: '82.55',
      ratingFrequencies: {
        '2': '426',
        '3': '3',
        '4': '16',
        '5': '2',
        '6': '6',
        '7': '8',
        '8': '267',
        '9': '5',
        '10': '30',
        '11': '4',
        '12': '71',
        '13': '12',
        '14': '352',
        '15': '19',
        '16': '462',
        '17': '89',
        '18': '996',
        '19': '132',
        '20': '2570',
      },
      userCount: 8659,
      favoritesCount: 475,
      startDate: '1994-12-05',
      endDate: '2001-12-20',
      nextRelease: null,
      popularityRank: 72,
      ratingRank: 63,
      ageRating: 'R',
      ageRatingGuide: null,
      subtype: 'manga',
      status: 'finished',
      tba: null,
      posterImage: {
        tiny: 'https://media.kitsu.io/manga/4/poster_image/tiny-b6046bd99006e4d7b5f4983c6498bff6.jpeg',
        large:
          'https://media.kitsu.io/manga/4/poster_image/large-26c815f31d36f3b2854d777da1667370.jpeg',
        small:
          'https://media.kitsu.io/manga/4/poster_image/small-a666f4d3bb68de876db7248b330f15ad.jpeg',
        medium:
          'https://media.kitsu.io/manga/4/poster_image/medium-18f76cdf3dc4e1b3452c0b0676715c95.jpeg',
        original:
          'https://media.kitsu.io/manga/4/poster_image/ff09ab66593cfb99d47d27fafec9cf0f.jpg',
        meta: {
          dimensions: {
            tiny: {
              width: 110,
              height: 156,
            },
            large: {
              width: 550,
              height: 780,
            },
            small: {
              width: 284,
              height: 402,
            },
            medium: {
              width: 390,
              height: 554,
            },
          },
        },
      },
      coverImage: {
        tiny: 'https://media.kitsu.io/manga/4/cover_image/tiny-9e17624e93f65fd31b320dfae5197ce5.jpeg',
        large:
          'https://media.kitsu.io/manga/4/cover_image/large-bc1d8c96b684b4a4388bb9ef38735d9a.jpeg',
        small:
          'https://media.kitsu.io/manga/4/cover_image/small-9529827a2f5f0c942740c22216cdad5e.jpeg',
        original: 'https://media.kitsu.io/manga/4/cover_image/4c1e2a6c1fd202ebc2aba5bcbaff56d0.png',
        meta: {
          dimensions: {
            tiny: {
              width: 840,
              height: 200,
            },
            large: {
              width: 3360,
              height: 800,
            },
            small: {
              width: 1680,
              height: 400,
            },
          },
        },
      },
      chapterCount: 162,
      volumeCount: 18,
      serialization: 'Big Comic Original',
      mangaType: 'manga',
    },
    relationships: {
      genres: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/genres',
          related: 'https://kitsu.io/api/edge/manga/4/genres',
        },
      },
      categories: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/categories',
          related: 'https://kitsu.io/api/edge/manga/4/categories',
        },
      },
      castings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/castings',
          related: 'https://kitsu.io/api/edge/manga/4/castings',
        },
      },
      installments: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/installments',
          related: 'https://kitsu.io/api/edge/manga/4/installments',
        },
      },
      mappings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/mappings',
          related: 'https://kitsu.io/api/edge/manga/4/mappings',
        },
      },
      reviews: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/reviews',
          related: 'https://kitsu.io/api/edge/manga/4/reviews',
        },
      },
      mediaRelationships: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/media-relationships',
          related: 'https://kitsu.io/api/edge/manga/4/media-relationships',
        },
      },
      characters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/characters',
          related: 'https://kitsu.io/api/edge/manga/4/characters',
        },
      },
      staff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/staff',
          related: 'https://kitsu.io/api/edge/manga/4/staff',
        },
      },
      productions: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/productions',
          related: 'https://kitsu.io/api/edge/manga/4/productions',
        },
      },
      quotes: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/quotes',
          related: 'https://kitsu.io/api/edge/manga/4/quotes',
        },
      },
      chapters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/chapters',
          related: 'https://kitsu.io/api/edge/manga/4/chapters',
        },
      },
      mangaCharacters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/manga-characters',
          related: 'https://kitsu.io/api/edge/manga/4/manga-characters',
        },
      },
      mangaStaff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/4/relationships/manga-staff',
          related: 'https://kitsu.io/api/edge/manga/4/manga-staff',
        },
      },
    },
  },
  {
    id: '6',
    type: 'manga',
    links: {
      self: 'https://kitsu.io/api/edge/manga/6',
    },
    attributes: {
      createdAt: '2013-12-18T13:48:25.220Z',
      updatedAt: '2023-03-15T12:00:12.264Z',
      slug: 'renai-soukanzu',
      synopsis:
        'Collection of oneshots:\n1) Pink Sweets\n2) Story of Bishounen Love\n3) Cats &amp; Aprons\n5) Strawberry on the Shortcake',
      description:
        'Collection of oneshots:\n1) Pink Sweets\n2) Story of Bishounen Love\n3) Cats &amp; Aprons\n5) Strawberry on the Shortcake',
      coverImageTopOffset: 0,
      titles: {
        en: null,
        en_jp: 'Renai Soukanzu',
        ja_jp: '恋愛相姦図',
      },
      canonicalTitle: 'Renai Soukanzu',
      abbreviatedTitles: ['Renai Sokanzu', 'Pink Sweets'],
      averageRating: null,
      ratingFrequencies: {
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
        '9': '0',
        '10': '2',
        '11': '0',
        '12': '2',
        '13': '0',
        '14': '1',
        '15': '0',
        '16': '1',
        '17': '0',
        '18': '0',
        '19': '0',
        '20': '0',
      },
      userCount: 19,
      favoritesCount: 0,
      startDate: '2005-07-30',
      endDate: '2005-07-30',
      nextRelease: null,
      popularityRank: 25726,
      ratingRank: null,
      ageRating: 'PG',
      ageRatingGuide: null,
      subtype: 'manga',
      status: 'finished',
      tba: null,
      posterImage: {
        tiny: 'https://media.kitsu.io/manga/6/poster_image/tiny-55b48758be215782e26af37fe14ff87e.jpeg',
        large:
          'https://media.kitsu.io/manga/6/poster_image/large-136b19305c8f19dc64d9c9213f5b0943.jpeg',
        small:
          'https://media.kitsu.io/manga/6/poster_image/small-a85e48241014d4ca434ed168f7b5435a.jpeg',
        medium:
          'https://media.kitsu.io/manga/6/poster_image/medium-29f84820585675f5d9dd8cdf2b424df0.jpeg',
        original: 'https://media.kitsu.io/manga/poster_images/6/original.jpg',
        meta: {
          dimensions: {
            tiny: {
              width: 110,
              height: 156,
            },
            large: {
              width: 550,
              height: 780,
            },
            small: {
              width: 284,
              height: 402,
            },
            medium: {
              width: 390,
              height: 554,
            },
          },
        },
      },
      coverImage: null,
      chapterCount: 7,
      volumeCount: 1,
      serialization: null,
      mangaType: 'manga',
    },
    relationships: {
      genres: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/genres',
          related: 'https://kitsu.io/api/edge/manga/6/genres',
        },
      },
      categories: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/categories',
          related: 'https://kitsu.io/api/edge/manga/6/categories',
        },
      },
      castings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/castings',
          related: 'https://kitsu.io/api/edge/manga/6/castings',
        },
      },
      installments: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/installments',
          related: 'https://kitsu.io/api/edge/manga/6/installments',
        },
      },
      mappings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/mappings',
          related: 'https://kitsu.io/api/edge/manga/6/mappings',
        },
      },
      reviews: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/reviews',
          related: 'https://kitsu.io/api/edge/manga/6/reviews',
        },
      },
      mediaRelationships: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/media-relationships',
          related: 'https://kitsu.io/api/edge/manga/6/media-relationships',
        },
      },
      characters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/characters',
          related: 'https://kitsu.io/api/edge/manga/6/characters',
        },
      },
      staff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/staff',
          related: 'https://kitsu.io/api/edge/manga/6/staff',
        },
      },
      productions: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/productions',
          related: 'https://kitsu.io/api/edge/manga/6/productions',
        },
      },
      quotes: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/quotes',
          related: 'https://kitsu.io/api/edge/manga/6/quotes',
        },
      },
      chapters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/chapters',
          related: 'https://kitsu.io/api/edge/manga/6/chapters',
        },
      },
      mangaCharacters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/manga-characters',
          related: 'https://kitsu.io/api/edge/manga/6/manga-characters',
        },
      },
      mangaStaff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/6/relationships/manga-staff',
          related: 'https://kitsu.io/api/edge/manga/6/manga-staff',
        },
      },
    },
  },
  {
    id: '7',
    type: 'manga',
    links: {
      self: 'https://kitsu.io/api/edge/manga/7',
    },
    attributes: {
      createdAt: '2013-12-18T13:48:25.327Z',
      updatedAt: '2023-03-15T12:00:12.264Z',
      slug: 'hito-wa-ai-wo-tabete-sodatsu',
      synopsis:
        '"A child who wasn\'t loved while small, when he becomes an adult remains a child."\nA timid art teacher, over forty but still confused by love, despairs of ever finding a companion. A love-starved boy watches the kindness of families all around him, but insists he doesn\'t need anything like that. A college student living with his long-term partner purposely tantalizes a neighbor by loudly making love. A bassist fears "weirding out" his bandmates, so he keeps his life with his male lover under wraps. A contrary professor gives himself to a self-assured colleague one night, but it\'s not what either of them expect.\n(Source: DMG)',
      description:
        '"A child who wasn\'t loved while small, when he becomes an adult remains a child."\nA timid art teacher, over forty but still confused by love, despairs of ever finding a companion. A love-starved boy watches the kindness of families all around him, but insists he doesn\'t need anything like that. A college student living with his long-term partner purposely tantalizes a neighbor by loudly making love. A bassist fears "weirding out" his bandmates, so he keeps his life with his male lover under wraps. A contrary professor gives himself to a self-assured colleague one night, but it\'s not what either of them expect.\n(Source: DMG)',
      coverImageTopOffset: 0,
      titles: {
        en: 'Love Makes People Grow',
        en_jp: 'Hito wa Ai wo Tabete Sodatsu',
        en_us: 'Love Makes People Grow',
        ja_jp: '人は愛を食べて育つ',
      },
      canonicalTitle: 'Hito wa Ai wo Tabete Sodatsu',
      abbreviatedTitles: ['Eat Love and Grow', 'Hito wa ai o tabete sodatsu'],
      averageRating: null,
      ratingFrequencies: {
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
        '9': '0',
        '10': '0',
        '11': '0',
        '12': '0',
        '13': '0',
        '14': '1',
        '15': '0',
        '16': '1',
        '17': '0',
        '18': '1',
        '19': '0',
        '20': '0',
      },
      userCount: 11,
      favoritesCount: 0,
      startDate: '2006-01-01',
      endDate: null,
      nextRelease: null,
      popularityRank: 34788,
      ratingRank: null,
      ageRating: 'PG',
      ageRatingGuide: null,
      subtype: 'manga',
      status: 'current',
      tba: null,
      posterImage: {
        tiny: 'https://media.kitsu.io/manga/7/poster_image/tiny-180ea02e7bc126443e51029b8b59adef.jpeg',
        large:
          'https://media.kitsu.io/manga/7/poster_image/large-ff1df5774e072a1466fe4ad2d56504a0.jpeg',
        small:
          'https://media.kitsu.io/manga/7/poster_image/small-ed49ac321f6203803b904051c17c80e5.jpeg',
        medium:
          'https://media.kitsu.io/manga/7/poster_image/medium-46a6b2cb2bf18062583cc64cd24b4443.jpeg',
        original: 'https://media.kitsu.io/manga/poster_images/7/original.jpg',
        meta: {
          dimensions: {
            tiny: {
              width: 110,
              height: 156,
            },
            large: {
              width: 550,
              height: 780,
            },
            small: {
              width: 284,
              height: 402,
            },
            medium: {
              width: 390,
              height: 554,
            },
          },
        },
      },
      coverImage: null,
      chapterCount: 9,
      volumeCount: 1,
      serialization: null,
      mangaType: 'manga',
    },
    relationships: {
      genres: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/genres',
          related: 'https://kitsu.io/api/edge/manga/7/genres',
        },
      },
      categories: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/categories',
          related: 'https://kitsu.io/api/edge/manga/7/categories',
        },
      },
      castings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/castings',
          related: 'https://kitsu.io/api/edge/manga/7/castings',
        },
      },
      installments: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/installments',
          related: 'https://kitsu.io/api/edge/manga/7/installments',
        },
      },
      mappings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/mappings',
          related: 'https://kitsu.io/api/edge/manga/7/mappings',
        },
      },
      reviews: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/reviews',
          related: 'https://kitsu.io/api/edge/manga/7/reviews',
        },
      },
      mediaRelationships: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/media-relationships',
          related: 'https://kitsu.io/api/edge/manga/7/media-relationships',
        },
      },
      characters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/characters',
          related: 'https://kitsu.io/api/edge/manga/7/characters',
        },
      },
      staff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/staff',
          related: 'https://kitsu.io/api/edge/manga/7/staff',
        },
      },
      productions: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/productions',
          related: 'https://kitsu.io/api/edge/manga/7/productions',
        },
      },
      quotes: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/quotes',
          related: 'https://kitsu.io/api/edge/manga/7/quotes',
        },
      },
      chapters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/chapters',
          related: 'https://kitsu.io/api/edge/manga/7/chapters',
        },
      },
      mangaCharacters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/manga-characters',
          related: 'https://kitsu.io/api/edge/manga/7/manga-characters',
        },
      },
      mangaStaff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/7/relationships/manga-staff',
          related: 'https://kitsu.io/api/edge/manga/7/manga-staff',
        },
      },
    },
  },
  apiTestMangaItem,
  {
    id: '9',
    type: 'manga',
    links: {
      self: 'https://kitsu.io/api/edge/manga/9',
    },
    attributes: {
      createdAt: '2013-12-18T13:48:25.518Z',
      updatedAt: '2023-03-15T12:00:12.264Z',
      slug: 'anata-e-no-tsuki',
      synopsis:
        'Collection of 5 one shots:\n- Anata e no Tsuki (Moon for You)\n- Kataomoi no Sono Saki (Beyond A One-Sided Love)\n- 7-ho-me no Mirai\n- Kare ga Kanojo ni Nozomu Mono (What He Expects of Her)\n- Spring.',
      description:
        'Collection of 5 one shots:\n- Anata e no Tsuki (Moon for You)\n- Kataomoi no Sono Saki (Beyond A One-Sided Love)\n- 7-ho-me no Mirai\n- Kare ga Kanojo ni Nozomu Mono (What He Expects of Her)\n- Spring.',
      coverImageTopOffset: 0,
      titles: {
        en: null,
        en_jp: 'Anata e no Tsuki',
        ja_jp: 'あなたへの月',
      },
      canonicalTitle: 'Anata e no Tsuki',
      abbreviatedTitles: [
        'Moon For You',
        'Kataomoi no Sono Saki',
        'Beyond A One-Sided Love',
        '7-ho-me no Mirai',
        'The 7th Second Future',
        'Kare ga Kanojo ni Nozomu Mono',
        'What He Expects of Her',
        'Spring.',
      ],
      averageRating: null,
      ratingFrequencies: {
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '2',
        '7': '0',
        '8': '1',
        '9': '0',
        '10': '4',
        '11': '0',
        '12': '6',
        '13': '0',
        '14': '20',
        '15': '0',
        '16': '4',
        '17': '0',
        '18': '0',
        '19': '0',
        '20': '4',
      },
      userCount: 167,
      favoritesCount: 0,
      startDate: '2005-04-15',
      endDate: '2005-04-15',
      nextRelease: null,
      popularityRank: 6100,
      ratingRank: null,
      ageRating: 'PG',
      ageRatingGuide: '',
      subtype: 'manga',
      status: 'finished',
      tba: '',
      posterImage: {
        tiny: 'https://media.kitsu.io/manga/9/poster_image/tiny-303ec329e80010b543ad1cd2fc29884b.jpeg',
        large:
          'https://media.kitsu.io/manga/9/poster_image/large-e4865bfdec71cd3a0db5c26bc8329e0b.jpeg',
        small:
          'https://media.kitsu.io/manga/9/poster_image/small-bf1ad74beb9bb74df0436f887c60ab6f.jpeg',
        medium:
          'https://media.kitsu.io/manga/9/poster_image/medium-614ae8ad5b508a7db0989cda0686eef4.jpeg',
        original: 'https://media.kitsu.io/manga/poster_images/9/original.jpg',
        meta: {
          dimensions: {
            tiny: {
              width: 110,
              height: 156,
            },
            large: {
              width: 550,
              height: 780,
            },
            small: {
              width: 284,
              height: 402,
            },
            medium: {
              width: 390,
              height: 554,
            },
          },
        },
      },
      coverImage: null,
      chapterCount: 5,
      volumeCount: 1,
      serialization: 'Ribon Magazine',
      mangaType: 'manga',
    },
    relationships: {
      genres: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/genres',
          related: 'https://kitsu.io/api/edge/manga/9/genres',
        },
      },
      categories: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/categories',
          related: 'https://kitsu.io/api/edge/manga/9/categories',
        },
      },
      castings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/castings',
          related: 'https://kitsu.io/api/edge/manga/9/castings',
        },
      },
      installments: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/installments',
          related: 'https://kitsu.io/api/edge/manga/9/installments',
        },
      },
      mappings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/mappings',
          related: 'https://kitsu.io/api/edge/manga/9/mappings',
        },
      },
      reviews: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/reviews',
          related: 'https://kitsu.io/api/edge/manga/9/reviews',
        },
      },
      mediaRelationships: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/media-relationships',
          related: 'https://kitsu.io/api/edge/manga/9/media-relationships',
        },
      },
      characters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/characters',
          related: 'https://kitsu.io/api/edge/manga/9/characters',
        },
      },
      staff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/staff',
          related: 'https://kitsu.io/api/edge/manga/9/staff',
        },
      },
      productions: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/productions',
          related: 'https://kitsu.io/api/edge/manga/9/productions',
        },
      },
      quotes: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/quotes',
          related: 'https://kitsu.io/api/edge/manga/9/quotes',
        },
      },
      chapters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/chapters',
          related: 'https://kitsu.io/api/edge/manga/9/chapters',
        },
      },
      mangaCharacters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/manga-characters',
          related: 'https://kitsu.io/api/edge/manga/9/manga-characters',
        },
      },
      mangaStaff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/9/relationships/manga-staff',
          related: 'https://kitsu.io/api/edge/manga/9/manga-staff',
        },
      },
    },
  },
  {
    id: '12',
    type: 'manga',
    links: {
      self: 'https://kitsu.io/api/edge/manga/12',
    },
    attributes: {
      createdAt: '2013-12-18T13:48:25.831Z',
      updatedAt: '2023-03-15T16:38:00.065Z',
      slug: '20th-century-boys',
      synopsis:
        "Humanity, having faced extinction at the end of the 20th century, would not have entered the new millennium if it weren't for them. In 1969, during their youth, they created a symbol. In 1997, as the coming disaster slowly starts to unfold, that symbol returns. This is the story of a group of boys who try to save the world.\n\nFor Kenji, a simple convenience store manager who once dreamed of becoming a rock 'n' roll musician, a host of memories from his past come rushing back when one of his childhood friends mysteriously commits suicide. Could this new death be related to the rise of a bizarre new cult that's been implicated in several other murders and disappearances? Determined to dig deeper, Kenji reunites with some of his old buddies in the hope of learning the truth behind it all.\n\n(Source: Viz)",
      description:
        "Humanity, having faced extinction at the end of the 20th century, would not have entered the new millennium if it weren't for them. In 1969, during their youth, they created a symbol. In 1997, as the coming disaster slowly starts to unfold, that symbol returns. This is the story of a group of boys who try to save the world.\n\nFor Kenji, a simple convenience store manager who once dreamed of becoming a rock 'n' roll musician, a host of memories from his past come rushing back when one of his childhood friends mysteriously commits suicide. Could this new death be related to the rise of a bizarre new cult that's been implicated in several other murders and disappearances? Determined to dig deeper, Kenji reunites with some of his old buddies in the hope of learning the truth behind it all.\n\n(Source: Viz)",
      coverImageTopOffset: 0,
      titles: {
        en: '20th Century Boys',
        en_jp: '20th Century Boys',
        en_us: '20th Century Boys',
        ja_jp: '20世紀少年',
      },
      canonicalTitle: '20th Century Boys',
      abbreviatedTitles: [
        '20 Seiki Shounen',
        'Nijuu Seiki Shounen',
        'Nijuusseiki Shounen',
        '20thCB',
      ],
      averageRating: '82.51',
      ratingFrequencies: {
        '2': '283',
        '3': '3',
        '4': '8',
        '5': '3',
        '6': '13',
        '7': '8',
        '8': '224',
        '9': '4',
        '10': '52',
        '11': '5',
        '12': '136',
        '13': '-3',
        '14': '423',
        '15': '31',
        '16': '555',
        '17': '72',
        '18': '1002',
        '19': '101',
        '20': '2053',
      },
      userCount: 9594,
      favoritesCount: 487,
      startDate: '1999-09-27',
      endDate: '2006-04-24',
      nextRelease: null,
      popularityRank: 62,
      ratingRank: 86,
      ageRating: null,
      ageRatingGuide: null,
      subtype: 'manga',
      status: 'finished',
      tba: null,
      posterImage: {
        original:
          'https://media.kitsu.io/manga/12/poster_image/af72036715dff17b2e64b5cda446c6f0.webp',
        meta: {
          dimensions: {},
        },
      },
      coverImage: {
        tiny: 'https://media.kitsu.io/manga/12/cover_image/tiny-d050a4922bf1548881e3348c9b47feb3.gif',
        large:
          'https://media.kitsu.io/manga/12/cover_image/large-21a29ae018a59b00a54e79bec20b6a99.gif',
        small:
          'https://media.kitsu.io/manga/12/cover_image/small-03c1021229c3723c26044773cf62a521.gif',
        tiny_webp:
          'https://media.kitsu.io/manga/12/cover_image/tiny_webp-3482ea44fe7a9312cd3be446475e1237.webp',
        large_webp:
          'https://media.kitsu.io/manga/12/cover_image/large_webp-ca31d57bcbd3d3fd5925d69b4ea7ceb1.webp',
        small_webp:
          'https://media.kitsu.io/manga/12/cover_image/small_webp-e12ab963cca9e216171a3df3513d0565.webp',
        original: 'https://media.kitsu.io/manga/cover_images/12/original.jpg',
        meta: {
          dimensions: {
            tiny: {
              width: 840,
              height: 200,
            },
            large: {
              width: 3360,
              height: 800,
            },
            small: {
              width: 1680,
              height: 400,
            },
            tiny_webp: {
              width: 840,
              height: 200,
            },
            large_webp: {
              width: 3360,
              height: 800,
            },
            small_webp: {
              width: 1680,
              height: 400,
            },
          },
        },
      },
      chapterCount: 249,
      volumeCount: 22,
      serialization: 'Big Comic Spirits',
      mangaType: 'manga',
    },
    relationships: {
      genres: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/genres',
          related: 'https://kitsu.io/api/edge/manga/12/genres',
        },
      },
      categories: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/categories',
          related: 'https://kitsu.io/api/edge/manga/12/categories',
        },
      },
      castings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/castings',
          related: 'https://kitsu.io/api/edge/manga/12/castings',
        },
      },
      installments: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/installments',
          related: 'https://kitsu.io/api/edge/manga/12/installments',
        },
      },
      mappings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/mappings',
          related: 'https://kitsu.io/api/edge/manga/12/mappings',
        },
      },
      reviews: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/reviews',
          related: 'https://kitsu.io/api/edge/manga/12/reviews',
        },
      },
      mediaRelationships: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/media-relationships',
          related: 'https://kitsu.io/api/edge/manga/12/media-relationships',
        },
      },
      characters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/characters',
          related: 'https://kitsu.io/api/edge/manga/12/characters',
        },
      },
      staff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/staff',
          related: 'https://kitsu.io/api/edge/manga/12/staff',
        },
      },
      productions: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/productions',
          related: 'https://kitsu.io/api/edge/manga/12/productions',
        },
      },
      quotes: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/quotes',
          related: 'https://kitsu.io/api/edge/manga/12/quotes',
        },
      },
      chapters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/chapters',
          related: 'https://kitsu.io/api/edge/manga/12/chapters',
        },
      },
      mangaCharacters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/manga-characters',
          related: 'https://kitsu.io/api/edge/manga/12/manga-characters',
        },
      },
      mangaStaff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/12/relationships/manga-staff',
          related: 'https://kitsu.io/api/edge/manga/12/manga-staff',
        },
      },
    },
  },
  {
    id: '13',
    type: 'manga',
    links: {
      self: 'https://kitsu.io/api/edge/manga/13',
    },
    attributes: {
      createdAt: '2013-12-18T13:48:26.032Z',
      updatedAt: '2023-03-15T12:00:12.264Z',
      slug: 'simple-knot-loafers',
      synopsis:
        'No synopsis has been added for this manga yet.Click here to update this information.',
      description:
        'No synopsis has been added for this manga yet.Click here to update this information.',
      coverImageTopOffset: 0,
      titles: {
        en: null,
        en_jp: 'Simple Knot Loafers',
        en_us: 'Simple Knot Loafers',
        ja_jp: 'シンプルノットローファー',
      },
      canonicalTitle: 'Simple Knot Loafers',
      abbreviatedTitles: ['Shinpuru Notto Rofa', 'Shinpuru Notto Roofaa', 'Simple Not Loafer'],
      averageRating: null,
      ratingFrequencies: {
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '0',
        '9': '0',
        '10': '0',
        '11': '0',
        '12': '0',
        '13': '0',
        '14': '0',
        '15': '0',
        '16': '0',
        '17': '0',
        '18': '0',
        '19': '0',
        '20': '0',
      },
      userCount: 9,
      favoritesCount: 0,
      startDate: null,
      endDate: null,
      nextRelease: null,
      popularityRank: 40327,
      ratingRank: null,
      ageRating: null,
      ageRatingGuide: null,
      subtype: 'manga',
      status: 'tba',
      tba: null,
      posterImage: {
        tiny: 'https://media.kitsu.io/manga/13/poster_image/tiny-4e442c37e26bb53de73ec17f35f83ed9.jpeg',
        large:
          'https://media.kitsu.io/manga/13/poster_image/large-e087fb587089ab681667c4ff190b028f.jpeg',
        small:
          'https://media.kitsu.io/manga/13/poster_image/small-4e049fe74a83f4e62e966cc6332eb446.jpeg',
        medium:
          'https://media.kitsu.io/manga/13/poster_image/medium-d4a37032cdfa43b0b6f27ebaf93f4777.jpeg',
        original: 'https://media.kitsu.io/manga/poster_images/13/original.jpg',
        meta: {
          dimensions: {
            tiny: {
              width: 110,
              height: 156,
            },
            large: {
              width: 550,
              height: 780,
            },
            small: {
              width: 284,
              height: 402,
            },
            medium: {
              width: 390,
              height: 554,
            },
          },
        },
      },
      coverImage: null,
      chapterCount: null,
      volumeCount: 1,
      serialization: null,
      mangaType: 'manga',
    },
    relationships: {
      genres: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/genres',
          related: 'https://kitsu.io/api/edge/manga/13/genres',
        },
      },
      categories: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/categories',
          related: 'https://kitsu.io/api/edge/manga/13/categories',
        },
      },
      castings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/castings',
          related: 'https://kitsu.io/api/edge/manga/13/castings',
        },
      },
      installments: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/installments',
          related: 'https://kitsu.io/api/edge/manga/13/installments',
        },
      },
      mappings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/mappings',
          related: 'https://kitsu.io/api/edge/manga/13/mappings',
        },
      },
      reviews: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/reviews',
          related: 'https://kitsu.io/api/edge/manga/13/reviews',
        },
      },
      mediaRelationships: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/media-relationships',
          related: 'https://kitsu.io/api/edge/manga/13/media-relationships',
        },
      },
      characters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/characters',
          related: 'https://kitsu.io/api/edge/manga/13/characters',
        },
      },
      staff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/staff',
          related: 'https://kitsu.io/api/edge/manga/13/staff',
        },
      },
      productions: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/productions',
          related: 'https://kitsu.io/api/edge/manga/13/productions',
        },
      },
      quotes: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/quotes',
          related: 'https://kitsu.io/api/edge/manga/13/quotes',
        },
      },
      chapters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/chapters',
          related: 'https://kitsu.io/api/edge/manga/13/chapters',
        },
      },
      mangaCharacters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/manga-characters',
          related: 'https://kitsu.io/api/edge/manga/13/manga-characters',
        },
      },
      mangaStaff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/13/relationships/manga-staff',
          related: 'https://kitsu.io/api/edge/manga/13/manga-staff',
        },
      },
    },
  },
  {
    id: '14',
    type: 'manga',
    links: {
      self: 'https://kitsu.io/api/edge/manga/14',
    },
    attributes: {
      createdAt: '2013-12-18T13:48:26.111Z',
      updatedAt: '2023-03-15T12:00:12.264Z',
      slug: 'shinjitsu-no-kimi-wo-tsukamaetai-of-montage',
      synopsis:
        'No synopsis has been added for this manga yet.Click here to update this information.',
      description:
        'No synopsis has been added for this manga yet.Click here to update this information.',
      coverImageTopOffset: 0,
      titles: {
        en: 'Shinjitsu no Kimi o Tsukamaetai - Of Montage',
        en_jp: 'Shinjitsu no Kimi wo Tsukamaetai: Of Montage',
        ja_jp: '真実のキミを捕まえたい～of montage～',
      },
      canonicalTitle: 'Shinjitsu no Kimi wo Tsukamaetai: Of Montage',
      abbreviatedTitles: ['Shinjitsu no Kimi o Tsukamaetai: Of Montage'],
      averageRating: null,
      ratingFrequencies: {
        '2': '0',
        '3': '0',
        '4': '0',
        '5': '0',
        '6': '0',
        '7': '0',
        '8': '1',
        '9': '0',
        '10': '0',
        '11': '0',
        '12': '0',
        '13': '0',
        '14': '0',
        '15': '0',
        '16': '0',
        '17': '0',
        '18': '0',
        '19': '0',
        '20': '3',
      },
      userCount: 11,
      favoritesCount: 0,
      startDate: null,
      endDate: null,
      nextRelease: null,
      popularityRank: 34645,
      ratingRank: null,
      ageRating: 'PG',
      ageRatingGuide: null,
      subtype: 'manga',
      status: 'tba',
      tba: null,
      posterImage: {
        tiny: 'https://media.kitsu.io/manga/14/poster_image/tiny-e4f2a37552c7733843c75b01fa112d50.jpeg',
        large:
          'https://media.kitsu.io/manga/14/poster_image/large-404cd17672ad7e08437cfc40da9291e1.jpeg',
        small:
          'https://media.kitsu.io/manga/14/poster_image/small-3ffb3b83d37f151b12bbe5a474c4766e.jpeg',
        medium:
          'https://media.kitsu.io/manga/14/poster_image/medium-7d1a25ac79f7dd9c9177633a47766360.jpeg',
        original: 'https://media.kitsu.io/manga/poster_images/14/original.jpg',
        meta: {
          dimensions: {
            tiny: {
              width: 110,
              height: 156,
            },
            large: {
              width: 550,
              height: 780,
            },
            small: {
              width: 284,
              height: 402,
            },
            medium: {
              width: 390,
              height: 554,
            },
          },
        },
      },
      coverImage: null,
      chapterCount: null,
      volumeCount: 1,
      serialization: 'HertZ',
      mangaType: 'manga',
    },
    relationships: {
      genres: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/genres',
          related: 'https://kitsu.io/api/edge/manga/14/genres',
        },
      },
      categories: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/categories',
          related: 'https://kitsu.io/api/edge/manga/14/categories',
        },
      },
      castings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/castings',
          related: 'https://kitsu.io/api/edge/manga/14/castings',
        },
      },
      installments: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/installments',
          related: 'https://kitsu.io/api/edge/manga/14/installments',
        },
      },
      mappings: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/mappings',
          related: 'https://kitsu.io/api/edge/manga/14/mappings',
        },
      },
      reviews: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/reviews',
          related: 'https://kitsu.io/api/edge/manga/14/reviews',
        },
      },
      mediaRelationships: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/media-relationships',
          related: 'https://kitsu.io/api/edge/manga/14/media-relationships',
        },
      },
      characters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/characters',
          related: 'https://kitsu.io/api/edge/manga/14/characters',
        },
      },
      staff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/staff',
          related: 'https://kitsu.io/api/edge/manga/14/staff',
        },
      },
      productions: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/productions',
          related: 'https://kitsu.io/api/edge/manga/14/productions',
        },
      },
      quotes: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/quotes',
          related: 'https://kitsu.io/api/edge/manga/14/quotes',
        },
      },
      chapters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/chapters',
          related: 'https://kitsu.io/api/edge/manga/14/chapters',
        },
      },
      mangaCharacters: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/manga-characters',
          related: 'https://kitsu.io/api/edge/manga/14/manga-characters',
        },
      },
      mangaStaff: {
        links: {
          self: 'https://kitsu.io/api/edge/manga/14/relationships/manga-staff',
          related: 'https://kitsu.io/api/edge/manga/14/manga-staff',
        },
      },
    },
  },
];

export const categoriesList: Category[] = [
  {
    id: '46',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/46',
    },
    attributes: {
      createdAt: '2017-05-31T06:38:46.923Z',
      updatedAt: '2021-10-02T01:30:58.534Z',
      title: 'Swordplay',
      description: 'The act or art of using a sword or similar weapon skillfully.',
      totalMediaCount: 507,
      slug: 'swordplay',
      nsfw: false,
      childCount: 1,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/46/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/46/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/46/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/46/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/46/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/46/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/46/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/46/manga',
        },
      },
    },
  },
  {
    id: '49',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/49',
    },
    attributes: {
      createdAt: '2017-05-31T06:38:47.017Z',
      updatedAt: '2021-10-02T01:31:00.191Z',
      title: 'Past',
      description:
        'Anime that takes place in the past or clearly seems to take place in the past in case of an alternative universe. This category should almost always go together with one of its sub-categories, because the past can either be a depiction of a historical event(s) or not, in which case it would be alternative past.',
      totalMediaCount: 618,
      slug: 'past',
      nsfw: false,
      childCount: 2,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/49/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/49/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/49/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/49/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/49/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/49/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/49/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/49/manga',
        },
      },
    },
  },
  {
    id: '52',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/52',
    },
    attributes: {
      createdAt: '2017-05-31T06:38:47.099Z',
      updatedAt: '2021-10-02T01:31:00.535Z',
      title: 'Fantasy World',
      description:
        'A fantasy world is a type of imaginary world, part of a fictional universe. Typical worlds involve, but are not limited to magic or magical abilities and a medieval theme. Some examples include: a parallel world tenuously connected to Earth via magical portals or items; a fictional Earth-like planet in the remote past or future; or an entirely independent world set in another universe. Many fantasy worlds draw heavily on real world history, geography and sociology, and also on folklore.',
      totalMediaCount: 1429,
      slug: 'fantasy-world',
      nsfw: false,
      childCount: 1,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/52/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/52/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/52/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/52/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/52/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/52/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/52/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/52/manga',
        },
      },
    },
  },
  {
    id: '61',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/61',
    },
    attributes: {
      createdAt: '2017-05-31T06:38:49.733Z',
      updatedAt: '2021-10-02T01:31:00.183Z',
      title: 'Alternative Past',
      description:
        "An anime that takes place in an alternative past is an anime that clearly does not belong to the future or the present, and isn't tied particularly closely to our history, or has ties to our history but only as a premise: there are too many things that don't make sense for the time-period. In some cases there is futuristic technology present, but the overall setting still feels that of the past. However the setting must still take place on Earth, since we can not know if the history of a fantasy world is an alternate one or not.",
      totalMediaCount: 155,
      slug: 'alternative-past',
      nsfw: false,
      childCount: 0,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/61/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/61/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/61/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/61/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/61/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/61/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/61/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/61/manga',
        },
      },
    },
  },
  {
    id: '67',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/67',
    },
    attributes: {
      createdAt: '2017-05-31T06:38:49.899Z',
      updatedAt: '2021-10-02T01:30:59.073Z',
      title: 'Demon',
      description:
        'In Western lore, demons are often described as minions from Hell, generally known to attack humans and feast on their flesh or possess the bodies of those with weak souls. In Eastern lore, on the other hand, they are generally supernatural, often but not always malevolent beings who can be more mischievous than actually evil, or simply supernatural spirits of no specific alignment.',
      totalMediaCount: 1720,
      slug: 'demon',
      nsfw: false,
      childCount: 0,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/67/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/67/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/67/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/67/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/67/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/67/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/67/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/67/manga',
        },
      },
    },
  },
  {
    id: '69',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/69',
    },
    attributes: {
      createdAt: '2017-05-31T06:38:49.954Z',
      updatedAt: '2021-10-02T01:30:59.097Z',
      title: 'Contemporary Fantasy',
      description:
        'Contemporary fantasy, also known as modern fantasy or indigenous fantasy, is a sub-genre of fantasy, set in the present day. It is perhaps most popular for its sub-genre, urban fantasy.These terms are used to describe stories set in the putative real world (often referred to as consensus reality) in contemporary times, in which magic and magical creatures exist, either living in the interstices of our world or leaking over from alternate worlds. It thus has much in common with, and sometimes overlaps with secret history; a work of fantasy in which the magic could not remain secret or does not have any known relationship to known history would not fit into this subgenre. Occasionally certain contemporary fantasy novels will make reference to pop culture.Novels in which modern characters travel into alternate worlds, and all the magical action takes place there (except for the portal required to transport them), are not considered contemporary fantasy. Thus, C.S. Lewis\'s The Lion, the Witch and the Wardrobe, where all fantasy events take place in the land of Narnia which is reached via a magic wardrobe, would not count as contemporary fantasy; on the other hand, the part of The Magician\'s Nephew, where the Empress Jadis gets to London, tries to take over the Earth and clashes with police and a crowd of cockneys, would qualify as such.Contemporary fantasy is also to be distinguished from horror fiction, which also often has contemporary settings. When encountering magical events and creatures, the protagonist of a horror novel is horrified, while the protagonist of a fantasy novel (contemporary or otherwise) is filled with a sense of joy and wonder. Horrifying events may happen, but the fundamental distinction is vital.In his preface to That Hideous Strength, one of the earlier works falling within this sub-genre, C.S. Lewis explained why, when writing a tale about "magicians, devils, pantomime animals and planetary angels", he chose to start it with a detailed depiction of narrow-minded academic politics at a provincial English university and the schemes of crooked real estate developers: "I am following the traditional fairy-tale. We do not always notice its method, because the cottages, castles, woodcutters and petty kings with which a fairy tale opens have become for us as remote as the witches and ogres to which it proceeds. But they were not remote at all to the men who first made and enjoyed the tales". The same is true for many of the later works in the genre, which often begin with a seemingly normal scene of modern daily life to then disclose supernatural and magical beings and events hidden behind the scenes.Source: wiki',
      totalMediaCount: 791,
      slug: 'contemporary-fantasy',
      nsfw: false,
      childCount: 0,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/69/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/69/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/69/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/69/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/69/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/69/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/69/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/69/manga',
        },
      },
    },
  },
  {
    id: '70',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/70',
    },
    attributes: {
      createdAt: '2017-05-31T06:38:49.979Z',
      updatedAt: '2021-10-02T01:30:59.110Z',
      title: 'Dark Fantasy',
      description:
        'Focus set on darker themes in a fantasy setting, sometimes leaning towards horror elements. Bleak and pessimistic tones often dominate. Dark supernatural beings like vampires may play a significant role.',
      totalMediaCount: 165,
      slug: 'dark-fantasy',
      nsfw: false,
      childCount: 0,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/70/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/70/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/70/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/70/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/70/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/70/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/70/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/70/manga',
        },
      },
    },
  },
  {
    id: '108',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/108',
    },
    attributes: {
      createdAt: '2017-05-31T06:39:04.202Z',
      updatedAt: '2021-10-02T01:30:58.265Z',
      title: 'Violence',
      description:
        "Physical force against self or other, compelling action against one's will on pain of being hurt.",
      totalMediaCount: 1246,
      slug: 'violence',
      nsfw: false,
      childCount: 0,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/108/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/108/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/108/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/108/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/108/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/108/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/108/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/108/manga',
        },
      },
    },
  },
  {
    id: '118',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/118',
    },
    attributes: {
      createdAt: '2017-05-31T06:39:08.214Z',
      updatedAt: '2021-10-02T01:31:02.269Z',
      title: 'Feudal Warfare',
      description:
        "Feudal Warfare is the warfare of the Middle Ages and therefore the setting must take place in a time line similar to that of Middle Ages or its Asian/American counterparts, or in a fantasy world. Generally it can be described the same way as the Military category, just that the weapons used are swords, spears, bows, catapults, cannons and other weapons used in the Middle Ages.\n\nNote: Just because the anime contains a guy or a couple of guys with swords wondering about, doesn't make it applicable for this category, unless there are larger military organizations/groups involved in armed conflict with each other, you might not want to add this genre.",
      totalMediaCount: 48,
      slug: 'feudal-warfare',
      nsfw: false,
      childCount: 0,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/118/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/118/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/118/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/118/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/118/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/118/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/118/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/118/manga',
        },
      },
    },
  },
  {
    id: '128',
    type: 'categories',
    links: {
      self: 'https://kitsu.io/api/edge/categories/128',
    },
    attributes: {
      createdAt: '2017-05-31T06:39:08.523Z',
      updatedAt: '2021-10-02T01:30:58.291Z',
      title: 'Plot Continuity',
      description:
        'Consistency of the characteristics of persons, plot, objects, places and events seen by the viewer.\n\nA single linear focused plot is highly continuous.\n\nA truly random plot is highly discontinuous.',
      totalMediaCount: 1028,
      slug: 'plot-continuity',
      nsfw: false,
      childCount: 0,
    },
    relationships: {
      parent: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/128/relationships/parent',
          related: 'https://kitsu.io/api/edge/categories/128/parent',
        },
      },
      anime: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/128/relationships/anime',
          related: 'https://kitsu.io/api/edge/categories/128/anime',
        },
      },
      drama: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/128/relationships/drama',
          related: 'https://kitsu.io/api/edge/categories/128/drama',
        },
      },
      manga: {
        links: {
          self: 'https://kitsu.io/api/edge/categories/128/relationships/manga',
          related: 'https://kitsu.io/api/edge/categories/128/manga',
        },
      },
    },
  },
];

export const genresList: Genre[] = [
  {
    id: '1',
    type: 'genres',
    links: {
      self: 'https://kitsu.io/api/edge/genres/1',
    },
    attributes: {
      createdAt: '2013-02-20T16:00:15.623Z',
      updatedAt: '2016-07-17T19:30:56.164Z',
      name: 'Action',
      slug: 'action',
      description: '',
    },
  },
  {
    id: '2',
    type: 'genres',
    links: {
      self: 'https://kitsu.io/api/edge/genres/2',
    },
    attributes: {
      createdAt: '2013-02-20T16:00:15.657Z',
      updatedAt: '2017-04-22T16:11:16.077Z',
      name: 'Adventure',
      slug: 'adventure',
      description: '',
    },
  },
  {
    id: '4',
    type: 'genres',
    links: {
      self: 'https://kitsu.io/api/edge/genres/4',
    },
    attributes: {
      createdAt: '2013-02-20T16:00:15.686Z',
      updatedAt: '2016-06-10T11:23:00.431Z',
      name: 'Drama',
      slug: 'drama',
      description: '',
    },
  },
  {
    id: '9',
    type: 'genres',
    links: {
      self: 'https://kitsu.io/api/edge/genres/9',
    },
    attributes: {
      createdAt: '2013-02-20T16:00:18.777Z',
      updatedAt: '2013-02-20T16:00:18.777Z',
      name: 'Supernatural',
      slug: 'supernatural',
      description: null,
    },
  },
  {
    id: '11',
    type: 'genres',
    links: {
      self: 'https://kitsu.io/api/edge/genres/11',
    },
    attributes: {
      createdAt: '2013-02-20T16:00:19.973Z',
      updatedAt: '2016-01-10T12:27:18.443Z',
      name: 'Fantasy',
      slug: 'fantasy',
      description: '',
    },
  },
  {
    id: '19',
    type: 'genres',
    links: {
      self: 'https://kitsu.io/api/edge/genres/19',
    },
    attributes: {
      createdAt: '2013-02-20T16:00:24.648Z',
      updatedAt: '2016-01-24T15:10:28.426Z',
      name: 'Horror',
      slug: 'horror',
      description: '',
    },
  },
  {
    id: '20',
    type: 'genres',
    links: {
      self: 'https://kitsu.io/api/edge/genres/20',
    },
    attributes: {
      createdAt: '2013-02-20T16:00:24.673Z',
      updatedAt: '2013-02-20T16:00:24.673Z',
      name: 'Psychological',
      slug: 'psychological',
      description: null,
    },
  },
  {
    id: '28',
    type: 'genres',
    links: {
      self: 'https://kitsu.io/api/edge/genres/28',
    },
    attributes: {
      createdAt: '2013-02-20T16:00:34.141Z',
      updatedAt: '2013-02-20T16:00:34.141Z',
      name: 'Military',
      slug: 'military',
      description: null,
    },
  },
  {
    id: '31',
    type: 'genres',
    links: {
      self: 'https://kitsu.io/api/edge/genres/31',
    },
    attributes: {
      createdAt: '2013-02-20T16:00:37.689Z',
      updatedAt: '2013-02-20T16:00:37.689Z',
      name: 'Demons',
      slug: 'demons',
      description: null,
    },
  },
];
