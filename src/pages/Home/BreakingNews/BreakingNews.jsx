import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-4 mb-5">
            <button className="btn btn-secondary mr-5">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>

                <Link className="mr-3" to="/">I can be a React component, multiple React components, or just some text.
                </Link>

                <Link className="mr-3" to="/">I can be a React component, multiple React components, or just some text.
                </Link>

                <Link className="mr-3" to="/">I can be a React component, multiple React components, or just some text.
                </Link>
                
            </Marquee>
        </div>
    );
};

export default BreakingNews;