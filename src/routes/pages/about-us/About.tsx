import MediaQuery from "react-responsive";
import MobileAbout from "./MobileAbout";

function About() {
  return (
    <>
        <MediaQuery query="(max-device-width: 576px)">
            <MobileAbout />
        </MediaQuery>
    </>
  )
}

export default About