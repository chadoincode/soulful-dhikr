import { Dua } from "../../types/dua";

type DetailDuaCardProps = {
  dua: Dua
}

const DetailDuaCard = ({dua}: DetailDuaCardProps) => {
  return(
    <div>
      <p>{dua.arabic}</p>
      <p>{dua.translation}</p>
      <p>{dua.fawaid}</p>
      <p>{dua.source}</p>
    </div>
  )
}

export default DetailDuaCard