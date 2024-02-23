import React from 'react';

type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const MinusIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M6 12h12"
    />
  </svg>
);
