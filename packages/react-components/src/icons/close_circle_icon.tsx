import React from 'react';

type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export const CloseCircleIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <rect
      x="1"
      y="1"
      width="21.333"
      height="21.333"
      rx="10.667"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.185 11.5l2.721 2.72a.324.324 0 010 .457l-.23.229a.323.323 0 01-.456 0l-2.72-2.72-2.72 2.72a.324.324 0 01-.457 0l-.229-.23a.324.324 0 010-.456l2.721-2.72-2.721-2.72a.324.324 0 010-.457l.229-.229a.324.324 0 01.457 0l2.72 2.72 2.72-2.72a.323.323 0 01.457 0l.229.23a.324.324 0 010 .456l-2.721 2.72z"
      fill="#fff"
    />
  </svg>
);
