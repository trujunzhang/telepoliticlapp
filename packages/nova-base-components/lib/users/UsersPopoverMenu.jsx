import Telescope from 'meteor/nova:lib';
import React, {PropTypes, Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/std:accounts-ui';
import {Modal, Dropdown, MenuItem} from 'react-bootstrap';
import {ContextPasser} from "meteor/nova:core";
import {LinkContainer} from 'react-router-bootstrap';
import Users from 'meteor/nova:users';

class UsersPopoverMenu extends Component {

    popoverUserMenus() {

    }

    render() {

        const user = this.props.user;

        return (
          <div class="popover v-bottom-center" style="top: 63px; left: 1161.5px;"><!-- react-empty: 1010 -->
              <ul class="content_2mq4P">
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/@trujunzhang">My Profile</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/@trujunzhang/collections">My Collections</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/my/invites">Invites (0)</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/my/settings/edit">Settings</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/v1/oauth/applications">API Dashboard</a></li>
                  <li class="option_2XMGo secondaryBoldText_1PBCf secondaryText_PM80d subtle_1BWOT base_3CbW2"><a
                    href="https://www.producthunt.com/logout">Logout</a></li>
              </ul>
          </div>
        )
    }

}

UsersPopoverMenu.propTypes = {
    user: React.PropTypes.object
};

UsersPopoverMenu.contextTypes = {
    messages: React.PropTypes.object
};

module.exports = UsersPopoverMenu;
export default UsersPopoverMenu;