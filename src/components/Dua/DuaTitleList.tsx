import DuaTitleCard from "./DuaTitleCard";
import { Dua } from "../../types/dua";

type DuaTitleListProps = {
  duas: Dua[]
}

const DuaTitleList = ({duas}: DuaTitleListProps) => {
  return(
    <div className="flex flex-col gap-1">
      {duas.map((dua) => (
        <DuaTitleCard 
          key={dua.id}
          category={dua.category}
          title={dua}
        />
      ))}
    </div>
  )
}

export default DuaTitleList
