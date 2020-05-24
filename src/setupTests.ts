// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import MutationObserver from '@sheerun/mutationobserver-shim'
import { mockAsyncImage } from 'app/components/Image/__mocks__'

window.MutationObserver = MutationObserver

beforeEach(() => {
  // Async image can easily break tests since the image never loads
  mockAsyncImage()
})

afterEach(() => {
  jest.restoreAllMocks()
})
