import React from 'react';
import { useMediaQuery } from './index';

const meta = {
  title: 'Hooks/useMediaQuery',
  component: useMediaQuery,
};

export default meta;

export const DemoExample = () => {
  const isWide = useMediaQuery('(min-width: 480px)');

  return (
    <div>
      Screen is wide:
      {' '}
      {isWide ? 'Yes' : 'No'}
    </div>
  );
};
