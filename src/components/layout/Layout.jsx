import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "../../context/themeContext";
import { ProductsProvider } from "../../context/ProductsContext";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


function Layout() {
    return(
        <>
        <ThemeProvider>
            <ProductsProvider>
                <Header />
                <div className="main">
                    <Outlet />
                </div>
                <Footer />
            </ProductsProvider>
        </ThemeProvider>
        </>
    );
}
export default Layout;
library.add(fas, far, fab);
