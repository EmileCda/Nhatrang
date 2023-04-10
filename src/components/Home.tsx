/**
 * this function do ...
 */

import { DivImage, DivText,  Section1 } from "../styles/Home.style";

// import { Header, HomeMainContainer, MainArticle, PicActicle, TextArticle } from "../styles/Home.style";

export default function Home() {
  return (
    <>
      <main>
        <Section1>
          <DivImage>
            <img src="src/images/making-street-food-nha-trang-new.jpg" alt="" />
          </DivImage>

          <DivText>
            <h1>nem Ninh Hoa</h1>
            <h1>Nem nuong ou le nem grillé</h1>
            <p>
              Essayons ensuite le Nem nuong ou le nem grillé à base de porc
              fermenté grillé. En dégustant «nem Ninh Hoa», vous sentirez
              l’arôme de la viande, de l’acide sucré, du croquant et du mélange
              épicé, c’est très intéressant! Le nem nuong est servi notamment
              avec une salade de papaye verte qui apporte une nouvelle saveur.{" "}
            </p>

            <a href="#" className="p-1 bckg-red color-white">
              En savoir plus
            </a>
          </DivText>
        </Section1>
      </main>
    </>
  );
}
