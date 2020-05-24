import { useEffect } from 'react'

export function useDismountEffect(callback: (...args: any) => any, depArray: any[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => callback, depArray)
}
