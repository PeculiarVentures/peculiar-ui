import React from 'react';

type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const InfoIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path
      d="M11.1 9.3h1.8V7.5h-1.8v1.8zm.9 9.9c-3.969 0-7.2-3.231-7.2-7.2 0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 3.969-3.231 7.2-7.2 7.2zM12 3a9 9 0 100 18 9 9 0 000-18zm-.9 13.5h1.8v-5.4h-1.8v5.4z"
      fill="currentColor"
    />
  </svg>
);
