import { useContext } from "react";
import { themeContext } from "context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RatingStars ({ rating }) {
    const {color} = useContext(themeContext);

    const percentage = (rating / 5) * 100;
    return (
        <>
        <div className={`position-relative d-inline-block ${color === 'light' ? 'color-ccc' : 'text-secondary'}`}>
            <div>
                {[...Array(5)].map((_,i) => 
                    <FontAwesomeIcon key={i} icon={'fa-solid fa-star'} />
                )}
            </div>
            <div className={`d-flex position-absolute top-0 end-0 overflow-hidden 
            ${color === 'light' ? 'text-warning' : 'text-warning-emphasis'}`} 
            style={{ width: `${percentage}%`}} >
                <div style={{ whiteSpace: 'nowrap'}} >
                {[...Array(5)].map((_,i) => 
                    <FontAwesomeIcon key={i} icon={'fa-solid fa-star'} />
                )}
                </div>
            </div>
        </div>
        </>
    );
}
export default RatingStars;
