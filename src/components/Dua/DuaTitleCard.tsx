import { Dua } from "../../types/dua"
import { Link } from "react-router"

type DuaTitleCardProps = {
  title: Dua
}

const DuaTitleCard = ({title}: DuaTitleCardProps) => {
  return(
    <Link to={`dua/${title}`}>
      <div>
        <p>{title.title}</p>
        <img src="" alt="chevron right" />
      </div>
    </Link>
  )
}

export default DuaTitleCard