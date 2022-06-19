import styled from 'styled-components'

interface MetricCounterProps {
  unit: string
  description: string
}

const Wrapper = styled.p`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`

function MetricCounter({ unit, description }: MetricCounterProps) {
  return (
    <Wrapper>
      <strong>0{unit}</strong>
      {description}
    </Wrapper>
  )
}

export default MetricCounter
