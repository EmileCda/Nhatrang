import { AccueilContainer } from "../styles/Home.style";
import Story from "./Story";
import Carousel from "./carousel";

/**
 * this function do ...
 */

import jsonData from "./../data/localData.json";
import { textLang } from "../lib/utils";
export const localData: any = jsonData;

export default function Home() {
  const myTextScreen = textLang("textStory");
  const title = myTextScreen.title;
  const text = myTextScreen.text;

  return (
    <>
      <AccueilContainer>
        <Carousel />
        <Story
          imgUrl={myTextScreen.imgUrl}
          imgalt={myTextScreen.imgAlt}
          title={myTextScreen.title}
          text={myTextScreen.text}
          hrefLink={myTextScreen.hrefLink}
          hrefText={myTextScreen.hrefText}
        />
      </AccueilContainer>
    </>
  );
}
