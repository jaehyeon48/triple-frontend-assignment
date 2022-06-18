import { createRoot } from 'react-dom/client'

import GlobalStyles from '@styles/global-styles'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <GlobalStyles />
    <div>hello, world!</div>
  </>,
)
