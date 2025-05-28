import React from 'react';

type TIconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const ArrowDropDownIcon: React.FC<TIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path
      d="M12.39 14.512a.5.5 0 01-.78 0l-2.96-3.7A.5.5 0 019.04 10h5.92a.5.5 0 01.39.812l-2.96 3.7z"
      fill="currentColor"
    />
  </svg>
);
