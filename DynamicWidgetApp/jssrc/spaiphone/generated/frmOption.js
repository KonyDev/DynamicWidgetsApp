//Form JS File
function frmOption_button120664956619297_onClick_seq1(status, javaString) {
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

function frmOption_button120778162421548_onClick_seq0(eventobject) {
    createDynamicForm.call(this);
};

function frmOption_button120664956619297_onClick_seq0(eventobject) {
    /* 
 var javaString_inputparam = {};
 javaString_inputparam["serviceID"] = "javaString";
 
 
javaString_inputparam["httpheaders"] = {};

javaString_inputparam["httpconfig"] = {};

 



 javaString = appmiddlewareinvokerasync (javaString_inputparam, frmOption_button120664956619297_onClick_seq1);
 
 */
    createDynamicFormRemotely.call(this);
};

function addWidgetsfrmOption() {
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "text": "Home",
        "skin": "sknLblKonyThemeAppHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button120778162421548 = new kony.ui.Button({
        "id": "button120778162421548",
        "isVisible": true,
        "text": "widgets(locally packaged)",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmOption_button120778162421548_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 10, 3, 2],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button120664956619297 = new kony.ui.Button({
        "id": "button120664956619297",
        "isVisible": true,
        "text": "widgets(remotely packaged)",
        "skin": "sknBtnKonyThemeNormal",
        "focusSkin": "sknBtnKonyThemeFocus",
        "onClick": frmOption_button120664956619297_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [3, 2, 3, 0],
        "padding": [0, 2, 0, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    frmOption.add(
    lblTitle, button120778162421548, button120664956619297);
};

function frmOptionGlobals() {
    var MenuId = [];
    frmOption = new kony.ui.Form2({
        "id": "frmOption",
        "title": "Home",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmOption
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};