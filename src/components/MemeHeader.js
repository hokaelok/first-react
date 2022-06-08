export default function MemeHeader() {
    return (
        <div>
            <nav className="flex justify-between h-[80px] theme-color">
                <div className="navLeft flex gap-2 items-center ml-10">
                    <img src="\src\assets\images\Trollface.png" alt="" />
                    <h2 className="text-2xl text-white font-bold">
                        Meme Generator
                    </h2>
                </div>
                <div className="navRight items-center flex mr-10">
                    <h2 className="text-white">React Course - Project 3</h2>
                </div>
            </nav>
        </div>
    );
}
