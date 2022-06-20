import { useEffect, useState } from 'react'

import { easeOut, roundWithPrecision } from '../utils'
import { EaseOutOptions } from '../types'

interface CountUpProps {
  start?: number
  end: number
  durationInMilliSec?: number
  easeOutOption?: EaseOutOptions
}

function useCountUp({
  start = 0,
  end,
  durationInMilliSec = 2000,
  easeOutOption = 'quint',
}: CountUpProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    const startTime = performance.now()
    const endTime = startTime + durationInMilliSec

    async function countUp(currentTime: number) {
      const elapsed = currentTime - startTime
      const currentCount = easeOut[easeOutOption]({
        start,
        end,
        elapsed,
        durationInMilliSec,
      })

      setCount(Math.floor(roundWithPrecision(currentCount, 1)))
      if (currentTime >= endTime) {
        return
      }

      requestAnimationFrame(countUp)
    }

    countUp(startTime)
  }, [start, end, durationInMilliSec, easeOutOption])

  return count
}

export default useCountUp
