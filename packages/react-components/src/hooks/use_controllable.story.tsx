import React from 'react';
import { useControllableState } from './use_controllable';

export const Example: React.FC = () => {
  const [value, setValue] = useControllableState({
    defaultValue: 'Text',
  });

  return (
    <>
      <input
        type="text"
        defaultValue={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <p>
        Field value:
        &nbsp;
        {value}
      </p>
    </>
  );
};

export default {
  title: 'Hooks/useControllableState',
  component: Example,
};
