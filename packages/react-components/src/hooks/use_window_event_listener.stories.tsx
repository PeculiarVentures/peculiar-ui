import React from 'react';
import { useWindowEventListener } from './index';

const meta = {
  title: 'Hooks/useWindowEventListener',
  component: useWindowEventListener,
};

export default meta;

export const Demo = () => {
  const [count, setCount] = React.useState(0);

  const handleWindowClick = () => {
    setCount((prevState) => prevState + 1);
  };

  useWindowEventListener('click', handleWindowClick);

  return (
    <p>
      Click window count:
      &nbsp;
      {count}
    </p>
  );
};
