import HomePageCard from "./HomePageCard"
import { Category } from "../../types/categories"
import IconMap from "../../constant/iconMap"

type HomePageListProps = {
  categories: Category[]
}

const HomePageList = ({categories}: HomePageListProps) => {
  return(
    <div className="flex flex-col gap-1">
      {categories.map((category) => (
        <HomePageCard 
          key={category.slug}
          title={category}
          icon={IconMap[category.slug] || ""}
        />
      ))}
    </div>
  )
}

export default HomePageList