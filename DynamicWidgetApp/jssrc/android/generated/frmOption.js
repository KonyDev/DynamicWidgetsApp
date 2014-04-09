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
        "margin": [5, 10, 5, 2],
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
        "margin": [5, 2, 5, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    frmOption.add(
    bttnLp, bttnRp);
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleKonyTheme",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};