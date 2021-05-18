import React, { useState } from "react";
import {
  StyledButton,
  StyledFerma,
  StyledOutput,
  StyledTextField,
} from "./Ferma.styles";
import { fermaFactor } from "./fermatFactor";

export const Ferma = () => {
  const [output, setOutput] = useState<number[]>([]);
  const [input, setInput] = useState<string>("0");
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  const compute = () => {
    const number = parseInt(input);
    if (!isNaN(number) && number) {
      const { factors } = fermaFactor(number);
      setOutput(factors);
    }
  };
  return (
    <StyledFerma>
      <StyledTextField variant={"outlined"} onChange={onChange} value={input} />
      <StyledOutput>
        {" "}
        {output[0]} * {output[1]}{" "}
      </StyledOutput>
      <StyledButton color="primary" variant="contained" onClick={compute}>
        Compute
      </StyledButton>
    </StyledFerma>
  );
};
