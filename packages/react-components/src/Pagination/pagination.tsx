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
  page: number,
  buttonType: 'prev' | 'next' | 'count',
};

type BaseProps = {
  currentPage: number,
  count: number,
  rowsPerPage: number,
  className?: string,
  maxVisibleItems: 3 | 5 | 7 | 9
  renderItem?: (props: TRenderItem) => React.ReactElement,
  onPageChange?: (page: number) => void,
};

export const Pagination: React.FC<BaseProps> = (props) => {
  const {
    count,
    rowsPerPage = 1,
    currentPage,
    maxVisibleItems,
    className,
    renderItem,
    onPageChange,
  } = props;
  const pageCount = Math.ceil(count / rowsPerPage);

  const range = React.useMemo(() => {
    if (pageCount < 3 || pageCount <= maxVisibleItems) {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }

    const middleValue = Math.ceil(maxVisibleItems / 2);
    let offsetValue = currentPage - middleValue;

    if (currentPage <= middleValue) {
      offsetValue = 0;
    }

    if (currentPage + middleValue >= pageCount) {
      offsetValue = pageCount - maxVisibleItems;
    }

    return Array.from({ length: maxVisibleItems }, (_, i) => i + offsetValue + 1);
  }, [currentPage, pageCount, maxVisibleItems]);

  const prevButtonValue = currentPage - 1;
  const nextButtonValue = currentPage + 1;

  return (
    <div className={className}>
      <IconButton
        size="small"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(prevButtonValue)}
        component={
          renderItem
            ? (p) => renderItem({ ...p, page: prevButtonValue, buttonType: 'prev' })
            : undefined
        }
      >
        <ArrowLeftIcon />
      </IconButton>

      {range.map((number) => (
        <Button
          key={number}
          size="small"
          withoutPadding
          color={number === currentPage ? 'primary' : 'default'}
          onClick={() => onPageChange(number)}
          component={
            renderItem
              ? (p) => renderItem({ ...p, page: number, buttonType: 'count' })
              : undefined
          }
        >
          {number}
        </Button>
      ))}

      <IconButton
        size="small"
        disabled={currentPage >= pageCount}
        onClick={() => onPageChange(nextButtonValue)}
        component={
          renderItem
            ? (p) => renderItem({ ...p, page: nextButtonValue, buttonType: 'next' })
            : undefined
        }
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
  count: 1,
  rowsPerPage: 1,
};
