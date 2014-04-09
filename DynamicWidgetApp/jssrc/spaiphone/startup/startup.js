//startup.js file
var appConfig = {
    appId: "dynamicwidget",
    appName: "DynamicWidgets",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.91",
    serverPort: "8080",
    secureServerPort: null,
    url: "http://10.10.12.91:8080/middleware/MWServlet",
    secureurl: "https://10.10.12.91/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializefooter();
    kony.application.setAppFooters([hbox120664956619270]);
    frmIntroGlobals();
    frmOptionGlobals();
    //to generate adherePercentageStrictly, retainSpace, marginPaddingConsistency flags as true if the project is created in 5.5
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmIntro.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default", "KonyTheme"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};