import { useContext } from "react";
import { themeContext } from "../context/themeContext";


function Home() {
    const {color} = useContext(themeContext);

    return(
        <>
        <div data-theme={color}>
        <h1>home</h1>      
        </div>
        </>
    );
}
export default Home;
