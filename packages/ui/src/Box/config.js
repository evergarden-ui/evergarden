import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose
} from 'styled-system'

export const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox
)