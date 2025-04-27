import { Dua } from "../../types/dua";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import DetailDua from "./DetailDua";
import Loader from "../Loader";
import Button from "../Button";

type DetailDuaContainerProps = {
  duaList: Dua[]
}

const DetailDuaContainer = ({duaList}: DetailDuaContainerProps) => {
  const {slug, id} = useParams()
  const [dua, setDua] = useState<Dua | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const currentIndex = duaList.findIndex((item) => item.id === Number(id))

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
    console.log(duaList)
  }, [slug, id])

  if(loading){
    return(
      <div>
        <Loader  />
        <svg width="40"><use href="#spin" fill="#fff" /></svg>
      </div>
    )
  }

  if(error){
    return(
      <div className="mt-[100%]">
        <h1 className="text-4xl font-bold text-red-600">Error</h1>
      </div>
    )
  }

  const handlePrev = () => {
    if(currentIndex > 0){
      const prevId = duaList[currentIndex - 1].id
      navigate(`${slug}/${prevId}`)
    }
  }

  const handleNext = () => {
    if(currentIndex < duaList.length - 1){
      const nextId = duaList[currentIndex + 1].id
      navigate(`${slug}/${nextId}`)
    } else{
      console.log('error')
    }
  }

  return(
    <div>
      <DetailDua
        dua={dua as Dua}
      />
      <div className="flex flex-row justify-between mt-10 mb-5">
        <Button handleClick={handlePrev} text="Previous" />
        <Button handleClick={handleNext} text="Next" />
      </div>
    </div>
  )
}

export default DetailDuaContainer