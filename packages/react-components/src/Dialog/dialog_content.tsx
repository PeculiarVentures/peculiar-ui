import React from 'react';
import { Box } from '../Box';
import { Collapse } from '../Collapse';
import { Alert } from '../Alert';
import { css, cx } from '../styles';

type BaseProps = {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The className of the component.
   */
  className?: string;
  /**
   * Display the top and bottom dividers.
   */
  dividers?: boolean;
  /**
   * The content of the error message.
   */
  error?: string;
  /**
   * The content of pinned part.
   */
  pinnedContent?: React.ReactNode,
};

type DialogContentProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const stylesBase = () => css({
  label: 'DialogContent',
  flex: '1 1 auto',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--pv-size-base-3) 0 0',
});

const stylesPinned = () => css({
  label: 'DialogPinnedContent',
  padding: '0 var(--pv-size-base-4)',
  flex: '0 0 auto',
});

const stylesScrolled = () => css({
  label: 'DialogScrolledContent',
  padding: '0 var(--pv-size-base-4) var(--pv-size-base-3)',
  overflowY: 'auto',
  flex: '1 1 auto',
});

const stylesError = () => css({
  label: 'DialogContent-error',
  padding: 'var(--pv-size-base-2) var(--pv-size-base-3)',
});

const stylesCollapse = () => css({
  margin: 'calc(var(--pv-size-base-2) * -1) calc(var(--pv-size-base-3) * -1) var(--pv-size-base-2)',
});

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const {
    children,
    className,
    dividers,
    error,
    pinnedContent,
    ...other
  } = props;

  return (
    <Box
      {...other}
      ref={ref}
      className={cx({
        [stylesBase()]: true,
        [className]: !!className,
      })}
      borderColor="gray-5"
      borderWidth={dividers ? 1 : 0}
      borderStyle="solid"
      borderPosition="horizontal"
      data-key="dialog.content"
    >
      <div className={cx(stylesPinned())}>
        <Collapse
          in={Boolean(error)}
          className={cx(stylesCollapse())}
        >
          <Alert
            variant="wrong"
            disableIcon
            className={cx(stylesError())}
          >
            {error}
          </Alert>
        </Collapse>
        {pinnedContent}
      </div>
      <div className={cx(stylesScrolled())}>
        {children}
      </div>
    </Box>
  );
});

DialogContent.displayName = 'DialogContent';

DialogContent.defaultProps = {
  dividers: true,
};
