import { Button } from 'components/Button';
import React, { useMemo } from 'react';
import './styles.css';

type PaginationProps = {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ current, total, onPageChange }) => {
  const visibleNumbers = useMemo(() => {
    const tryGetFirst = current - 5;
    const tryGetLast = current + 5;
    const firstNumber = tryGetFirst > 0 ? tryGetFirst : 1;
    const lastNumber = tryGetLast < total ? tryGetLast : total;
    const steps = [];
    for (let step = firstNumber || 1; step < lastNumber + 1; step++) {
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
