import React, {PropTypes, Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/std:accounts-ui';
import {Modal, Dropdown, MenuItem} from 'react-bootstrap';
import {ContextPasser} from "meteor/nova:core";
import {LinkContainer} from 'react-router-bootstrap';
import Users from 'meteor/nova:users';

class HeaderPopoverMenu extends Component {

    render() {
        const subNavigationItems = [
            {"href": "/tech", "title": "Politics"},
            {"href": "/games", "title": "Economy"},
            {"href": "/podcasts", "title": "Foreign Affairs"},
            {"href": "/books", "title": "Defence"},
            {"href": "/topics/developer-tools", "title": "Education"},
            {"href": "/topics/photography-tools", "title": "Healthcare"},
            {"href": "/topics/wearables", "title": "Sustainability"},
        ];

        return (
          <div class="popover v-bottom-center" style={{top: 48, left: 1092.5}}>
              <ul class="content_2mq4P">
                  {subNavigationItems.map((menu, key) => {
                      return (
                        <li
                          className="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2">
                            <a href="https://www.producthunt.com/@trujunzhang">{menu.title}</a>
                        </li>
                      )
                  })}
              </ul>
          </div>
        )
    }

}

module.exports = HeaderPopoverMenu;
export default HeaderPopoverMenu;