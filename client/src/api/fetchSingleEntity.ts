import { BASE_URL } from '@/constants/constants'

const endpoints = {
  Civilization: `${BASE_URL}/civilization`,
  Unit: `${BASE_URL}/unit`,
  Structure: `${BASE_URL}/structure`
}

export const fetchEntityById = async (type: string, id: string) => {
  try {
    const url = `${endpoints[type as keyof typeof endpoints]}/${id}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to fetch ${type} with ID ${id}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching ${type} with ID ${id}:`, error)
    throw error
  }
}
