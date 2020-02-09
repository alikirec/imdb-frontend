import styled from 'styled-components';
import { getShadow, getSpace } from '../../UiElements/themeHelpers';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FormContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  box-shadow: ${getShadow(2, true)};
  margin: 15% auto auto;
  padding: ${getSpace(4)} 0;
`;
