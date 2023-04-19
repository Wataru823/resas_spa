import React from 'react'
import styled from 'styled-components'
import { Prefecture } from '../types/Prefecture'
import Checkbox from './Checkbox'

type CheckboxListProps = {
  prefectures: Prefecture[]
  selectedPrefCodes: number[]
  onChange: (selectedPrefCodes: number[]) => void
}

const CheckboxListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  row-gap: 1.5rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  }
`

const CheckboxList: React.FC<CheckboxListProps> = ({
  prefectures,
  selectedPrefCodes,
  onChange,
}) => {
  const handleCheckboxChange = (prefCode: number, checked: boolean) => {
    const newSelectedPrefCodes = checked
      ? [...selectedPrefCodes, prefCode]
      : selectedPrefCodes.filter((code) => code !== prefCode)
    onChange(newSelectedPrefCodes)
  }

  return (
    <CheckboxListWrapper>
      {prefectures.map((prefecture) => (
        <Checkbox
          key={prefecture.prefCode}
          prefCode={prefecture.prefCode}
          prefName={prefecture.prefName}
          checked={selectedPrefCodes.includes(prefecture.prefCode)}
          onChange={handleCheckboxChange}
        />
      ))}
    </CheckboxListWrapper>
  )
}

export default CheckboxList
