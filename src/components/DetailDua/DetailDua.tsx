import DetailDuaCard from "./DetailDuaCard";
import { Dua } from "../../types/dua";
import Header from "../Header";

type DetailDuaProps = {
  dua: Dua
}

const DetailDua = ({dua}: DetailDuaProps) => {
  return(
    <div>
      <Header title={dua.title}/>
      <DetailDuaCard 
        dua={dua}
      />
    </div>
  )
}

export default DetailDua