import { Dua } from "../../types/dua";

type DetailDuaCardProps = {
  dua: Dua
}

const DetailDuaCard = ({dua}: DetailDuaCardProps) => {
  return(
    <div className="flex flex-col gap-2.5 bg-secondary rounded-3xl py-2.5 px-4 w-[330px] md:w-[600px]">
      <p className="font-semibold font-arabic text-right text-lg">{dua.arabic}</p>
      <p className="font-medium text-left text-sm">{dua.translation}</p>
      <p className="font-bold text-left text-xs italic">{dua.notes}</p><hr />
      <p className="font-medium text-left text-sm italic">{dua.fawaid}</p>
      <p className="font-medium text-left text-xs">{dua.source}</p>
    </div>
  )
}

export default DetailDuaCard