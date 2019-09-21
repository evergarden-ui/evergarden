import { Global, css } from '@evergarden/emotion'

const defaultConfig = theme => ({
  light: {
    color: theme.colors.gray[800],
    bg: undefined,
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[400]
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400]
  }
})

export const CSSReset = {
  props: {
    config: Object
  },

  render(h) {
    const customFunc = this.config || defaultConfig

    const configCSS = ({ theme, colorMode }) => {
      const { color, bg, borderColor, placeholderColor } = customFunc(theme)[
        colorMode
      ]

      return css`
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
    }

    return h(Global, {
      props: {
        styles: [configCSS(this.$evergarden)]
      }
    })
  }
}
