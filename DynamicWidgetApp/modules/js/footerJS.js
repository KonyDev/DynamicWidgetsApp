/*****************************************************************
*	Name    : hBoxForHeader
*	Author  : Kony Solutions
*	Purpose : Below function will return the top Hbox for Header which added in form(frmDynamicJS) 
******************************************************************/
function hBoxForHeader()
{
	var hboxbasic1 = {id:"hdrBox",isVisible:true,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"hboxHeader"};
	var hboxlayout1;
	if(kony.os.deviceInfo().name=="Windows")
		hboxlayout1 = {containerWeight:100,margin:[0,57,0,0],padding:[0,0,0,0],percent:true};
	else
		hboxlayout1 = {containerWeight:100,margin:[0,0,0,0],padding:[0,0,0,0],percent:true};
	var headerHbox = new kony.ui.Box(hboxbasic1, hboxlayout1, {});
	if(kony.os.deviceInfo().name=="android" ||kony.os.deviceInfo().name=="thinclient"||kony.os.deviceInfo().name=="blackberry"||kony.os.deviceInfo().name=="WindowsPhone")
		headerHbox.add(lblForHeader(),btnAdd("Add"));
	else
		headerHbox.add(backBtnForHeader(),lblForHeader(),btnAdd("Add"));
	return headerHbox;
}
function hBoxForHeader2()
{
	var hboxbasic1 = {id:"hdrBox",isVisible:true,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"hboxHeader"};
	var hboxlayout1 = {containerWeight:100,margin:[0,0,0,0],padding:[0,0,0,0],percent:true};
	var headerHbox = new kony.ui.Box(hboxbasic1, hboxlayout1, {});
	if(kony.os.deviceInfo().name=="android" ||kony.os.deviceInfo().name=="thinclient"||kony.os.deviceInfo().name=="blackberry"||kony.os.deviceInfo().name=="WindowsPhone")
		headerHbox.add(lblForHeader2());
	else
		headerHbox.add(backBtnForHeader(),lblForHeader2());
	return headerHbox;
}
function lblForHeader()
{
	var lblBasicConf1 = { id:"lblForHeader"+random,text :"Locally Packaged",isVisible:true,skin: "lblNormal"};
	var lbllayoutConf1;
	if(kony.os.deviceInfo().name=="android"|| kony.os.deviceInfo().name=="thinclient"||kony.os.deviceInfo().name=="blackberry")
		 lbllayoutConf1 = {containerWeight:80,hExpand:true,margin:[0,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,padding:[20,1,0,1],vExpand: false,hExpand: true};//,percent:true
	else if(kony.os.deviceInfo().name=="WindowsPhone")
		lbllayoutConf1 = {containerWeight:80,hExpand:true,margin:[6,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_MIDDLE_LEFT,padding:[0,0,0,0],vExpand: false,hExpand: true};
	else if(kony.os.deviceInfo().name=="iPad Simulator"||kony.os.deviceInfo().name=="iPad")
		lbllayoutConf1 = {containerWeight:80,hExpand:true,margin:[0,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,padding:[0,3,0,3],vExpand: false,hExpand: true};
	else if(kony.os.deviceInfo().name=="Windows")
		lbllayoutConf1 = {containerWeight:80,hExpand:true,margin:[0,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_MIDDLE_LEFT,padding:[0,0,0,0],vExpand: false,hExpand: true};
	else
		lbllayoutConf1 = {containerWeight:60,hExpand:true,margin:[0,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,padding:[0,0,0,0],vExpand: false,hExpand: true};
	return new kony.ui.Label(lblBasicConf1, lbllayoutConf1, {});	
}
function lblForHeader2()
{
	var lblBasicConf1 = { id:"lblForHeader"+random,text :"Locally Packaged",isVisible:true,skin: "lblNormal"};
	var lbllayoutConf1;
	if(kony.os.deviceInfo().name=="android"|| kony.os.deviceInfo().name=="thinclient"||kony.os.deviceInfo().name=="blackberry")
		 lbllayoutConf1 = {containerWeight:100,hExpand:true,margin:[0,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,padding:[0,1,0,1],vExpand: false,hExpand: true};//,percent:true
	else if(kony.os.deviceInfo().name=="WindowsPhone")
		lbllayoutConf1 = {containerWeight:80,hExpand:true,margin:[6,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_MIDDLE_LEFT,padding:[0,0,0,0],vExpand: false,hExpand: true};
	else if(kony.os.deviceInfo().name=="iPad Simulator"||kony.os.deviceInfo().name=="iPad")
		lbllayoutConf1 = {containerWeight:90,hExpand:true,margin:[0,0,10,0],widgetAlignment:constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,padding:[0,0,20,0],vExpand: false,hExpand: true};
	else
		lbllayoutConf1 = {containerWeight:60,hExpand:true,margin:[0,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,padding:[0,0,0,0],vExpand: false,hExpand: true};
	return new kony.ui.Label(lblBasicConf1, lbllayoutConf1, {});	
}
function backBtnForHeader()
{
	var btnBasic1 = {id:"btn4Hdr",text:"",isVisible:true,skin:"btnHeader",onClick:backButton};//
	var btnLayout;
	if(kony.os.deviceInfo().name=="iPad Simulator"||kony.os.deviceInfo().name=="iPad")
		btnLayout={containerWeight:10,margin:[0,0,0,0],padding:[0,1,0,1],widgetAlignment :constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,hExpand:false,vExpand:false};
	else if(kony.os.deviceInfo().name=="Windows")
		btnLayout={containerWeight:10,margin:[0,0,0,0],padding:[0,0,0,0],widgetAlignment :constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,hExpand:false,vExpand:false};
	else
		btnLayout={containerWeight:20,margin:[0,0,0,0],padding:[0,0,0,0],widgetAlignment :constants.WIDGET_ALIGN_CENTER,contentAlignment :constants.CONTENT_ALIGN_CENTER,hExpand:false,vExpand:false};
	return new kony.ui.Button(btnBasic1,btnLayout, {});
}
function backButton() 
{
	var currentForm = kony.application.getCurrentForm();
	if (currentForm.id == "frmDynamicJS")
	{
	   		frmDynamicJS.remove(frmDynamicJS["hBoxOuterId"]);		   		
	        frmOption.show();
	} else {
			frmDynamicJS.remove(frmDynamicJS["hBoxOuterId"]);
	        frmDynamicJS2.remove(frmDynamicJS2["hBoxforPlaceInfoOuterId"]);	        
	        gListId = 0;
	        count=1;
	        frmOption.show();
		    }
}
/*****************************************************************
*	Name    : hBoxForHeader
*	Author  : Kony Solutions
*	Purpose : Below function will return the "Add Another Order" button 
	******************************************************************/
function btnAdd(text)
{
var btnBasic={id: "btnAAO",isVisible: true,text: text,skin: "btnAddAnotherOrder",focusSkin: "sknBtnKonyThemeFocus",onClick:onClickAddMoreWidgets};
var btnLayout;
if(kony.os.deviceInfo().name=="iPhone Simulator"||kony.os.deviceInfo().name=="iPhone")
	btnLayout={ widgetAlignment: constants.WIDGET_ALIGN_CENTER,vExpand: false,hExpand: true,margin: [0,2,2,2],padding: [1,3,1,3],contentAlignment: constants.CONTENT_ALIGN_CENTER,displayText: true,containerWeight: 20};
else if(kony.os.deviceInfo().name=="android"|| kony.os.deviceInfo().name=="blackberry"||kony.os.deviceInfo().name=="thinclient"||kony.os.deviceInfo().name=="WindowsPhone")
	btnLayout={ widgetAlignment: constants.WIDGET_ALIGN_CENTER,vExpand: false,hExpand:true,margin: [0,0,0,0],padding: [1,3,1,3],contentAlignment: constants.CONTENT_ALIGN_CENTER,displayText: true,containerWeight: 20};
else if(kony.os.deviceInfo().name=="iPad Simulator")
	btnLayout={ widgetAlignment: constants.WIDGET_ALIGN_CENTER,vExpand: false,hExpand:true,margin: [0,0,0,0],padding: [1,3,1,3],contentAlignment: constants.CONTENT_ALIGN_CENTER,displayText: true,containerWeight: 10};
else if(kony.os.deviceInfo().name=="Windows")
	btnLayout={ widgetAlignment: constants.WIDGET_ALIGN_CENTER,vExpand: false,hExpand:true,margin: [0,0,0,0],padding: [1,3,1,3],contentAlignment: constants.CONTENT_ALIGN_CENTER,displayText: true,containerWeight: 10};
else
	btnLayout={ widgetAlignment: constants.WIDGET_ALIGN_CENTER,vExpand: false,hExpand:true,margin: [0,0,0,0],padding: [1,3,1,3],contentAlignment: constants.CONTENT_ALIGN_CENTER,displayText: true,containerWeight: 20};
return new kony.ui.Button(btnBasic,btnLayout,{});}
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
function btnForPlaceAnOrder(text){
 var btnBasic={id: "btnPAO",isVisible: true,text: text,skin: "sknBtnKonyThemeNormal",focusSkin: "sknBtnKonyThemeFocus",onClick:createDynamicForm2};
 var btnLayout;
 if(kony.os.deviceInfo().name=="WindowsPhone")
  btnLayout={
		        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
		        vExpand: false,
		        hExpand: true,
		        margin: [30,30,30,30],
		        padding: [0,3,0,3],
		        contentAlignment: constants.CONTENT_ALIGN_CENTER,
		        displayText: true,
		        containerWeight: 100
		    };
  else if(kony.os.deviceInfo().name=="iPad Simulator" || kony.os.deviceInfo().name=="iPad")
 	btnLayout={
		        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
		        vExpand: false,
		        hExpand: true,
		        margin: [90,90,90,90],
		        padding: [0,10,0,10],
		        contentAlignment: constants.CONTENT_ALIGN_CENTER,
		        displayText: true,
		        containerWeight: 100
		    };
	else if(kony.os.deviceInfo().name=="Windows")
 	btnLayout={
		        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
		        vExpand: false,
		        hExpand: true,
		        margin: [120,30,120,0],
		        padding: [0,5,0,5],
		        contentAlignment: constants.CONTENT_ALIGN_CENTER,
		        displayText: true,
		        containerWeight: 100
		    };
 	else
 	btnLayout={
		        widgetAlignment: constants.WIDGET_ALIGN_CENTER,
		        vExpand: false,
		        hExpand: true,
		        margin: [30,30,30,30],
		        padding: [0,3,0,3],
		        contentAlignment: constants.CONTENT_ALIGN_CENTER,
		        displayText: true,
		        containerWeight: 100
		    };
		    return new kony.ui.Button(btnBasic, btnLayout, {});
	    }
	