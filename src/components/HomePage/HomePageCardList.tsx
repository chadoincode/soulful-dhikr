import HomePageCard from "./HomePageCard"
import { Category } from "../../types/categories"
import IconMap from "../../constant/iconMap"

type HomePageListProps = {
  categories: Category[]
}

const HomePageList = ({categories}: HomePageListProps) => {
  return(
    <div className="flex flex-col gap-3">
      {categories.map((category) => (
        <HomePageCard 
          key={category.slug}
          title={category}
          icon={IconMap[category.slug].icon}
          alt={IconMap[category.slug].alt}
        />
      ))}
    </div>
  )
}

export default HomePageList