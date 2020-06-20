import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

/**
 *
 * @param {String} props.alt
 * @param {String} props.src
 * @param {String} props.height
 * @param {String} props.width
 * @param {Function} props.scrollPosition
 * @param {Function} props.onClick
 */
export default function Image({
  alt,
  src,
  height,
  width,
  scrollPosition,
  onClick,
}) {
  return (
    <React.Fragment>
      <LazyLoadImage
        alt={alt}
        src={src}
        scrollPosition={scrollPosition}
        height={height ? height : '100%'}
        width={width ? width : '100%'}
        placeholderSrc={`https://res.cloudinary.com/code5/image/upload/v1589046672/dialogue/wp-header-logo-28_esocma.png`}
        onClick={onClick}
      />
    </React.Fragment>
  )
}
