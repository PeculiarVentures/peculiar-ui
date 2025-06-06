import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const useOutsideClick = (callback: Function) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};
