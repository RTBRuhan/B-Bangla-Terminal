var gdjs;(function(s){let r;(function(i){let l;(function(o){let e=null;typeof require=="function"&&(e=require("electron").remote.getCurrentWindow()),o.focus=function(t){e&&(t?e.focus():e.blur())},o.isFocused=function(){return e?e.isFocused():!1},o.show=function(t){e&&(t?e.showInactive():e.hide())},o.isVisible=function(){return e?e.isVisible():!1},o.maximize=function(t){e&&(t?e.maximize():e.unmaximize())},o.isMaximized=function(){return e?e.isMaximized():!1},o.minimize=function(t){e&&(t?e.minimize():e.restore())},o.isMinimized=function(){return e?e.isMinimized():!1},o.enable=function(t){e&&e.setEnabled(t)},o.isEnabled=function(){return e?e.isEnabled():!1},o.setResizable=function(t){e&&e.setResizable(t)},o.isResizable=function(){return e?e.isResizable():!1},o.setMovable=function(t){e&&e.setMovable(t)},o.isMovable=function(){return e?e.isMovable():!1},o.setMaximizable=function(t){e&&e.setMaximizable(t)},o.isMaximizable=function(){return e?e.isMaximizable():!1},o.setMinimizable=function(t){e&&e.setMinimizable(t)},o.isMinimizable=function(){return e?e.isMinimizable():!1},o.setFullScreenable=function(t){e&&e.setFullScreenable(t)},o.isFullScreenable=function(){return e?e.isFullScreenable():!1},o.setClosable=function(t){e&&e.setClosable(t)},o.isClosable=function(){return e?e.isClosable():!1},o.setAlwaysOnTop=function(t,n){e&&e.setAlwaysOnTop(t,n)},o.isAlwaysOnTop=function(){return e?e.isAlwaysOnTop():!1},o.setPosition=function(t,n){e&&e.setPosition(~~t,~~n)},o.getPositionX=function(){return e?e.getPosition()[0]:0},o.getPositionY=function(){return e?e.getPosition()[1]:0},o.setKiosk=function(t){e&&e.setKiosk(t)},o.isKiosk=function(){return e?e.isKiosk():!1},o.flash=function(t){e&&e.flashFrame(t)},o.setHasShadow=function(t){e&&e.setHasShadow(t)},o.hasShadow=function(){return e?e.hasShadow():!1},o.setOpacity=function(t){e&&e.setOpacity(t)},o.getOpacity=function(){return e?e.getOpacity():1},o.setContentProtection=function(t){e&&e.setContentProtection(t)},o.setFocusable=function(t){e&&e.setFocusable(t)}})(l=i.advancedWindow||(i.advancedWindow={}))})(r=s.evtTools||(s.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=electron-advancedwindowtools.js.map