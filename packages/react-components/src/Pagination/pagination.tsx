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

type ButtonType = 'previous' | 'next' | 'count';

type RenderItemType = ButtonBaseProps & {
  page: number,
  buttonType: ButtonType,
};

type LabelDisplayedRowsType = {
  from: number,
  to: number,
  count: number,
};

type BaseProps = {
  count: number,
  currentPage: number,
  rowsPerPage: number,
  className?: string,
  maxVisiblePages: 3 | 5 | 7 | 9,
  labelDisplayedRows?: (props: LabelDisplayedRowsType) => string,
  renderItem?: (props: RenderItemType) => React.ReactElement,
  onPageChange?: (page: number) => void,
  getItemAriaLabel?: (type: ButtonType) => string
};

const styleRoot = () => css({
  label: 'Pagination',
  display: 'flex',
  alignItems: 'center',
});

const styleLabel = () => css({
  label: 'Pagination-label',
  marginRight: '20px',
  display: 'inline-flex',
  flex: '1 1 auto',
  justifyContent: 'flex-end',
  width: '100px',
});

const styleControllerWrapper = () => css({
  label: 'Pagination-label',
  display: 'inline-flex',
  flex: '0 0 auto',
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
    maxVisiblePages,
    className,
    renderItem,
    onPageChange,
    labelDisplayedRows,
    getItemAriaLabel,
  } = props;
  const pageCount = Math.ceil(count / rowsPerPage);
  const prevButtonValue = currentPage - 1;
  const nextButtonValue = currentPage + 1;
  const Component = renderItem || 'button';

  const range = React.useMemo(() => {
    if (pageCount < 3 || pageCount <= maxVisiblePages) {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }

    const middleValue = Math.ceil(maxVisiblePages / 2);
    let offsetValue = currentPage - middleValue;

    if (currentPage <= middleValue) {
      offsetValue = 0;
    }

    if (currentPage + middleValue >= pageCount) {
      offsetValue = pageCount - maxVisiblePages;
    }

    return Array.from({ length: maxVisiblePages }, (_, i) => i + offsetValue + 1);
  }, [currentPage, pageCount, maxVisiblePages]);

  const handleChange = (value: number) => {
    if (onPageChange) {
      onPageChange(value);
    }
  };

  const renderLabel = () => {
    const from = ((currentPage - 1) * rowsPerPage) + 1;
    const tempTo = from + rowsPerPage - 1;
    const to = tempTo < count ? tempTo : count;

    if (labelDisplayedRows) {
      return labelDisplayedRows({ from, to, count });
    }

    return `Showing ${from}-${to} of ${count}`;
  };

  const renderTooltip = (type: ButtonType): string => {
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
      <div
        className={cx({
          [styleLabel()]: true,
        })}
      >
        <Typography
          noWrap
          variant="b3"
          color="gray-9"
        >
          {renderLabel()}
        </Typography>
      </div>

      <div
        className={cx({
          [styleControllerWrapper()]: true,
        })}
      >
        <IconButton
          size="small"
          disabled={currentPage <= 1}
          onClick={() => handleChange(prevButtonValue)}
          component={(p) => <Component {...p} page={prevButtonValue} buttonType="previous" />}
          title={renderTooltip('previous')}
        >
          <ArrowLeftIcon />
        </IconButton>

        {range.map((pageNumber) => {
          const isActive = pageNumber === currentPage;

          return (
            <Button
              key={pageNumber}
              size="small"
              onClick={() => handleChange(pageNumber)}
              component={(p) => <Component {...p} page={pageNumber} buttonType="count" />}
              className={cx({
                [styleCountButton()]: true,
                [styleActiveCountButton()]: isActive,
              })}
              textVariant={isActive ? 's2' : 'b3'}
            >
              {pageNumber}
            </Button>
          );
        })}

        <IconButton
          size="small"
          disabled={currentPage >= pageCount}
          onClick={() => handleChange(nextButtonValue)}
          component={(p) => (
            <Component {...p} page={nextButtonValue} buttonType="next" />
          )}
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
  maxVisiblePages: 5,
  currentPage: 1,
  count: 1,
  rowsPerPage: 1,
};
