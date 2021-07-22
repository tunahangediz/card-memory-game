import React, { useCallback, useContext } from "react";
import Context from "../context/Context";

const Navbar = () => {
    const context = useContext(Context);

    return (
        <div className="navbar">
            <div className="flex align-center px-1 logo ">
                <i className="nes-charmander mr-1"></i>
                <h3>Poke Memory</h3>
            </div>
            <div style={{ width: "560px" }} className="flex content-between">
                <div className="flex">
                    <h2>SCORE</h2>
                    <h2 className="mx-2">{context.score}</h2>
                </div>

                <div className="flex">
                    <h2>BEST SCORE </h2>
                    <h2 className="mx-2">{context.bestScore}</h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
