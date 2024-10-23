import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readginTime}) => {
  return (
    <div className='md:w-1/3 bg-gray-300 md:ml-4 mt-2 pt-4 rounded-lg md:mt-12'>
        <h2 className='text-3xl p-2'>Reading Time: {readginTime}</h2>
        <h2 className='text-3xl p-2'>BookMarked Blogs: {bookmarks.length}</h2>
        { 
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} readginTime={readginTime}></Bookmark>)
        }
    </div >
  )
}

Bookmarks.propTypes = {
    bookmarks:PropTypes.array.isRequired,
    readginTime:PropTypes.number.isRequired
}

export default Bookmarks
