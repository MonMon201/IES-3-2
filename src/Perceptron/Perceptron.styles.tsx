import styled from "styled-components";
import { colors } from "../constants";
import { Select, Button } from "@material-ui/core";

export const StyledFerma = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  color: ${colors.white10};
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 200px;
`;

export const StyledOutput = styled.div`
  width: 200px;
  height: 20px;
  color: ${colors.white10};
`;

export const StyledSelect = styled(Select)`
  width: 130px;
  margin-left: 10px;
  background: ${colors.white10};
`;
