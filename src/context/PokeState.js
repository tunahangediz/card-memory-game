import React, { useReducer } from "react";
import context from "./Context";
import reducer from "./Reducer";

const PokeState = (props) => {
    const initialState = {
        imgArr: [
            "https://cdn.bolgegundem.com/d/news/657903.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv9OC-ki1-i41w2ytag93Zx55cZ4zsQILzOXaJZ5v0ndTqG2rveqhkQYo9V8G5pdrXmY&usqp=CAU",
            "https://www.arttablo.com/upload/U-bulbasaur-1-pokemon-karakterleri-kanvas-tablo1480082206-800.jpg",
            "http://1.bp.blogspot.com/-8qT5itaIc8U/UQF0zC4abwI/AAAAAAAAAIc/k8CD1muPkUw/s280/007.JPG",
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
            "https://i.insider.com/57910997dd0895a56e8b457d?width=1300&format=jpeg&auto=webp",
        ],
        selected: "",
        score: 0,
        bestScore: 0,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    ///shuffle card

    function shuffle(array) {
        var m = array.length,
            t,
            i;

        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        dispatch({ type: "shuffle", payload: array });
    }

    ///selected
    const game = (src) => {
        let newScore = state.score;
        let bestScore = state.bestScore;
        if (state.selected !== src) {
            dispatch({ type: "selected", payload: src });
            newScore++;
            dispatch({ type: "score", payload: newScore });
        } else {
            bestScore = bestScore < state.score ? state.score : bestScore;
            console.log(bestScore);
            dispatch({ type: "selected", payload: "" });
            newScore = 0;
            dispatch({ type: "score", payload: newScore });

            dispatch({ type: "bestscore", payload: bestScore });
        }
    };

    return (
        <context.Provider
            value={{
                imgArr: state.imgArr,
                score: state.score,
                bestScore: state.bestScore,
                shuffle,
                game,
            }}
        >
            {props.children}
        </context.Provider>
    );
};

export default PokeState;
