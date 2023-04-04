import { Button } from 'components/Button';
import React from 'react';
import './styles.css';

type PaginationProps = {
  onFirst: () => void;
  onNext: () => void;
  onLast: () => void;
};

export const Pagination: React.FC<PaginationProps> = ({ onFirst, onNext, onLast }) => {
  return (
    <div className="pagination">
      <Button onClick={onNext}>Next</Button>
      <Button small onClick={onFirst}>
        First
      </Button>
      <Button small onClick={onLast}>
        Last
      </Button>
    </div>
  );
};
