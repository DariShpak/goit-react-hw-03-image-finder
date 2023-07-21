import React from "react"
import PropTypes from "prop-types"
import {Header, Form, Input, Button} from "./Searchbar.styled"

import {ReactComponent as LogoIcon} from "helpers/icons/photo-camera-svgrepo-com11.svg"
import {ReactComponent as SearchIcon} from "helpers/icons/search-favorites-svgrepo-com.svg"

const Searchbar = ({onSubmit}) => {
  return (
    <Header>
      <LogoIcon width="60" height="60" />
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Button type="submit">
          <SearchIcon width="20" height="20" />
        </Button>
      </Form>
    </Header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Searchbar
