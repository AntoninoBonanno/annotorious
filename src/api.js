/** API exports **/
annotorious.Annotorious.prototype['activateSelector'] = annotorious.Annotorious.prototype.activateSelector;
annotorious.Annotorious.prototype['addAnnotation'] = annotorious.Annotorious.prototype.addAnnotation;
annotorious.Annotorious.prototype['addHandler'] = annotorious.Annotorious.prototype.addHandler;
annotorious.Annotorious.prototype['addPlugin'] = annotorious.Annotorious.prototype.addPlugin;
annotorious.Annotorious.prototype['destroy'] = annotorious.Annotorious.prototype.destroy;
annotorious.Annotorious.prototype['getActiveSelector'] = annotorious.Annotorious.prototype.getActiveSelector;
annotorious.Annotorious.prototype['getAnnotations'] = annotorious.Annotorious.prototype.getAnnotations;
annotorious.Annotorious.prototype['getAvailableSelectors'] = annotorious.Annotorious.prototype.getAvailableSelectors;
annotorious.Annotorious.prototype['hideAnnotations'] = annotorious.Annotorious.prototype.hideAnnotations;
annotorious.Annotorious.prototype['hideSelectionWidget'] = annotorious.Annotorious.prototype.hideSelectionWidget;
annotorious.Annotorious.prototype['highlightAnnotation'] = annotorious.Annotorious.prototype.highlightAnnotation;
annotorious.Annotorious.prototype['makeAnnotatable'] = annotorious.Annotorious.prototype.makeAnnotatable;
annotorious.Annotorious.prototype['removeAll'] = annotorious.Annotorious.prototype.removeAll;
annotorious.Annotorious.prototype['removeAnnotation'] = annotorious.Annotorious.prototype.removeAnnotation;
annotorious.Annotorious.prototype['reset'] = annotorious.Annotorious.prototype.reset;
annotorious.Annotorious.prototype['setActiveSelector'] = annotorious.Annotorious.prototype.setActiveSelector;
annotorious.Annotorious.prototype['setProperties'] = annotorious.Annotorious.prototype.setProperties;
annotorious.Annotorious.prototype['showAnnotations'] = annotorious.Annotorious.prototype.showAnnotations;
annotorious.Annotorious.prototype['showSelectionWidget'] = annotorious.Annotorious.prototype.showSelectionWidget;

/** Sets up the plugin namespace */
if (!window['annotorious'])
  window['annotorious'] = {};

if (!window['annotorious']['plugin'])
  window['annotorious']['plugin'] = {}

/** Geometry API exports **/
if (!window['annotorious']['geometry']) {
  window['annotorious']['geometry'] = {};
  window['annotorious']['geometry']['expand'] = annotorious.shape.expand;
  window['annotorious']['geometry']['getBoundingRect'] = annotorious.shape.getBoundingRect;
}

/** @deprecated **/
annotorious.Annotorious.prototype['setSelectionEnabled'] = annotorious.Annotorious.prototype.setSelectionEnabled;

/** My API **/
annotorious.Annotorious.prototype['reload'] = annotorious.Annotorious.prototype.reload;
annotorious.Annotorious.prototype['addAnnotations'] = annotorious.Annotorious.prototype.addAnnotations;
annotorious.Annotorious.prototype['setColorMode'] = annotorious.Annotorious.prototype.setColorMode;
annotorious.Annotorious.prototype['useSelectEditor'] = annotorious.Annotorious.prototype.useSelectEditor;
annotorious.Annotorious.prototype['showCursorAxes'] = annotorious.Annotorious.prototype.showCursorAxes;
annotorious.Annotorious.prototype['setArrowMode'] = annotorious.Annotorious.prototype.setArrowMode;
annotorious.Annotorious.prototype['useFancyBox'] = annotorious.Annotorious.prototype.useFancyBox;
annotorious.Annotorious.prototype['getIntersectedAnnotations'] = annotorious.Annotorious.prototype.getIntersectedAnnotations; 