import Navbar from "./sections/navbar/navbar"
import Hero from "./sections/hero/hero"
import Numbers from "./sections/numbers/numbers"
import WorkingPage from "./sections/working/page/page"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Numbers/>
      <WorkingPage/>
    </>
  )
}

export default App