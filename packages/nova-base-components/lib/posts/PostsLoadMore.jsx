import React from 'react';
import {FormattedMessage} from 'react-intl';

const PostsLoadMore = ({loadMore, count, totalCount}) => {
    return (
      <div>
          <a className="posts-load-more" onClick={loadMore}>Show More…</a>
      </div>
    )
};

PostsLoadMore.displayName = "PostsLoadMore";

module.exports = PostsLoadMore;