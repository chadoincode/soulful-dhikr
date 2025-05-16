import DuaTitleContainer from "../components/Dua/DuaTitleContainer";
import { Helmet } from "react-helmet";

const DuaPage = () => {
  return(
    <div>
      <Helmet>
        <meta name="description" content="Browse a collection of essential Islamic duas and dhikr for daily life, including prayers for health, safety, guidance, and blessings." />
      </Helmet>
      <DuaTitleContainer />
    </div>
  )
}

export default DuaPage
