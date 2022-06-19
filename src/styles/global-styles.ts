import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  font-family: sans-serif;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
  
  /* 결과물을 화면 중앙에 배치해 좀 더 잘 보이도록 
   * 적용한 스타일입니다
   */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
`

export default GlobalStyles
