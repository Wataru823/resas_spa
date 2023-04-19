export type PrefPopulationData = {
  year: number
  value: number
}

export type PrefPopulation = {
  prefCode: number
  prefName: string
  data: PrefPopulationData[]
}
