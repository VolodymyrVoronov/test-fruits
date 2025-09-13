import { useEffect, useRef, useState } from "react";

const useArrowNavigation = <T,>(
  items: T[],
  onItemSelect: (item: T) => void,
  wrap = true // set to false if you don't want wrap-around
) => {
  const buttonsRef = useRef<HTMLButtonElement[]>([]);
  const [focusIndex, setFocusIndex] = useState(0);

  // Focus selected item when focusIndex changes
  useEffect(() => {
    buttonsRef.current[focusIndex]?.focus();
  }, [focusIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = wrap
        ? (focusIndex + 1) % buttonsRef.current.length
        : Math.min(focusIndex + 1, buttonsRef.current.length - 1);
      setFocusIndex(nextIndex);
      onItemSelect(items[nextIndex]);
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = wrap
        ? (focusIndex - 1 + buttonsRef.current.length) %
          buttonsRef.current.length
        : Math.max(focusIndex - 1, 0);
      setFocusIndex(prevIndex);
      onItemSelect(items[prevIndex]);
    }
  };

  const registerButton = (index: number) => (el: HTMLButtonElement | null) => {
    if (el) buttonsRef.current[index] = el;
  };

  return {
    focusIndex,
    setFocusIndex,
    handleKeyDown,
    registerButton,
  };
};

export default useArrowNavigation;
