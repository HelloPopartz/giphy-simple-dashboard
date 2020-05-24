import { useCallback } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PaginationOptions } from 'utils/api'
import { useQueryParams } from 'utils/routes'

import { GiphyData } from 'app/entities/giphy'

import { useDismountEffect } from 'utils/react'

import { RootState } from 'services/redux/redux.types'

import {
  fetchImagesForGallery,
  unMountGallery,
  changeCurrentPage,
  showImageDetails,
  closeImageDetails,
} from './duck/gallery.actions'
import {
  isGalleryLoading,
  getGalleryImages,
  getGalleryPageSize,
  getGalleryApiTotalCount,
} from './duck/gallery.selectors'

type GalleryQueryParams = {
  currentPage?: string
  showDetails?: string
}

export function useGalleryData() {
  const limit = useSelector(getGalleryPageSize)
  const { currentPage, showDetails } = useQueryParams<GalleryQueryParams>()
  const isLoading = useSelector(isGalleryLoading)
  const galleryData = useSelector(getGalleryImages)
  const totalCount = useSelector(getGalleryApiTotalCount)
  const detailImageData = useSelector((state: RootState) => {
    if (!showDetails) {
      return undefined
    }
    const galleryData = getGalleryImages(state)
    return galleryData.find(image => image.id === showDetails)
  })
  return {
    isLoading,
    galleryData,
    totalCount,
    limit,
    currentPage: currentPage ? Number(currentPage) : 0,
    detailImageData,
  }
}

export function useGalleryActions() {
  const dispatch = useDispatch()
  const handlePageChange = useCallback(
    ({ selected }: { selected: number }) => {
      dispatch(changeCurrentPage(selected))
    },
    [dispatch]
  )

  const openGalleryDetails = useCallback(
    (data: GiphyData) => {
      dispatch(showImageDetails(data.id))
    },
    [dispatch]
  )

  const closeGalleryDetails = useCallback(() => {
    dispatch(closeImageDetails())
  }, [dispatch])

  return {
    handlePageChange,
    openGalleryDetails,
    closeGalleryDetails,
  }
}

export function useGalleryEffects({ currentPage, limit }: PaginationOptions) {
  const dispatch = useDispatch()

  // Mount effect
  useEffect(() => {
    dispatch(fetchImagesForGallery.request({ limit, currentPage }))
  }, [currentPage, limit, dispatch])

  // Dismount effect
  useDismountEffect(() => {
    dispatch(unMountGallery())
  }, [dispatch])
}
