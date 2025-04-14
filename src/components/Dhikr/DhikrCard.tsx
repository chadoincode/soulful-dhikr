import { Dhikr } from "../../types/dhikr";
import { Link } from "react-router";

type DhikrCardProps = {
  dhikr: Dhikr
}

const DhikrCard = ({dhikr}: DhikrCardProps) => {
  return(
    <Link to={`${dhikr.category}/${dhikr.id}`}>
      <div className="">
        <h1>{dhikr.title}</h1>
        <p>{dhikr.arabic}</p>
        <p>{dhikr.translation}</p>
        <p>{dhikr.notes}</p>
        <p>{dhikr.fawaid || null}</p>
        <p>{dhikr.source}</p>
      </div>
    </Link>
  )
}

export default DhikrCard