
	function hBoxforPlaceInfoOuter(){
		var hboxbasicConf1 = {id:"hBoxforPlaceInfoOuterId",isVisible:true,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"hBoxTransparentUnrounded"};
		var hboxlayoutConf1 = {containerWeight:100,margin:[0,0,0,0],padding:[0,0,0,0],percent:true};
		var hboxPSPConfig1 = {};
		var tophBoxforPlaceInfoOuter = new kony.ui.Box(hboxbasicConf1, hboxlayoutConf1, hboxPSPConfig1);
		tophBoxforPlaceInfoOuter.add(vBoxforPlaceInfoOuter());
		return tophBoxforPlaceInfoOuter;
	}
	function vBoxforPlaceInfoOuter(){
		var vboxbasicConf1 = {id:"vBoxforPlaceInfoOuterId",isVisible:true,orientation:constants.BOX_LAYOUT_VERTICAL,skin:"hBoxTransparentUnrounded"};
		var vboxlayoutConf1 = {containerWeight:100,margin:[0,0,0,0],padding:[0,0,0,0],percent:true};
		topvBoxforPlaceInfoOuter = new kony.ui.Box(vboxbasicConf1, vboxlayoutConf1, {});
		topvBoxforPlaceInfoOuter.add(hBoxforPlaceInfo());
		return topvBoxforPlaceInfoOuter;
	}



/*****************************************************************
*	Name    : hBoxforPlaceInfo
*	Author  : Kony Solutions
*	Purpose : Below function will return the top Hbox which contains VBox
******************************************************************/
	
	function hBoxforPlaceInfo(){
		random = random+1;
		var hboxbasicConf1 = {id:"hBoxforPlaceInfo"+random,isVisible:true,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"HboxRoundedSkinJS"};
		var hboxlayoutConf1 = {containerWeight:100,margin:[2,2,2,2],padding:[0,0,0,0],percent:true};
		var hboxPSPConfig1 = {};
		var topHbox = new kony.ui.Box(hboxbasicConf1, hboxlayoutConf1, hboxPSPConfig1);
		topHbox.add(vBoxforPlaceInfo());
		return topHbox;
	}

/*****************************************************************
*	Name    : vBoxforPlaceInfo
*	Author  : Kony Solutions
*	Purpose : Below function will return the top Vbox which contains 2 HBoxes and one line seperator  .
******************************************************************/
	
	function vBoxforPlaceInfo(){	
		random = random+1;
		var vboxbasicConf1 = {id:"vBoxforPlaceInfo"+random,isVisible:true,orientation:constants.BOX_LAYOUT_VERTICAL,skin:"hboxtransparentRounded"};
		var vboxlayoutConf1 = {containerWeight:100,margin:[0,0,0,0],padding:[0,0,0,0],percent:true};
		var topVbox = new kony.ui.Box(vboxbasicConf1, vboxlayoutConf1, {});
		for(var i=1;i<=count;i++){
			if((frmDynamicJS["nameId"+i]["text"]!= textValue) && (frmDynamicJS["listId"+i]["selectedKey"] != "key0"))
			{
				var textName = frmDynamicJS["nameId"+i]["text"];
				var textCountry = frmDynamicJS["listId"+i]["selectedKeyValue"][1];
				//kony.print(myString)
				if(i == 1)
					topVbox.add(hBoxForName(textName),hBoxForCountry(textCountry));
				else
					topVbox.add(lineSeperator(),hBoxForName(textName),hBoxForCountry(textCountry));//
			}
			
		}
		return topVbox;
	}


/*****************************************************************
*	Name    : lineSeperator
*	Author  : Kony Solutions
*	Purpose : Below function will return line seperator  .
******************************************************************/
	
	function lineSeperator(){
		random = random+1;
		var linebasicConf1 = {id:"lineSeperator"+random,isVisible:true,skin:"grey"};
		var lineLayoutConf = {margin:[0,2,0,0], padding:[0,0,0,0], thickness:1,percent:true};
		var lineSep = new kony.ui.Line(linebasicConf1, lineLayoutConf,{});
		return lineSep;
	}

