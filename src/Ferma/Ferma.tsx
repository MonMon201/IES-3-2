import React from "react";
import { StyledButton, StyledFerma, StyledTextField } from "./Ferma.styles";

export const Ferma = () => {
  return (
    <StyledFerma>
      <StyledTextField variant={"outlined"} type={"number"} />
      <StyledButton color="primary" variant="contained">
        {" "}
        Calc{" "}
      </StyledButton>
    </StyledFerma>
  );
};
