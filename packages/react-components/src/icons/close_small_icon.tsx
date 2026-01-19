import React from 'react';

type TIconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const CloseSmallIcon: React.FC<TIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width="20px"
    height="20px"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.913 10 3.628 3.627a.433.433 0 0 1 0 .609l-.305.305a.431.431 0 0 1-.61 0L10 10.914 6.373 14.54a.432.432 0 0 1-.61 0l-.304-.305a.432.432 0 0 1 0-.609L9.087 10 5.459 6.373a.432.432 0 0 1 0-.609l.304-.305a.432.432 0 0 1 .61 0L10 9.086l3.627-3.627a.431.431 0 0 1 .609 0l.305.305a.433.433 0 0 1 0 .609L10.913 10Z"
      fill="currentColor"
    />
  </svg>
);
