import bg from "../../assets/vector1.png"
const Banner = ({ progress, resolved }) => {
    return (
        <div className="md:py-14 py-8 px-2 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className={` text-center rounded-xl p-16 text-white bg-linear-to-tl from-[#9F62F2] to-[#632EE3]`}>
                    <div className={`bg-[url("${bg}")] z-40`}>
                        <h2 className="text-2xl">In Progress</h2>
                    <h1 className="text-6xl">{progress.length}</h1>
                    </div>
                </div>
            
                {/* <div className={`bg-[url(https://raw.githubusercontent.com/ServiceStack/images/refs/heads/master/hero/photo-1421789665209-c9b2a435e3dc.jpg)] text-center rounded-xl p-16  bg-linear-to-tl from-[#9F62F2] to-[#632EE3]`}>
                    <div className={``}>
                        <h2 className="text-2xl">In Progress</h2>
                        <h1 className="text-6xl">{progress.length}</h1>
                    </div>
                </div> */}
                <div className="text-center rounded-xl p-16 text-white bg-linear-to-r from-[#54CF68] to-[#00827A]">
                    <h2 className="text-2xl">Resolved</h2>
                    <h1 className="text-6xl">{resolved.length}</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;