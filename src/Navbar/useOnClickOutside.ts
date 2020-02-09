import React, { useEffect } from 'react';

export const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
