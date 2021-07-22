import React from "react";

const Reducer = (state, action) => {
    switch (action.type) {
        case "shuffle":
            return { ...state, imgArr: action.payload };
        case "selected":
            return { ...state, selected: action.payload };
        case "score":
            return { ...state, score: action.payload };
        case "bestscore":
            return { ...state, bestScore: action.payload };
        default:
            break;
    }
};

export default Reducer;
