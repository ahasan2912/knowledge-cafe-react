import PropTypes from 'prop-types';
import { PiBookmarkSimpleBold } from "react-icons/pi";
const Blog = ({ blog, handleAddToBookmark,handelReadingTime }) => {
    const { title, id, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mt-3'>
            <img className="rounded-md w-full" src={cover} alt="" />
            <div className='flex justify-between items-center mt-5'>
                <div className='flex items-center space-x-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className=''>
                        <h3 className='text-xl text-gray-700 font-bold'>{author}</h3>
                        <p className='text-sm text-gray-600 font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-lg text-gray-500 font-bold'>{reading_time} min read</p>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-gray-500 text-2xl'><PiBookmarkSimpleBold /></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold mt-2">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx} className='font-semibold text-gray-600'><a href="#">#{hash} </a></span>)
                }
            </p>
            <button onClick={()=>handelReadingTime(id,reading_time)} className='font-semibold text-blue-700 underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handelReadingTime: PropTypes.func.isRequired
}
export default Blog;