import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M16.875 15.469c0.563-0.75 0.891-1.594 1.031-2.484h2.016c-0.188 1.406-0.703 2.719-1.594 3.891zM12.984 17.906c0.891-0.141 1.734-0.469 2.484-1.031l1.453 1.453c-1.172 0.891-2.531 1.406-3.938 1.594v-2.016zM19.922 11.016h-2.016c-0.141-0.891-0.469-1.734-1.031-2.484l1.453-1.406c0.891 1.172 1.406 2.484 1.594 3.891zM15.563 5.531l-4.547 4.453v-3.891c-2.859 0.469-5.016 2.953-5.016 5.906s2.156 5.438 5.016 5.906v2.016c-3.938-0.469-7.031-3.844-7.031-7.922s3.094-7.453 7.031-7.922v-3.094z" />
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
  title: 'Rotate Right',
}

export default Icon
