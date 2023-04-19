import React from 'react'
import styled from 'styled-components'

type CheckboxProps = {
  prefCode: number
  prefName: string
  checked: boolean
  onChange: (prefCode: number, checked: boolean) => void
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  margin-right: 8px;
`

const Label = styled.label`
  cursor: pointer;
`

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
    <Container>
      <Input
        type="checkbox"
        value={prefCode}
        checked={checked}
        onChange={handleChange}
      />
      <Label onClick={() => onChange(prefCode, !checked)}>{prefName}</Label>
    </Container>
  )
}

export default Checkbox
