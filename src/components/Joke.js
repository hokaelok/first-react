import { useState } from "react";

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false);

    function toggleShown() {
        setIsShown((prevShown) => !prevShown);
    }

    return (
        <div>
            {props.setup && <h3 className="font-bold">{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button
                className="border-2 border-black rounded-lg p-2 m-3 hover:scale-110 duration-500"
                onClick={toggleShown}
            >
                {isShown ? "Hide" : "Show"} Punchline
            </button>
            <hr />
        </div>
    );
}
