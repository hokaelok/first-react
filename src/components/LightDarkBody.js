export default function LightDarkBody(props) {
    return (
        <>
            <div
                className={`h-screen duration-500 ${
                    props.theme ? "bg-slate-800" : "bg-slate-200"
                }`}
            >
                <div
                    className={`${
                        props.theme && "dark:text-white"
                    } m-auto pt-20 w-3/4`}
                >
                    <h1 className="font-bold text-4xl">
                        Fun facts about React
                    </h1>
                    <ul className="list-disc marker:text-cyan-400 mx-10 mt-10 text-lg font-semibold space-y-3">
                        <li>Was first released in 2003</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100K stars on Github</li>
                        <li>Is maintained by Facebook</li>
                        <li>
                            Powers thousands of enterprise apps, including
                            mobile apps
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
