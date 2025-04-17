import Header from "../components/Header";
import { Category } from "../types/categories";
import DuaTitleContainer from "../components/Dua/DuaTitleContainer";

type DuaPageProps = {
  title: Category
}

const DuaPage = ({title}: DuaPageProps) => {
  return(
    <div>
      <Header icon="icon" title={title} />
      <DuaTitleContainer />
    </div>
  )
}

export default DuaPage
