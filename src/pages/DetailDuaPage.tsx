import DetailDuaContainer from "../components/DetailDua/DetailDuaContainer";
import Button from "../components/Button";

const DetailDuaPage = () => {
  return(
    <div className="flex flex-col max-w-[330px] md:max-w-[600px]">
      <DetailDuaContainer />
      <div className="mt-5 flex flex-row justify-between">
        <Button text="Previous" />
        <Button text="Next" />
      </div>
    </div>
  )
}

export default DetailDuaPage