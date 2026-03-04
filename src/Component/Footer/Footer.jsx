
const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-0">
            <div className="text-white py-20 grid grid-cols-1 md:grid-cols-5 gap-10">
                <div className="">
                    <h2 className="text-xl font-bold">CS — Ticket System</h2>
                    <p className="text-[#A1A1AA] text-justify md:w-55 w-full">Customer Support Ticket System
                        Streamlining issue tracking and resolution.
                        Submit, monitor, and manage your tickets with ease.
                        Our team is dedicated to providing quick solutions.</p>
                </div>
                <div className=" space-y-4">
                    <h6 className="text-xl text-white">Company</h6>
                    <li className="list-none"><a className="text-[#A1A1AA]">About Us</a></li>
                    <li className="list-none"><a className="text-[#A1A1AA]">Our Mission</a></li>
                    <li className="list-none"><a className="text-[#A1A1AA]">Contact Saled</a></li>
                </div>
                <div className=" space-y-4">
                    <h6 className="text-xl text-white">Services</h6>
                    <li className="list-none"><a className="text-[#A1A1AA]">Products & Services</a></li>
                    <li className="list-none"><a className="text-[#A1A1AA]">Customer Stories</a></li>
                    <li className="list-none"><a className="text-[#A1A1AA]">Download Apps</a></li>
                </div>
                <div className=" space-y-4">
                    <h6 className="text-xl text-white">Information</h6>
                    <li className="list-none"><a className="text-[#A1A1AA]">Privacy Policy</a></li>
                    <li className="list-none"><a className="text-[#A1A1AA]">Terms & Conditions</a></li>
                    <li className="list-none"><a className="text-[#A1A1AA]">Join Us</a></li>
                </div>
                <div className=" space-y-4">
                    <h6 className="text-xl text-white">Company</h6>
                    <li className="list-none"><a className="text-[#A1A1AA]">@CS — Ticket System</a></li>
                    <li className="list-none"><a className="text-[#A1A1AA]">@CS — Ticket System</a></li>
                    <li className="list-none"><a className="text-[#A1A1AA]">@CS — Ticket System</a></li>
                    <li className="list-none"><a className="text-[#A1A1AA]">support@cst.com</a></li>
                </div>
            </div>
            <div className="border-t">
                <p className="text-white text-center p-5">© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;