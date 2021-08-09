import React from 'react';

type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const DotIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <circle cx="12" cy="12" r="6" fill="currentColor" />
  </svg>
);
