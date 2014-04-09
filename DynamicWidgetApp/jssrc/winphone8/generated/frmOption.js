//Form JS File
function frmOption_bttnRp_onClick_seq1(status, javaString) {
    if (status == 400) {
        /* 
kony.print("************opstatus***********"+ javaString["opstatus"]);

 */
        if (kony.os.toNumber(javaString["opstatus"]) == 0) {
            /* 
eval(javaString["evalstring"]);

 */
        } else {
            /* 
kony.print("errmsg "+ javaString["errmsg"]) ;

 */
        }
    }
};

function frmOption_bttnLp_onClick_seq0(eventobject) {
    createDynamicForm.call(this);
};

function frmOption_bttnRp_onClick_seq0(eventobject) {
    /* 
 var javaString_inputparam = {};
 javaString_inputparam["serviceID"] = "javaString";
 
 
javaString_inputparam["httpheaders"] = {};

javaString_inputparam["httpconfig"] = {};

 



 javaString = appmiddlewareinvokerasync (javaString_inputparam, frmOption_bttnRp_onClick_seq1);
 
 */
    createDynamicFormRemotely.call(this);
};

function addWidgetsfrmOption() {
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "text": "Options",
        "skin": "sknLblKonyThemeAppHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var bttnLp = new kony.ui.Button({
        "id": "bttnLp",
        "isVisible": true,
        "text": "widgets(locally packaged)",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmOption_bttnLp_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 10, 4, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var bttnRp = new kony.ui.Button({
        "id": "bttnRp",
        "isVisible": true,
        "text": "widgets(remotely packaged)",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmOption_bttnRp_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 3, 4, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    frmOption.add(
    lblTitle, bttnLp, bttnRp);
};

function frmOptionGlobals() {
    var MenuId = [];
    frmOption = new kony.ui.Form2({
        "id": "frmOption",
        "title": "Options",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmOption
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["bttnLp", "bttnRp", "lblTitle"]
    });
};