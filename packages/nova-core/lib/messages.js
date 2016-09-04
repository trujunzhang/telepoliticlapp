import React, {PropTypes, Component} from 'react';
import PostDetailSet from "./postdetailset.js";
import AppStatus from "./appstatus.js";
import PopoverMenus from "./popovermenus.js"

const Messages = {
    // Local (client-only) collection
    collection: new Meteor.Collection(null),

    flash(content, type) {
        type = (typeof type === 'undefined') ? 'error' : type;
        // Store errors in the local collection
        this.collection.insert({content: content, type: type, seen: false, show: true});
    },

    appStatus: new AppStatus(),
    postDetailSet: new PostDetailSet(),
    popoverMenus: new PopoverMenus(),

    pushAndPostShow(postId){
        var cachePost = this.postDetailSet.push(postId);
        this.appStatus.updateCachePost(cachePost);
    },

    dismissPostPanel(){
        var cachePost = this.postDetailSet.lastPage();
        this.appStatus.updateCachePost(cachePost);
    },

    markAsSeen(messageId) {
        this.collection.update(messageId, {$set: {seen: true}});
    },

    clear(messageId) {
        this.collection.update(messageId, {$set: {show: false}});
    },

    clearSeen() {
        this.collection.update({seen: true}, {$set: {show: false}}, {multi: true});
    }
};

export default Messages;
