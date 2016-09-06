import React, {PropTypes, Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {ListContainer} from "meteor/utilities:react-list-container";
import {ModalTrigger} from "meteor/nova:core";
import Comments from "meteor/nova:comments";

class PostsCommentsThread extends Component {

    onLoginClick() {

    }

    render() {
        const post = this.props.document;

        return (
          <div className="posts-comments-thread">
              <h4 className="posts-comments-thread-title"><FormattedMessage id="comments.comments"/></h4>
              <ListContainer
                collection={Comments}
                publication="comments.list"
                selector={{postId: post._id}}
                terms={{postId: post._id, view: "postComments"}}
                limit={0}
                parentProperty="parentCommentId"
                joins={Comments.getJoins()}
                component={Telescope.components.CommentsList}
                listId="comments.list"
              />
              { currentUser ?
                <div className="posts-comments-thread-new">
                    <h4><FormattedMessage id="comments.new"/></h4>
                    <Telescope.components.CommentsNew type="comment" postId={post._id}/>
                </div> :
                <div>
                    <a onClick={this.onLoginClick.bind(this)}><FormattedMessage id="comments.please_log_in"/></a>
                </div> }
          </div>
        )
    }
}

PostsCommentsThread.displayName = "PostsCommentsThread";

module.exports = PostsCommentsThread;
export default PostsCommentsThread;