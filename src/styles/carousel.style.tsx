import styled, { keyframes } from "styled-components";
import { AppTheme, DeviceMinSize } from "./App.style";

/**
 * Container for the open menu
 */

export const CarouselContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.forground};
  display: flex;
  justify-content: center;
  min-width: 100vw;
`;

export const SlideContainer = styled.ul`
  min-width: 100%;
  padding: 1rem;
  margin: 0;

  @media only screen and (min-width: ${DeviceMinSize.tablet}) {
    min-width: 80%;
  } ;
`;

const fade = keyframes`
  from {opacity: .0}
  to {opacity: 1}
`;

export const Slide = styled.li<{ display: boolean }>`
  position: relative;
  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: center;
  animation: ${fade} 3s;
  list-style: none;
  /* max-width: 100vw; */
  padding: 0;
  img {
    max-width: 100%;
  }
`;

export const Caption = styled.p`
  position: absolute;
  min-width: 100%;
  bottom: -1rem;
  padding: 0;
  font-size: 1rem;
  font-weight: bold;
  color: ${AppTheme.colors.forground};
  background-color: ${AppTheme.colors.background};
  opacity: 0.6;
  text-align: center;
`;

export const ButtonSlide = styled.div<{ sideLeft: boolean }>`
  width: 1.5rem;
  position: absolute;
  min-height: 100%;
  width: 2rem;
  ${(props) => (props.sideLeft ? "left" : "right")}: 0rem;
  top: 0;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  i {
    font-size: 2rem;
    color: ${AppTheme.colors.background};
  }
`;
