import React, { useContext, useEffect } from "react";

// import { GlobalInfo } from './Context'
import Theme from "../context/contexts";
import Child from "./Child";
import ThemeButton from "./Themebutton";
function Main() {
    // const { color, setColor } = useContext(GlobalInfo);
    // console.log("GlobalInfo", color);

    // useEffect(() => {
    //     setColor("red")
    //     console.log("appColor", color);
    // }, [])

    return (
        <div>
            {/* <h1 style={{color}}>aman</h1>
            <a href={"/loginui"}>login</a> */}
            <h2>Main COMPONENT</h2>
            <Theme.Provider value='light'>
                <Child />
            </Theme.Provider>

            <Theme.Consumer>
                {theme => <div>Main theme is: {theme}</div>}
            </Theme.Consumer>

            <Theme.Consumer>

                {theme => <ThemeButton>button with them: {theme}</ThemeButton>}

            </Theme.Consumer>
        </div>
    )
}
export default Main;