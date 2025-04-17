import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import DetailDuaCard from "./components/DetailDua/DetailDuaCard"
import DuaTitleContainer from "./components/Dua/DuaTitleContainer"
import DuaTitleList from "./components/Dua/DuaTitleList"
import DetailDuaContainer from "./components/DetailDua/DetailDuaContainer"
import DuaPage from "./pages/DuaPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daily-dua" element={<DuaPage />} />
      </Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <SelectedDuaPage /> */}
        {/* <HomePage /> */}
    </>
  )
}

export default App
 