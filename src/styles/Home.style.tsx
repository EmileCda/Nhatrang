import styled from "styled-components";
import { AppTheme } from "./App.style";
import { device } from "../lib/Common";

export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const DivImage = styled.div`
  display: flex;
  max-width: 100vw;
  justify-content : center;

  @media ${device.tablet} {
    max-width: 50vw;
  }
  img {
    max-width: 90%;
    border-radius: 0.6rem;
  }
`;

export const DivText = styled.div`
  max-width: 100vw;
  padding: 1rem;

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  @media ${device.tablet} {
    max-width: 50vw;
    display: flex;
    flex-direction: column;
  }
`;
