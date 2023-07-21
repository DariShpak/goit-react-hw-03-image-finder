import React from "react"
import PropTypes from "prop-types"
import {LoaderBtn, LabelLoaderBtn, BtnWrapper} from "./Button.styled"

const Button = ({onClick}) => {
  return (
    <BtnWrapper>
      <LoaderBtn type="button" onClick={onClick}>
        <LabelLoaderBtn>Load more</LabelLoaderBtn>
      </LoaderBtn>
    </BtnWrapper>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}
export default Button
