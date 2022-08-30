import DarkLightSwitch from "./DarkLightSwitch";

export default function LightDarkHeader(props) {
    return (
        <>
            <div
                className={`flex justify-between border-b-2 ${
                    props.theme && "border-gray-700 bg-gray-900"
                } items-center py-3 px-5 duration-500`}
            >
                <div className="flex justify-center">
                    <span>
                        <img
                            className="w-24"
                            src={require("../assets/images/transparent-react-logo.png")}
                            alt=""
                        />
                    </span>
                    <h2 className="font-bold text-3xl flex items-center text-cyan-400">
                        ReactFacts
                    </h2>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <p
                        className={`${
                            props.theme && "dark:text-gray-500"
                        } font-bold mb-1`}
                    >
                        <small>Light</small>
                    </p>
                    <DarkLightSwitch handleClick={props.handleTheme} />
                    {/* <div
                        className={`${
                            props.theme ? "bg-white" : "bg-gray-800"
                        } h-6 w-12 rounded-xl relative`}
                        onClick={props.handleTheme}
                    >
                        <div
                            className={`${
                                props.theme
                                    ? "bg-gray-800 translate-x-[22px]"
                                    : "bg-white left-[2px]"
                            } rounded-2xl w-6 h-[20px] absolute hover:cursor-pointer top-[2px] duration-500`}
                        ></div>
                    </div> */}
                    <p
                        className={`${
                            props.theme ? "text-white" : "text-gray-500"
                        } font-bold mb-1`}
                    >
                        <small>Dark</small>
                    </p>
                </div>
            </div>
        </>
    );
}
