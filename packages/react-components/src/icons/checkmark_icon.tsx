import React from 'react';

type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const CheckmarkIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width="20px"
  >
    <path
      fill="currentColor"
      d="M3.6 9.7l4.9 4.6c.4.4 1 .4 1.4 0l5.9-7v-.6l-.4-.3a.4.4 0 00-.6 0L9.1 13 4.5 8.8a.4.4 0 00-.6 0l-.3.3c-.2.2-.2.5 0 .6z"
    />
  </svg>
);
