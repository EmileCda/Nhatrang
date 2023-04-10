import styled from "styled-components";
import { AppTheme } from "./App.style";

export const MyHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 200px;
  border: 1px solid black;
`;

export const MyNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
  a {
    text-decoration: none;
    color: ${AppTheme.colors.forground};
  }
  li {
    padding: 1rem;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
`;
