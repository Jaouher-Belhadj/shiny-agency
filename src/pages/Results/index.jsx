import { useContext } from "react";
import { SurveyContext } from "../../utils/context";
import { useFetch, useTheme } from "../../utils/hooks";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Loader, StyledLink } from "../../utils/style/Atoms";

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
        theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
    return title
  }
  return `${title},`
}

export function formatFetchParams(answers) {
    const answerNumbers = Object.keys(answers)

    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0
        const separator = isFirstParam ? '' : '&'
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}

function Results() {
    const { theme } = useTheme()
    const { answers } = useContext(SurveyContext)

    const queryParams = formatFetchParams(answers)

    // Ensure that the path in the frontend matches the corresponding path in the backend
    const { isLoading, data, error } = useFetch(`http://localhost:8000/results?${queryParams}`)

    if (error) {
        return <span>There is an error</span>
    }
    const { resultsData } = data

    return isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <ResultsContainer theme={theme}>
          <ResultsTitle theme={theme}>
            You require the following skills:
            {resultsData &&
              resultsData.map((result, index) => (
                <JobTitle
                  key={`result-title-${index}-${result.title}`}
                  theme={theme}
                >
                  {formatJobList(result.title, resultsData.length, index)}
                </JobTitle>
              ))}
          </ResultsTitle>
          <StyledLink $isFullLink to="/freelancers">
            Take a look at our freelancer profiles
          </StyledLink>
          <DescriptionWrapper>
            {resultsData &&
              resultsData.map((result, index) => (
                <JobDescription
                  theme={theme}
                  key={`result-detail-${index}-${result.title}`}
                >
                  <JobTitle theme={theme}>{result.title}</JobTitle>
                  <p>{result.description}</p>
                </JobDescription>
              ))}
            {resultsData.length === 0 && (
              <p>
                There are no results for the selected answers. Please
                <StyledLink to="/survey/1" style={{ padding: "10px 0" }} >try again</StyledLink>.
              </p>
            )}
          </DescriptionWrapper>
        </ResultsContainer>
      )
}

export default Results