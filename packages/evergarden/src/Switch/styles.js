export const labelStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  mr: 1
}

export const checkboxStyle = {
  h: '1px',
  w: '1px',
  p: 0,
  m: '-1px',
  border: 0,
  clip: 'rect(0px,0px,0px,0px)',
  whiteSpace: 'nowrap',
  position: 'absolute',
  overflow: 'hidden'
}

const trackStyle = {
  display: 'inline-flex',
  flexShrink: 0,
  borderRadius: 'full',
  p: '2px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  boxSizing: 'content-box',
  transition: 'background-color .1s',
  _groupFocusWithin: {
    outline: 'none',
    boxShadow: 'outline'
  }
}

const inputSizes = {
  lg: {
    w: 10,
    h: 5
  },
  md: {
    w: 8,
    h: 4
  },
  sm: {
    w: 6,
    h: 3
  }
}

const sizeProps = props => inputSizes[props.size]

const colorStyles = props => ({
  light: {
    backgroundColor: props.isChecked ? `${props.variantColor}.100` : 'gray.300'
  },
  dark: {
    backgroundColor: props.isChecked ? `${props.variantColor}.900` : 'gray.600'
  }
})

const colorProps = props => colorStyles(props)[props.colorMode]

export const createStyle = (props) => {
  const disabled = props.isDisabled ? {
    opacity: 0.5,
  } : {
    cursor: 'pointer'
  }

  return {
    ...labelStyle,
    ...disabled
  }
}

export const createTrackStyle = props => {
  return {
    ...trackStyle,
    ...sizeProps(props),
    ...colorProps(props)
  }
}

export const createThumbStyle = props => {
  const barSize = inputSizes[props.size]
  
  const size = {
    w: barSize.h,
    h: barSize.h,
  }

  const color = {
    backgroundColor: props.isChecked ? `${props.variantColor}.500` : 'white' 
  }

  const base = {
    borderRadius: 'full',
    transition: 'transform .25s, background-color .1s'
  }

  const variant = {
    transform: `translateX(${props.isChecked ? '100%' : '0%'})`
  }

  return {
    ...size,
    ...base,
    ...variant,
    ...color
  }
}