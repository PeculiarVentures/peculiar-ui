import React from 'react';
import { useClipboard } from './index';

const meta = {
  title: 'Hooks/useClipboard',
  component: useClipboard,
};

export default meta;

export const DemoExample = () => {
  const {
    onCopy,
    hasCopied,
  } = useClipboard('Text to copy');

  return (
    <button
      type="button"
      onClick={onCopy}
    >
      {hasCopied ? 'Copied' : 'Click to copy'}
    </button>
  );
};
