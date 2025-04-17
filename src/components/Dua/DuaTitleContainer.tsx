import DuaTitleList from "./DuaTitleList";
import { Dua } from "../../types/dua";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

// type DuaTitleContainerProps = {
//   slug: string
// }

const DuaTitleContainer = () => {
  const {slug} = useParams<{slug: string}>()
  const [duas, setDuas] = useState<Dua[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDuas = async () => {
      try{
        setLoading(true)
        const response = await fetch(`https://dua-dhikr.onrender.com/categories/${slug}`, {
          headers: {'Accept-language': 'en'}
        })

        if(!response.ok){
          throw new Error('Failed to fetch duas')
        }

        const data =  await response.json()

        setDuas(data.data)
        setLoading(false)
      } catch(error){
        setError(error instanceof Error  ? error.message : 'Unknown Error')
        console.log(error)
      } finally{
        setLoading(false)
      }
    }
    fetchDuas()
  }, [])

  if(loading){
    return(
      <div>
        <h1>Loading...</h1>
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
      <DuaTitleList 
        duas={duas}
      />
    </div>
  )
}

export default DuaTitleContainer