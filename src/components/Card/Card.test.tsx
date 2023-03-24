import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from '.';
import { Poster, Titles } from 'types/manga';

const serialization = 'Comic Rush';
const posterImage: Poster = {
  tiny: 'https://media.kitsu.io/manga/1/poster_image/tiny-b4be97beecfca5ba4eb744291405db76.jpeg',
  large: 'https://media.kitsu.io/manga/1/poster_image/large-3210684af7bee6996926c63e5f16559e.jpeg',
  small: 'https://media.kitsu.io/manga/1/poster_image/small-8014f18506a324ddf8318c4a74bf4c12.jpeg',
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
};

const titles: Titles = {
  en: null,
  en_jp: 'Guardian Dog',
  en_us: 'Guardian Dog',
};

const rating = '71.58';

describe('Card', () => {
  it('should show serialization', () => {
    const { queryByTestId } = render(
      <Card titles={titles} posterImage={posterImage} serialization={serialization} />
    );
    const serializationInfo = queryByTestId('serialization');
    expect(serializationInfo).toBeInTheDocument();
  });
  it('should not show serialization if value is empty', () => {
    const { queryByTestId } = render(
      <Card titles={titles} posterImage={posterImage} serialization={null} />
    );
    const serializationInfo = queryByTestId('serialization');
    expect(serializationInfo).not.toBeInTheDocument();
  });
});

describe('StatusInfo', () => {
  it('should show rating', () => {
    const { queryByTestId } = render(
      <Card
        titles={titles}
        posterImage={posterImage}
        serialization={serialization}
        averageRating={rating}
      />
    );
    const serializationInfo = queryByTestId('rating');
    expect(serializationInfo).toBeInTheDocument();
  });
  it('should not show rating if value is empty', () => {
    const { queryByTestId } = render(
      <Card titles={titles} posterImage={posterImage} averageRating={null} />
    );
    const serializationInfo = queryByTestId('rating');
    expect(serializationInfo).not.toBeInTheDocument();
  });
});
