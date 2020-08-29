import { useEffect, useRef } from 'react';

/**
 * @example const prevProps = usePrevious<PropsDefinition>(props);
 */
const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
