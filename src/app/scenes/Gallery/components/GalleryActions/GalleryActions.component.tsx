import React from 'react'
import { makeStyles } from 'services/theme'
import { ExtendableStyles, Testable } from 'utils/react'
import clsx from 'clsx'
import { Pagination } from 'app/components/Pagination'

export type GalleryActionsProps = ExtendableStyles &
  Testable & {
    currentPage: number
    limit: number
    totalCount: number | null
    loading: boolean
    onPageChange: ({ selected }: { selected: number }) => void
  }

export function GalleryActions({
  className,
  currentPage,
  limit,
  totalCount,
  onPageChange,
  loading,
  'data-testid': dataTestId,
  ...otherProps
}: GalleryActionsProps) {
  const classes = useStyles()
  if (!totalCount) {
    return null
  }

  const pageCount = totalCount / limit - 1
  return (
    <div
      className={clsx(className, classes.actionContainer, loading && classes.loadingContainer)}
      data-testid={dataTestId}
      {...otherProps}
    >
      <Pagination
        data-testid={`${dataTestId}-pagination`}
        forcePage={currentPage}
        onPageChange={onPageChange}
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
      />
    </div>
  )
}

const useStyles = makeStyles({
  actionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    pointerEvents: 'none',
    opacity: 0.5,
  },
})
