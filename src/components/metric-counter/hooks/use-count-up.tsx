import { useEffect, useState } from 'react'

import { easeOut } from '../utils'
import { EaseOutOptions } from '../types'

interface CountUpProps {
  start?: number
  end: number
  durationInMilliSec?: number
  easeOutOption?: EaseOutOptions
  precision?: number
}

function useCountUp({
  start = 0,
  end,
  durationInMilliSec = 2000,
  easeOutOption = 'exponential',
  precision = 0,
}: CountUpProps) {
  const [count, setCount] = useState<string | number>(start)

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

      if (precision === 0) {
        setCount(Math.floor(currentCount))
      } else {
        setCount(currentCount.toFixed(precision))
      }
      if (currentTime >= endTime) {
        return
      }

      requestAnimationFrame(countUp)
    }

    countUp(startTime)
  }, [start, end, durationInMilliSec, easeOutOption, precision])

  return count
}

export default useCountUp
