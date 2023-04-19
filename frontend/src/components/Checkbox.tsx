import React from 'react'

type CheckboxProps = {
  prefCode: number
  prefName: string
  checked: boolean
  onChange: (prefCode: number, checked: boolean) => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  prefCode,
  prefName,
  checked,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(prefCode, event.target.checked)
  }

  return (
    <div>
      <input
        type="checkbox"
        value={prefCode}
        checked={checked}
        onChange={handleChange}
      />
      <label>{prefName}</label>
    </div>
  )
}

export default Checkbox
