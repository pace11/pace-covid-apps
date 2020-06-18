import React from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'

const StyledContainer = styled.div`
  width: 100%;
  height: 150px;
  background: ${Theme.colors.gray3};
`

export default function NewsCard() {
  return (
    <StyledContainer>
      <div>
        <p>afafafa</p>
      </div>
    </StyledContainer>
  )
}
