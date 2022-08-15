import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination, Button } from "react-bootstrap";
import { encode } from "html-entities";
import Modal from "./Modal";
import Buttons from "./Buttons";
import QuizCard from "./QuizCard";
import { useSelector } from "react-redux";

const Tests = () => {
  let location = useLocation();
  const [tests, setTests] = useState(encode(location.state.data));
  const [testNumberOfQuestions, setTestNumberOfQuestions] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  const state = useSelector((state) => state.countSlice);

  const navigate = useNavigate();

  let active = testNumberOfQuestions;
  let items = [];
  for (let number = 1; number <= location.state.data.length; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        style={{ width: "5rem " }}
        onClick={() => setTestNumberOfQuestions(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  if (!tests.length)
    return <h1 className="error">Please choose a small quantity!</h1>;

  return (
    <div>
      <nav className="d-flex justify-content-around align-items-center mt-2">
        <h5
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          FinalExam
        </h5>
        <h5>
          {testNumberOfQuestions}/{tests.length}
        </h5>
        <Button variant="danger" onClick={() => setModalActive(true)}>
          Finish
        </Button>
        <Modal active={modalActive} setActive={setModalActive}>
          <h3 className="text_modal text-center">
            Your results: {state.count}/{tests.length}
          </h3>
          <div className="d-flex justify-content-end">
            <Button
              variant="danger"
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              GO HOME
            </Button>
          </div>
        </Modal>
      </nav>
      <div className="quiz  mt-5">
        {tests.map((quiz, idx) => {
          return (
            <div key={idx} className="section">
              {testNumberOfQuestions === idx + 1 && (
                <div key={quiz}>
                  <Pagination className="pagination">{items}</Pagination>
                  <QuizCard
                    quiz={quiz}
                    testNumberOfQuestions={testNumberOfQuestions}
                  />
                </div>
              )}
            </div>
          );
        })}
        <Buttons
          testNumberOfQuestions={testNumberOfQuestions}
          setTestNumberOfQuestions={setTestNumberOfQuestions}
          tests={tests}
        />
      </div>
    </div>
  );
};

export default Tests;
