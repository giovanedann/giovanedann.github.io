import styled, { css } from "styled-components";
import { mainBackgroundColor, mainMediumPurple } from "../../styles/constants";

export const NavbarStyles = styled.nav<{ toggled: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  opacity: 0;
  z-index: 1;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: ${mainBackgroundColor};
  width: 100%;
  height: 100vh;
  transform: translateY(-1000px);
  -webkit-transform: translateY(-1000px);
  transition: 0.6s ease-in-out;
  opacity: 0;

  ${({ toggled }) => toggled && css`
    opacity: 1;
    transform: translateY(0);
  `}

  ul {
    list-style: none;

    li {
      text-align: center;
      margin: 35px 0;

      a {
        text-decoration: none;
        font-size: 20px;
        font-weight: 500;
        color: #FFF;
        transition: 0.5s ease-in-out;

        &:hover {
          color: ${mainMediumPurple};
        }
      }
    }
  }

  @media screen and (min-width: 800px) {
    ul li a {
      font-size: 40px;
    }
  }
`;
