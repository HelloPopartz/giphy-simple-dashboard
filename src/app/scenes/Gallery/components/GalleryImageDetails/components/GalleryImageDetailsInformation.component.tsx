import React from 'react'
import { ExtendableStyles, Testable } from 'utils/react'

import clsx from 'clsx'
import { makeStyles, AppTheme } from 'services/theme'
import { GiphyData } from 'app/entities/giphy'
import { Title, Subtitle, Body } from 'app/components'

export type GalleryImageDetailsInformationProps = ExtendableStyles &
  Testable & {
    data: GiphyData
  }

export function GalleryImageDetailsInformation({
  className,
  data,
  ...otherProps
}: GalleryImageDetailsInformationProps) {
  const classes = useStyles()
  const { title, username, rating, bitly_url, slug } = data
  return (
    <div className={clsx(className, classes.informationContainer)} {...otherProps}>
      <Title className={classes.title}>{title}</Title>
      <Subtitle>
        By <strong>{username}</strong>
      </Subtitle>
      <div className={classes.extraInformation}>
        <Body className={classes.extraInformationLabel}>
          <strong>Rating: </strong>
          {rating}
        </Body>
        <Body className={classes.extraInformationLabel}>
          <strong>Original url: </strong>
          <a href={bitly_url} target="_blank" rel="noopener noreferrer">
            {bitly_url}
          </a>
        </Body>
        <Body className={classes.extraInformationLabel}>
          <strong>Slug: </strong>
          {slug}
        </Body>
      </div>
    </div>
  )
}

const useStyles = makeStyles(({ spacing, typography }: AppTheme) => ({
  informationContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: spacing(3),
  },
  title: {
    marginBottom: spacing(0.5),
  },
  extraInformation: {
    marginTop: spacing(10),
  },
  extraInformationLabel: {
    fontSize: typography.sizes.L,
    marginBottom: spacing(),
  },
}))
