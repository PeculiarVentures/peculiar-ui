import React from 'react';
import { useId } from './use_id';

export const Example: React.FC = () => {
  const id = useId();

  return (
    <p>
      Generated Id:
      &nbsp;
      {id}
    </p>
  );
};

export default {
  title: 'Hooks/useId',
  component: Example,
};
