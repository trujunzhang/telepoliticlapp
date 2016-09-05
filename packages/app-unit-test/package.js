Package.describe({
    name: "app:unit-test",
    summary: "Telescope migrations package",
    version: "0.27.0-nova",
    git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

    api.versionsFrom("METEOR@1.0");

    api.use([
        'nova:core@0.27.0-nova',
        'nova:posts@0.27.0-nova'
    ]);

    //api.addFiles([
    //    '__test__/posts.app-spec.js'
    //], ['client']);

    api.mainModule('__test__/posts.app-spec.js', "client");
});
