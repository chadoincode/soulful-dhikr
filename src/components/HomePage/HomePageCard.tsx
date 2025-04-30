import { Category } from "../../types/categories"
import { Link } from "react-router"

type HomePageCardProps = {
  icon: string
  title: Category
}

const HomePageCard = ({icon, title}: HomePageCardProps) => {
  return(
    <Link to={`${title.slug}`}>
      <div className="flex justify-normal items-center align-middle cursor-pointer gap-5 bg-secondary w-[330px] py-5 px-5 rounded-2xl md:w-[600px]">
        <img className="w-8" src={icon} alt="icon" />
        <h1 className="text-2xl font-bold text-background">{title.name}</h1>
      </div>
    </Link>
  )
}

export default HomePageCard