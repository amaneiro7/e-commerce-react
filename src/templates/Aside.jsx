import React from "react";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import './style/Aside.scss'


export function Aside() {
    return (
        <>
            <aside>
                <Header />
                <Nav />
                <Footer />
            </aside>
        </>
    );
};