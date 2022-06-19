import styled from 'styled-components'

import { fadeIn } from '@styles/animations'

const AwardsContainer = styled.div`
  display: flex;
  gap: 39px;
  margin-top: 50px;
  animation: ${fadeIn} 700ms ease-in-out 200ms;
`

export default AwardsContainer
