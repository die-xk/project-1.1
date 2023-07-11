import MediaQuery from "react-responsive";
import MobileProducts from "./MobileProducts"

function Products() {
  return (
    <MediaQuery query="(max-device-width: 576px)">
        <MobileProducts />
    </MediaQuery>
  )
}

export default Products