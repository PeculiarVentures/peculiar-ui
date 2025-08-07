import { useClipboard } from './index';

const meta = {
  title: 'Hooks/useClipboard',
  component: useClipboard,
};

export default meta;

export const DemoExample = () => {
  const { copy, isCopied } = useClipboard();

  return (
    <button
      type="button"
      onClick={() => copy('Text to copy')}
    >
      {isCopied ? 'Copied' : 'Click to copy'}
    </button>
  );
};
