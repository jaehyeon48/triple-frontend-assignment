import { useEffect, useState } from 'react'

import { easeOut, roundWithPrecision } from '../utils'
import { EaseOutOptions } from '../types'

interface CountUpProps {
  startCount?: number
  endCount: number
  durationInMilliSec?: number
  easeOutOption?: EaseOutOptions
}

function useCountUp({
  startCount = 0,
  endCount,
  durationInMilliSec = 2000,
  easeOutOption = 'quint',
}: CountUpProps) {
  const [count, setCount] = useState(startCount)

  useEffect(() => {
    const startTime = performance.now()
    const endTime = startTime + durationInMilliSec

    async function countUp(currentTime: number) {
      const elapsedTime = currentTime - startTime
      const currentCount = easeOut[easeOutOption]({
        start: startCount,
        end: endCount,
        elapsed: elapsedTime,
        durationInMilliSec,
      })

      setCount(Math.floor(roundWithPrecision(currentCount, 1)))
      if (currentTime >= endTime) {
        return
      }

      requestAnimationFrame(countUp)
    }

    countUp(startTime)
  }, [startCount, endCount, durationInMilliSec, easeOutOption])

  return count
}

export default useCountUp
