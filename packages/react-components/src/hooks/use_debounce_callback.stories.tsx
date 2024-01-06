import React from 'react';
import { useDebounceCallback } from './index';

const meta = {
  title: 'Hooks/useDebounceCallback',
  component: useDebounceCallback,
};

export default meta;

export const DemoExample = () => {
  const [value, setValue] = React.useState('');
  const setValueDebounced = useDebounceCallback(setValue, 300);

  return (
    <>
      <p>
        Below state will update 300ms after last change.
      </p>
      <p>
        The input&apos;s value is:
        {' '}
        {value}
      </p>
      <input
        type="text"
        onChange={(event) => {
          setValueDebounced(event.target.value);
        }}
      />
    </>
  );
};
