import React from "react"
import Question from "./question"
import Answers from "./answers"

const QuizDashboard = ({
  next,
  arrLen,
  ques,
  disable,
  clickHandler,
  disableHandler,
  nextQuestionBtnState,
}) => (
  <div>
    <h1>Fun Quiz!</h1>
    <h3>Question Completed: {`${next + 1} / ${arrLen}`}</h3>
    <Question questionNumber={next} question={ques[next].question} />
    <Answers
      disable={disable}
      disableEvent={disableHandler}
      options={ques[next].options}
      correct={ques[next].correct}
      optClick={clickHandler}
    />
    <button disabled={nextQuestionBtnState} onClick={clickHandler}>
      Next Question
    </button>
  </div>
)

export default QuizDashboard
