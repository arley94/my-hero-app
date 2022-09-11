import { useLayoutEffect, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

const useSize = (target) => {

  const [size, setSize] = useState()

  useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  return size

}

export default useSize


//* https://www.npmjs.com/package/@react-hook/resize-observer