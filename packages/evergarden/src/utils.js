export const getChildren = items => {
  return items.filter(item => item.componentOptions)
}

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