import Telescope from 'meteor/nova:lib';
import React, {PropTypes, Component} from 'react';
import {injectIntl, FormattedMessage} from 'react-intl';

class CommentsList extends Component {

//const  = ({results, currentUser, hasMore, ready, count, totalCount, loadMore}) => {

    renderCommentList() {
        const results = this.props.results;
        const currentUser = this.props.currentUser;
        const hasMore = this.props.hasMore;
        const ready = this.props.ready;
        const count = this.props.count;
        const totalCount = this.props.totalCount;
        const loadMore = this.props.loadMore;

        return (
          <div className="discussion_cr2q_">

              {results.map(comment => <Telescope.components.CommentsNode comment={comment} key={comment._id}
                                                                         currentUser={currentUser}/>)}
              {hasMore ? (ready ?
                <Telescope.components.CommentsLoadMore loadMore={loadMore} count={count} totalCount={totalCount}/> :
                <Telescope.components.Loading/>) : null}
          </div>
        )
    }

    renderLoading() {
        return (
          <div className="comments-list">
              <Telescope.components.Loading/>
          </div>
        )
    }

    renderEmptyPanel() {
        return (
          <div className="comments-list">
              <p>
                  <FormattedMessage id="comments.no_comments"/>
              </p>
          </div>
        )
    }

    render() {
        const results = this.props.result;
        if (!!results.length) {
            this.renderCommentList()
        } else if (!ready) {
            this.renderLoading()
        } else {
            this.renderEmptyPanel()
        }
    }
}

CommentsList.displayName = "CommentsList";

module.exports = CommentsList;