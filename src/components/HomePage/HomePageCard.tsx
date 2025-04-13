import { Category } from "../../types/categories"

type HomePageCardProps = {
  icon: string
  title: Category
}

const HomePageCard = ({icon, title}: HomePageCardProps) => {
  return(
    <div className="flex justify-baseline items-center gap-5 bg-secondary w-[330px] py-5 px-5 rounded-3xl">
      <img className="w-8" src={icon} alt="icon" />
      <h1 className="text-2xl font-bold text-background">{title.name}</h1>
    </div>
  )
}

export default HomePageCard