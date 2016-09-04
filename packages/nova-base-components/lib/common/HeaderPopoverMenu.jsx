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
        return (
          <div class="popover v-bottom-center" style="top: 48px; left: 1092.5px;"><!-- react-empty: 1016 -->
              <ul class="content_2mq4P">
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/about">About</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/apps">Apps</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://stories.producthunt.com/" target="_blank">Blog</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/branding">Branding</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/collections">Collections</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/faq">FAQ</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/jobs">Jobs</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/live">LIVE Chats</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/meetups">Meetups</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/protips">Pro tips</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/radio">Radio</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/shop">Shop</a></li>
              </ul>
          </div>
        )
    }

}

module.exports = HeaderPopoverMenu;
export default HeaderPopoverMenu;