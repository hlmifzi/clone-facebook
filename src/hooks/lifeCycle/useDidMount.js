import React from 'react'

const useDidMount = (callback) => {
  React.useEffect(() => {
    callback()
  }, [])
}

export default useDidMount
