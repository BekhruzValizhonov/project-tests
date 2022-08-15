import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Buttons = ({
  testNumberOfQuestions,
  setTestNumberOfQuestions,
  tests,
}) => {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (testNumberOfQuestions === 1) {
      setPrev(true);
    } else {
      setPrev(false);
    }

    if (testNumberOfQuestions === tests.length) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [testNumberOfQuestions]);

  return (
    <div className="d-flex mt-2">
      <Button
        className="mx-2"
        variant="dark"
        disabled={prev}
        onClick={() => {
          if (testNumberOfQuestions === 1) {
            setPrev(true);
          } else {
            setPrev(false);
            setTestNumberOfQuestions(testNumberOfQuestions - 1);
          }
        }}
      >
        Prev
      </Button>
      <Button
        variant="success"
        disabled={next}
        onClick={() => {
          if (testNumberOfQuestions === tests.length) {
            setNext(true);
          } else {
            setNext(false);
            setTestNumberOfQuestions(testNumberOfQuestions + 1);
          }
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Buttons;
