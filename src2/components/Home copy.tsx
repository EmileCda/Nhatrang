
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
        <h1> 
        <span > 
        nem Ninh Hoa<br/>Nem nuong ou le nem grillé</span></h1>
        <p>Essayons ensuite le Nem nuong ou le nem grillé à base de porc fermenté grillé. En dégustant «nem Ninh Hoa», vous sentirez l’arôme de la viande, de l’acide sucré, du croquant et du mélange épicé, c’est très intéressant! Le nem nuong est servi notamment avec une salade de papaye verte qui apporte une nouvelle saveur.  </p>

        <a href="#" className="p-1 bckg-red color-white">En savoir plus</a>
        </FlexCol></DivW50>

</Section1>

{/* <!-- SECTION 2 --> */}

<section className="flex  flex-column align-center p-2" id="section-2">

    <h2 className="w-50 text-align">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    <p className="w-50 text-align my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorem amet
        facere, labore eveniet dolorum quo officiis magnam quos quis eum. Nostrum, laudantium modi provident
        aperiam asperiores animi iure temporibus?</p>

    <ul className="flex">
        <li className="flex flex-column align-center p-2">
            <span className="addValue">20</span>
            <span>Lorem Ipsum</span>
        </li>
        <li className="flex flex-column align-center p-2">
            <span className="addValue">20</span>
            <span>Lorem Ipsum</span>
        </li>
        <li className="flex flex-column align-center p-2">
            <span className="addValue">20</span>
            <span>Lorem Ipsum</span>
        </li>
        <li className="flex flex-column align-center p-2">
            <span className="addValue">20</span>
            <span>Lorem Ipsum</span>
        </li>
    </ul>

    <h2 className="text-center">Lorem, Ipsum, Lorem, and Lorem with Ipsum!</h2>
</section>


{/* <!-- SECTION 3 --> */}

<section className="flex flex-column align-center justify-center p-2" id="section-3">

    <div className="w-70 flex flex-column align-center justify-center">
        <div className="my-2 text-with-gradient">
            &lt; Codez Lorem Ipsum &gt;
        </div>

        {/* <!-- IMG RIGHT --> */}

        <div className="flex align-center wrap">
            <div className="w-50 p-2">
                <div className="color-red">LOREM IPSUM AND YUMMY TEXT</div>
                <h3 className="my-1">Lorem ipsum dolor sit amet consectetur</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut vel accusantium sequi
                    corrupti impedit rerum corporis praesentium magnam nostrum quia quae officia consequuntur,
                    quas
                    repellendus odit placeat est. Deserunt.</p>
            </div>

            <div className="w-50 p-2">
                <img className="w-100" src="src/images/9.png" alt="../images/9.png" />
            </div>
        </div>

        {/* <!-- IMG LEFT --> */}

        <div className="flex align-center wrap">

            <div className="w-50 p-2">
                <img className="w-100" src="img/10.png" alt="" />
            </div>

            <div className="w-50 p-2">
                <div className="color-red">LOREM IPSUM AND YUMMY TEXT</div>
                <h3 className="my-1">Lorem ipsum dolor sit amet consectetur</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut vel accusantium sequi
                    corrupti impedit rerum corporis praesentium magnam nostrum quia quae officia consequuntur,
                    quas
                    repellendus odit placeat est. Deserunt.</p>
            </div>
        </div>

        {/* <!-- IMG RIGHT --> */}

        <div className="flex align-center wrap">
            <div className="w-50 p-2">
                <div className="color-red">LOREM IPSUM AND YUMMY TEXT</div>
                <h3 className="my-1">Lorem ipsum dolor sit amet consectetur</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut vel accusantium sequi
                    corrupti impedit rerum corporis praesentium magnam nostrum quia quae officia consequuntur,
                    quas
                    repellendus odit placeat est. Deserunt.</p>
            </div>

            <div className="w-50 p-2">
                <img className="w-100" src="img/11.png" alt="" />
            </div>
        </div>

    </div>

</section>

{/* <!-- SECTION 4 --> */}
<section className="flex justify-center p-2 bckg-grey" id="section-4">

    <div className="w-70 flex justify-between wrap">

        {/* <!-- LANGUAGE 1 --> */}

        <div className="w-30 p-1">
            <a href="#">
                <div className="card">
                    <div className="img-container">
                        <img className="w-100" src="img/2.png" alt="" />
                    </div>

                    <div className="title-container font-weight-bold p-1">
                        LOREM
                    </div>

                    <div className="description-container color-grey p-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </a>
        </div>

        {/* <!-- LANGUAGE 2 --> */}

        <div className="w-30 p-1">
            <a href="#">
                <div className="card">
                    <div className="img-container">
                        <img className="w-100" src="img/3.png" alt="" />
                    </div>

                    <div className="title-container font-weight-bold p-1">
                        LOREM
                    </div>

                    <div className="description-container color-grey p-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </a>
        </div>

        {/* <!-- LANGUAGE 3 --> */}

        <div className="w-30 p-1">
            <a href="#">
                <div className="card">
                    <div className="img-container">
                        <img className="w-100" src="img/4.png" alt="" />
                    </div>

                    <div className="title-container font-weight-bold p-1">
                        LOREM
                    </div>

                    <div className="description-container color-grey p-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </a>
        </div>

        {/* <!-- LANGUAGE 4 --> */}

        <div className="w-30 p-1">
            <a href="#">
                <div className="card">
                    <div className="img-container">
                        <img className="w-100" src="img/2.png" alt="" />
                    </div>

                    <div className="title-container font-weight-bold p-1">
                        LOREM
                    </div>

                    <div className="description-container color-grey p-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </a>
        </div>

        {/* <!-- LANGUAGE 5 --> */}

        <div className="w-30 p-1">
            <a href="#">
                <div className="card">
                    <div className="img-container">
                        <img className="w-100" src="img/3.png" alt="" /> 
                    </div>

                    <div className="title-container font-weight-bold p-1">
                        LOREM
                    </div>

                    <div className="description-container color-grey p-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </a>
        </div>

        {/* <!-- LANGUAGE 6 --> */}

        <div className="w-30 p-1">
            <a href="#">
                <div className="card">
                    <div className="img-container">
                        <img className="w-100" src="img/4.png" alt="" />
                    </div>

                    <div className="title-container font-weight-bold p-1">
                        LOREM
                    </div>

                    <div className="description-container color-grey p-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </a>
        </div>

    </div>

</section>

</main>
    </>
  );
}