export const getChildren = items => {
  return items.filter(item => item.componentOptions)
}