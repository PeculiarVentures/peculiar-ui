import { useState } from 'react';
import { useMount } from './use_mount';

const meta = {
  title: 'Hooks/useMount',
  component: useMount,
};

export default meta;

function Child() {
  useMount(() => {
    alert('I have been mounted');
  });

  return <div></div>;
}

export const DemoExample = () => {
  const [mounted, setMounted] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setMounted((b) => !b)}
      >
        {mounted ? 'Mounted' : 'UnMounted'}
      </button>
      {mounted ? <Child /> : null}
    </div>
  );
};
