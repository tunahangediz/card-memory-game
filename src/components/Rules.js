import React, { useState } from "react";

const Rules = () => {
    const [onOff, setOnOff] = useState(false);

    if (!onOff) {
        return (
            <div
                onClick={() => setOnOff(!onOff)}
                className="rules-btn nes-btn is-error"
            >
                rules
            </div>
        );
    }

    return (
        <div onClick={() => setOnOff(!onOff)} className="rules-wrapper">
            <div onClick={(e) => e.stopPropagation()} className="rules">
                <h2>You should try not to pick the same pokemon in a row.</h2>
            </div>
        </div>
    );
};

export default Rules;
