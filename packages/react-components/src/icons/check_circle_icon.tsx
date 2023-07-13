import React from 'react';

type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <rect
      x="1.333"
      y="1.333"
      width="21.333"
      height="21.333"
      rx="10.667"
      fill="currentColor"
    />
    <path
      d="M8 10.667L11.333 14l5-5"
      stroke="#fff"
      strokeWidth="1.5"
    />
  </svg>
);
