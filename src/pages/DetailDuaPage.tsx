import DetailDuaContainer from "../components/DetailDua/DetailDuaContainer";
import Helmet from "react-helmet";

const DetailDuaPage = () => {
  return(
    <div className="flex flex-col max-w-[330px] md:max-w-[600px]">
      <Helmet>
        <meta name="description" content="" />
      </Helmet>
      <DetailDuaContainer />
    </div>
  )
}

export default DetailDuaPage