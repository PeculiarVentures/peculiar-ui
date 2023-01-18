import React from 'react';

type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const WarningIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path d="M9.57 4.385c1.066-1.847 3.73-1.847 4.796 0l7.195 12.461C22.627 18.692 21.294 21 19.163 21H4.773c-2.131 0-3.464-2.308-2.398-4.154L9.57 4.385z" fill="currentColor" />
    <circle
      cx="11.968"
      cy="16.846"
      fill="#fff"
      r="1.385"
    />
    <path d="M10.227 11.11l1.741 4.351 1.74-4.351a1.875 1.875 0 10-3.48 0z" fill="#fff" />
  </svg>
);
