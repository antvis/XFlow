// safe json
export function safeJson<T = any, D = T>(jsonStr: string, defaultValue = null) {
  try {
    const obj = JSON.parse(jsonStr) as T
    return obj || (defaultValue as D)
  } catch (error) {
    console.error(error)
    return defaultValue as D
  }
}
