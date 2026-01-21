import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { Typography } from '../Typography';
import { CloseSmallIcon } from '../icons';

/**
 * Types.
 */
export interface IAutocompleteTagOwnProps {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * Element placed before the children.
   */
  startContent?: React.ReactElement;
  /**
   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   */
  onDelete?: React.MouseEventHandler<HTMLElement>;
}

export type TAutocompleteTagProps = IAutocompleteTagOwnProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
/**
 *
 */

const reactPropsRegex = /^(onDelete)$/;

/**
 * Styles.
 */
const AutocompleteTagRoot = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop) && !reactPropsRegex.test(prop),
})<IAutocompleteTagOwnProps>((props) => ({
  display: 'inline-flex',
  maxWidth: '100%',
  fontFamily: 'inherit',
  outline: '0',
  boxSizing: 'border-box',
  borderRadius: 'calc(var(--pv-size-base) * 1)',
  padding: [
    0,
    props.onDelete ? 'var(--pv-size-base)' : 'calc(var(--pv-size-base) * 2)',
    0,
    props.startContent ? 'var(--pv-size-base)' : 'calc(var(--pv-size-base) * 2)',
  ].join(' '),
  height: 'calc(var(--pv-size-base) * 5)',
  border: '1px solid transparent',
  verticalAlign: 'middle',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  gap: '0px',
}), (props) => {
  const isDark = props.theme.mode === 'dark';
  let color: string;
  let borderColor: string;
  let backgroundColor: string;

  if (isDark) {
    backgroundColor = 'var(--pv-color-gray-4)';
    borderColor = 'var(--pv-color-gray-7)';
    color = 'var(--pv-color-white)';
  } else {
    backgroundColor = 'var(--pv-color-gray-2)';
    borderColor = 'var(--pv-color-gray-5)';
    color = 'var(--pv-color-black)';
  }

  return {
    borderColor,
    backgroundColor,
    color,
  };
});

const AutocompleteTagDeleteIcon = styled('span')({
  width: '20px',
  height: '20px',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  transition: 'opacity 200ms',
  opacity: '0.6',
  flexShrink: 0,
  '&:hover': {
    opacity: '1',
  },
});

const AutocompleteTagStartContent = styled('span')({
  display: 'inherit',
});

const AutocompleteTagEndContent = styled('span')({
  display: 'inherit',
});

/**
 *
 */

export const AutocompleteTag = React.forwardRef<
  HTMLDivElement,
  TAutocompleteTagProps
>((props, ref) => {
  const {
    children,
    startContent: startContentProp,
    onDelete,
    ...other
  } = props;

  const handleDeleteClick = (event: React.MouseEvent<HTMLElement>) => {
    // Stop the event from bubbling up to the `AutocompleteTag`.
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  const startContent = startContentProp && (
    <AutocompleteTagStartContent>
      {startContentProp}
    </AutocompleteTagStartContent>
  );

  const endContent = onDelete && (
    <AutocompleteTagEndContent>
      <AutocompleteTagDeleteIcon
        aria-hidden
        as={CloseSmallIcon}
        onClick={handleDeleteClick}
      />
    </AutocompleteTagEndContent>
  );

  return (
    <AutocompleteTagRoot
      ref={ref}
      startContent={startContent}
      onDelete={onDelete}
      {...other}
    >
      {startContent}
      <Typography
        variant="b3"
        component="span"
        color="inherit"
        noWrap
      >
        {children}
      </Typography>
      {endContent}
    </AutocompleteTagRoot>
  );
});

AutocompleteTag.displayName = 'AutocompleteTag';
