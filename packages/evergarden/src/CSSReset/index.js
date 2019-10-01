import { createPreflight } from './preflight'
import { createThemeReset } from './theme'

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

  functional: true,

  render(h, { props, parent, children }) {
    if (process.env.NODE_ENV !== 'production' && children && children.length > 0) {
      console.error(`The <GlobalStyle> component expect no children elements.`)
    }

    const { colorMode, theme } = parent.$evergarden
    const config = props.config ? props.config : defaultConfig(theme)[colorMode]
    const Preflight = createPreflight()
    const ThemeReset = createThemeReset(config)

    return [
      h(Preflight),
      h(ThemeReset)
    ]
  }
}
