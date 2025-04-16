import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import SelectedDuaPage from "./pages/SelectedDuaPage"
import DailyDuaPage from "./pages/DailyDuaPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category/:id" element={<SelectedDuaPage />} />
      </Routes>
    </>
  )
}

export default App
 