import { useControllableState } from './index';

const meta = {
  title: 'Hooks/useControllableState',
  component: useControllableState,
};

export default meta;

export const DemoExample = () => {
  const [value, setValue] = useControllableState({
    defaultValue: 40,
  });

  return (
    <div>
      <button
        type="button"
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
      <span>
        {value}
      </span>
      <button
        type="button"
        onClick={() => setValue(value - 1)}
      >
        -
      </button>
    </div>
  );
};
