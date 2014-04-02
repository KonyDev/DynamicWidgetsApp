/*****************************************************************
*	Name    : hBoxOuter
*	Author  : Kony Solutions
*	Purpose : Below function will return the Hbox which contains VBox
******************************************************************/
	function hBoxOuter(){
		var hboxbasicConf1 = {id:"hBoxOuterId",isVisible:true,position: constants.BOX_POSITION_AS_NORMAL,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"hBoxTransparentUnrounded"};
		var hboxlayoutConf1 = {containerWeight:100,margin:[0,0,0,0],padding:[0,0,0,0],percent:true,vExpand: false,hExpand: true};
		var hboxPSPConfig1 = {};
		topHboxOuter = new kony.ui.Box(hboxbasicConf1, hboxlayoutConf1, hboxPSPConfig1);
		topHboxOuter.add(vBoxOuter());
		return topHboxOuter;
	}

/*****************************************************************
*	Name    : vBoxOuter
*	Author  : Kony Solutions
*	Purpose : Below function will return the vBox which contains HBoxMain
******************************************************************/
	function vBoxOuter(){
		var vboxbasicConf1 = {id:"vBoxOuterId",isVisible:true,position: constants.BOX_POSITION_AS_NORMAL,orientation:constants.BOX_LAYOUT_VERTICAL,skin:"hBoxTransparentUnrounded"};
		var vboxlayoutConf1 = {containerWeight:100,margin:[0,0,0,0],padding:[0,0,0,0],percent:true,vExpand: false,hExpand: true};
		topVboxOuter = new kony.ui.Box(vboxbasicConf1, vboxlayoutConf1, {});
		topVboxOuter.add(hBoxMain());//
		return topVboxOuter;
	}

 
/*****************************************************************
*	Name    : hBoxMain
*	Author  : Kony Solutions
*	Purpose : Below function will return the top Hbox which contains VBox
******************************************************************/
	
	function hBoxMain(){
		random = random+1;
		var hboxbasicConf1 = {id:"hBoxMain"+random,isVisible:true,position: constants.BOX_POSITION_AS_NORMAL,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"HboxRoundedSkinJS"};
		var hboxlayoutConf1 = {containerWeight:100,margin:[0,2,0,0],padding:[0,0,2,3],percent:true,vExpand: false,hExpand: true};
		var hboxPSPConfig1 = {};
		var topHbox = new kony.ui.Box(hboxbasicConf1, hboxlayoutConf1, hboxPSPConfig1);
		topHbox.add(vBoxMain());
		return topHbox;
	}

/*****************************************************************
*	Name    : vBoxMain
*	Author  : Kony Solutions
*	Purpose : Below function will return the top Vbox which contains 2 HBoxes  .
******************************************************************/
	
	function vBoxMain(){
		random = random+1;
		var vboxbasicConf1 = {id:"vBoxMain"+random,isVisible:true,position: constants.BOX_POSITION_AS_NORMAL,orientation:constants.BOX_LAYOUT_VERTICAL,skin:"vboxTransp"};
		var vboxlayoutConf1 = {containerWeight:100,margin:[0,0,0,0],padding:[0,0,0,0],percent:true,vExpand: false,hExpand: true};
		var topVbox = new kony.ui.Box(vboxbasicConf1, vboxlayoutConf1, {});
		topVbox.add(hBoxForTextBox(),hBoxForListBox());
		return topVbox;
	}

/*****************************************************************
*	Name    : hBoxForListBox
*	Author  : Kony Solutions
*	Purpose : Below function will return the Hbox which contains "Country:" label and List box for displaying all "CountryNameList"
******************************************************************/
	
	function hBoxForListBox(){
		random = random+1;
		var hboxbasicConf1 = {id:"hBoxForListBox"+random,isVisible:true,position: constants.BOX_POSITION_AS_NORMAL,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"hBoxTransparentUnrounded"};
		var hboxlayoutConf1 = {containerWeight:50,percent:true,margin:[0,0,0,0],padding:[0,0,0,0],vExpand: false,hExpand: true};
		var prodHbox = new kony.ui.Box(hboxbasicConf1, hboxlayoutConf1, {});
		prodHbox.add(lblForName("Country: "),listBoxForCountry());
		return prodHbox;	
	}


