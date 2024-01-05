import React from 'react';
import { useControllableState } from './index';

const meta = {
  title: 'Hooks/useControllableState',
  component: useControllableState,
};

export default meta;

export const DemoExample = () => {
  const [value, setValue] = useControllableState({ defaultValue: 40 });

  return (
    <div>
      <button
        onClick={() => setValue(value + 1)}
        type="button"
      >
        +
      </button>
      <span>
        {value}
      </span>
      <button
        onClick={() => setValue(value - 1)}
        type="button"
      >
        -
      </button>
    </div>
  );
};
