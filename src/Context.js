import React, { createContext, useState } from "react";
const GlobalInfo = createContext("green");

function ColorContext({ children }) {
    const [color, setColor] = useState('');

    return (
        <GlobalInfo.Provider value={{ color, setColor }}>
            {children}
            </GlobalInfo.Provider>
    )

}
export { GlobalInfo, ColorContext };