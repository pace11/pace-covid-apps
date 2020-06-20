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

const StyledWrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column || '1fr 10fr'};
  grid-gap: 10px;
`

const StyledWrapperContent = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.number || '2'},
    1fr
  );
  grid-gap: 10px;
`

const StyledWrapperContentSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.number || '1'},
    1fr
  );
  grid-gap: 10px;
  overflow-y: scroll;
`

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`

/**
 *
 * @param {String} props.variant
 * @param {Number} props.number
 */
function Shimmer({ variant, number }) {
  switch (variant) {
    case 'list':
      return (
        <React.Fragment>
          {[...Array(number).keys()].map((index) => (
            <Section key={String(index)} marginBottom="10px">
              <StyledWrapperGrid>
                <StyledDivShimmer
                  height="1.3rem"
                  width="1.3rem"
                  borderRadius="50%"
                />
                <StyledDivShimmer height="1.3rem" width="100%" />
              </StyledWrapperGrid>
            </Section>
          ))}
        </React.Fragment>
      )
    case 'card':
      return (
        <Container>
          <StyledWrapperTitle>
            <StyledDivShimmer height="1.3rem" width="200px" />
          </StyledWrapperTitle>
          <StyledWrapperContent>
            {[...Array(number).keys()].map((index) => (
              <Section key={String(index)}>
                <StyledWrapper>
                  <StyledDivShimmer height="1rem" width="80px" />
                  <StyledDivShimmer height="2rem" width="80px" />
                  <StyledDivShimmer height="1rem" width="80px" />
                </StyledWrapper>
              </Section>
            ))}
          </StyledWrapperContent>
        </Container>
      )
    case 'card-news-list':
      return (
        <Container>
          <StyledWrapperTitle>
            <StyledDivShimmer height="1.3rem" width="100px" />
          </StyledWrapperTitle>
          <StyledWrapperContent number="1">
            {[...Array(number).keys()].map((index) => (
              <Section key={String(index)}>
                <StyledWrapperGrid column="4fr 6fr">
                  <div>
                    <StyledDivShimmer height="6rem" width="100%" />
                  </div>
                  <div>
                    <StyledDivShimmer height="1rem" width="100%" />
                    <StyledDivShimmer height="1rem" width="80%" />
                    <StyledDivShimmer height="1rem" width="80%" />
                  </div>
                </StyledWrapperGrid>
              </Section>
            ))}
          </StyledWrapperContent>
        </Container>
      )
    default:
      return (
        <Container>
          <StyledWrapperTitle>
            <StyledDivShimmer height="1.3rem" width="200px" />
            <StyledDivShimmer height="1.3rem" width="60px" />
          </StyledWrapperTitle>
          <StyledWrapperContentSlider number={number}>
            {[...Array(number).keys()].map((index) => (
              <Section key={String(index)} width="250px">
                <StyledWrapper>
                  <StyledDivShimmer height="8rem" width="100%" />
                  <StyledDivShimmer height="1rem" width="100%" />
                  <StyledDivShimmer height="1rem" width="80%" />
                </StyledWrapper>
              </Section>
            ))}
          </StyledWrapperContentSlider>
        </Container>
      )
  }
}

export default Shimmer
