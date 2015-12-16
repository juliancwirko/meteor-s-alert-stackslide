Package.describe({
    'summary': 'StackSlide effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '3.1.3',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-stackslide.git',
    'name': 'juliancwirko:s-alert-stackslide'
});

Package.onUse(function (api) {
    api.use('juliancwirko:s-alert@3.1.3', ['client']);
    api.imply('juliancwirko:s-alert@3.1.3', ['client']);
    api.addFiles([
        's-alert-stackslide.css'
    ], 'client');
});
