import React, {Component} from "react"
import Searchbar from "./Searchbar/Searchbar"
import {LoaderIcon} from "./Loader/Loader"
import ImagesGallery from "./ImagesGallery/ImagesGallery"
import Modal from "./Modal/Modal"
import Button from "./Button/Button"
import Credits from "./Credits/Credits"
import {getAllImages} from "helpers/fetch/api"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {Container} from "./App.styled"

class App extends Component {
  state = {
    searchName: "",
    gallery: [],
    largeImageURL: "",
    isLoading: false,
    showModal: false,
    page: ""
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchName.trim() === "") {
      return toast.info(
        "Oh, we have nothing to search.Please enter the keyword to find images"
      )
    }
    if (prevState.searchName !== this.state.searchName) {
      this.handleImgSearchByApi()
    }
  }

  handleStateNameChange = event => {
    event.preventDefault()
    this.setState({
      searchName: event.target[0].value.toLowerCase(),
      page: 1
    })
  }

  handleImgSearchByApi = async () => {
    const {searchName } = this.state
    try {
      this.toggleLoading()
      const response = await getAllImages(searchName)
      this.setState({gallery: [...response.data.hits]})
    } catch (error) {
      console.log(error)
    } finally {
      this.toggleLoading()
    }
  }

  loadMore = async () => {
    const {searchName, page} = this.state
    try {
      this.toggleLoading()
      const response = await getAllImages(searchName, page + 1) // Fetch the next page
      const newGallery = response.data.hits
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...newGallery],
        page: prevState.page + 1
      }))
    } catch (error) {
      console.log(error)
    } finally {
      this.toggleLoading()
    }
  }

  toggleLoading = () => {
    this.setState(({isLoading}) => ({
      isLoading: !isLoading
    }))
  }

  toggleModal = largeImageURL => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
      largeImageURL: largeImageURL
    }))
  }

  render() {
    const {isLoading, gallery, largeImageURL, showModal} = this.state
    const showLoadMoreButton = gallery.length > 0
    return (
      <Container>
        <Searchbar onSubmit={this.handleStateNameChange} />
        {isLoading && <LoaderIcon toggleLoading={this.toggleLoading} />}
        <ImagesGallery gallery={gallery} toggleModal={this.toggleModal} />
        {showModal &&
          <Modal
            largeImageURL={largeImageURL}
            toggleModal={this.toggleModal}
          />}
        {showLoadMoreButton && <Button onClick={this.loadMore} />}
        <Credits />
        <ToastContainer autoClose={3000} pauseOnHover={false} theme="colored" />
      </Container>
    )
  }
}

export default App
