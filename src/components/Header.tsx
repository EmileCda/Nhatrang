import { BurgerMenu, Logo, MyHeader, MyNav } from "../styles/header.style";



export default function Header() {
    return (
      <>

<MyHeader >
        <Logo >
            LOREM IPSUM
        </Logo>

        {/* <!-- NAV--> */}

        <MyNav>
            <ul>
                <li ><a href="#">Home</a></li>
                <li ><a href="#">About</a></li>
                <li ><a href="#">Portfolio</a></li>
                <li ><a href="#">Contact</a></li>
            </ul>
        </MyNav>

        {/* <!-- Menu Burger --> */}

        <BurgerMenu >
            <button>&#9776;</button>
        </BurgerMenu>

    </MyHeader>

      </>
    );
  }
