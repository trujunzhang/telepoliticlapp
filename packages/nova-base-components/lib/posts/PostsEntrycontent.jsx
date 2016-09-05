import React from 'react';
import Posts from "meteor/nova:posts";

const PostsEntrycontent = ({post}) => {
    const mytextvar = post.excerpt;
    const maxlimit = 150;

    return (

      <div className="content_3oLx4">
          <span className="title_2p9fd featured_2W7jd default_tBeAo base_3CbW2 post-title">{post.title}</span>
          <div className="detail">
              <p style={{"margin-bottom": 10}} className="post_description">
                  {((mytextvar).length > maxlimit)
                    ? (((mytextvar).substring(0, maxlimit - 3)) + '...')
                    : mytextvar}</p>

              <div className="entrymeta">
                  <span className="date">8 hours ago</span>
                  <div className="comments">
                      Tags-xxx:
                      <a href="http://www.politicl.com/tag/education/" rel="tag">Education</a>,
                      <a href="http://www.politicl.com/tag/india-education/" rel="tag">India Education</a>,
                      <a href="http://www.politicl.com/tag/lifestyle/" rel="tag">lifestyle</a>,
                      <a href="http://www.politicl.com/tag/teachers/" rel="tag">Teachers</a>,
                      <a href="http://www.politicl.com/tag/teachers-day-2/" rel="tag">Teachers Day</a>
                  </div>
              </div>
          </div>
      </div>
    )
};

PostsEntrycontent.displayName = "PostsEntrycontent";

module.exports = PostsEntrycontent;
export default PostsEntrycontent;