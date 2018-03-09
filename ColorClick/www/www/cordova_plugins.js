cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/mobi.monaca.plugins.Monaca/www/monaca.js",
        "id": "mobi.monaca.plugins.Monaca.monaca"
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "mobi.monaca.plugins.Monaca": "3.1.0",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-custom-config": "2.0.3"
};
// BOTTOM OF METADATA
});