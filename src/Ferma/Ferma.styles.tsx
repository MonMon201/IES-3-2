import styled from "styled-components";
import { colors } from "../constants";
import { TextField, Button } from "@material-ui/core";

export const StyledFerma = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  color: ${colors.white10};
`;

export const StyledTextField = styled(TextField)`
  border-radius: 5px;
  background: ${colors.white10};
`;

export const StyledButton = styled(Button)`
  width: 200px;
  &:hover {
  }
`;

export const StyledOutput = styled.div`
  width: 200px;
  height: 20px;
  color: ${colors.white10};
`;
