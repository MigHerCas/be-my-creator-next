import type { RefObject } from "react";
import { useState, useEffect } from "react";

// Source: https://usehooks.com/useOnScreen/
const useOnScreen = <T extends Element>(
  ref: RefObject<T | undefined>,
  rootMargin = "0px"
): boolean => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
};

export default useOnScreen;
