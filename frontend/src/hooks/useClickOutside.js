import * as React from 'react';

export const useClickOutside = (elements, handler) => {
  const listener = React.useCallback(
    (e) => {
      if (
        elements.every((element) => {
          return element.current && !element.current.contains(e.target);
        })
      ) {
        handler(e);
      }
    },
    [handler, elements],
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', listener, true);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener, true);
      document.removeEventListener('touchstart', listener);
    };
  }, [listener]);
};
