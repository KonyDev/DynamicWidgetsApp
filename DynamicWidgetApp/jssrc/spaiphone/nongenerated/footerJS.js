/*****************************************************************
 *	Name    : hBoxForHeader
 *	Author  : Kony Solutions
 *	Purpose : Below function will return the top Hbox for Header which added in form(frmDynamicJS)
 ******************************************************************/
function hBoxForHeader() {
    var hboxbasic1 = {
        id: "hdrBox",
        isVisible: true,
        orientation: constants.BOX_LAYOUT_HORIZONTAL,
        skin: "hboxHeader"
    };
    var hboxlayout1 = {
        containerWeight: 100,
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0],
        percent: true
    };
    var headerHbox = new kony.ui.Box(hboxbasic1, hboxlayout1, {});
    if (kony.os.deviceInfo().name == "android" || kony.os.deviceInfo().name == "thinclient" || kony.os.deviceInfo().name == "blackberry") headerHbox.add(lblForHeader(), btnAdd("Add"));
    else headerHbox.add(backBtnForHeader(), lblForHeader(), btnAdd("Add"));
    return headerHbox;
}

function lblForHeader() {
    var lblBasicConf1 = {
        id: "lblForHeader" + random,
        text: "Home",
        isVisible: true,
        skin: "lblNormal"
    };
    if (kony.os.deviceInfo().name == "android" || kony.os.deviceInfo().name == "thinclient" || kony.os.deviceInfo().name == "blackberry") var lbllayoutConf1 = {
        containerWeight: 80,
        hExpand: true,
        margin: [0, 0, 0, 0],
        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
        contentAlignment: constants.CONTENT_ALIGN_CENTER,
        padding: [25, 0, 0, 0],
        vExpand: false,
        hExpand: true
    }; //,percent:true
    else var lbllayoutConf1 = {
        containerWeight: 60,
        hExpand: true,
        margin: [0, 0, 0, 0],
        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
        contentAlignment: constants.CONTENT_ALIGN_CENTER,
        padding: [0, 0, 0, 0],
        vExpand: false,
        hExpand: true
    };
    return new kony.ui.Label(lblBasicConf1, lbllayoutConf1, {});
}

function backBtnForHeader() {
    var btnBasic1 = {
        id: "btn4Hdr",
        text: "",
        isVisible: true,
        skin: "btnHeader",
        onClick: backButton
    }; //
    //return new kony.ui.Button(btnBasic1, {containerWeight:20,margin:[1,5,1,5],padding:[0,0,0,0],widgetAlignment :constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,hExpand:false,vExpand:false}, {});
    return new kony.ui.Button(btnBasic1, {
        containerWeight: 20,
        margin: [0, 0, 0, 0],
        padding: [0, 0, 0, 0],
        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
        contentAlignment: constants.CONTENT_ALIGN_CENTER,
        hExpand: false,
        vExpand: false
    }, {});
}

function backButton() {
    var currentForm = kony.application.getCurrentForm();
    if (currentForm.id == "frmDynamicJS") {
        frmDynamicJS.remove(frmDynamicJS["hBoxOuterId"]);
        frmOption.show();
    } else {
        frmDynamicJS.remove(frmDynamicJS["hBoxOuterId"]);
        frmDynamicJS2.remove(frmDynamicJS2["hBoxforPlaceInfoOuterId"]);
        gListId = 0;
        count = 1;
        frmOption.show();
    }
}
/*****************************************************************
 *	Name    : hBoxForHeader
 *	Author  : Kony Solutions
 *	Purpose : Below function will return the "Add Another Order" button
 ******************************************************************/
function btnAdd(text) {
    var btnBasic = {
        id: "btnAAO",
        isVisible: true,
        text: text,
        skin: "btnAddAnotherOrder",
        focusSkin: "sknBtnKonyThemeFocus",
        onClick: onClickAddMoreWidgets
    };
    var btnLayout;
    if (kony.os.deviceInfo().name == "iPhone Simulator" || kony.os.deviceInfo().name == "iPhone") btnLayout = {
        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
        vExpand: false,
        hExpand: true,
        margin: [0, 2, 2, 2],
        padding: [0, 2, 0, 2],
        contentAlignment: constants.CONTENT_ALIGN_CENTER,
        displayText: true,
        containerWeight: 20
    };
    else if (kony.os.deviceInfo().name == "android" || kony.os.deviceInfo().name == "blackberry" || kony.os.deviceInfo().name == "thinclient") btnLayout = {
        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
        vExpand: false,
        hExpand: false,
        margin: [0, 4, 5, 4],
        padding: [0, 2, 0, 2],
        contentAlignment: constants.CONTENT_ALIGN_CENTER,
        displayText: true,
        containerWeight: 20
    };
    return new kony.ui.Button(btnBasic, btnLayout, {});
}
/*****************************************************************
 *	Name    : hBoxForHeader
 *	Author  : Kony Solutions
 *	Purpose : Below function will return the top Vbox of footer which added in form(frmDynamicJS) 
 ******************************************************************/
/*function hBoxForPlaceAnOrder(){
			var hboxbasic1 = {id:"hBoxPAO",isVisible:true,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"hbxFooter"};
			var hboxlayout1 = {containerWeight:100,padding:[0,2,0,2],percent:true};
			var footerHbox = new kony.ui.Box(hboxbasic1, hboxlayout1, {});
			footerHbox.add(btnForPlaceAnOrder("Done"),btnAdd("Add"));
			return footerHbox;
		}*/
/*****************************************************************
 *	Name    : hBoxForHeader
 *	Author  : Kony Solutions
 *	Purpose : Below function will return the "Place An Order" button 
 ******************************************************************/
function btnForPlaceAnOrder(text) {
    var btnBasic = {
        id: "btnPAO",
        isVisible: true,
        text: text,
        skin: "sknBtnKonyThemeNormal",
        focusSkin: "sknBtnKonyThemeFocus",
        onClick: createDynamicForm2
    };
    var btnLayout = {
        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
        vExpand: false,
        hExpand: true,
        margin: [5, 30, 5, 3],
        padding: [0, 2, 0, 2],
        contentAlignment: constants.CONTENT_ALIGN_CENTER,
        displayText: true,
        containerWeight: 100
    };
    return new kony.ui.Button(btnBasic, btnLayout, {});
}