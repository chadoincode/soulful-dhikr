import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import Selected

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<Select} />
      </Routes>
    </>
  )
}

export default App
 