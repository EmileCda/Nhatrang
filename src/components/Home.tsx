
/**
 * this function do ...
 */

import { DivW50, FlexCol, Section1 } from "../styles/Home.style";

// import { Header, HomeMainContainer, MainArticle, PicActicle, TextArticle } from "../styles/Home.style";


export default function Home() {
  return (
    <>
      <main>

{/* <!-- SECTION 1 --> */}

<Section1 >

    <DivW50 >
        <img  src="src/images/making-street-food-nha-trang-new.jpg" alt="" />
    </DivW50>

    <DivW50 ><FlexCol>
        <h1> nem Ninh Hoa</h1>
        <h2> Nem nuong ou le nem grillé</h2>
        <p>Essayons ensuite le Nem nuong ou le nem grillé à base de porc fermenté grillé. En dégustant «nem Ninh Hoa», vous sentirez l’arôme de la viande, de l’acide sucré, du croquant et du mélange épicé, c’est très intéressant! Le nem nuong est servi notamment avec une salade de papaye verte qui apporte une nouvelle saveur.  </p>

        <a href="#" className="p-1 bckg-red color-white">En savoir plus</a>
        </FlexCol></DivW50>

</Section1>


</main>
    </>
  );
}