import React from 'react';
import {ListContainer} from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";

const PostTagItem = () => {

    const subNavigationItems = [
        {
            'id': 123,
            "href": "/tech",
            "title": "iPhonexxx"
        }, {
            'id': 234,
            "href": "/games",
            "title": "Home"
        }, {
            'id': 345,
            "href": "/podcasts",
            "title": "Furniture"
        }
    ];

    return (
      <main className="main_3lfDa">
          <div className="topics_39_B0" rel="topics-list">
              {subNavigationItems.map((menu, key) => {
                  return (
                    <div className="topicWrap_2Uvaj" rel="topic-item">
                        <span>
                            <a key={menu.id}
                               className="button_2I1re smallSize_1da-r secondaryText_PM80d greySolidColor_270pZ solidVariant_2wWrf"
                               href="/topics/iphone">
                                <div className="buttonContainer_wTYxi">{menu.title}</div>
                            </a>
                        </span>
                    </div>
                  )
              })}
          </div>
      </main>
    )
}

PostTagItem.displayName = "PostTagItem";

module.exports = PostTagItem;
export default PostTagItem;
