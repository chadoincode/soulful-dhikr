import DhikrCard from "./DhikrCard";
import { Dhikr } from "../../types/dhikr";

type DhikrListProps = {
  dhikrs: Dhikr[]
}

const DhikrList = ({dhikrs}: DhikrListProps) => {
  return(
    <div>
      {dhikrs.map((dhikr) => (
        <DhikrCard 
          key={dhikr.id}
          dhikr={dhikr}
        />
      ))}
    </div>
  )
}

export default DhikrList