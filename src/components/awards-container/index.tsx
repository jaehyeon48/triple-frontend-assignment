import styled from 'styled-components'

import { fadeIn, moveUp } from '@styles/animations'

const AwardsContainer = styled.div`
  display: flex;
  gap: 39px;
  margin-top: 50px;
  animation: ${fadeIn}, ${moveUp};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
  animation-delay: 200ms;
`

export default AwardsContainer
