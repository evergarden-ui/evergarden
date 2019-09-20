export const getChildren = items => {
  return items.filter(item => item.componentOptions)
}

export const modifyChild = (child, data) => {
  for (const key of Object.keys(data)) {
    if (data[key] !== undefined) {
      child[key] = data[key]
    }
  }
}