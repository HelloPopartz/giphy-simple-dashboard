import React from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'

import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { makeStyles, AppTheme } from 'services/theme'
import { ExtendableStyles, Testable } from 'utils/react'

import { IconButton } from '../Buttons'

export type PaginationProps = ExtendableStyles &
  Testable &
  Pick<ReactPaginateProps, 'pageCount' | 'pageRangeDisplayed' | 'marginPagesDisplayed' | 'forcePage' | 'onPageChange'>

export function Pagination({ className, style, 'data-testid': dataTestid, ...otherProps }: PaginationProps) {
  const classes = useStyles()
  const previousLabel = (
    <IconButton>
      <ChevronLeftIcon />
    </IconButton>
  )
  const nextLabel = (
    <IconButton>
      <ChevronRightIcon />
    </IconButton>
  )
  return (
    <div className={className} style={style} data-testid={dataTestid}>
      <ReactPaginate
        containerClassName={classes.paginationContainer}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        pageLinkClassName={classes.pageClassName}
        disabledClassName={classes.disabledClassName}
        breakClassName={classes.pageClassName}
        activeClassName={classes.activePage}
        disableInitialCallback
        {...otherProps}
      />
    </div>
  )
}

const useStyles = makeStyles(({ spacing, typography }: AppTheme) => ({
  paginationContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    listStyle: 'none',
  },
  pageClassName: {
    listStyle: 'none',
    cursor: 'pointer',
    fontFamily: typography.family,
    fontSize: typography.sizes.M,
    textAlign: 'center',
    padding: spacing(),
    marginLeft: spacing(),
    marginRight: spacing(),
    ['&:hover']: {
      fontWeight: typography.weights.bold,
    },
  },
  activePage: {
    fontWeight: typography.weights.bold,
  },
  disabledClassName: {
    opacity: 0.3,
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
}))
