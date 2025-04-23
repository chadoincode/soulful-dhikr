import HomePageList from "./HomePageCardList";
import type { Category } from "../../types/categories";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const HomePageContainer = () => {
  const [menus, setMenus] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMenus = async() => {
      try{
        setLoading(true)
        const response = await fetch('https://dua-dhikr.onrender.com/categories/', {
          // method: 'GET',
          headers: {
            'Accept-language': 'en'
          }
        })

        if(!response.ok){
          throw new Error('Failed to fetch menus')
        }

        const data = await response.json()
        setMenus(data.data)
        setLoading(false)
      } catch(error){
        setError(error instanceof Error ? error.message : "Unknown Error")
        console.error(error)
      } finally{
        setLoading(false)
      }
    } 
    fetchMenus()
  }, [])

  if(loading){
    return(
      <div>
        <Loader />
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

  return(
    <div>
      <HomePageList 
        categories={menus}
      />
    </div>
  )
}

export default HomePageContainer