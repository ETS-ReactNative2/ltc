import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    font-family: SerranoWeb, "Open Sans", Verdana, sans-serif;
    color: DarkSlateGray;
    font-size: 1.1rem;
    line-height: 1.5;
    padding: 0;
  }

  .react-tooltip {
    max-width: 36vw;
    font-size: 1rem;
  }

  code {
    color: Maroon;
    font-family: Inconsolata, Consolas, Monaco, "Courier New", monospace;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  thead th {
    background-color: SlateGray;
    color: White;
  }

  tbody td {
    border-bottom: 1px solid Gainsboro;
  }

  th {
    text-align: left;
    padding: 0 1rem;
    margin: 0;
  }

  td {
    padding: 0 1rem;
    margin: 0;
  }
`

export default GlobalStyle
