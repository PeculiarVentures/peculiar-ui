import React from 'react';
import { useId } from './index';

const meta = {
  title: 'Hooks/useId',
  component: useId,
};

export default meta;

export const Demo = () => {
  const id = useId();

  return (
    <div>
      ID is:
      {' '}
      {id}
    </div>
  );
};
