import { useContext } from "react";
import { themeContext } from "context";
import CategorySlider from "components/sliders/categorySlider";
import categorySliderData from "/src/data/categories.json";

function Home() {
    const {color} = useContext(themeContext);

    return(
        <>
        <div data-theme={color}>  
            <div className="container-fluid g-0">
                <CategorySlider data={categorySliderData} />    
            </div>      
        </div>
        </>
    );
}
export default Home;
