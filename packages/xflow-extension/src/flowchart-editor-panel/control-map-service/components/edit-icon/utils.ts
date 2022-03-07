import { isNumber } from 'lodash'
type IPath = [string, number, number, number, number]
// 创建节点路径
export const createPath = (paths: (string | number)[][], offsetX = 0, offsetY = 0) => {
  if (!paths.length) {
    return null
  }
  let path = ''
  // @ts-ignore
  paths.forEach((item: IPath) => {
    const [c, x, y, c2x, c2y] = item
    path += isNumber(y) ? ` ${c} ${x + offsetX} ${y + offsetY}` : ` ${c}`
    if (c2y) {
      path += ` ${c2x + offsetX} ${c2y + offsetY}`
    }
  })

  return path
}