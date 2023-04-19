import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CheckboxList from './CheckboxList'
import PopulationGraph from './PopulationGraph'
import { Prefecture } from '../types/Prefecture'
import { PrefPopulation } from '../types/PrefPopulation'

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  width: 90%;
`

const SubTitle = styled.h2`
  color: #11b981;
  font-size: 1.1rem;
  margin: 2rem 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const PopulationData: React.FC = () => {
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([])
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [prefPopulation, setPrefPopulation] = useState<PrefPopulation[]>([])

  useEffect(() => {
    const fetchPrefectures = async () => {
      const response = await fetch(
        'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        {
          headers: {
            'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
          },
        },
      )
      const data = await response.json()
      setPrefectures(data.result)
    }
    fetchPrefectures()
  }, [])

  const handlePrefectureChange = async (selectedPrefCodes: number[]) => {
    setSelectedPrefCodes(selectedPrefCodes)
    const promises = selectedPrefCodes.map(async (prefCode) => {
      const response = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
        {
          headers: {
            'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
          },
        },
      )
      const data = await response.json()

      const prefecture = prefectures.find((pref) => pref.prefCode === prefCode)
      data.result.prefName = prefecture?.prefName

      return {
        prefCode: data.result.prefCode,
        prefName: data.result.prefName,
        data: data.result.data[0].data,
      }
    })
    const prefPopulationData = await Promise.all(promises)
    setPrefPopulation(prefPopulationData)
  }

  return (
    <Container>
      <SubTitle>都道府県</SubTitle>
      <CheckboxList
        prefectures={prefectures}
        selectedPrefCodes={selectedPrefCodes}
        onChange={handlePrefectureChange}
      />
      <SubTitle>都道府県別のグラフ</SubTitle>
      <PopulationGraph prefPopulation={prefPopulation} />
    </Container>
  )
}

export default PopulationData
