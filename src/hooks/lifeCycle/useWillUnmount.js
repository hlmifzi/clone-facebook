import React from 'react';

function useWillUnmount(callback) {
  React.useEffect(() => {
    // returned function will be called on component unmount
    return () => {
      callback();
    };
  }, []);
}

export default useWillUnmount;
