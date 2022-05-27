import styled from "styled-components"

import { mainLightPurple } from "../../styles/constants";

export const AboutContainer = styled.div`
  margin-top: 10rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .description {
    width: 70%;
    margin-bottom: 50px;
  }

  img {
    border-radius: 30%;
    max-width: 80%;
    height: auto;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 40px;
  }

  h2 {
    margin-bottom: 10px;
    font-size: 25px;
  }

  p {
    font-weight: 400;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;

    .description{
      width: 50%;
    }
  }
`;

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  
  h1 {
    font-size: 50px;
    margin-bottom: 5rem;
  }

  .skills-container{
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    justify-content: center;
  }

  .skill-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 150px;
    height: 200px;
    transition: 0.2s ease-in-out;

    .skill-icon, p {
      transition: 0.2s ease-in-out;
    }

    p {
      text-align: center;
      max-width: 100px;
    }

    &:hover {
      transform: scale(1.04);

      .skill-icon {
        fill: ${mainLightPurple}
      }
      
      p {
        color: ${mainLightPurple}
      }
    }
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }
`;
