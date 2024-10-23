import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handelReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3">
            <h2 className="text-3xl font-bold">Blogs: {blogs.length}</h2>
            {
                blogs.map((blog)=><Blog 
                key={blog.id} 
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}
                handelReadingTime={handelReadingTime}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handelReadingTime: PropTypes.func.isRequired
}
export default Blogs;