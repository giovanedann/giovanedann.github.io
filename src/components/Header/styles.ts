import styled from "styled-components"
import { mainBackgroundColor } from '../../styles/constants';

interface Props {
  toggled: boolean
}

export const HeaderContainer = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  top: 0;
  background-color: ${mainBackgroundColor};
  width: 100%;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 2;
`

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
  align-items: center;

  p {
    font-size: 15px;
  }
`;

export const HeaderText = styled.p<Props>`
  font-size: 15px;
`;
