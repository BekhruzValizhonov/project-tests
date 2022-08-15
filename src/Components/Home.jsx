import React, { useState } from "react";
import axios from "axios";
import { dataSelect } from "../dataSelect";
import { useNavigate } from "react-router-dom";
import { FloatingLabel, Form } from "react-bootstrap";

const Home = () => {
  const [dataCategory, setDataCategory] = useState(dataSelect);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [category, setCategory] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=easy&type=multiple`
        )
        .then((res) => {
          navigate("/tests", {
            state: { data: res.data.results, category: category },
          });
        })
        .catch((e) => console.log(e));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingSelect" label="Number Of Questions:">
          <Form.Select
            aria-label="Floating label select example"
            onChange={(e) => setNumberOfQuestions(e.target.value)}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="floatingSelect" label="Number Of Questions:">
          <Form.Select
            aria-label="Floating label select example"
            name="category"
            className="mt-2"
            onChange={(e) => setCategory(e.target.value)}
          >
            {dataCategory.map((v, idx) => {
              return (
                <option key={idx} value={idx + 8}>
                  {v}
                </option>
              );
            })}
          </Form.Select>
        </FloatingLabel>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success w-50 mt-2">START</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
