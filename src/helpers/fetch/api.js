import axios from "axios"

const API_KEY = "37026546-2b1865daf098081b40f3ebfca"

export const getAllImages = async (searchName, page = 1, perPage = 12) => {
  const response = await axios(
    `https://pixabay.com/api/?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  )
  return response
}
