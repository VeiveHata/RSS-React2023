import { Button } from 'components/Button';
import React, { useMemo } from 'react';
import './styles.css';

type PaginationProps = {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
};

const paginationPages = 10;

export const Pagination: React.FC<PaginationProps> = ({ current, total, onPageChange }) => {
  const visibleNumbers = useMemo(() => {
    const half = paginationPages / 2;
    let firstNumber = current - half;
    let lastNumber = current + half;

    if (current <= half) {
      firstNumber = 1;
      lastNumber = paginationPages;
    }

    if (current >= total - half) {
      firstNumber = total - paginationPages;
      lastNumber = total;
    }

    const steps = [];
    for (let step = firstNumber || 1; step <= lastNumber; step++) {
      steps.push(step);
    }
    return steps;
  }, [current, total]);

  return (
    <div className="pagination">
      <Button small onClick={() => onPageChange(1)}>
        {'<<'}
      </Button>
      {visibleNumbers.map((step) => (
        <Button small key={step} selected={step === current} onClick={() => onPageChange(step)}>
          {step}
        </Button>
      ))}
      <Button small onClick={() => onPageChange(total)}>
        {'>>'}
      </Button>
    </div>
  );
};
