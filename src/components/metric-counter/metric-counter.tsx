import styled from 'styled-components'

import { useCountUp } from './hooks'
import { EaseOutOptions } from './types'

interface MetricCounterProps {
  unit: string
  description: string
  start?: number
  end: number
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
  start,
  end,
  durationInMilliSec,
  easeOutOption,
}: MetricCounterProps) {
  const counter = useCountUp({
    start,
    end,
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
