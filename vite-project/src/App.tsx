import HomePage from "./pages/home"
import { BrowserRouter, Route, Routes } from "react-router"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import ThankYou from "./pages/thankyou"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/thankyou" element={<ThankYou/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App