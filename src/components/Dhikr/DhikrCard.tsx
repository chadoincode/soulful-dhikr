import { Dhikr } from "../../types/dhikr";

type DhikrCardProps = {
  dhikr: Dhikr
}

const DhikrCard = ({dhikr}: DhikrCardProps) => {
  return(
    <div className="">
      <h1>{dhikr.title}</h1>
      <p>{dhikr.arabic}</p>
      <p>{dhikr.translation}</p>
      <p>{dhikr.fawaid}</p>
      <p>{dhikr.source}</p>
    </div>
  )
}

export default DhikrCard