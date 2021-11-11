/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Button,
  IconButton,
} from '..';
import { css, cx, ColorType } from '../styles';

type BaseProps = {
  currentPage: number,
  pageCount: number,
  renderItem?: (props: any) => React.ReactElement,
  className?: string,
  onPageChange?: () => void,
  maxVisibleItems: 3 | 5 | 7 | 9
};

export const Pagination: React.FC<BaseProps> = (props) => {
  const {
    className,
    currentPage,
    pageCount,
    onPageChange,
    renderItem,
    maxVisibleItems,
  } = props;

  console.log(
    {
      className,
      currentPage,
      pageCount,
      onPageChange,
      renderItem,
      maxVisibleItems,
    },
  );

  const generateRange = (): number[] => {
    const list = Array.from({ length: pageCount }, (_, i) => i + 1);
    const middleValue = Math.ceil(maxVisibleItems / 2);

    if (currentPage <= middleValue) {
      return list.splice(0, maxVisibleItems);
    }

    if (currentPage + middleValue >= pageCount) {
      return list.splice(pageCount - maxVisibleItems, maxVisibleItems);
    }

    return list.splice(currentPage - middleValue, maxVisibleItems);
  };

  return (
    <div className={className}>
      <IconButton
        size="small"
      >
        <ArrowLeftIcon />
      </IconButton>

      {generateRange().map((number) => (
        <Button
          size="small"
          withoutPadding
          color={number === currentPage ? 'primary' : 'default'}
        >
          {number}
        </Button>
      ))}

      <IconButton
        size="small"
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
