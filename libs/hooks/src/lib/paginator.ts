import { useCallback, useEffect, useRef, useState } from 'react'
import type { Paginator } from 'masto'
import { useElementBounding, useInterval } from '@reactuses/core'

export type PaginatorState = 'idle' | 'loading' | 'done' | 'error'

export function usePaginator<T, P>(paginator: Paginator<T[], P>) {
  const [state, setState] = useState<PaginatorState>('idle')
  const [items, setItems] = useState<T[]>([])

  const endAnchor = useRef<HTMLDivElement>(null)
  const bound = useElementBounding(endAnchor)
  const [isInScreen, setIsInScreen] = useState(false)
  const [error, setError] = useState<unknown | undefined>()

  useEffect(() => {
    const visible = bound && bound.top < window.innerHeight * 2
    setIsInScreen(visible)
  }, [bound])

  useEffect(() => {
    bound.update()
    // eslint-disable-next-line
  }, [state, error, items])

  const loadNext = useCallback(async () => {
    if (state !== 'idle') return
    setState('loading')
    try {
      const result = await paginator.next()
      if (result.value?.length) {
        setItems(value => [...value, ...result.value])
        setState('idle')
      } else {
        setState('done')
      }
    } catch (e) {
      setError(e)
      setState('error')
    }
  }, [state, paginator])

  useInterval(() => {
    bound.update()
  }, 1000)

  useEffect(() => {
    if (isInScreen && state === 'idle') {
      loadNext()
    }
    // eslint-disable-next-line
  }, [isInScreen])

  return {
    items,
    state,
    error,
    endAnchor
  }
}
