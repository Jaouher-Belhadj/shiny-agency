import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useContext, useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context'

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

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const previousNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;

  const [questions, setQuestions] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(null)

  const { answers, saveAnswers } = useContext(SurveyContext)

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

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

      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Yes
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          No
        </ReplyBox>
      </ReplyWrapper>

      <LinkWrapper>
        <Link to={`/survey/${previousNumber}`}>Back </Link>
        <LinkToRender />
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey