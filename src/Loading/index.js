import React from "react";
import "./Loading.scss"

export function Loading() {
    return (
        <>
            <div className="main__container__list">
                <div className="loading__image"></div>
                <div className="loading__details">
                    <h3 className="loading__details--title"><br/></h3>
                    <p className="loading__details--price"><br/></p>
                    <span className="loading__details--add"></span>
                </div>
            </div>
        </>
    );
};