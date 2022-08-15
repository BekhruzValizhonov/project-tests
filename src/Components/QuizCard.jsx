import React, { useRef, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { encode } from "html-entities";
import { useDispatch } from "react-redux";
import { increment } from "../redux/countSlice";

const QuizCard = ({ quiz, testNumberOfQuestions, tests }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const correctRef = useRef(null);
  const dispatch = useDispatch();

  const handleCorrectClick = (answer) => {
    if (!answer) return;
    correctRef.current.style.background = "yellow";
    dispatch(increment(1));
    setIsDisabled(true);
  };

  const handleInCorrectClick = (inncorrect) => {
    if (!inncorrect) return;
    correctRef.current.style.background = "yellow";
    setIsDisabled(true);
  };

  return (
    <Card className="quiz_card m-auto" style={{ width: "28rem" }}>
      <div key={quiz.question} className="mb-5">
        <Card.Header>
          <h5>
            {testNumberOfQuestions}.{encode(quiz.question)}
          </h5>
        </Card.Header>

        {quiz.incorrect_answers.map((incorrectAnswers) => (
          <ListGroup key={incorrectAnswers} variant="flush">
            <ListGroup.Item
              className="answers"
              onClick={() => handleInCorrectClick(quiz.correct_answer)}
            >
              {incorrectAnswers}
            </ListGroup.Item>
          </ListGroup>
        ))}
        <ListGroup variant="flush">
          <ListGroup.Item
            className="answers "
            ref={correctRef}
            onClick={() => handleCorrectClick(quiz.correct_answer)}
            disabled={isDisabled}
          >
            {quiz.correct_answer}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Card>
  );
};

export default QuizCard;
