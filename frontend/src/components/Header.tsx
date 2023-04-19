import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.5rem 0;
  margin: 10px 0 0 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0BA5E9',
    textAlign: 'center',
    margin: '1rem 0',
  }

  return (
    <header style={headerStyle}>
      <Title>都道府県別の総人口推移グラフ</Title>
    </header>
  )
}

export default Header
