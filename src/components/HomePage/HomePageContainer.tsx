import HomePageList from "./HomePageCardList";
import type { Category } from "../../types/categories";
import { useEffect, useState } from "react";

const HomePageContainer = () => {
  const [menus, setMenus] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMenus = async() => {
      try{
        setLoading(true)
        const response = await fetch('https://dua-dhikr.onrender.com/categories/', {
          headers: {'Accept-language': 'en'}
        })

        if(!response.ok){
          throw new Error('Failed to fetch menus')
        }

        const data = await response.json()
        setMenus(data)
        setLoading(false)
      } catch(error){
        setError(error instanceof Error ? error.message : "Unknown Error")
      } finally{
        setLoading(false)
      }
    } 
    fetchMenus()
  }, [])

  if(loading){
    return(
      <div>
        <h1>Error...</h1>
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
      <HomePageList 
        menus={menus} 
      />
    </div>
  )
}

export default HomePageContainer