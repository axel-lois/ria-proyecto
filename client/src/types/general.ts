import { Civilization } from "./civilizations"
import { Structure } from "./structures"
import { Unit } from "./units"

export enum Expansion {
  AgeOfKings = 'Age of Kings',
  TheConquerors = 'The Conquerors'
}

export enum Age {
  Castle = 'Castle',
  Dark = 'Dark',
  Feudal = 'Feudal',
  Imperial = 'Imperial'
}

export interface Provides {
  Food: number
  'Resource Decay': number
}

export interface Cost {
  Wood?: number
  Gold?: number
  Food?: number
  Stone?: number
  info?: string
  Cost?: string
  Provides?: Provides
}

export type GeneralElementType = Civilization | Structure | Unit;