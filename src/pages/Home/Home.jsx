import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsContent from "./NewsContent";

const Home = () => {
    const allNews = useLoaderData();
    // console.log(allNews);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                <div className="border"><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2 border">
                    
                    {
                        allNews.map(news => <NewsContent key={news._id} news={news}></NewsContent>)
                    }
                </div>
                <div className="border"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;