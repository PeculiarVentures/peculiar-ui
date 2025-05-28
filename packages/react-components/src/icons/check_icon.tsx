import React from 'react';

type TIconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const CheckIcon: React.FC<TIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path
      d="M4.338 11.656l5.98 5.667a1 1 0 001.452-.081l7.144-8.453a.51.51 0 00-.043-.716l-.38-.338a.508.508 0 00-.717.043l-6.84 7.7-5.584-4.96a.509.509 0 00-.717.042l-.337.38a.51.51 0 00.042.716z"
      fill="currentColor"
    />
  </svg>
);
