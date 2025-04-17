import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import DetailDuaCard from "./components/DetailDua/DetailDuaCard"
import DuaTitleContainer from "./components/Dua/DuaTitleContainer"
import DuaTitleList from "./components/Dua/DuaTitleList"
import DetailDuaContainer from "./components/DetailDua/DetailDuaContainer"
import DuaPage from "./pages/DuaPage"
import DetailDuaPage from "./pages/DetailDuaPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<DuaPage />} />
        <Route path="/:id" element={<DetailDuaPage />} />
      </Routes>
    </>
  )
}

export default App
 