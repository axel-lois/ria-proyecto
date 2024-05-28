import { Cost, Expansion } from './general'

export interface Structure {
  id: number
  name: string
  expansion: Expansion
  age: Age
  cost: Cost
  build_time: number
  hit_points: number
  line_of_sight?: number
  armor: string
  special?: string[]
  reload_time?: number
  range?: number | string
  attack?: number
}

export enum Age {
  Castle = 'Castle',
  Dark = 'Dark',
  Feudal = 'Feudal',
  Imperial = 'Imperial'
}
