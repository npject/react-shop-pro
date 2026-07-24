import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeContext, productsContext } from "context";

function Footer() {
    const { count } = useContext(productsContext);
    const { color,changeColor } = useContext(themeContext);
    const colorNavLink = `${color == 'light' ? 'text-body-tertiary' : 'text-white-50' }`;


    return(
        <>
        <footer data-theme={color} data-bs-theme={color} >
          <div className="container py-3">
            <div className="row py-5 ">
              <div className="col-md-6 col-lg-4 mb-md-0 mb-3 d-flex">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" className="ms-3 text-body-emphasis" />
                <p className="fs-14 text-body-tertiary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
              </div>
              <div className="col-md-6 col-lg-3 mb-md-0 mb-3 d-flex flex-column">
                <span className="fs-14 mb-2 d-flex flex-row-reverse text-body-tertiary" style={{ direction: 'ltr' }}>
                  <FontAwesomeIcon icon="fa-solid fa-phone-volume" className="ms-3 text-body-emphasis" />
                  +98 999999999
                </span>
                <span className="fs-14 text-body-tertiary">
                  <FontAwesomeIcon icon="fa-solid fa-mail-bulk" className="ms-3 text-body-emphasis" />
                  example@test.com
                </span>
              </div>
              <div className="col-md-6 col-lg-2 mb-md-0 mb-3">
                <nav>
                  <ul className="list-unstyled pe-0">
                    <li><Link className="text-decoration-none mb-2 text-body-tertiary" to={"/"} >خانه</Link></li>
                    <li><Link className="text-decoration-none mb-2 text-body-tertiary" to={"/blog"} >وبلاگ</Link></li>
                    <li><Link className="text-decoration-none mb-2 text-body-tertiary" to={"/products"} >محصولات</Link></li>
                    <li><Link className="text-decoration-none mb-2 text-body-tertiary" to={"/contactUs"} >ارتباط با ما</Link></li>
                    <li><Link className="text-decoration-none mb-2 text-body-tertiary" to={"/aboutUs"} >درباره ما</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-6 col-lg-3 mb-md-0 mb-3 d-flex flex-column align-items-center
              justify-content-md-evenly align-items-md-start justify-content-lg-between align-items-lg-end">
                <Link className="navbar-brand mb-3 mb-md-0" to={"/"}>
                  <span className={`${color === 'light' ? 'text-dark' : 'text-light'} fw-bold`}>Online</span>
                  <span className={`${color === 'light' ? 'text-dark' : 'text-light'} fw-light`}>Shop</span>
                  <FontAwesomeIcon icon="fa-solid fa-bag-shopping" className="color-main" />
                </Link>
                <div className="d-inline-flex gap-2">
                  <Link to={'#'} className='text-body-emphasis fs-4 social-link'>
                    <FontAwesomeIcon icon={'fa-brands fa-instagram'} />
                  </Link>
                  <Link to={'#'} className='text-body-emphasis fs-4 social-link'>
                    <FontAwesomeIcon icon={'fa-brands fa-facebook'} />
                  </Link>
                  <Link to={'#'} className='text-body-emphasis fs-4 social-link'>
                    <FontAwesomeIcon icon={'fa-brands fa-youtube'} />
                  </Link>
                  <Link to={'#'} className='text-body-emphasis fs-4 social-link'>
                    <FontAwesomeIcon icon={'fa-brands fa-twitter'} />
                  </Link>
              </div>
              </div>
            </div>
          </div>
        </footer>


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
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/"}><FontAwesomeIcon icon="fa-solid fa-house" />خانه</NavLink>
                </li>
                <li className="nav-item ms-3" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/blog"}>وبلاگ</NavLink>
                </li>
                <li className="nav-item ms-3" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/products"}>محصولات</NavLink>
                 </li>
                <li className="nav-item ms-3" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/contactUs"}>ارتباط با ما</NavLink>
                </li>
                <li className="nav-item ms-3" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                    <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/aboutUs"}>درباره ما</NavLink>
                </li>
              </ul>
              <ul className="navbar-nav me-0 mb-2 mb-lg-0 pe-0" id="menu-icons">
                <li className="nav-item" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                  <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"/cart"}>
                  <div className="position-relative">
                    <span className="badge position-absolute top-0 end-0 bg-badge-custom">{count}</span>    
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="mt-3 pt-1"/>
                  </div>
                 </NavLink>
                </li>
                {/* <li className="nav-item" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                  <NavLink className={({isActive})=>isActive ? `active nav-link py-3 px-1 ${colorNavLink}` : `nav-link py-3 px-1 ${colorNavLink}`}
                 to={"#"}>
                  <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                 </NavLink>
                </li> */}
                <li className="nav-item" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu" onClick={()=> changeColor(
                  color == 'light' ? 'dark' : 'light'
                )}>
                  <div className={`nav-link py-3 px-1 ${colorNavLink}`} >
                    {color == 'light' && <FontAwesomeIcon icon="fa-solid fa-sun" /> }
                    {color == 'dark' && <FontAwesomeIcon icon="fa-solid fa-moon" /> }
                 </div>
                </li>
              </ul>
          </div>
        </div>
        </>
    );
}
export default Footer;
