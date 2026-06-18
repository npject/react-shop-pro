import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "/src/context/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
    const { color,changeColor } = useContext(themeContext);
    const colorNavLink = `${color == 'light' ? 'text-body-tertiary' : 'text-white-50' }`;


    return(
        <>
        <h1>footer</h1>










        {/* menu in mobile */}
        
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasResponsiveLabel">
          <div className="offcanvas-header">
            <button type="button" className={`btn ${color == 'light' ? 'text-dark' : 'text-light'}`} data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu" aria-label="Close">
                <FontAwesomeIcon icon="fa-solid fa-close" />
            </button>
            <h5 className={`offcanvas-title me-auto ${color == 'light' ? 'text-dark' : 'text-light'}`} id="offcanvasResponsiveLabel">منو</h5>
          </div>
          <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 pe-0" id="main-menu">
                <li className="nav-item ms-3" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                    <NavLink className={({isActive,isPending})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/"}><FontAwesomeIcon icon="fa-solid fa-house" />خانه</NavLink>
                </li>
                <li className="nav-item ms-3" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                    <NavLink className={({isActive,isPending})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/blog"}>وبلاگ</NavLink>
                </li>
                <li className="nav-item ms-3" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                    <NavLink className={({isActive,isPending})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/products"}>محصولات</NavLink>
                 </li>
                <li className="nav-item ms-3" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                    <NavLink className={({isActive,isPending})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/contactUs"}>ارتباط با ما</NavLink>
                </li>
                <li className="nav-item ms-3" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                    <NavLink className={({isActive,isPending})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/aboutUs"}>درباره ما</NavLink>
                </li>
              </ul>
              <ul className="navbar-nav me-0 mb-2 mb-lg-0 pe-0" id="menu-icons">
                <li className="nav-item" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                  <NavLink className={({isActive,isPending})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/cart"}>
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                 </NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                  <NavLink className={({isActive,isPending})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/blog"}>
                  <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                 </NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu" onClick={()=> changeColor(
                  color == 'light' ? 'dark' : 'light'
                )}>
                  <div className={`nav-link py-3 px-1 ${colorNavLink}`} >
                    {color == 'light' && <FontAwesomeIcon className="fa-solid fa-sun" /> }
                    {color == 'dark' && <FontAwesomeIcon className="fa-solid fa-moon" /> }
                 </div>
                </li>
              </ul>
          </div>
        </div>
        </>
    );
}
export default Footer;
