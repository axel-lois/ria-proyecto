import { Age, Cost, Expansion } from './general'

export interface Unit {
  id: number
  name: string
  type?: string;
  description: string
  expansion: Expansion
  age: Age
  created_in: string
  cost: Cost
  build_time?: number
  reload_time?: number
  attack_delay?: number
  movement_rate?: number
  line_of_sight: number
  hit_points: number
  range?: number | string
  attack?: number
  armor: string
  accuracy?: string
  attack_bonus?: string[]
  search_radius?: number
  blast_radius?: number
  armor_bonus?: string[]
}
