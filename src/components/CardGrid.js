import React, { useContext, useState } from "react";
import context from "../context/Context";

const CardGrid = () => {
    // const [arrayState, setArr] = useState([1, 2, 3, 4, 5, 6]);

    const Context = useContext(context);

    // let arr = [1, 2, 3, 4, 5, 6];

    // function shuffle(array) {
    //     var m = array.length,
    //         t,
    //         i;

    //     // While there remain elements to shuffle…
    //     while (m) {
    //         // Pick a remaining element…
    //         i = Math.floor(Math.random() * m--);

    //         // And swap it with the current element.
    //         t = array[m];
    //         array[m] = array[i];
    //         array[i] = t;
    //     }

    //     setArr([...array]);
    // }
    return (
        <div>
            <div className="grid-9 content-center">
                {Context.imgArr.map((el) => (
                    <div
                        onClick={() => Context.shuffle(Context.imgArr)}
                        className="flex content-center align-center"
                        style={{
                            height: "250px",
                            width: "250px",
                            backgroundColor: "white",
                            borderRadius: "2rem",
                        }}
                    >
                        <img
                            onClick={(e) => Context.game(e.target.src)}
                            style={{ width: "200px", mixBlendMode: "multiply" }}
                            src={el}
                            alt=""
                        />
                    </div>

                    // <div style={{ width: "100px" }}>
                    //     <h1>{el}</h1>
                    // </div>
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
