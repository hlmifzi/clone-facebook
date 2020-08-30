import React from 'react';

/**
 * I also made it to support running when specific values update in deps
 * The default value for deps will be undefined if you did not pass it
 * and will have the same effect as not passing the parameter to useEffect
 * so it watch for general updates by default
 * @example useDidUpdate(() => {
    if (prevProps && prevProps.inputValue !== inputValue) {
      setState({
        inputValue,
      });
    }
  }, [inputValue]);
 */
const useDidUpdate = (callback, deps) => {
  const hasMount = React.useRef(false);

  React.useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
}

export default useDidUpdate;
