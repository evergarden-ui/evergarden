import { createGlobalStyle } from '@egoist/vue-emotion'

export const createThemeReset = ({
  color,
  bg,
  borderColor,
  placeholderColor
}) => createGlobalStyle`
  html {
    line-height: 1.5;
    color: ${color};
    background-color: ${bg};
  }
  /**
  * Allow adding a border to an element by just adding a border-width.
  */
  *,
  *::before,
  *::after {
    border-width: 0;
    border-style: solid;
    border-color: ${borderColor};
  }
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: ${placeholderColor};
  }
  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    color: ${placeholderColor};
  }
  input::placeholder,
  textarea::placeholder {
    color: ${placeholderColor};
  }
`
