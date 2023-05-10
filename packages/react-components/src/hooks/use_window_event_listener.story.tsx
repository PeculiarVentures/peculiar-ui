import React from 'react';
import { useWindowEventListener } from './use_window_event_listener';

export const Example: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const handleWindowClick = () => {
    setCount((prevState) => prevState + 1);
  };

  useWindowEventListener('click', handleWindowClick);

  return (
    <p>
      Click count:
      &nbsp;
      {count}
    </p>
  );
};

export default {
  title: 'Hooks/useWindowEventListener',
  component: Example,
};
