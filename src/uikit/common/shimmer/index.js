import React from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../../common/theme'

const Section = styled.div`
  width: ${(props) => props.width || '100%'};
  height: 100%;
  background: ${theme.colors.white2};
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: ${(props) => props.marginBottom || '0px'};
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
  border-radius: ${(props) => props.borderRadius || '5px'};
`

const StyledWrapper = styled.div`
  height: auto;
  width: auto;
`

/**
 *
 * @param {Number} props.number
 */
export default function Shimmer({ number }) {
  return (
    <React.Fragment>
      {[...Array(number).keys()].map((index) => (
        <Section key={String(index)}>
          <StyledWrapper>
            <StyledDivShimmer height="8rem" />
            <StyledDivShimmer height="1rem" width="60%" />
            <StyledDivShimmer height="1rem" width="60%" />
          </StyledWrapper>
        </Section>
      ))}
    </React.Fragment>
  )
}
