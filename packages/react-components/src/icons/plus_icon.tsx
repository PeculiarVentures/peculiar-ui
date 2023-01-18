import React from 'react';

type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const PlusIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path
      d="M6 12.5h12M12 18.5v-12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);
