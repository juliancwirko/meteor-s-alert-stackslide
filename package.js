Package.describe({
    'summary': 'StackSlide effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '1.0.0',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-stackslide.git',
    'name': 'juliancwirko:s-alert-stackslide'
});

Package.onUse(function (api) {
    api.use('juliancwirko:s-alert@2.0.0', ['client']);
    api.addFiles([
        's-alert-stackslide.css'
    ], 'client');
});
