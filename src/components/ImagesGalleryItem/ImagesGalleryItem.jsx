import React from "react"
import PropTypes from "prop-types"
import {Item, Img} from "./ImagesGalleryItem.styled"

const ImageGalleryItem = ({webformatURL, alt, onClick}) => {
  return (
    <Item>
      <Img src={webformatURL} alt={alt} width="340" height="230" onClick={ onClick} />
    </Item>
  )
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default ImageGalleryItem
