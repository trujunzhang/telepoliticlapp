import React from 'react';
import Posts from "meteor/nova:posts";

const PostsEntrycontent = ({post}) => {
    const mytextvar = post.excerpt;
    const maxlimit = 150;

    return (

      <div className="content_3oLx4">

          <div className="detail">
              <h3 className="post-title">
                  <a title={post.title} rel="nofollow">{post.title}</a>
              </h3>

              <p style={{"margin-bottom": 10}}>
                  {((mytextvar).length > maxlimit)
                    ? (((mytextvar).substring(0, maxlimit - 3)) + '...')
                    : mytextvar}</p>


          </div>

      </div>
    )
};

PostsEntrycontent.displayName = "PostsEntrycontent";

module.exports = PostsEntrycontent;
export default PostsEntrycontent;