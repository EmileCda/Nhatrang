import styled from "styled-components";
import { AppTheme, DeviceMinSize } from "./App.style";

export const Section50 = styled.section`
  display: flex;
  background-color: ${AppTheme.colors.lessBG};
  flex-wrap: wrap;
  padding: ${AppTheme.Padding_1};
  h1 {
    line-height: 1.5rem;
    font-size: 1.5rem;
    color: ${AppTheme.colors.forground};
  }
  p{

    font-size: 0.9rem;
    text-align: justify;
    color: ${AppTheme.colors.forground};

  }
  a {
    line-height: 2.5rem;
    border-radius: 0.5rem;
    background-color:${AppTheme.colors.medium};
    padding: ${AppTheme.Padding_1};
    text-decoration: none;
    color: ${AppTheme.colors.forground};
}
`;

export const Div50L = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media only screen and (min-width: ${DeviceMinSize.tablet}) {
    width: 50%;
  } ;
`;

export const ImgShadow = styled.img`
  justify-content: flex-end;
  width: 100%;
  min-width: 100px;
  border-radius: ${AppTheme.BorderRadius};
  .shadow-white {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.3);
  }
  @media only screen and (min-width: ${DeviceMinSize.tablet}) {
    min-width: 400px;
  } ;
`;

export const Div50R = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media only screen and (min-width: ${DeviceMinSize.tablet}) {
    width: 50%;
    padding: ${AppTheme.Padding_1};

  } ;
`;
