import { ChevronRight } from "lucide-react"
import { Dua } from "../../types/dua"
import { Link } from "react-router"

type DuaTitleCardProps = {
  title: Dua
}

const DuaTitleCard = ({title}: DuaTitleCardProps) => {
  return(
    <Link to={`/${title.category}/${title.id}`}>
      <div className="flex justify-between items-center cursor-pointer bg-secondary w-[330px] h-[60px] py-2.5 px-5 rounded-2xl md:w-[600px]">
        <div>
          <p className="text-sm font-bold text-background text-left line-clamp-2">{title.title}</p>
        </div>
        <div className="w-[30px] h-[30px] px-[7px] py-[2.5px]">
          <ChevronRight strokeWidth={3} color="#132519" />
        </div>
      </div>
    </Link>
  )
}

export default DuaTitleCard