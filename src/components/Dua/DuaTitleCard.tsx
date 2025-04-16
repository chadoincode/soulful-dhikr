import { ChevronRight } from "lucide-react"
import { Dua } from "../../types/dua"
import { Link } from "react-router"

type DuaTitleCardProps = {
  title: Dua
}

const DuaTitleCard = ({title}: DuaTitleCardProps) => {
  return(
    <Link to={`dua/${title}`}>
      <div className="flex justify-between items-center cursor-pointer bg-secondary w-[330px] py-2.5 px-5 rounded-3xl">
        <div className="w-[264px]">
          <p className="text-sm font-bold text-background text-left">{title.title}</p>
        </div>
        <ChevronRight size={30} width={50} />
      </div>
    </Link>
  )
}

export default DuaTitleCard