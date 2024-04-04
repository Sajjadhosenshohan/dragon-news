import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 mb-6">
                <h2 className="font-semibold text-xl mb-4">Login with</h2>
                <button className="btn text-sky-600 w-full btn-outline mb-4">
                    <FaGoogle />
                    Login with Google
                </button>

                <button className="btn  w-full btn-outline">
                    <FaGithub />
                    Login with Github
                </button>
            </div>

            <div className="p-4 mb-6">
                <h2 className="font-semibold text-xl mb-4">Find us on</h2>

                <a href="" className="flex border rounded-t-xl p-4 items-center gap-3 ">

                    <div className="bg-gray-300 p-3 rounded-full font-bold text-blue-600"><FaFacebook></FaFacebook></div>
                    <span >Facebook</span>
                </a>
                <a href="" className="flex border-x rounded-t-xl p-4 items-center gap-3 ">

                    <div className="bg-gray-300 p-3 rounded-full font-bold text-sky-600"><FaTwitter></FaTwitter></div>
                    <span>Twitter</span>
                </a>

                <a href="" className="flex border rounded-t-xl p-4 items-center gap-3">

                    <div className="bg-gray-300 p-3 rounded-full font-bold text-orange-700"><FaInstagram></FaInstagram></div>
                    <span >Instagram</span>
                </a>

            </div>

            {/* q zone */}

            <div className="p-4 mb-6 bg-[#F3F3F3] gap-4 flex-col flex">
                <h2 className="font-semibold text-xl ">Q-Zone</h2>
                <img className="border-dotted border-4 p-3  border-gray-300" src={qZone1} alt="" />
                <img className="border-dotted border-4 p-3  border-gray-300" src={qZone2} alt="" />
                <img className="border-dotted border-4 p-3  border-gray-300" src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;