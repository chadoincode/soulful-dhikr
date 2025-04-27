type duaList = {
  id: number
  slug: string
}

export const duaList = async ({slug, id}: duaList) => {
const response = await fetch(`https://dua-dhikr.onrender.com/categories/${slug}/${id}`, {
    headers: {'Accept-language': 'en'}
  })
  return response.json()
}