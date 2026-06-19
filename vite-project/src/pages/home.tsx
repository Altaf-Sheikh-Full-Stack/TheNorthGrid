import Compare from "../sections/compare/compare"
import Footer from "../sections/footer/footer"
import Hero from "../sections/hero/hero"
import Navbar from "../sections/navbar/navbar"
import Numbers from "../sections/numbers/numbers"
import Popup from "../sections/popup/popup"
import Pricing from "../sections/pricing/pricing"
import WorkingPage from "../sections/working/page/page"
import Modal from "../system/modal/modal"



const HomePage = () => {
  return (
    <>
      <Modal/>
      <Navbar />
      <Hero />
      <Numbers/>
      <WorkingPage/>
      <Compare/>
      <Pricing/>
      <Footer/>
    <Popup/>
    </>
  )
}

export default HomePage