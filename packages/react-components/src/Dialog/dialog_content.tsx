import React from 'react';
import { Box } from '../Box';
import { Collapse } from '../Collapse';
import { Alert } from '../Alert';
import { css, cx } from '../styles';

/**
 * Types.
 */
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
   * Props applied to the scrolled element.
   */
  scrolledElementProps?: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

type DialogContentProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;
/**
 *
 */

/**
 * Styles.
 */
const stylesBase = () => css({
  label: 'DialogContent',
  flex: '1 1 auto',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const stylesPinned = () => css({
  label: 'DialogPinnedContent',
  padding: '0 var(--pv-size-base-4)',
  flex: '0 0 auto',
});

const stylesScrolled = () => css({
  label: 'DialogScrolledContent',
  overflowY: 'auto',
  flex: '1 1 auto',
  padding: 'var(--pv-size-base-3) var(--pv-size-base-4) var(--pv-size-base-6) var(--pv-size-base-4)',
});

const stylesError = () => css({
  label: 'DialogContent-error',
  margin: 'var(--pv-size-base-2) 0',
  padding: 'var(--pv-size-base-2) var(--pv-size-base-3)',
});

const stylesCollapse = () => css({
  margin: '0 calc(var(--pv-size-base-3) * -1)',
});
/**
 *
 */

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const {
    children,
    className,
    dividers,
    error,
    scrolledElementProps = {},
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
      </div>
      <div
        {...scrolledElementProps}
        className={cx({
          [stylesScrolled()]: true,
          [scrolledElementProps.className]: !!scrolledElementProps.className,
        })}
      >
        {children}
      </div>
    </Box>
  );
});

DialogContent.displayName = 'DialogContent';

DialogContent.defaultProps = {
  dividers: true,
};
