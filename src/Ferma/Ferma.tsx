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
  const [found, setFound] = useState<number>();
  const [input, setInput] = useState<string>("0");
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  const compute = () => {
    const number = parseInt(input);
    if (!isNaN(number) && number) {
      const { foundIn, factors } = fermaFactor(number);
      setOutput(factors);
      setFound(foundIn)
    }
  };
  return (
    <StyledFerma>
      <StyledTextField variant={"outlined"} onChange={onChange} value={input} />
      <StyledOutput>
        { found ? `Found it in ${found} iterations: ` : null}
      </StyledOutput>
      <StyledOutput>
        {output[0]} * {output[1]}
      </StyledOutput>
      <StyledButton color="primary" variant="contained" onClick={compute}>
        Compute
      </StyledButton>
    </StyledFerma>
  );
};
