import { useEffect, useState } from "react";

export default function MemeBody() {
    // fetch meme API
    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMeme(data.data.memes);
        }
        getMemes();
    }, []);

    // new meme state
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });

    // all meme images state
    const [allMeme, setAllMeme] = useState();

    // click button function
    const getMemeImage = () => {
        const randomIndex = Math.floor(Math.random() * allMeme.length);
        const url = allMeme[randomIndex].url;

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url,
                topText: "",
                bottomText: "",
            };
        });
    };

    // input on change
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    return (
        <>
            <div className="px-20 py-10">
                <div>
                    <div className="flex justify-between gap-10 mb-7">
                        <input
                            type="text"
                            placeholder="Top text"
                            name="topText"
                            id="topText"
                            value={meme.topText}
                            onChange={handleChange}
                            className="h-10 w-full border-2 border-gray-300 rounded-md px-2"
                        ></input>
                        <input
                            type="text"
                            placeholder="Bottom text"
                            name="bottomText"
                            id="bottomText"
                            value={meme.bottomText}
                            onChange={handleChange}
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
                <div className="border-2 border-blue-600 mt-7 h-[450px] relative">
                    <img
                        src={meme.randomImage}
                        alt="meme"
                        className="mx-auto h-full max-w-full object-scale-down"
                    />
                    <h3 className="absolute top-20 font-bold stroke-2 stroke-white shadow-md">
                        {meme.topText}
                    </h3>
                    <h3 className="absolute top-80 font-bold stroke-2 stroke-white shadow-md">
                        {meme.bottomText}
                    </h3>
                </div>
            </div>
        </>
    );
}
