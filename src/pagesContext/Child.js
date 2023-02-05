import React, { useContext, useEffect } from "react";

// import { GlobalInfo } from './Context'
import Theme from "../context/contexts";

function Child() {
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
            <h2>CHILD COMPONENT</h2>
            {/* <Theme.Provider value='dark'> */}
            <Theme.Consumer>
                {theme => <div>Our theme is: {theme}</div>}
            </Theme.Consumer>
            {/* </Theme.Provider> */}
        </div>
    )
}
export default Child;