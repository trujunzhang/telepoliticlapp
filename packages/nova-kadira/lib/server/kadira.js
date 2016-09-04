import Telescope from 'meteor/nova:lib';

Meteor.startup(function () {
    var kadiraAppId = Telescope.settings.get('kadiraAppId');
    var kadiraAppSecret = Telescope.settings.get('kadiraAppSecret');
    if (process.env.NODE_ENV === "production" && !!kadiraAppId && !!kadiraAppSecret) {
        Kadira.connect(kadiraAppId, kadiraAppSecret);
    }
});
