import styled from "styled-components";
import { AppTheme } from "./App.style";
import { device } from "../lib/Common";

export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* min-width: 100vw; */
  /* align-content : center; */
  background-color: ${AppTheme.colors.background};
  border 1px dashed blue;
  @media ${device.tablet} { 
    /* background-color: ${AppTheme.colors.lessBG}; */
    flex-direction: row;
  }

`;
export const DivW50 = styled.div`
  width: 50vw;
  padding: 0 1.5rem;
  @media ${device.tablet} { 
    /* background-color: ${AppTheme.colors.lessBG}; */
    padding: 2.5rem;
    width: 100vw;
  }

border 1px solid red;
`;
export const ZDivW50 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1.2rem;
  border 1px solid red;
  img {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.3);
    min-width: 100%;
    border-radius : .6rem;
    display: block;
    width:385px;
  /* max-height:100%; */
  /* width: auto; */
  height: 300px;

  }
  h1, h2 {
    min-width: 100%;
    padding: 0 1.2rem;
    background-color: ${AppTheme.colors.background};
    color: ${AppTheme.colors.lessFG};
  }
  p {
    min-width: 100%;
    padding: 0 1.2rem;
    color: ${AppTheme.colors.forground};
  }
  a {
    padding: 0 1rem;
    background-color: ${AppTheme.colors.background};
    color: ${AppTheme.colors.lessFG};
  }

`;

export const FlexCol = styled.div`
  flex-direction: column;
`;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%ù
export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 100vw;
  min-height: 100vh;
`;

export const Header = styled.div`
  background-color: ${AppTheme.colors.forground};
  min-width: 100vw;
  text-align: center;
`;

export const MainArticle = styled.div`
  background-color: ${AppTheme.colors.forground};
  display: flex;
  flex-direction: column;
  padding: ${AppTheme.BorderRadius};
  min-width: 100vw;
  border: 1px solid red;
`;

export const TextArticle = styled.div`
  background-color: ${AppTheme.colors.forground};
  display: flex;
  flex-wrap: auto;
  min-width: 100vw;
  padding: ${AppTheme.BorderRadius};
  p {
    padding: 0;
    margin: 0;
    color: ${AppTheme.colors.lessFG};
  }
`;

export const PicActicle = styled.div`
  background-color: ${AppTheme.colors.forground};
  display: flex;
  justify-content: center;

  img {
    max-width: 100vw;
    padding: ${AppTheme.BorderRadius};
    /* max-height: 230px; */
    width: auto;
    height: auto;
    display: bloc;
    border-radius: 1rem;
  }
`;
