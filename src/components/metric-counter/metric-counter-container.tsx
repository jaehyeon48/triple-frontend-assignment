import styled from 'styled-components'

import { fadeIn, moveUp } from '@styles/animations'

const MetricCounterContainer = styled.div`
  animation: ${fadeIn}, ${moveUp};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
  animation-delay: 100ms;
`

export default MetricCounterContainer
