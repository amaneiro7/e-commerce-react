import React from "react";
import { Aside } from "../templates/Aside";
import { MainProducts } from "../templates/MainProducts"

export function MainLayout() {
    return (
        <>
            <div>
                <div className="wrapper">
                    <Aside/>
                    <MainProducts/>
                </div>
            </div>
        </>
    )
}