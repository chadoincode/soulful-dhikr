import DetailDuaCard from "./DetailDuaCard";
import { Dua } from "../../types/dua";
import Header from "../Header";
import { Link } from "react-router";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

type DetailDuaProps = {
  dua: Dua
}

const DetailDua = ({dua}: DetailDuaProps) => {
  const { slug } = useParams<{slug: string}>()
  return(
    <div>
      <Helmet>
        <meta name="description" content="Recite this meaningful dua after completing your prayer. Strengthen your connection with Allah through daily remembrance." />
      </Helmet>
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