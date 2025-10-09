import React from 'react';

type TIconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const CheckIcon: React.FC<TIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width="20px"
    height="20px"
  >
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="m5 11 3 3 8-8"
    />
  </svg>
);
