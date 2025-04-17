import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import DuaPage from "./pages/DuaPage"
import DetailDuaPage from "./pages/DetailDuaPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<DuaPage />} />
        <Route path="/:slug/:id" element={<DetailDuaPage />} />
      </Routes>
    </>
  )
}

export default App
 