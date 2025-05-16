import Title from "../components/Title";
import HomePageContainer from "../components/HomePage/HomePageContainer";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return(
    <>
    <Helmet>
      <meta name="description" content="Soulful Dhikr is your daily companion for peaceful Islamic remembrance and prayers. Discover curated dhikr and dua for every moment." />
    </Helmet>
      <Title />
      <HomePageContainer/>
    </>
  )
}

export default HomePage