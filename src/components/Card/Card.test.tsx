import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from '.';
import { emptyMockItem, mockCardItem } from '../../../tests/mock.ts/cardsMock';

describe('Card', () => {
  it('should show serialization', () => {
    const { queryByTestId } = render(<Card item={mockCardItem} />);
    const serializationInfo = queryByTestId('serialization');
    expect(serializationInfo).toBeInTheDocument();
  });
  it('should not show serialization if value is empty', () => {
    const { queryByTestId } = render(<Card item={emptyMockItem} />);
    const serializationInfo = queryByTestId('serialization');
    expect(serializationInfo).not.toBeInTheDocument();
  });
});

describe('StatusInfo', () => {
  it('should show rating', () => {
    const { queryByTestId } = render(<Card item={mockCardItem} />);
    const serializationInfo = queryByTestId('rating');
    expect(serializationInfo).toBeInTheDocument();
  });
  it('should not show rating if value is empty', () => {
    const { queryByTestId } = render(<Card item={emptyMockItem} />);
    const serializationInfo = queryByTestId('rating');
    expect(serializationInfo).not.toBeInTheDocument();
  });
});
