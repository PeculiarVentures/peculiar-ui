import React from 'react';
import { useDebounceCallback } from './use_debounce_callback';

export const Example: React.FC = () => {
  const [value, setValue] = React.useState('');
  const setValueDebounced = useDebounceCallback(setValue);

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setValueDebounced(event.target.value);
        }}
      />
      <p>
        Debounced field value:
        &nbsp;
        {value}
      </p>
    </>
  );
};

export default {
  title: 'Hooks/useDebounceCallback',
  component: Example,
};
