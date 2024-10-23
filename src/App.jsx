import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readginTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark);
  }

  const handelReadingTime = (id, time) => {
    setReadingTime(readginTime + time);
    //remove the read blog from bookmark
    // console.log('remove book mark', id)
    const remaingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto py-3 px-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handelReadingTime={handelReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readginTime={readginTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
