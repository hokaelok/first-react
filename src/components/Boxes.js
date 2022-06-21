import { useState } from "react";
import BoxesData from "../assets/API/BoxesData";

export default function Boxes() {
    const [boxes, settogglsetBoxes] = useState(BoxesData);

    const boxElements = boxes.map((box) => (
        <div
            className="border-2 border-black h-32 w-32 inline-block m-5"
            key={box.id}
        ></div>
    ));

    return (
        <div className="mt-5">
            <div>{boxElements}</div>
        </div>
    );
}
