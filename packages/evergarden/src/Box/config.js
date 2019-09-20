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
  compose,
  system
} from 'styled-system'

const config = {
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii'
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii'
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii'
  },
  d: {
    property: 'display'
  },
  w: {
    property: 'width',
    scale: 'sizes'
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes'
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  h: {
    property: 'height',
    scale: 'sizes'
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  bgImg: {
    property: 'backgroundImage'
  },
  bgSize: {
    property: 'backgroundSize'
  },
  bgPos: {
    property: 'backgroundPosition'
  },
  bgRepeat: {
    property: 'backgroundRepeat'
  },
  pos: {
    property: 'position'
  },
  flexDir: {
    property: 'flexDirection'
  },
  shadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textDecoration: true,
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  fill: {
    property: 'fill',
    scale: 'colors'
  },
  stroke: {
    property: 'stroke',
    scale: 'colors'
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: true,
  outline: true,
  float: true
}

config.bgAttachment = config.backgroundAttachment
config.textDecor = config.textDecoration
config.listStylePos = config.listStylePosition
config.listStyleImg = config.listStyleImage

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
  flexbox,
  system(config)
)
