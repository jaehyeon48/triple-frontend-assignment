import styled from 'styled-components'

import { fadeIn, moveUp } from '@styles/animations'

const SectionLogoContainer = styled.div`
  animation: ${fadeIn}, ${moveUp};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
`

export default SectionLogoContainer
