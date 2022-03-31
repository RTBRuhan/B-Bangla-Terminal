
if (typeof gdjs.evtsExt__Tools__Ui !== "undefined") {
  gdjs.evtsExt__Tools__Ui.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Tools__Ui = {};
gdjs.evtsExt__Tools__Ui.GDBuObjects1= [];
gdjs.evtsExt__Tools__Ui.GDBuObjects2= [];
gdjs.evtsExt__Tools__Ui.GDBuObjects3= [];
gdjs.evtsExt__Tools__Ui.GDBuObjects4= [];

gdjs.evtsExt__Tools__Ui.conditionTrue_0 = {val:false};
gdjs.evtsExt__Tools__Ui.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Tools__Ui.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Tools__Ui.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Tools__Ui.conditionTrue_1 = {val:false};
gdjs.evtsExt__Tools__Ui.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Tools__Ui.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Tools__Ui.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Tools__Ui.mapOfGDgdjs_46evtsExt_95_95Tools_95_95Ui_46GDBuObjects2Objects = Hashtable.newFrom({"Bu": gdjs.evtsExt__Tools__Ui.GDBuObjects2});gdjs.evtsExt__Tools__Ui.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Tools__Ui.conditionTrue_1 = gdjs.evtsExt__Tools__Ui.condition0IsTrue_0;
gdjs.evtsExt__Tools__Ui.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8814524);
}
}if (gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Gui Assets\\Sfx\\Over.ogg", 2, false, 100, 1);
}}

}


{


gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val = false;
gdjs.evtsExt__Tools__Ui.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Tools__Ui.conditionTrue_1 = gdjs.evtsExt__Tools__Ui.condition1IsTrue_0;
gdjs.evtsExt__Tools__Ui.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8815388);
}
}}
if (gdjs.evtsExt__Tools__Ui.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.evtsExt__Tools__Ui.GDBuObjects2, gdjs.evtsExt__Tools__Ui.GDBuObjects3);

{for(var i = 0, len = gdjs.evtsExt__Tools__Ui.GDBuObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Tools__Ui.GDBuObjects3[i].setOpacity(100);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Assets\\Gui Assets\\Sfx\\Click.ogg", 2, false, 100, 1);
}}

}


{


gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val = false;
gdjs.evtsExt__Tools__Ui.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Tools__Ui.conditionTrue_1 = gdjs.evtsExt__Tools__Ui.condition1IsTrue_0;
gdjs.evtsExt__Tools__Ui.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8816588);
}
}}
if (gdjs.evtsExt__Tools__Ui.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Tools__Ui.GDBuObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Tools__Ui.GDBuObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Tools__Ui.GDBuObjects2[i].setOpacity(200);
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__Tools__Ui.mapOfGDgdjs_46evtsExt_95_95Tools_95_95Ui_46GDBuObjects1Objects = Hashtable.newFrom({"Bu": gdjs.evtsExt__Tools__Ui.GDBuObjects1});gdjs.evtsExt__Tools__Ui.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Bu"), gdjs.evtsExt__Tools__Ui.GDBuObjects2);

gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val = false;
gdjs.evtsExt__Tools__Ui.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Tools__Ui.mapOfGDgdjs_46evtsExt_95_95Tools_95_95Ui_46GDBuObjects2Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Tools__Ui.GDBuObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Tools__Ui.GDBuObjects2[i].isVisible() ) {
        gdjs.evtsExt__Tools__Ui.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Tools__Ui.GDBuObjects2[k] = gdjs.evtsExt__Tools__Ui.GDBuObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Tools__Ui.GDBuObjects2.length = k;}}
if (gdjs.evtsExt__Tools__Ui.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Tools__Ui.GDBuObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Tools__Ui.GDBuObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Tools__Ui.GDBuObjects2[i].setOpacity(150);
}
}
{ //Subevents
gdjs.evtsExt__Tools__Ui.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bu"), gdjs.evtsExt__Tools__Ui.GDBuObjects1);

gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Tools__Ui.mapOfGDgdjs_46evtsExt_95_95Tools_95_95Ui_46GDBuObjects1Objects, runtimeScene, true, true);
}if (gdjs.evtsExt__Tools__Ui.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Tools__Ui.GDBuObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Tools__Ui.GDBuObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Tools__Ui.GDBuObjects1[i].setOpacity(255);
}
}}

}


};gdjs.evtsExt__Tools__Ui.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Tools__Ui.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Tools__Ui.func = function(runtimeScene, Bu, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Bu": Bu
},
  _objectArraysMap: {
"Bu": gdjs.objectsListsToArray(Bu)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Tools__Ui.GDBuObjects1.length = 0;
gdjs.evtsExt__Tools__Ui.GDBuObjects2.length = 0;
gdjs.evtsExt__Tools__Ui.GDBuObjects3.length = 0;
gdjs.evtsExt__Tools__Ui.GDBuObjects4.length = 0;

gdjs.evtsExt__Tools__Ui.eventsList2(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Tools__Ui.registeredGdjsCallbacks = [];