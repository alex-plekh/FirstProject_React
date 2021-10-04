import React from "react";

export const Poster = ({url}) => (
    <div>
        <img src={url} alt="poster"/>
        <div className="btn-buy"> Buy ticket</div>
    </div>
);