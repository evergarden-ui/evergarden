const styledProps = {
  appearance: 'none',
  display: 'inline-block',
  verticalAlign: 'middle',
  userSelect: 'none',
  flexShrink: '0',
  borderWidth: '1px',
  borderRadius: 'md',
  _focus: {
    outline: 'none',
    boxShadow: 'outline'
  }
}

const stateStyles = (state, iconColor) => {
  const icons = {
    checked: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='${iconColor}' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
    indeterminate: `url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='${iconColor}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='2' x='4' y='7' rx='1'/%3E%3C/svg%3E");`
  }

  return {
    backgroundImage: icons[state],
    borderColor: 'transparent',
    backgroundColor: 'currentColor',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}

const unstyledProps = {}

const inputSizes = {
  lg: {
    width: 6,
    height: 6
  },
  md: {
    width: 4,
    height: 4
  },
  sm: {
    width: 3,
    height: 3
  }
}

const sizeProps = props => {
  switch (props.variant) {
    case 'styled':
      return inputSizes[props.size]
    case 'unstyled':
      return {}
  }
}

const colorStyles = props => {
  return {
    light: {
      color: `${props.variantColor}.500`,
      _checked: stateStyles('checked', 'white'),
      _mixed: stateStyles('indeterminate', 'white')
    },
    dark: {
      color: `${props.variantColor}.300`,
      _checked: stateStyles('checked', 'black'),
      _mixed: stateStyles('indeterminate', 'black')
    }
  }
}

const colorProps = props => {
  switch (props.variant) {
    case 'styled':
      return colorStyles(props)[props.colorMode]
    case 'unstyled':
      return {}
  }
}

const variantProps = (props) => {
  switch (props.variant) {
    case 'styled':
      return {
        ...styledProps,
        ...sizeProps(props),
        ...colorProps(props)
      }
    case 'unstyled':
      return unstyledProps
  }
}

export const createStyles = props => {
  return {
    ...variantProps(props),
  }
}