/*****************************************************************
*	Name    : hBoxForName
*	Author  : Kony Solutions
*	Purpose : Below function will return the Hbox which contains "Name:" and "NameInfo" labels .
******************************************************************/

//
function hBoxForName(text){
	random = random+1;
	var hboxbasicConf1 = {id:"hBoxForName"+random,isVisible:true,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"hBoxTransparentUnrounded"};
	var hboxlayoutConf1 = {containerWeight:50,percent:true};
	var prodHbox1 = new kony.ui.Box(hboxbasicConf1, hboxlayoutConf1, {});
	prodHbox1.add(lblForName("Player's Name: "),lblForNameInfo(text));
	return prodHbox1;	
}

/*****************************************************************
*	Name    : hBoxForCountry
*	Author  : Kony Solutions
*	Purpose : Below function will return the Hbox which contains two labels for Country name. 
******************************************************************/
function hBoxForCountry(text){
	random = random+1;
	var hboxbasicConf1 = {id:"hBoxForCountry"+random,isVisible:true,orientation:constants.BOX_LAYOUT_HORIZONTAL,skin:"hBoxTransparentUnrounded"};
	var hboxlayoutConf1 = {containerWeight:50,percent:true};
	var prodHbox2 = new kony.ui.Box(hboxbasicConf1, hboxlayoutConf1, {});
	prodHbox2.add(lblForName("Country: "),lblForNameInfo(text));
	return prodHbox2;	
}
/*****************************************************************
*	Name    : lblForNameInfo
*	Author  : Kony Solutions
*	Purpose : Below function will return labels for Candidate name and Country name. 
******************************************************************/
function lblForNameInfo(text){
		random = random+1;
		var lblBasicConf1 = { id:"lblForNameInfo"+random,text :text,isVisible:true,skin: "sknLblKonyThemeNormal"};
		var lbllayoutConf1 = {containerWeight:50,hExpand:true,margin:[0,3,0,0],contentAlignment :constants.CONTENT_ALIGN_MIDDLE_LEFT,padding:[5,0,0,0],percent:true};
		return new kony.ui.Label(lblBasicConf1, lbllayoutConf1, {});	
	}

/*****************************************************************
*	Name    : addWidgetsToDynamicForm2
*	Author  : Kony Solutions
*	Purpose : Below function for add top HBox into Form(frmDynamicJS2) 
******************************************************************/
function addWidgetsToDynamicFormTwo(){
		if(frmDynamicJS2["hBoxforPlaceInfoOuterId"]) 
		{frmDynamicJS2.remove(frmDynamicJS2["hBoxforPlaceInfoOuterId"]);}		
		    frmDynamicJS2.add(hBoxforPlaceInfoOuter());
	}

/*****************************************************************
*	Name    : createDynamicForm2
*	Author  : Kony Solutions
*	Purpose : Below function will create dynamic form(frmDynamicJS2) and invoke addWidgetsToDynamicForm2 function.
******************************************************************/
	function createDynamicForm2()
	{	
		var deviceInfo = kony.os.deviceInfo();		
		if( deviceInfo.name.indexOf("iPhone") > 0 || deviceInfo.name == "Blackberry")
			textValue = null;
		else textValue = "";					
		try{
			 for(var i=1;i<=count;i++)
			 {	
			 	if((frmDynamicJS ["nameId"+i]["text"]!= textValue) && (frmDynamicJS["listId"+i]["selectedKey"] != "key0"))
                 	IschkAllList = true;
                  else
                    IschkAllList = false;
             }
            if(IschkAllList)
            {
				var frmLogBasiConf = {id: "frmDynamicJS2", addWidgets :addWidgetsToDynamicFormTwo,skin :"frmSampleSkin",headers:[hBoxForHeader2()]};
				var frmLayoutConf = {percent:true};
				var frmPSPConfig = {inTransitionConfig:{transitionDirection:"topCenter"}};
		    	frmDynamicJS2 = new kony.ui.Form2(frmLogBasiConf, frmLayoutConf, frmPSPConfig);
		    	frmDynamicJS2.show();
		    }
		    else
		    	alert("Please enter all details");
		}
		catch(err){
			alert("error while creating the forms"+err);
		}
}


