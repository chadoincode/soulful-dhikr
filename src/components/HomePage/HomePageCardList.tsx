import HomePageCard from "./HomePageCard"
import { Category } from "../../types/categories"
import IconMap from "../../constant/iconMap"

type HomePageListProps = {
  menus: Category[]
}

const HomePageList = ({menus}: HomePageListProps) => {
  return(
    <div>
      {menus.map((menu) => (
        <HomePageCard 
          key={menu.slug}
          title={menu.name}
          icon={IconMap[menu.slug] || ""}
        />
      ))}
    </div>
  )
}

export default HomePageList