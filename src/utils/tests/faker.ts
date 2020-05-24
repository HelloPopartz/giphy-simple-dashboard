import { random } from 'faker'

export function randomEnum<T>(anEnum: T): T[keyof T] {
  return random.arrayElement(Object.values(anEnum))
}

export { random, internet, image } from 'faker'
