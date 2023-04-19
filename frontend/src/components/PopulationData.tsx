import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CheckboxList from './CheckboxList'

type Prefecture = {
  prefCode: number
  prefName: string
}

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

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const App: React.FC = () => {
  const [selectedPrefCodes, setSelectedPrefCodes] = useState<number[]>([])
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])

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

  const handlePrefectureChange = (selectedPrefCodes: number[]) => {
    setSelectedPrefCodes(selectedPrefCodes)
  }

  useEffect(() => {
    const getSelectedPrefecturesData = async () => {
      if (selectedPrefCodes.length === 0) {
        return
      }
      const response = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${selectedPrefCodes[0]}`,
        {
          headers: {
            'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
          },
        },
      )
      const data = await response.json()
      console.log(data)
    }
    getSelectedPrefecturesData()
  }, [selectedPrefCodes])

  return (
    <Container>
      <SubTitle>都道府県</SubTitle>
      <CheckboxList
        prefectures={prefectures}
        selectedPrefCodes={selectedPrefCodes}
        onChange={handlePrefectureChange}
      />
      <SubTitle>選択された都道府県</SubTitle>
      <List>
        {selectedPrefCodes.map((prefCode) => {
          const prefecture = prefectures.find(
            (pref) => pref.prefCode === prefCode,
          )
          return prefecture ? (
            <li key={prefecture.prefCode}>{prefecture.prefName}</li>
          ) : null
        })}
      </List>
    </Container>
  )
}

export default App
