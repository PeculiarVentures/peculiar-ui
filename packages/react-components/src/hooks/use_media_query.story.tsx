import React from 'react';
import { useMediaQuery } from './use_media_query';

export const Example: React.FC = () => {
  const isLess768 = useMediaQuery('(max-width: 768px)');

  return (
    <p>
      Width less than 768px:
      &nbsp;
      {isLess768.toString()}
    </p>
  );
};

export default {
  title: 'Hooks/useMediaQuery',
  component: Example,
};
