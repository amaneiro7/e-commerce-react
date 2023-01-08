import React from "react";
import { Aside } from "../Aside"
import { MainProducts } from "../MainProducts";

import "./AppUI.css"


function AppUI() {
    return (
        <>          
        <div className="wrapper">            
            <Aside />
            <MainProducts />
        </div>            
    </>
    );
}

export {AppUI};