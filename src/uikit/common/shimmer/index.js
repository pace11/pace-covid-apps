import React from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../../common/theme'

const Section = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.white2};
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
`

const shimmerAnimation = keyframes`
  0% {
    background-position: -25rem 0;
  }
  100% {
    background-position: 25rem 0;
  }
`

const StyledDivShimmer = styled.div`
  animation-name: ${shimmerAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: ${theme.colors.shimmer_secondary};
  background-image: linear-gradient(
    125deg,
    ${() =>
      `${theme.colors.gray5} 5%, ${theme.colors.white2} 100%, ${theme.colors.gray5} 30%`}
  );
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-size: 50rem 10rem;
  margin-bottom: 10px;
  border-radius: 5px;
`

const StyledWrapper = styled.div`
  height: auto;
  width: auto;
`

function Shimmer({ variant, number }) {
  switch (variant) {
    case 'title':
      return (
        <StyledWrapper>
          <StyledDivShimmer height="1.3rem" width="180px" />
        </StyledWrapper>
      )
    default:
      return (
        <React.Fragment>
          {[...Array(number).keys()].map((index) => (
            <Section key={String(index)}>
              <StyledWrapper>
                <StyledDivShimmer height="1rem" width="80px" />
                <StyledDivShimmer height="2rem" width="80px" />
                <StyledDivShimmer height="1rem" width="80px" />
              </StyledWrapper>
            </Section>
          ))}
        </React.Fragment>
      )
  }
}

export default Shimmer
