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
import {Container, Error, ErrorText} from "./App.styled"

class App extends Component {
  state = {
    searchName: "",
    gallery: [],
    largeImageURL: "",
    isLoading: false,
    showModal: false,
    page: "",
    error: null
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages()
    }
  }

  fetchImages = async () => {
    const {searchName, page} = this.state

    if (searchName.trim() === "") {
      this.setState({gallery: []})
      return toast.error(
        "Oh, we have nothing to search. Please enter the keyword to find images"
      )
    }

    try {
      this.toggleLoading()
      const response = await getAllImages(searchName, page)
      const gallery = response.data.hits

      if (gallery.length === 0 && page === 1) {
        this.setState({gallery: []})
       return toast.info(`No images found for ${searchName}`)
      } else {
        this.setState(prevState => ({
          gallery: page === 1 ? gallery : [...prevState.gallery, ...gallery],
          error: null
        }))
      }
    } catch (error) {
      this.setState({error})
    } finally {
      this.toggleLoading()
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const {searchName} = this.state
    const imgName = event.target[0].value.toLowerCase()

    if (searchName === imgName) {
      return toast.info(`Oh, you already watching ${searchName} images`)
    }
    this.setState({
      searchName: imgName,
      page: 1
    })
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
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
    const {isLoading, gallery, largeImageURL, showModal, error} = this.state
    const showLoadMoreButton = gallery.length > 0

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <LoaderIcon toggleLoading={this.toggleLoading} />}
        {error &&
          <Error>
            <ErrorText>
              "{error}"
            </ErrorText>
          </Error>}
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
