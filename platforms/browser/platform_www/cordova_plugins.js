cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-fetch/www/fetch.js",
        "id": "cordova-plugin-fetch.FetchPlugin",
        "pluginId": "cordova-plugin-fetch",
        "clobbers": [
            "cordovaFetch"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-fetch": "0.1.0"
}
// BOTTOM OF METADATA
});