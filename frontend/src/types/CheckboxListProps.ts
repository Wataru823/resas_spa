import { Prefecture } from './Prefecture'

export type CheckboxListProps = {
  prefectures: Prefecture[]
  selectedPrefCodes: number[]
  onChange: (selectedPrefCodes: number[]) => void
}
