/*
YUI 3.17.2 (build 9c3c78e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("recordset-base",function(e,t){var n=e.Base.create("record",e.Base,[],{_setId:function(){return e.guid()},initializer:function(){},destructor:function(){},getValue:function(e){return e===undefined?this.get("data"):this.get("data")[e]}},{ATTRS:{id:{valueFn:"_setId"},data:{value:null}}});e.Record=n;var r=e.ArrayList,i=e.Lang,s=e.Base.create("recordset",e.Base,[],{initializer:function(){this._items||(this._items=[]),this.publish({add:{defaultFn:this._defAddFn},remove:{defaultFn:this._defRemoveFn},empty:{defaultFn:this._defEmptyFn},update:{defaultFn:this._defUpdateFn}}),this._buildHashTable(this.get("key")),this.after(["recordsChange","add","remove","update","empty"],this._updateHash)},getRecord:function(e){return i.isString(e)?this.get("table")[e]:i.isNumber(e)?this._items[e]:null},getRecordByIndex:function(e){return this._items[e]},getRecordsByIndex:function(e,t){var n=0,r=[];t=i.isNumber(t)&&t>0?t:1;for(;n<t;n++)r.push(this._items[e+n]);return r},getLength:function(){return this.size()},getValuesByKey:function(e){var t=0,n=this._items.length,r=[];for(;t<n;t++)r.push(this._items[t].getValue(e));return r},add:function(e,t){var n=[],r,s=0;r=i.isNumber(t)&&t>-1?t:this._items.length;if(i.isArray(e))for(;s<e.length;s++)n[s]=this._changeToRecord(e[s]);else i.isObject(e)&&(n[0]=this._changeToRecord(e));return this.fire("add",{added:n,index:r}),this},remove:function(e,t){var n=[];return e=e>-1?e:this._items.length-1,t=t>0?t:1,n=this._items.slice(e,e+t),this.fire("remove",{removed:n,range:t,index:e}),this},empty:function(){return this.fire("empty",{}),this},update:function(e,t){var n,r,s=0;r=i.isArray(e)?e:[e],n=this._items.slice(t,t+r.length);for(;s<r.length;s++)r[s]=this._changeToRecord(r[s]);return this.fire("update",{updated:r,overwritten:n,index:t}),this},_defAddFn:function(e){this._items.splice.apply(this._items,[e.index,0].concat(e.added))},_defRemoveFn:function(e){this._items.splice(e.index,e.range||1)},_defUpdateFn:function(e){for(var t=0;t<e.updated.length;t++)this._items[e.index+t]=this._changeToRecord(e.updated[t])},_defEmptyFn:function(e){this._items=[]},_updateHash:function(e){var t="_hash",n=e.type.replace(/.*:/,""),r;t+=n.charAt(0).toUpperCase()+n.slice(1),r=this[t]&&this[t](this.get("table"),this.get("key"),e),r&&this.set("table",r)},_hashRecordsChange:function(e,t,n){return this._buildHashTable(t)},_buildHashTable:function(e){return this._hashAdd({},e,{added:this._items})},_hashAdd:function(e,t,n){var r=n.added,i,s;for(i=0,s=n.added.length;i<s;++i)e[r[i].get(t)]=r[i];return e},_hashRemove:function(e,t,n){for(var r=n.removed.length-1;r>=0;--r)delete e[n.removed[r].get(t)];return e},_hashUpdate:function(e,t,n){return n.overwritten&&n.overwritten.length&&(e=this._hashRemove(e,t,{removed:n.overwritten})),this._hashAdd(e,t,{added:n.updated})},_hashEmpty:function(){return{}},_initHashTable:function(){return this._hashAdd({},this.get("key"),{added:this._items||[]})},_changeToRecord:function(t){return t instanceof e.Record?t:new e.Record({data:t})},_setRecords:function(t){if(!e.Lang.isArray(t))return e.Attribute.INVALID_VALUE;var n=[],r,i;for(r=0,i=t.length;r<i;++r)n[r]=this._changeToRecord(t[r]);return this._items=n}},{ATTRS:{records:{lazyAdd:!1,getter:function(){return e.Array(this._items)},setter:"_setRecords"},table:{valueFn:"_initHashTable"},key:{value:"id",readOnly:!0}}});e.augment(s,r),e.Recordset=s},"3.17.2",{requires:["base","arraylist"]});
