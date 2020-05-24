import * as ReactImage from 'react-image'
import { isArray } from 'lodash'

export function mockAsyncImage() {
  jest.spyOn(ReactImage, 'useImage').mockImplementation(({ srcList }) => ({
    src: (isArray(srcList) ? srcList[0] : srcList) as string | undefined,
    isLoading: false,
    error: undefined,
  }))
}
