import DuaTitleCard from "./DuaTitleCard";
import { Dua } from "../../types/dua";
import { Category } from "../../types/categories";
import Header from "../Header";
import { Link } from "react-router";
import { useParams } from "react-router";

type DuaTitleListProps = {
  title: Category  
  duas: Dua[]
}

const DuaTitleList = ({duas}: DuaTitleListProps) => {
  const  { slug } = useParams<{slug: string}>()
  const pageTitles: Record<string, string> = {
    "morning-dhikr": "Morning Dhikr",
    "selected-dua": "Selected Dua",
    "evening-dhikr": "Evening Dhikr",
    "dhikr-after-salah": "Dhikr After Salah",
    "daily-dua": "Daily Dua",
  }

  const title = pageTitles[slug || ""] || "Dua Page";

  return(
    <div className="flex flex-col gap-1">
      <Link to={"/"}>
        <Header title={title}/>
      </Link>
      {duas.map((dua) => (
        <DuaTitleCard 
          key={dua.id}
          title={dua}
        />
      ))}
    </div>
  )
}

export default DuaTitleList
