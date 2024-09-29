import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../../public/photos/logo.png";
import { useRef, useState } from "react";


const Header = () => {
  const [showMenu , setShowMenu] = useState(true)

  const refData = useRef();
  const showMenuHandler = () => {
    setShowMenu(!showMenu)
    if(showMenu){
      refData.current.style.display="block"
      refData.current.style.right=0
    }else{
      refData.current.style.display="none"
    }
  }

  return(
    <div className="header">
      <div className="profile">
        <div className="box_profile">
          <img src="https://img.icons8.com/ios/50/import.png" alt="import" />
          <img
            src="https://img.icons8.com/pastel-glyph/64/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />
        </div>
        <div className="inputSearch_navbar">
          <input type="text" className="input_navbar" placeholder="..."/>
          
          <button className="searchBtn_navbar">جست و جو</button>
        </div>
      </div>
      <div className="logo_navbar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar">
        <ul className="menu">
          <Link className="menu_Item" to="/">
            خانه
          </Link>
          <Link className="menu_Item" to="/products">
            فروشگاه
          </Link>
          <Link className="menu_Item" to="/blog">
            وبلاگ
          </Link>
          <Link className="menu_Item" to="/about">
            درباره ما
          </Link>
          <Link className="menu_Item" to="/contact">
            تماس با ما
          </Link>
        </ul>
      </div>
      <div className="box_burger">
        <img src="https://img.icons8.com/ios-filled/50/menu--v6.png"alt="menu--v6"className="burgerBtn" onClick={showMenuHandler}/>
        <ul className="boxMenu" ref={refData}>
          <Link className="menu_Item_burger" to="/">خانه</Link>
          <Link className="menu_Item_burger" to="/products">فروشگاه</Link>
          <Link className="menu_Item_burger" to="/blog">وبلاگ</Link>
          <Link className="menu_Item_burger" to="/about">درباره ما</Link>
          <Link className="menu_Item_burger" to="/contact">تماس با ما</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
