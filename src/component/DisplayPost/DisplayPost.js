import React from 'react';

const DisplayPost = ({ posts, isloading }) => {
      if (isloading) {
            return <h1>Loading....</h1>
      }
      return (
            <div>
                  {
                        posts.map(post => (<h3 style={{ color: 'goldenrod' }} key={post?.id}>{post?.title}</h3>))
                  }
            </div>
      );
};

export default DisplayPost;