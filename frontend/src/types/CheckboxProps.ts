export type CheckboxProps = {
  prefCode: number
  prefName: string
  checked: boolean
  onChange: (prefCode: number, checked: boolean) => void
}
