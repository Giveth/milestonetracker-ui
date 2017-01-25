import React from "react";

import Navigation from "./Navigation";

function App(props) {
    return (
        <div className="app">
            <Navigation />

            { props.children }
        </div>
    );
}

export default App;
