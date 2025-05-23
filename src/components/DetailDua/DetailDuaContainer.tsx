import { Dua } from "../../types/dua";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailDua from "./DetailDua";
import Loader from "../Loader";

const DetailDuaContainer = () => {
  const {slug, id} = useParams()
  const [dua, setDua] = useState<Dua | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug || !id) return;
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
      <div className="flex justify-center items-center mt-[100%]">
        <Loader  />
      </div>
    )
  }

  if(error){
    return(
      <div className="flex justify-center items-center mt-[100%]">
        <h1 className="text-4xl font-bold text-red-600">Error</h1>
      </div>
    )
  }

  return(
    <div>
      <DetailDua
        dua={dua as Dua}
      />
    </div>
  )
}

export default DetailDuaContainer