/*****************************************************************
*	Name    : lblForName
*	Author  : Kony Solutions
*	Purpose : Below function will return the Label with the text "Country:"
******************************************************************/
	 
	function lblForName(text){
		random = random+1;
		var lblBasicConf1 = { id:"lblForNm"+random,text :text,isVisible:true,skin: "lblBlackBold"};
		var lbllayoutConf1 = {containerWeight:40,hExpand:true,margin:[0,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_MIDDLE_LEFT,contentAlignment :constants.CONTENT_ALIGN_MIDDLE_LEFT,padding:[2,0,0,0],vExpand: false,hExpand: true};//,percent:true
		return new kony.ui.Label(lblBasicConf1, lbllayoutConf1, {});	
	}

/*****************************************************************
*	Name    : listBoxForCountry
*	Author  : Kony Solutions
*	Purpose : Below function will return the ListBox with the countryName list 
******************************************************************/

	function listBoxForCountry()
	{
			var masterData = [];
		try{
			var listId ="listId"+gListId;
			masterData = [["key0","Select your country.."],["key1","Argentina"],["key2","Australia"],["key3","Brazil"],["key4","Colombia"],["key5","Czech"],["key6","Greece"],["key7","Hungary"],["key8","India"],["key9","Malaysia"],["key10","Spain"],["key11","UAE"] ];
			var listBasicConf1 = {id:listId, masterData:masterData, isVisible:true, selectedKey:"key0", skin:"sknListboxKonyThemeNormal",focusSkin:"sknListboxKonyThemeFocus"};
			if(kony.os.deviceInfo().name=="android")
				var listLayoutConf1 = {containerWeight:60,hExpand:true,widgetAlignment:constants.WIDGET_ALIGN_MIDDLE_LEFT,margin:[0,1,2,0],contentAlignment :constants.CONTENT_ALIGN_MIDDLE_LEFT,padding:[0,0,0,1],percent:true,vExpand: false,hExpand: true};
			else
				var listLayoutConf1 = {containerWeight:60,hExpand:true,widgetAlignment:constants.WIDGET_ALIGN_MIDDLE_LEFT,margin:[0,3,2,0],contentAlignment :constants.CONTENT_ALIGN_MIDDLE_LEFT,padding:[0,0,0,0],percent:true,vExpand: false,hExpand: true};
			var listPSPConf1 = {viewType:constants.LISTBOX_VIEW_TYPE_LISTVIEW};
			return new kony.ui.ListBox(listBasicConf1, listLayoutConf1, listPSPConf1);	
		}
		catch(err){
			alert("error while ListBox creation"+err);
		}
		
	}

/*****************************************************************
*	Name    : hBoxForTextBox
*	Author  : Kony Solutions
*	Purpose : Below function will return the Hbox which contains label and textbox to enter the your Name 
******************************************************************/
	
	function hBoxForTextBox(){
		random = random+1;
		var hboxbasicConf1 = {id:"hBoxForTextBxx"+random,isVisible:true,position: constants.BOX_POSITION_AS_NORMAL,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"hBoxTransparentUnrounded"};
		var hboxlayoutConf1 = {containerWeight:50,percent:true,vExpand: false,hExpand: true};
		var quantityHbox = new kony.ui.Box(hboxbasicConf1, hboxlayoutConf1, {});
		quantityHbox.add(lblForName("Player's Name: "),textBoxForName());
		return quantityHbox;
	}

/*****************************************************************
*	Name    : textBoxForName
*	Author  : Kony Solutions
*	Purpose : Below function will return the textbox to enter the your Name 
******************************************************************/
	
	function textBoxForName(){
		gListId = gListId+1;
		var quantityId ="nameId"+gListId;
		var txtBoxBasic1 = {id:quantityId,isVisible:true,placeholder:"Enter your Name",skin:"sknTbxKonyThemeNormal",focusSkin:"sknTbxKonyThemeFocus",textInputMode:constants.TEXTBOX_INPUT_MODE_ANY, keyBoardStyle:constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT}; 
		if(kony.os.deviceInfo().name=="android")
			return new kony.ui.TextBox2(txtBoxBasic1, {containerWeight:60,hExpand:true,margin:[0,1,2,0],padding:[0,2,0,2],widgetAlignment:constants.WIDGET_ALIGN_MIDDLE_LEFT,contentAlignment :constants.CONTENT_ALIGN_MIDDLE_LEFT,percent:true}, {});
		else
			return new kony.ui.TextBox2(txtBoxBasic1, {containerWeight:60,hExpand:true,margin:[0,3,2,0],padding:[0,0,0,0],widgetAlignment:constants.WIDGET_ALIGN_MIDDLE_LEFT,contentAlignment :constants.CONTENT_ALIGN_MIDDLE_LEFT,percent:true}, {});
	}

/*****************************************************************
*	Name    : onClickAddMoreWidgets
*	Author  : Kony Solutions
*	Purpose : onClick event of Button[Add more widgets] for adding dynamic Widgets. 
******************************************************************/
	
	function onClickAddMoreWidgets(){
		count++;		
		frmDynamicJS.hBoxOuterId.vBoxOuterId.add(hBoxMain());
	}

/*****************************************************************
*	Name    : DisplayfrmDynamicJS
*	Author  : Kony Solutions
*	Purpose : Below function for add top HBox into Form(frmDynamicJS) 
******************************************************************/
	
	function addWidgetsToDynamicForm(){		
		frmDynamicJS.add(hBoxOuter(),btnForPlaceAnOrder("Done"));	
	}

/*****************************************************************
*	Name    : createDynamicForm
*	Author  : Kony Solutions
*	Purpose : Below function will create dynamic form(frmDynamicJS) and invoke addWidgetsToDynamicForm function.
*****************************************************************/
	
	
	function createDynamicForm(){
		try{
			random = 0;
			gListId = 0;
			count = 1;
			var frmLogBasiConf = {id: "frmDynamicJS",type:constants.FORM_TYPE_NATIVE,addWidgets :addWidgetsToDynamicForm,skin :"frmSampleSkin",headers:[hBoxForHeader()]};
			var frmLayoutConf = {percent:true};
			var frmPSPConfig = {inTransitionConfig:{transitionDirection:"topCenter"}};
		    frmDynamicJS = new kony.ui.Form2(frmLogBasiConf, frmLayoutConf, frmPSPConfig);
		    frmDynamicJS.show();
		}
		catch(err){
			alert("error while creating the forms"+err);
		}
	}





