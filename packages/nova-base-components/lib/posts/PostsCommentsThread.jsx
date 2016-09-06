import React, {PropTypes, Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {ListContainer} from "meteor/utilities:react-list-container";
import {ModalTrigger} from "meteor/nova:core";
import Comments from "meteor/nova:comments";
import Posts from "meteor/nova:posts";

class PostsCommentsThread extends Component {

    onLoginClick() {
        this.context.messages.appStatus.showLoginUI();
    }

    rendLoginUI() {
        return (
          <div className="access_5Hx8h notice_CT78V box_2b3oc text_3Wjo0 subtle_1BWOT base_3CbW2">
        <span>Commenting is limited to those invited by others in the community.
          <br/>
        </span>
              <a onClick={this.onLoginClick.bind(this)}>Login to continue.</a>
          </div>
        )
    }

    renderCommentForm() {
        const post = this.props.document;
        return (
          <div className="posts-comments-thread-new">
              <h4><FormattedMessage id="comments.new"/></h4>
              <Telescope.components.CommentsNew type="comment" postId={post._id}/>
          </div>
        )
    }

    render() {
        const post = this.props.document;
        const currentUser = this.props.currentUser;

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
              { currentUser ? this.renderCommentForm() : this.rendLoginUI()}
          </div>
        )
    }
}

PostsCommentsThread.contextTypes = {
    messages: React.PropTypes.object
};

PostsCommentsThread.displayName = "PostsCommentsThread";

module.exports = PostsCommentsThread;
export default PostsCommentsThread;