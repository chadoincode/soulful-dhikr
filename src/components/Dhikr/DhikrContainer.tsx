import DhikrList from "./DhikrList";
import { Dhikr } from "../../types/dhikr";
import { useEffect, useState } from "react";
// import { useParams } from "react-router";

const DhikrContainer = () => {
  // const slug = useParams<{slug: string}>()
  const [dhikrs, setDhikrs] = useState<Dhikr[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDhikrs = async () => {
      try{
        setLoading(true)
        const response = await fetch('https://dua-dhikr.onrender.com/categories', {
          headers:{'Accept-language': 'en'}
        })

        if(!response.ok){
          throw new Error('Failed to fetch dhikrs')
        }
        
        const result = await response.json()

        // const dhikrData = result.data.filter((item: Dhikr) => {
        //   item.category?.toLowerCase().includes('dhikr')
        // })

        // return dhikrData
        setDhikrs(result.data)
      } catch(error){
        setError(error instanceof Error ? error.message : "Unknown Error")
      } finally{
        setLoading(false)
      }
    }
    fetchDhikrs()
  }, [])

  if(loading){
    return(
      <h1>Loading</h1>
    )
  }

  if(error){
    return(
      <h1>Error...</h1>
    )
  }

  return(
    <div>
      <DhikrList 
        dhikrs={dhikrs}
      />
    </div>
  )
}

export default DhikrContainer