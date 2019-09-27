export const getChildren = items =>
  items ? items.filter(item => item.componentOptions) : []

export const merge = (obj, ...args) => {
  for (let i = 0; i < args.length; i++) {
    // eslint-disable-next-line guard-for-in, prefer-rest-params
    for (const p in args[i]) {
      if (args[i][p] !== undefined) {
        obj[p] = args[i][p]
      }
    }
  }
  return obj
}

/**
 * Return the left-land value if it's not `undefined`
 * @param {any} a
 * @param {any} b
 */
export const defined = (a, b) => {
  return a === undefined ? b : a
}

export const mergeAttrs = (base, attrs = {}) => {
  for (const key of Object.keys(attrs)) {
    if (key[0] === '_' && base[key]) {
      merge(base[key], attrs[key])
    } else {
      base[key] = attrs[key]
    }
  }
}

export const getColor = (colors, key, defaultColorModifier = 500) => {
  const [name, colorModifier = defaultColorModifier] = key.split('.')
  return colors[name] && colors[name][colorModifier]
}
