import { useState } from "react";
import MemesData from "../assets/API/MemesData";

export default function MemeBody() {
    // const [memeImage, setMemeImage] = useState(
    //     "https://i.imgflip.com/30b1gx.jpg"
    // );

    // new meme state
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });

    // all meme images state
    const [allMemeImages, setAllMemeImages] = useState(MemesData);

    /* click button function */
    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;

        setMeme((prevMeme) => {
            return { ...prevMeme, randomImage: url };
        });
    };

    return (
        <div>
            <div className="px-20 py-10">
                <div>
                    <div className="flex justify-between gap-10 mb-7">
                        <input
                            type="text"
                            placeholder="Top text"
                            className="h-10 w-full border-2 border-gray-300 rounded-md px-2"
                        ></input>
                        <input
                            type="text"
                            placeholder="Bottom text"
                            className="h-10 w-full border-2 border-gray-300 rounded-md px-2"
                        ></input>
                    </div>
                    <button
                        onClick={getMemeImage}
                        className="theme-color w-full h-10 text-white font-semibold rounded-md "
                    >
                        Get a new meme image 🖼️
                    </button>
                </div>
                <div className="border-2 border-blue-600 mt-7 h-[450px]">
                    <img
                        src={meme.randomImage}
                        alt="meme"
                        className="mx-auto h-full max-w-full object-scale-down"
                    />
                </div>
            </div>
        </div>
    );
}
