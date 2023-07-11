import MediaQuery from "react-responsive";
import './Contact.css'
import MobileContact from './MobileContact'

function Contact() {
  return (
      <MediaQuery query="(max-device-width: 576px)">
        <MobileContact />
      </MediaQuery>
  )
}

export default Contact