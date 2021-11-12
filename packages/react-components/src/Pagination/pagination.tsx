/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Button,
  IconButton,
} from '..';
import { ButtonBaseProps } from '../ButtonBase';
import { css, cx, ColorType } from '../styles';

type TRenderItem = ButtonBaseProps & {
  element: number,
};

type BaseProps = {
  currentPage: number,
  pageCount: number,
  className?: string,
  maxVisibleItems: 3 | 5 | 7 | 9
  renderItem?: (props: TRenderItem) => React.ReactElement,
  onPageChange?: () => void,
};

export const Pagination: React.FC<BaseProps> = (props) => {
  const {
    className,
    currentPage,
    pageCount,
    renderItem,
    maxVisibleItems,
  } = props;

  const generateRange = (): number[] => {
    const middleValue = Math.ceil(maxVisibleItems / 2);
    let offsetValue = currentPage - middleValue;

    if (currentPage <= middleValue) {
      offsetValue = 0;
    }

    if (currentPage + middleValue >= pageCount) {
      offsetValue = pageCount - maxVisibleItems;
    }

    return Array.from({ length: maxVisibleItems }, (_, i) => i + offsetValue + 1);
  };

  return (
    <div className={className}>
      <IconButton
        size="small"
        disabled={currentPage <= 1}
      >
        <ArrowLeftIcon />
      </IconButton>

      {generateRange().map((number) => (
        <Button
          key={number}
          size="small"
          withoutPadding
          color={number === currentPage ? 'primary' : 'default'}
          component={(p) => renderItem({ ...p, element: number })}
        >
          {number}
        </Button>
      ))}

      <IconButton
        size="small"
        disabled={currentPage >= pageCount}
      >
        <ArrowRightIcon />
      </IconButton>
    </div>
  );
};

Pagination.displayName = 'Pagination';

Pagination.defaultProps = {
  maxVisibleItems: 5,
  currentPage: 1,
  pageCount: 1,
};
