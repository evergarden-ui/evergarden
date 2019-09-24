import { getColor } from '../utils'

const disabledProps = {
  _disabled: {
    opacity: '0.4',
    pointerEvents: 'none',
    cursor: 'not-allowed'
  }
}

const baseProps = {
  cursor: 'pointer',
  color: '#000',
  _hover: {
    textDecoration: 'underline',
  }
}

export const createStyles = props => {
  return {
    ...baseProps,
    ...disabledProps,
  }
}
