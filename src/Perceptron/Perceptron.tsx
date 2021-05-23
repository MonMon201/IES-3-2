import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import {
  StyledFerma,
  StyledSelect,
  StyledInputContainer,
  StyledButton,
  StyledOutput
} from "./Perceptron.styles";
import { PerceptronClass } from "./PerceptronLogic";

export const Perceptron = () => {
  const [learningRate, setLearningRate] = useState<number>(0.001);
  const [deadline, setDeadline] = useState<number>(100);
  const [accuracy, setAccuracy] = useState<number>()
  const [perceptron, setPerceptron] = useState<PerceptronClass>()
  
  const handleChangeLearningRate = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    if (typeof e.target.value === "string") {
      setLearningRate(parseFloat(e.target.value));
    }
  };
  const handleChangeDeadline = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    if (typeof e.target.value === "string") {
      setDeadline(parseInt(e.target.value));
    }
  };

  const compute = () => {
    const p = perceptron || new PerceptronClass({threshold: 4, learningRate})
    setAccuracy(p.learn([[0, 6], [3, 3], [1, 5], [2, 4]], deadline))
    setPerceptron(p)
  };

  return (
    <StyledFerma>
      <StyledInputContainer>
      <StyledSelect
        native
        value={learningRate}
        placeholder={"Learning Rate"}
        onChange={handleChangeLearningRate}
      >
        <option value="0.001">0,001</option>
        <option value="0.01">0,01</option>
        <option value="0.05">0,05</option>
        <option value="0.1">0,1</option>
        <option value="0.2">0,2</option>
        <option value="0.3">0,3</option>
      </StyledSelect>
      <StyledSelect
        native
        value={deadline}
        placeholder={"Deadline"}
        onChange={handleChangeDeadline}
      >
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </StyledSelect>
      </StyledInputContainer>
      {
        accuracy ? (
          <StyledOutput>
            {`Accuracy: ${accuracy}`}
          </StyledOutput>
        ) : null
      }
      <StyledButton color="primary" variant="contained" onClick={compute}>
        Compute
      </StyledButton>
    </StyledFerma>
  );
};
