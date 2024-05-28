import { Expansion } from './general'

export interface Civilization {
  id: number
  name: string
  expansion: Expansion
  army_type: string
  unique_unit: string[]
  unique_tech: string[]
  team_bonus: string
  civilization_bonus: string[]
}
