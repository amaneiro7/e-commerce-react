import React from "react";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Footer } from "./Footer";
import './Aside.scss'


export function Aside() {    
    return (
        <>
            <aside className="aside">
                <Header />
                <Nav />
                <Footer />
            </aside>
        </>
    );
};