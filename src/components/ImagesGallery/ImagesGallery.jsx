import React from "react"
import PropTypes from "prop-types"
import ImageGalleryItem from "../ImagesGalleryItem/ImagesGalleryItem"

import {List} from "./ImgGallery.styled"

const ImagesGallery = ({gallery, toggleModal}) => {
  const onClick = largeImageURL => {
    toggleModal(largeImageURL)
  }
  return (
    <List>
      {gallery &&
        gallery.map(({id, webformatURL, largeImageURL, tags}) =>
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            alt={tags}
            onClick={() => onClick(largeImageURL)}
          />
        )}
    </List>
  )
}

ImagesGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired
    })
  ),
  toggleModal: PropTypes.func.isRequired
}

export default ImagesGallery
