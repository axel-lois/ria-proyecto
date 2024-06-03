import { GeneralElementType } from "@/types/general"

// api.js
export const fetchDataWithCache = async (urls: string[]) => {
  try {
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem('cachedData')
    if (cachedData) {
      const cachedElements = JSON.parse(cachedData)
      return cachedElements
    }

    // Fetch data if not cached
    const responses = await Promise.all(urls.map(url => fetch(url)))
    const datas = await Promise.all(responses.map(response => response.json()))

    const allElements = datas.reduce((acc, data) => {
      if (data.civilizations) {
        acc = acc.concat(
          data.civilizations.map((item: GeneralElementType) => ({ ...item, type: 'Civilization' }))
        )
      }
      if (data.units) {
        acc = acc.concat(data.units.map((item: GeneralElementType) => ({ ...item, type: 'Unit' })))
      }
      if (data.structures) {
        acc = acc.concat(
          data.structures.map((item: GeneralElementType)  => ({ ...item, type: 'Structure' }))
        )
      }
      return acc
    }, [])

    // Cache the data
    localStorage.setItem('cachedData', JSON.stringify(allElements))

    return allElements
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
