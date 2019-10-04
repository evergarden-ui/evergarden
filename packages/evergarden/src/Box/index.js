import { styled } from '@evergarden/emotion'
import { systemProps, pseudoConfig, pseudoNames } from './config'

const allPropNames = [
  ...systemProps.propNames,
  ...pseudoNames.map(name => `_${name}`)
]

const getAttrs = attrs =>
  Object.keys(attrs).reduce((res, key) => {
    if (allPropNames.indexOf(key) === -1) {
      res[key] = attrs[key]
    }
    return res
  }, {})

const Box = styled('div', { getAttrs })(systemProps, props => {
  const obj = {}
  for (const key of Object.keys(props)) {
    const trimKey = key.slice(1)
    if (pseudoNames.indexOf(trimKey) > -1) {
      obj[pseudoConfig[trimKey]] = systemProps({...props[key], theme: props.theme})
    }
  }
  return obj
})

Box.name = 'EverBox'

export { Box }
