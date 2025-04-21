import DetailDuaCard from "./DetailDuaCard";
import { Dua } from "../../types/dua";
import Header from "../Header";
import { Link } from "react-router";
import { useParams } from "react-router";

type DetailDuaProps = {
  dua: Dua
}

const DetailDua = ({dua}: DetailDuaProps) => {
  const { slug } = useParams<{slug: string}>()
  return(
    <div>
      <Link to={`/${slug}`}>
        <Header title={dua.title}/>
      </Link>
      <DetailDuaCard 
        dua={dua}
      />
    </div>
  )
}

export default DetailDua