import { useEffect, useRef, type RefObject } from 'react';

export const useWheelScroll = <T extends HTMLElement = HTMLDivElement>(loading: boolean): RefObject<T | null> => {
  const scrollRef = useRef<T | null>(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node || loading) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;

      e.preventDefault();
      node.scrollLeft += e.deltaY;
    };

    node.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      node.removeEventListener('wheel', handleWheel);
    };
  }, [loading]);

  return scrollRef;
};
