import React from 'react';

type TIconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const CloseIcon: React.FC<TIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.174 12l4.665 4.663a.556.556 0 010 .783l-.393.392a.554.554 0 01-.783 0l-4.664-4.663-4.662 4.663a.555.555 0 01-.784 0l-.392-.392a.556.556 0 010-.783L10.826 12 6.16 7.337a.556.556 0 010-.783l.392-.392a.555.555 0 01.784 0l4.662 4.663 4.664-4.663a.554.554 0 01.783 0l.393.392a.556.556 0 010 .783L13.174 12z"
      fill="currentColor"
    />
  </svg>
);
