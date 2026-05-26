import Navbar from "./sections/navbar/navbar"
import Hero from "./sections/hero/hero"
import Numbers from "./sections/numbers/numbers"
import WorkingPage from "./sections/working/page/page"
import Compare from "./sections/compare/compare"
import Footer from "./sections/footer/footer"
import Pricing from "./sections/pricing/pricing"
import Popup from "./sections/popup/popup"
const App = () => {
  return (
    <>
      
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

export default App