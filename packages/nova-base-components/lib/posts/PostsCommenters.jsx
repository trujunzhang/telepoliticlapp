import React from 'react';
import {Link} from 'react-router';
import Posts from "meteor/nova:posts";

const PostsCommenters = ({post}) => {
    return (
      <a
        className="button_2I1re smallSize_1da-r secondaryText_PM80d subtleVariant_tlhj3 simpleVariant_1Nl54 button_2n20W"
        href="/tech/ui-temple">
          <div className="buttonContainer_wTYxi">
                    <span>
                        <svg width="12" height="11" viewBox="0 0 12 11"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M10.0124802,16.8320558 C9.21033653,16.0515289 8.72727273,15.044941 8.72727273,13.9462121 C8.72727273,11.4655331 11.1897066,9.45454545 14.2272727,9.45454545 C17.2648389,9.45454545 19.7272727,11.4655331 19.7272727,13.9462121 C19.7272727,16.4268911 17.2648389,18.4378788 14.2272727,18.4378788 C13.4722764,18.4378788 12.752811,18.3136428 12.0978565,18.0888377 C11.026169,18.7087928 8.93104025,19.527919 8.93104025,19.527919 C8.93104025,19.527919 9.63175021,17.8427438 10.0124802,16.8320558 Z"
                              transform="translate(-8 -9)" fill="#FFF" fill-rule="evenodd">
                        </path>
                        </svg>
                    </span>
              {post.commentCount}
          </div>
      </a>

      //<div className="posts-commenters">
      //  <div className="posts-commenters-avatars">
      //    {post.commentersArray.map(user => <Telescope.components.UsersAvatar key={user._id} user={user}/>)}
      //  </div>
      //  <div className="posts-commenters-discuss">
      //    <Link to={Posts.getPageUrl(post)}>
      //      <Telescope.components.Icon name="comment" />
      //      <span className="posts-commenters-comments-count">{post.commentCount}</span>
      //      <span className="sr-only">Comments</span>
      //    </Link>
      //  </div>
      //</div>
    )
}

PostsCommenters.displayName = "PostsCommenters";

module.exports = PostsCommenters;
export default PostsCommenters;