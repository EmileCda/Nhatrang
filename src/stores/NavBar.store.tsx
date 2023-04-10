/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";

export type LangDesc = {
  id: TLang;
  name: string;
  description: string;
  urlFlag: string;
};


export enum TLang {
  fr = "fr",
  en = "en",
  es = "es",
}

export type JsonLink = {
  en: TLang;
  es: TLang;
  fr: TLang;
  link: string;
};

export type NavbarStore = {
  lang: TLang;
  isDark : boolean;
  isExtended : boolean;

};

export const navBarStore = map<NavbarStore>({
  lang: TLang.fr,
  isDark : false,
  isExtended: false,
});

export const setLang = action(
  navBarStore,
  "setLang",
  (store, newLang: TLang) => {
    store.setKey("lang", newLang);
  }
);

export const toggleIsDark = action(
  navBarStore,
  "toggleIsDark",
  (store) => {
    const { isDark } = store.get();
    store.setKey("isDark", !isDark);
  }
);


export const toggleIsExtended = action(
  navBarStore,
  "toggleIsExtended",
  (store) => {
    const { isExtended } = store.get();
    store.setKey("isExtended", !isExtended);
  }
);

