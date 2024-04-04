import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [category, setCategory] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
            <h2 className="font-semibold text-xl mb-4">All Category</h2>

            <div className="flex flex-col gap-8 text-xl font-semibold text-[#9F9F9F]">
                {
                    category.map(singleCategory => <Link 
                        className="text-center"

                        to={`/category/${singleCategory.id}`}
                        
                        key={singleCategory.id}

                        >{singleCategory.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;