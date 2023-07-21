import {Watch} from "react-loader-spinner"
import {LoaderOverlay} from "./Loader.styled"
export const LoaderIcon = () => {
  return (
    <LoaderOverlay>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#756986"
        ariaLabel="watch-loading"
      />
    </LoaderOverlay>
  )
}
