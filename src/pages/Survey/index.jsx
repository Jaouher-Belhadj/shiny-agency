import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const previousNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;

  const [questions, setQuestions] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(null)

  function LinkToRender() {
    if (questions[questionNumberInt + 1])
      return <Link to={`/survey/${questionNumberInt + 1}`}>Next </Link>
    return <Link to="/results">Results</Link>
  }

  useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`)
        const { surveyData } = await response.json()
        setQuestions(surveyData)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setDataLoading(false)
      }
    }
    fetchSurvey()
  }, [])

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading ?
        <Loader /> :
        questions[questionNumber] && <QuestionContent>{questions[questionNumber]}</QuestionContent>
      }
      {error && <span>Something went wrong</span>}
      <LinkWrapper>
        <Link to={`/survey/${previousNumber}`}>Back </Link>
        <LinkToRender />
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey