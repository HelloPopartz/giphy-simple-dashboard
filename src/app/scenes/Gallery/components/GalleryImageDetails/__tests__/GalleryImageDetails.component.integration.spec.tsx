import React from 'react'
import { GiphyDataBuilder } from 'app/entities/giphy/__mocks__'

import { render } from 'utils/tests'
import { noop } from 'lodash'

import { getGiphyPreview } from 'app/entities/giphy'

import { GalleryImageDetails } from '../GalleryImageDetails.component'

describe('#GridImageDetails.components', () => {
  const imageDetails = new GiphyDataBuilder().getInstance()
  const dataTestid = 'gallery-details'

  it('renders the image in max quality', async () => {
    const imageInMaxQuality = getGiphyPreview(imageDetails)
    const galleryImageDetails = render(
      <GalleryImageDetails data={imageDetails} onClose={noop} data-testid={dataTestid} />
    )
    const image = galleryImageDetails.getByRole('img')
    expect(image).toHaveAttribute('src', imageInMaxQuality.webp)
  })

  it('displays additional information of the image', async () => {
    const { title, username, rating, bitly_url, slug } = imageDetails
    const galleryImageDetails = render(
      <GalleryImageDetails data={imageDetails} onClose={noop} data-testid={dataTestid} />
    )
    expect(galleryImageDetails.getByText(title)).toBeDefined()
    expect(galleryImageDetails.getByText(username)).toBeDefined()
    expect(galleryImageDetails.getByText(rating)).toBeDefined()
    expect(galleryImageDetails.getByText(bitly_url)).toBeDefined()
    expect(galleryImageDetails.getByText(slug)).toBeDefined()
  })

  it('triggers an action when the back button is pressed', () => {
    const handleClose = jest.fn()
    const buttonTestId = `${dataTestid}-actions-back`
    const galleryImageDetails = render(
      <GalleryImageDetails data={imageDetails} onClose={handleClose} data-testid={dataTestid} />
    )
    const backButton = galleryImageDetails.getByTestId(buttonTestId)
    backButton.click()

    expect(handleClose).toHaveBeenCalled()
  })
})
