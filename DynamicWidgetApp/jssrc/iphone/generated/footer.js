//Template File
function initializefooter() {
    hbox120664956619270 = new kony.ui.BoxTemplate({
        "id": "hbox120664956619270",
        "isVisible": true,
        "skin": "HboxSkin",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox120664956619270
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox120664956619270() {
        var image2120664956619271 = new kony.ui.Image2({
            "id": "image2120664956619271",
            "isVisible": true,
            "src": "cpyrite.png",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        hbox120664956619270.add(
        image2120664956619271);
    }
};