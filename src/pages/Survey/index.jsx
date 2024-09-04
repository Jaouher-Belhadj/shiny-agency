import { Link, useParams } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const previousNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;

    function LinkToRender() {
        if (questionNumberInt === 10)
            return <Link to="/results">Results</Link>
        return <Link to={`/survey/${questionNumberInt + 1}`}>Next Question</Link>
    }

    return (
        <div>
            <h1>Survey 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${previousNumber}`}>Previous Question </Link>
            <LinkToRender />
        </div>
    )
}

export default Survey