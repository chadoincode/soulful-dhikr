import HomePageCard from "./HomePageCard"
import { Category } from "../../types/categories"
import MorningDhikr from '../../assets/morning-dhikr.png'

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
          icon={MorningDhikr}
        />
      ))}
    </div>
  )
}

export default HomePageList