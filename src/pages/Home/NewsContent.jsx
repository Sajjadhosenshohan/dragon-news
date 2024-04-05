import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";
import { FaEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NewsContent = ({ news }) => {

    const {_id, title, image_url, thumbnail_url, author, details, rating, total_view } = news

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 mb-10">
            <div className="flex space-x-4">

                <img alt="" src={image_url} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{author.name}</a>
                    <span className="text-xs dark:text-gray-600">{author.published_date}</span>
                </div>
            </div>

            <div>
                <img src={thumbnail_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{title}</h2>

                {
                    details.length>200 
                    ? <p>{details.slice(0, 200)}  <Link className='ml-2 font-bold text-blue-600' to={`/news/${_id}`}>See more...</Link></p>  :   <p>{details}</p> 
                }
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                    <button aria-label="Share this post" type="button" className="p-2 text-center flex gap-3 items-center">
                        <div className='flex gap-1 text-orange-400'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <div>
                            {rating.number}
                        </div>
                    </button>

                </div>
                <div className="flex space-x-2 text-sm dark:text-gray-600">
                    <button type="button" className="flex items-center p-1 space-x-1.5 text-lg">
                        <span><FaEye></FaEye></span>
                        <span>{total_view}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};


// props types
NewsContent.propTypes = {
    news: PropTypes.object
}
export default NewsContent;