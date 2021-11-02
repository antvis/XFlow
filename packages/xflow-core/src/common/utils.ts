export const noop = () => null

export const disposableNoop = {
  dispose: noop,
}

export function debounce(cb: (...args: any[]) => void, time: number) {
  let flag: number
  return () => {
    clearTimeout(flag)
    flag = window.setTimeout(cb, time)
  }
}

export function throttle(cb: (...args: any[]) => void) {
  let flag: number
  return () => {
    if (!flag) {
      flag = requestAnimationFrame(() => {
        flag = null
        cb()
      })
    }
  }
}

export const insertCss = (cssString: string) => {
  const $style = document.createElement('style')
  $style.setAttribute('type', 'text/css')
  document.head.appendChild($style)
  // This is required for IE8 and below.
  // @ts-ignore
  if ($style.styleSheet) {
    // @ts-ignore
    $style.styleSheet.cssText = cssString
  } else {
    $style.appendChild(document.createTextNode(cssString))
  }
  return $style
}
