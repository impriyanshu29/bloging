import React from 'react'
import styled from "styled-components";

const StyledText = styled.h1`
  font-size: 1.6rem;
  font-family:"Playfair Display", serif;
  font-weight: 500;
  color: #27374D;

  `
function Logo({width = '100px'}) {
  return (
    <div>
      <StyledText>
      Jaladhi
      </StyledText>
      </div>
  )
}

export default Logo