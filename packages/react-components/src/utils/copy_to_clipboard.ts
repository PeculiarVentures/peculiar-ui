type SuccessCallback = () => void;

const fallbackCopyToClipboard = (text: string, onSuccess?: SuccessCallback) => {
  const textareaElement = document.createElement('textarea');

  textareaElement.value = text;
  document.body.appendChild(textareaElement);

  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    const range = document.createRange();

    textareaElement.setAttribute('contentEditable', 'true');
    textareaElement.setAttribute('readOnly', 'true');

    range.selectNodeContents(textareaElement);

    const selection = window.getSelection();

    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }

    textareaElement.setSelectionRange(0, text.length);
  } else {
    textareaElement.select();
  }

  try {
    document.execCommand('copy');

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    console.error('Fallback copy error:', error);
  }

  document.body.removeChild(textareaElement);
};

export const copyToClipboard = (text: string, onSuccess?: SuccessCallback) => {
  if (!navigator.clipboard) {
    fallbackCopyToClipboard(text, onSuccess);

    return;
  }

  navigator.clipboard.writeText(text)
    .then(onSuccess)
    .catch(() => fallbackCopyToClipboard(text, onSuccess));
};
