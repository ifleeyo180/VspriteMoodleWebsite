/*
YUI 3.17.2 (build 9c3c78e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("axis-base",function(e,t){function r(){}var n=e.Lang;r.ATTRS={styles:{getter:function(){return this._styles=this._styles||this._getDefaultStyles(),this._styles},setter:function(e){this._styles=this._setStyles(e)}},graphic:{}},r.NAME="renderer",r.prototype={_styles:null,_setStyles:function(e){var t=this.get("styles");return this._mergeStyles(e,t)},_mergeStyles:function(t,r){r||(r={});var i=e.merge(r,{});return e.Object.each(t,function(e,t){r.hasOwnProperty(t)&&n.isObject(e)&&!n.isFunction(e)&&!n.isArray(e)?i[t]=this._mergeStyles(e,r[t]):i[t]=e},this),i},_copyObject:function(e){var t={},r,i;for(r in e)e.hasOwnProperty(r)&&(i=e[r],typeof i=="object"&&!n.isArray(i)?t[r]=this._copyObject(i):t[r]=i);return t},_getDefaultStyles:function(){return{padding:{top:0,right:0,bottom:0,left:0}}}},e.augment(r,e.Attribute),e.Renderer=r,e.AxisBase=e.Base.create("axisBase",e.Base,[e.Renderer],{initializer:function(){this.after("minimumChange",e.bind(this._keyChangeHandler,this)),this.after("maximumChange",e.bind(this._keyChangeHandler,this)),this.after("keysChange",this._keyChangeHandler),this.after("dataProviderChange",this._dataProviderChangeHandler)},getOrigin:function(){return this.get("minimum")},_dataProviderChangeHandler:function(){var e=this.get("keyCollection").concat(),t=this.get("keys"),n;if(t)for(n in t)t.hasOwnProperty(n)&&delete t[n];e&&e.length&&this.set("keys",e)},_updateMinAndMax:function(){},GUID:"yuibaseaxis",_type:null,_setMaximum:null,_setMinimum:null,_data:null,_updateTotalDataFlag:!0,_dataReady:!1,addKey:function(e){this.set("keys",e)},_getKeyArray:function(e,t){var n=0,r,i=[],s=t.length;for(;n<s;++n)r=t[n],i[n]=r[e];return i},_updateTotalData:function(){var e=this.get("keys"),t;this._data=[];for(t in e)e.hasOwnProperty(t)&&(this._data=this._data.concat(e[t]));this._updateTotalDataFlag=!1},removeKey:function(e){var t=this.get("keys");t.hasOwnProperty(e)&&(delete t[e],this._keyChangeHandler())},getKeyValueAt:function(e,t){var r=NaN,i=this.get("keys");return i[e]&&n.isNumber(parseFloat(i[e][t]))&&(r=i[e][t]),parseFloat(r)},getDataByKey:function(e){var t,r,i,s,o=this.get("keys");if(n.isArray(e)){t={},i=e.length;for(r=0;r<i;r+=1)s=e[r],o[s]&&(t[s]=this.getDataByKey(s))}else o[e]?t=o[e]:t=null;return t},getTotalMajorUnits:function(){var e,t=this.get("styles").majorUnit;return e=t.count,e},getEdgeOffset:function(e,t){var n;return this.get("calculateEdgeOffset")?n=t/e/2:n=0,n},_keyChangeHandler:function(){this._updateMinAndMax(),this._updateTotalDataFlag=!0,this.fire("dataUpdate")},_getDefaultStyles:function(){var e={majorUnit:{determinant:"count",count:11,distance:75}};return e},_maximumGetter:function(){var e=this.get("dataMaximum"),t=this.get("minimum");return t===0&&e===0&&(e=10),n.isNumber(this._setMaximum)&&(e=this._setMaximum),parseFloat(e)},_maximumSetter:function(e){return this._setMaximum=parseFloat(e),e},_minimumGetter:function(){var e=this.get("dataMinimum");return n.isNumber(this._setMinimum)&&(e=this._setMinimum),parseFloat(e)},_minimumSetter:function(e){return this._setMinimum=parseFloat(e),e},_getSetMax:function(){return n.isNumber(this._setMaximum)},_getCoordsFromValues:function(e,t,n,r,i,s){var o,u=[],a=r.length;for(o=0;o<a;o+=1)u.push(this._getCoordFromValue.apply(this,[e,t,n,r[o],i,s]));return u},_getDataValuesByCount:function(e,t,n){var r=[],i=t,s=e-1,o=n-t,u=o/s,a;for(a=0;a<s;a+=1)r.push(i),i+=u;return r.push(n),r},_getSetMin:function(){return n.isNumber(this._setMinimum)}},{ATTRS:{calculateEdgeOffset:{value:!1},labelFunction:{valueFn:function(){return this.formatLabel}},keys:{value:{},setter:function(e){var t={},r,i,s=this.get("dataProvider");if(n.isArray(e)){i=e.length;for(r=0;r<i;++r)t[e[r]]=this._getKeyArray(e[r],s)}else if(n.isString(e))t=this.get("keys"),t[e]=this._getKeyArray(e,s);else for(r in e)e.hasOwnProperty(r)&&(t[r]=this._getKeyArray(r,s));return this._updateTotalDataFlag=!0,t}},type:{readOnly:!0,getter:function(){return this._type}},dataProvider:{setter:function(e){return e}},dataMaximum:{getter:function(){return n.isNumber(this._dataMaximum)||this._updateMinAndMax(),this._dataMaximum}},maximum:{lazyAdd:!1,getter:"_maximumGetter",setter:"_maximumSetter"},dataMinimum:{getter:function(){return n.isNumber(this._dataMinimum)||this._updateMinAndMax(),this._dataMinimum}},minimum:{lazyAdd:!1,getter:"_minimumGetter",setter:"_minimumSetter"},setMax:{readOnly:!0,getter:"_getSetMax"},setMin:{readOnly:!0,getter:"_getSetMin"},data:{getter:function(){return(!this._data||this._updateTotalDataFlag)&&this._updateTotalData(),this._data}},keyCollection:{getter:function(){var e=this.get("keys"),t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t);return n},readOnly:!0},labelFunctionScope:{}}})},"3.17.2",{requires:["classnamemanager","datatype-number","datatype-date","base","event-custom"]});
