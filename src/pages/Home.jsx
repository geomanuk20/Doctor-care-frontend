import Banner from "../components/Banner"
import Header from "../components/Header"
import SpecialityMenu from "../components/SpecialityMenu"
import TopDoctors from "../components/TopDoctors"

const home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default home