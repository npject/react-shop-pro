import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { productsContext } from "../../context/ProductsContext"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
    const { count } = useContext(productsContext);
    const { color,changeColor } = useContext(themeContext);
    const colorNavLink = `${color == 'light' ? 'text-body-tertiary' : 'text-white-50' }`;
    

    return(
        <>
        <nav className="navbar sticky-top navbar-expand-lg py-0 shadow-sm" data-theme={color}>
          <div className="container"> 
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-0 mb-2 mb-lg-0 pe-0" id="menu-icons">
                <li className="nav-item">
                  <NavLink className={({isActive})=>isActive ? `active nav-link px-1 ${colorNavLink}` : `nav-link px-1 ${colorNavLink}`}
                 to={"/cart"}>
                  <div className="position-relative">
                    <span className="badge position-absolute top-0 start-0 bg-badge-custom">{count}</span>    
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="mt-3 pt-1"/>
                  </div>
                 </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/blog"}>
                  <FontAwesomeIcon icon="fa-solid fa-circle-user"/>
                 </NavLink>
                </li>
                <li className="nav-item" onClick={()=> changeColor(
                  color == 'light' ? 'dark' : 'light'
                )}>
                  <div className={`nav-link py-3 px-1 ${colorNavLink}`} >
                    {color == 'light' && <FontAwesomeIcon icon="fa-solid fa-sun"/> }
                    {color == 'dark' && <FontAwesomeIcon icon="fa-solid fa-moon"/> }
                 </div>
                </li>
              </ul>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 pe-0" id="main-menu">
                <li className="nav-item ms-3">
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/"}><FontAwesomeIcon icon="fa-solid fa-house"/>خانه</NavLink>
                </li>
                <li className="nav-item ms-3">
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/blog"}>وبلاگ</NavLink>
                </li>
                <li className="nav-item ms-3">
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/products"}>محصولات</NavLink>
                 </li>
                <li className="nav-item ms-3">
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/contactUs"}>ارتباط با ما</NavLink>
                </li>
                <li className="nav-item ms-3">
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/aboutUs"}>درباره ما</NavLink>
                </li>
              </ul>
            </div>
            <NavLink className="navbar-brand" to={"/"}>
              <span className={`${color === 'light' ? 'text-dark' : 'text-light'} fw-bold`}>Online</span>
              <span className={`${color === 'light' ? 'text-dark' : 'text-light'} fw-light`}>Shop</span>
              <FontAwesomeIcon icon="fa-solid fa-bag-shopping" className="color-main" />
            </NavLink>
          </div>
        </nav>    
        </>
    )
}
export default Header;
