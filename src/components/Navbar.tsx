import { useState } from "react";

import jsonData from "./../data/localData.json";
export const localData: any = jsonData;
import LogoImg from "../images/Logo-defaut.png";
import {
  BurgerMenu,
  ImgFlag,
  LanguageBarContainer,
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  RightContainer,
} from "../styles/Navbar.style";
import {
  JsonLink,
  LangDesc,
  navBarStore,
  setLang,
  toggleIsDark,
  toggleIsExtended,
} from "../stores/NavBar.store";
import { useStore } from "@nanostores/react";

import fr from "../images/fr.png";
import en from "../images/en.png";
import es from "../images/es.png";

const tabFlag = [fr, es, en];

export function LanguageBar() {
  const { lang } = useStore(navBarStore);
  const langList = localData.language;
  console.log(lang);
  return (
    <LanguageBarContainer>
      {langList.map((item: LangDesc, index: number) => (
        <ImgFlag
          display={lang === item.id}
          // className={lang === item.id ? "hide" : ""}
          key={index}
          src={item.urlFlag}
          alt={item.description}
          onClick={() => setLang(item.id)}
        />
      ))}
    </LanguageBarContainer>
  );
}

export default function Navbar() {
  const { isExtended } = useStore(navBarStore);
  const { lang } = useStore(navBarStore);

  const navBar = localData.navBar;

  return (
    <>
      <NavbarContainer extendNavbar={isExtended}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <ul>
                {navBar.map((item: JsonLink, index: number) => (
                  <li key={index}>
                    <NavbarLink to={item.link}>{item[lang]} </NavbarLink>
                  </li>
                ))}
              </ul>
            </NavbarLinkContainer>
            <BurgerMenu onClick={toggleIsExtended}>
              {isExtended ? <>&#10005;</> : <> &#8801;</>}
            </BurgerMenu>
          </LeftContainer>
          <RightContainer>
          <LanguageBar />
            <Logo src={LogoImg} />
            <i className="fa-solid fa-circle-half-stroke" onClick={toggleIsDark}></i>
          </RightContainer>
        </NavbarInnerContainer>

        {isExtended && (
          <NavbarExtendedContainer>
            <ul>
              {navBar.map((item: JsonLink, index: number) => (
                <li key={index} onClick={toggleIsExtended}>
                    <NavbarLink to={item.link}>{item[lang]} </NavbarLink>
                </li>
              ))}
            </ul>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
}
