import React, {Component} from "react"
import PropTypes from "prop-types"
import {ModalWindow, Overlay, Img} from "./Modal.styled"

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.toggleModal()
    }
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal()
    }
  }

  render() {
    const {largeImageURL} = this.props
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <Img src={largeImageURL} width="800" height="500" />
        </ModalWindow>
      </Overlay>
    )
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired
}

export default Modal
