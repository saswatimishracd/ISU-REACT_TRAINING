import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 32px;
`;

const Header = styled.header`
    color: blue;
    font-size: 31px;
`;

const Box = styled.div`
background-color: red;
width: 200px;
height: 200px;
`;

const MyStyleComponent = () => {
  return (
    <div>
      <Title>Hello styled component</Title>
      <Header>Hi Hello Jai Jagannath Bolo</Header>
      <Box>Hello</Box>
    </div>
  )
}

export default MyStyleComponent
