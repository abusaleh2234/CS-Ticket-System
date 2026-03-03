
const Banner = () => {
    return (
        <div className="md:py-20 py-8 px-2 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="text-center rounded-xl p-12 text-white bg-linear-to-tl from-[#9F62F2] to-[#632EE3]">
                    <h2 className="text-2xl">In Progress</h2>
                    <h1 className="text-6xl">0</h1>
                </div>
                <div className="text-center rounded-xl p-12 text-white bg-linear-to-r from-[#54CF68] to-[#00827A]">
                    <h2 className="text-2xl">Resolved</h2>
                    <h1 className="text-6xl">0</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;