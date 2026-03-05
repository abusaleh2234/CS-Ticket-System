import bg from "../../assets/vector1.png"
const Banner = ({ progress, resolved }) => {
    return (
        <div className="md:py-14 py-8 px-2 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className={` relative overflow-hidden text-center rounded-xl p-6 md:p-16 text-white bg-linear-to-tl from-[#9F62F2] to-[#632EE3]`}>

                    <img
                        src={bg}
                        alt="bg-vector"
                        className="absolute left-0 bottom-0 h-full opacity-100 pointer-events-none"
                    />
                    <div className={``}>
                        <h2 className="text-xl md:text-2xl">In Progress</h2>
                        <h1 className="text-2xl md:text-6xl">{progress.length}</h1>
                    </div>
                    <img
                        src={bg}
                        alt="bg-vector"
                        className="absolute right-0 bottom-0 h-full opacity-100 pointer-events-none rotate-y-180"
                    />
                </div>
                <div className="relative overflow-hidden text-center rounded-xl p-6 md:p-16 text-white bg-linear-to-r from-[#54CF68] to-[#00827A]">
                    <img
                        src={bg}
                        alt="bg-vector"
                        className="absolute left-0 bottom-0 h-full opacity-100 pointer-events-none"
                    />
                    <div className="">
                        <h2 className="text-xl md:text-2xl">Resolved</h2>
                        <h1 className="text-2xl md:text-6xl">{resolved.length}</h1>
                    </div>
                    <img
                        src={bg}
                        alt="bg-vector"
                        className="absolute right-0 bottom-0 h-full opacity-100 pointer-events-none rotate-y-180"
                    />
                </div>
            </div>
        </div>

    );
};

export default Banner;