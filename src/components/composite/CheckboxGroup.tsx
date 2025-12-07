import type React from 'react';
import { Checkbox } from '../base/Checkbox';

interface CheckboxGroupProps {
  items: string[];
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  columns?: 1 | 2 | 3 | 4;
}

const CheckboxGroup = ({
  items,
  className = '',
  variant = 'primary',
  size = 'md',
  columns = 2,
}: CheckboxGroupProps) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {items.map((item) => (
        <Checkbox key={item} variant={variant} size={size}>
          {item}
        </Checkbox>
      ))}
    </div>
  );
};

export default CheckboxGroup;
