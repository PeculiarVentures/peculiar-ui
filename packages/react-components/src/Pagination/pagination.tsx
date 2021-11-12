/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Button,
  IconButton,
  Typography,
} from '..';
import { ButtonBaseProps } from '../ButtonBase';
import { css, cx } from '../styles';

type TRenderItem = ButtonBaseProps & {
  page: number,
  buttonType: 'previous' | 'next' | 'count',
};

type TLabelDisplayedRows = {
  from: number,
  to: number,
  count: number,
};

type TTooltipsType = 'next' | 'previous';

type BaseProps = {
  count: number,
  currentPage: number,
  rowsPerPage: number,
  className?: string,
  maxVisibleItems: 3 | 5 | 7 | 9,
  labelDisplayedRows?: (props: TLabelDisplayedRows) => string,
  renderItem?: (props: TRenderItem) => React.ReactElement,
  onPageChange?: (page: number) => void,
  getItemAriaLabel?: (type: TTooltipsType) => string
};

const styleRoot = () => css({
  label: 'Pagination',
  display: 'flex',
  alignItems: 'center',
});

const styleLabel = () => css({
  label: 'Pagination-label',
  marginRight: '20px',
});

const styleCountButton = () => css({
  label: 'Pagination-count-button',
  minWidth: 'auto',
  padding: '0 5px',
  color: 'var(--pv-color-gray-9)',
});

const styleActiveCountButton = () => css({
  label: 'Pagination-active-count-button',
  color: 'var(--pv-color-black)',
});

export const Pagination: React.FC<BaseProps> = (props) => {
  const {
    count,
    rowsPerPage = 1,
    currentPage,
    maxVisibleItems,
    className,
    renderItem,
    onPageChange,
    labelDisplayedRows,
    getItemAriaLabel,
  } = props;
  const pageCount = Math.ceil(count / rowsPerPage);
  const prevButtonValue = currentPage - 1;
  const nextButtonValue = currentPage + 1;

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

  const renderLabel = () => {
    const from = ((currentPage - 1) * rowsPerPage) + 1;
    const tempTo = from + rowsPerPage - 1;
    const to = tempTo < count ? tempTo : count;

    if (labelDisplayedRows) {
      return labelDisplayedRows({ from, to, count });
    }

    return `Showing ${from}-${to} of ${count}`;
  };

  const renderTooltip = (type: TTooltipsType): string => {
    if (getItemAriaLabel) {
      return getItemAriaLabel(type);
    }

    return `Go to ${type}`;
  };

  return (
    <div
      className={cx({
        [styleRoot()]: true,
        className: !!className,
      })}
    >
      <Typography
        variant="b3"
        color="gray-9"
        className={cx({
          [styleLabel()]: true,
        })}
      >
        {renderLabel()}
      </Typography>

      <div>
        <IconButton
          size="small"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(prevButtonValue)}
          component={
            renderItem
              ? (p) => renderItem({ ...p, page: prevButtonValue, buttonType: 'previous' })
              : undefined
          }
          title={renderTooltip('previous')}
        >
          <ArrowLeftIcon />
        </IconButton>

        {range.map((number) => {
          const isActive = number === currentPage;

          return (
            <Button
              key={number}
              size="small"
              onClick={() => onPageChange(number)}
              component={
                renderItem
                  ? (p) => renderItem({ ...p, page: number, buttonType: 'count' })
                  : undefined
              }
              className={cx({
                [styleCountButton()]: true,
                [styleActiveCountButton()]: isActive,
              })}
              textVariant={isActive ? 's2' : 'b3'}
            >
              {number}
            </Button>
          );
        })}

        <IconButton
          size="small"
          disabled={currentPage >= pageCount}
          onClick={() => onPageChange(nextButtonValue)}
          component={
            renderItem
              ? (p) => renderItem({ ...p, page: nextButtonValue, buttonType: 'next' })
              : undefined
          }
          title={renderTooltip('next')}
        >
          <ArrowRightIcon />
        </IconButton>
      </div>
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
