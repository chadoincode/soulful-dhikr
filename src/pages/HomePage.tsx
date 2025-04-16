import Title from "../components/Title";
import HomePageContainer from "../components/HomePage/HomePageContainer";
import DhikrContainer from "../components/Dhikr/DhikrContainer";
import DuaTitleContainer from "../components/Dua/DuaTitleContainer";
import DuaPage from "./DuaPage";

const HomePage = () => {
  return(
    <>
      <Title />
      {/* <HomePageContainer/> */}
      {/* <DhikrContainer /> */}
      <DuaPage />
    </>
  )
}

export default HomePage