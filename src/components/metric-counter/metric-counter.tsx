import styled from 'styled-components'

import { useCountUp } from './hooks'
import { CountUpProps } from './types'

interface MetricCounterProps extends CountUpProps {
  unit: string
  description: string
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
  precision,
}: MetricCounterProps) {
  const counter = useCountUp({
    start,
    end,
    durationInMilliSec,
    easeOutOption,
    precision,
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
