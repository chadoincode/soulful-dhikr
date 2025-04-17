import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import SelectedDuaPage from "./pages/SelectedDuaPage"
import DailyDuaPage from "./pages/DailyDuaPage"
import DetailDuaCard from "./components/DetailDua/DetailDuaCard"
import DuaTitleContainer from "./components/Dua/DuaTitleContainer"
import DuaTitleList from "./components/Dua/DuaTitleList"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<DuaTitleContainer />} />
      </Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <SelectedDuaPage /> */}
        {/* <HomePage /> */}
    </>
  )
}

export default App
 