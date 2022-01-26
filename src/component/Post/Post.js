import React, { useEffect, useState } from 'react';
import DisplayPost from '../DisplayPost/DisplayPost';
import Pagination from '../Pagination/Pagination';

const Post = () => {
      const [posts, setPost] = useState([])
      const [isloading, setisLoading] = useState(false)
      const [currentPage, setCurrentPage] = useState(1)
      const [postPerPage, setpostPerPage] = useState(10)

      useEffect(() => {
            setisLoading(true)
            fetch('https://jsonplaceholder.typicode.com/posts')
                  .then(res => res.json())
                  .then(data => setPost(data))
            setisLoading(false)
      }, [])

      const indexofLastPage = currentPage * postPerPage
      const indexofFirstPage = indexofLastPage - postPerPage
      const currentPost = posts.slice(indexofFirstPage, indexofLastPage)

      const paginate = (pageNumber) => {
            setCurrentPage(pageNumber)
      }

      return (
            <div>
                  <DisplayPost posts={currentPost} isloading={isloading}></DisplayPost>
                  <Pagination postPerPage={postPerPage} totalPosts={posts?.length} paginate={paginate}></Pagination>

            </div>
      );
};

export default Post;