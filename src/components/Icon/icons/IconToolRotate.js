import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 28"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M24 4v7c0 0.547-0.453 1-1 1h-7c-0.406 0-0.766-0.25-0.922-0.625-0.156-0.359-0.078-0.797 0.219-1.078l2.156-2.156c-1.469-1.359-3.406-2.141-5.453-2.141-4.406 0-8 3.594-8 8s3.594 8 8 8c2.484 0 4.781-1.125 6.312-3.109 0.078-0.109 0.219-0.172 0.359-0.187 0.141 0 0.281 0.047 0.391 0.141l2.141 2.156c0.187 0.172 0.187 0.469 0.031 0.672-2.281 2.75-5.656 4.328-9.234 4.328-6.609 0-12-5.391-12-12s5.391-12 12-12c3.078 0 6.062 1.234 8.266 3.313l2.031-2.016c0.281-0.297 0.719-0.375 1.094-0.219 0.359 0.156 0.609 0.516 0.609 0.922z" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string,
}

Icon.defaultProps = {
  title: 'Rotate',
}

export default Icon
