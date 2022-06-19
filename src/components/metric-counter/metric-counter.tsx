import styled from 'styled-components'

import { useCountUp } from './hooks'
import { EaseOutOptions } from './types'

interface MetricCounterProps {
  unit: string
  description: string
  startCount?: number
  endCount: number
  durationInMilliSec?: number
  easeOutOption?: EaseOutOptions
}

const Wrapper = styled.p`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`

function MetricCounter({
  unit,
  description,
  startCount,
  endCount,
  durationInMilliSec,
  easeOutOption,
}: MetricCounterProps) {
  const counter = useCountUp({
    startCount,
    endCount,
    durationInMilliSec,
    easeOutOption,
  })

  return (
    <Wrapper>
      <strong>
        {counter}
        {unit}
      </strong>
      {description}
    </Wrapper>
  )
}

export default MetricCounter
