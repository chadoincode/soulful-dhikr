import { Dua } from "../../types/dua";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailDuaCard from "./DetailDuaCard";

const DetailDuaContainer = () => {
  const {slug, id} = useParams()
  const [dua, setDua] = useState<Dua | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDua = async () => {
      try{
        setLoading(true)
        const response = await fetch(`https://dua-dhikr.onrender.com/categories/${slug}/${id}`,  {
          headers: {'Accept-language': 'en'}
        })

        if(!response.ok){
          throw new Error('Failed to fetch dua')
        }
        const data = await response.json()

        setDua(data.data)
        setLoading(false)
      } catch(error){
        setError(error instanceof Error ? error.message : "Unknown Error")
      } finally{
        setLoading(false)
      }
    }
    fetchDua()
  }, [slug, id])

  if(loading){
    return(
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

  if(error){
    return(
      <div>
        <h1>Error</h1>
      </div>
    )
  }

  return(
    <div>
      <DetailDuaCard 
        dua={dua as Dua}
      />
    </div>
  )
}

export default DetailDuaContainer