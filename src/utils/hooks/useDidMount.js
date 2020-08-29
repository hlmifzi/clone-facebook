import React from 'react';

function useDidMount(callback) {
  React.useEffect(() => {
    callback();
  }, []);
}

export default useDidMount;
