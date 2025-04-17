import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import DailyDuaPage from "./pages/DailyDuaPage"
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
      </Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <SelectedDuaPage /> */}
        {/* <HomePage /> */}
    </>
  )
}

export default App
 