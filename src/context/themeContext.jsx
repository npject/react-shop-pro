import { createContext, useReducer } from "react";

export const themeContext = createContext();
const themeReducer = (state,action)=> {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state,color:action.payload}
            break;
    
        default:
            break;
    }
}
export function ThemeProvider ({children}) {
    const body = document.querySelector('body');
    body.setAttribute('data-theme',localStorage.getItem('theme'));
    const [state,dispatch] = useReducer(themeReducer,{
        color: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    });
    const changeColor = (color)=> {
        dispatch({type:'CHANGE_COLOR',payload:color});
        body.setAttribute('data-theme',color);
        localStorage.setItem('theme',color);
    };

    return (
        <themeContext.Provider value={{...state,changeColor}}>
            {children}
        </themeContext.Provider>
    )
}
