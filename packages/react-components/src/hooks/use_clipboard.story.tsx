import React from 'react';
import { useClipboard } from './use_clipboard';

export const Example: React.FC = () => {
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

export default {
  title: 'Hooks/useClipboard',
  component: Example,
};
