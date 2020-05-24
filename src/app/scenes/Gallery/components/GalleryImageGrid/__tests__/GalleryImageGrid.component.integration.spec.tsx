import React from 'react'
import { times, noop } from 'lodash'
import { GiphyDataBuilder } from 'app/entities/giphy/__mocks__'

import { render, fireEvent, getByText } from 'utils/tests'

import { GalleryImageGrid } from '../GalleryImageGrid.component'

describe('#GridImageGrid', () => {
  const numberOfImages = 20
  const data = times(20, () => new GiphyDataBuilder().getInstance())

  it('renders the images provided in data', () => {
    const galleryImageGrid = render(<GalleryImageGrid data={data} onClickImage={noop} loading={false} />)
    const images = galleryImageGrid.getAllByRole('img')
    expect(images).toHaveLength(numberOfImages)
  })

  it('renders a loading spinner when loading', () => {
    const galleryImageGrid = render(<GalleryImageGrid data={data} onClickImage={noop} loading />)
    const spinner = galleryImageGrid.getByTestId('loading-spinner')
    expect(spinner).toBeDefined()
  })

  it('shows the title of the image if the user hovers', () => {
    const singleImage = new GiphyDataBuilder().getInstance()
    const galleryImageGrid = render(<GalleryImageGrid data={[singleImage]} onClickImage={noop} loading={false} />)

    // TODO: Find a more elegant way to do this
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const imageContainer = galleryImageGrid.getByRole('img').parentElement!
    fireEvent.mouseOver(imageContainer)

    expect(getByText(imageContainer, singleImage.title)).toBeDefined()
  })

  it('trigger an action when a user clicks in an image', () => {
    const handleClose = jest.fn()
    const singleImage = new GiphyDataBuilder().getInstance()

    const galleryImageGrid = render(
      <GalleryImageGrid data={[singleImage]} onClickImage={handleClose} loading={false} />
    )

    const image = galleryImageGrid.getByRole('img')
    fireEvent.click(image)

    expect(handleClose).toHaveBeenCalledWith(singleImage)
  })
})
