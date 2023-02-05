import React from "react";
import Theme from "../context/contexts";


const ThemedButton = (props) => (
    <Theme.Consumer>


        {theme => <button {...props}>button with them: {theme}</button>}

    </Theme.Consumer>


);

export default ThemedButton;
