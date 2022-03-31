
if (typeof gdjs.evtsExt__Tools__TriggerKey !== "undefined") {
  gdjs.evtsExt__Tools__TriggerKey.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Tools__TriggerKey = {};

gdjs.evtsExt__Tools__TriggerKey.conditionTrue_0 = {val:false};
gdjs.evtsExt__Tools__TriggerKey.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Tools__TriggerKey.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Tools__TriggerKey.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Tools__TriggerKey.conditionTrue_1 = {val:false};
gdjs.evtsExt__Tools__TriggerKey.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Tools__TriggerKey.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Tools__TriggerKey.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Tools__TriggerKey.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Tools__TriggerKey.condition0IsTrue_0.val = false;
gdjs.evtsExt__Tools__TriggerKey.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Tools__TriggerKey.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Key") : ""));
}if ( gdjs.evtsExt__Tools__TriggerKey.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Tools__TriggerKey.conditionTrue_1 = gdjs.evtsExt__Tools__TriggerKey.condition1IsTrue_0;
gdjs.evtsExt__Tools__TriggerKey.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8819036);
}
}}
if (gdjs.evtsExt__Tools__TriggerKey.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__Tools__TriggerKey.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Tools__TriggerKey.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Tools__TriggerKey.func = function(runtimeScene, Key, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "Key") return Key;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Tools__TriggerKey.eventsList1(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Tools__TriggerKey.registeredGdjsCallbacks = [];