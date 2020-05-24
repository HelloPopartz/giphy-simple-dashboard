const NODE_ENV = process.env.REACT_APP_CUSTOM_NODE_ENV || process.env.NODE_ENV

export function isProductionEnvironment() {
  return NODE_ENV === 'production'
}

export function isTestEnvironment() {
  return NODE_ENV === 'test'
}
