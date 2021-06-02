import React from 'react';

type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const CloseSmallIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.671 12l2.665 2.665a.318.318 0 010 .447l-.224.224a.317.317 0 01-.447 0L12 12.671l-2.665 2.665a.317.317 0 01-.448 0l-.224-.224a.318.318 0 010-.447L11.33 12 8.663 9.335a.318.318 0 010-.447l.224-.224a.317.317 0 01.448 0L12 11.329l2.665-2.665a.317.317 0 01.447 0l.224.224a.318.318 0 010 .447L12.671 12z"
      fill="currentColor"
    />
  </svg>
);
