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
        disabled={currentPage <= 1}
      >
        <ArrowLeftIcon />
      </IconButton>

      {generateRange().map((number) => (
        <Button
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
