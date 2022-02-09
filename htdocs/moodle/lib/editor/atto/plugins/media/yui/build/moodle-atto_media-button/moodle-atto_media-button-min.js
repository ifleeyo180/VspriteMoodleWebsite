YUI.add("moodle-atto_media-button",function(d,e){var t="atto_media",i={LINK:"LINK",VIDEO:"VIDEO",AUDIO:"AUDIO"},a={SUBTITLES:"SUBTITLES",CAPTIONS:"CAPTIONS",DESCRIPTIONS:"DESCRIPTIONS",CHAPTERS:"CHAPTERS",METADATA:"METADATA"},l={SOURCE:"atto_media_source",TRACK:"atto_media_track",MEDIA_SOURCE:"atto_media_media_source",LINK_SOURCE:"atto_media_link_source",POSTER_SOURCE:"atto_media_poster_source",TRACK_SOURCE:"atto_media_track_source",DISPLAY_OPTIONS:"atto_media_display_options",NAME_INPUT:"atto_media_name_entry",TITLE_INPUT:"atto_media_title_entry",URL_INPUT:"atto_media_url_entry",POSTER_SIZE:"atto_media_poster_size",LINK_SIZE:"atto_media_link_size",WIDTH_INPUT:"atto_media_width_entry",HEIGHT_INPUT:"atto_media_height_entry",TRACK_KIND_INPUT:"atto_media_track_kind_entry",TRACK_LABEL_INPUT:"atto_media_track_label_entry",TRACK_LANG_INPUT:"atto_media_track_lang_entry",TRACK_DEFAULT_SELECT:"atto_media_track_default",MEDIA_CONTROLS_TOGGLE:"atto_media_controls",MEDIA_AUTOPLAY_TOGGLE:"atto_media_autoplay",MEDIA_MUTE_TOGGLE:"atto_media_mute",MEDIA_LOOP_TOGGLE:"atto_media_loop",ADVANCED_SETTINGS:"atto_media_advancedsettings",LINK:i.LINK.toLowerCase(),VIDEO:i.VIDEO.toLowerCase(),AUDIO:i.AUDIO.toLowerCase(),TRACK_SUBTITLES:a.SUBTITLES.toLowerCase(),TRACK_CAPTIONS:a.CAPTIONS.toLowerCase(),TRACK_DESCRIPTIONS:a.DESCRIPTIONS.toLowerCase(),TRACK_CHAPTERS:a.CHAPTERS.toLowerCase(),TRACK_METADATA:a.METADATA.toLowerCase()},s={SOURCE:"."+l.SOURCE,TRACK:"."+l.TRACK,MEDIA_SOURCE:"."+l.MEDIA_SOURCE,POSTER_SOURCE:"."+l.POSTER_SOURCE,TRACK_SOURCE:"."+l.TRACK_SOURCE,DISPLAY_OPTIONS:"."+l.DISPLAY_OPTIONS,NAME_INPUT:"."+l.NAME_INPUT,TITLE_INPUT:"."+l.TITLE_INPUT,URL_INPUT:"."+l.URL_INPUT,POSTER_SIZE:"."+l.POSTER_SIZE,LINK_SIZE:"."+l.LINK_SIZE,WIDTH_INPUT:"."+l.WIDTH_INPUT,HEIGHT_INPUT:"."+l.HEIGHT_INPUT,TRACK_KIND_INPUT:"."+l.TRACK_KIND_INPUT,TRACK_LABEL_INPUT:"."+l.TRACK_LABEL_INPUT,TRACK_LANG_INPUT:"."+l.TRACK_LANG_INPUT,TRACK_DEFAULT_SELECT:"."+l.TRACK_DEFAULT_SELECT,MEDIA_CONTROLS_TOGGLE:"."+l.MEDIA_CONTROLS_TOGGLE,MEDIA_AUTOPLAY_TOGGLE:"."+l.MEDIA_AUTOPLAY_TOGGLE,MEDIA_MUTE_TOGGLE:"."+l.MEDIA_MUTE_TOGGLE,MEDIA_LOOP_TOGGLE:"."+l.MEDIA_LOOP_TOGGLE,ADVANCED_SETTINGS:"."+l.ADVANCED_SETTINGS,LINK_TAB:'li[data-medium-type="'+l.LINK+'"]',LINK_PANE:'.tab-pane[data-medium-type="'+l.LINK+'"]',VIDEO_TAB:'li[data-medium-type="'+l.VIDEO+'"]',VIDEO_PANE:'.tab-pane[data-medium-type="'+l.VIDEO+'"]',AUDIO_TAB:'li[data-medium-type="'+l.AUDIO+'"]',AUDIO_PANE:'.tab-pane[data-medium-type="'+l.AUDIO+'"]',TRACK_SUBTITLES_TAB:'li[data-track-kind="'+l.TRACK_SUBTITLES+'"]',TRACK_SUBTITLES_PANE:'.tab-pane[data-track-kind="'+l.TRACK_SUBTITLES+'"]',TRACK_CAPTIONS_TAB:'li[data-track-kind="'+l.TRACK_CAPTIONS+'"]',TRACK_CAPTIONS_PANE:'.tab-pane[data-track-kind="'+l.TRACK_CAPTIONS+'"]',TRACK_DESCRIPTIONS_TAB:'li[data-track-kind="'+l.TRACK_DESCRIPTIONS+'"]',TRACK_DESCRIPTIONS_PANE:'.tab-pane[data-track-kind="'+l.TRACK_DESCRIPTIONS+'"]',TRACK_CHAPTERS_TAB:'li[data-track-kind="'+l.TRACK_CHAPTERS+'"]',TRACK_CHAPTERS_PANE:'.tab-pane[data-track-kind="'+l.TRACK_CHAPTERS+'"]',TRACK_METADATA_TAB:'li[data-track-kind="'+l.TRACK_METADATA+'"]',TRACK_METADATA_PANE:'.tab-pane[data-track-kind="'+l.TRACK_METADATA+'"]'},c={ROOT:'<form class="mform atto_form atto_media" id="{{elementid}}_atto_media_form"><ul class="root nav nav-tabs mb-1" role="tablist"><li data-medium-type="{{CSS.LINK}}" class="nav-item"><a class="nav-link active" href="#{{elementid}}_{{CSS.LINK}}" role="tab" data-toggle="tab">{{get_string "link" component}}</a></li><li data-medium-type="{{CSS.VIDEO}}" class="nav-item"><a class="nav-link" href="#{{elementid}}_{{CSS.VIDEO}}" role="tab" data-toggle="tab">{{get_string "video" component}}</a></li><li data-medium-type="{{CSS.AUDIO}}" class="nav-item"><a class="nav-link" href="#{{elementid}}_{{CSS.AUDIO}}" role="tab" data-toggle="tab">{{get_string "audio" component}}</a></li></ul><div class="root tab-content"><div data-medium-type="{{CSS.LINK}}" class="tab-pane active" id="{{elementid}}_{{CSS.LINK}}">{{> tab_panes.link}}</div><div data-medium-type="{{CSS.VIDEO}}" class="tab-pane" id="{{elementid}}_{{CSS.VIDEO}}">{{> tab_panes.video}}</div><div data-medium-type="{{CSS.AUDIO}}" class="tab-pane" id="{{elementid}}_{{CSS.AUDIO}}">{{> tab_panes.audio}}</div></div><div class="mdl-align"><br/><button class="btn btn-secondary submit" type="submit">{{get_string "createmedia" component}}</button></div></form>',TAB_PANES:{LINK:'{{renderPartial "form_components.source" context=this id=CSS.LINK_SOURCE}}<label for="{{elementid}}_link_nameentry">{{get_string "entername" component}}</label><input class="form-control fullwidth {{CSS.NAME_INPUT}}" type="text" id="{{elementid}}_link_nameentry"size="32" required="true"/>',
VIDEO:'{{renderPartial "form_components.source" context=this id=CSS.MEDIA_SOURCE entersourcelabel="videosourcelabel" addcomponentlabel="addsource" multisource="true" addsourcehelp=helpStrings.addsource}}<fieldset class="collapsible collapsed" id="{{elementid}}_video-display-options"><input name="mform_isexpanded_{{elementid}}_video-display-options" type="hidden"><legend class="ftoggler">{{get_string "displayoptions" component}}</legend><div class="fcontainer">{{renderPartial "form_components.display_options" context=this id=CSS.VIDEO mediatype_video=true}}</div></fieldset><fieldset class="collapsible collapsed" id="{{elementid}}_video-advanced-settings"><input name="mform_isexpanded_{{elementid}}_video-advanced-settings" type="hidden"><legend class="ftoggler">{{get_string "advancedsettings" component}}</legend><div class="fcontainer">{{renderPartial "form_components.advanced_settings" context=this id=CSS.VIDEO}}</div></fieldset><fieldset class="collapsible collapsed" id="{{elementid}}_video-tracks"><input name="mform_isexpanded_{{elementid}}_video-tracks" type="hidden"><legend class="ftoggler">{{get_string "tracks" component}} {{{helpStrings.tracks}}}</legend><div class="fcontainer">{{renderPartial "form_components.track_tabs" context=this id=CSS.VIDEO}}</div></fieldset>',AUDIO:'{{renderPartial "form_components.source" context=this id=CSS.MEDIA_SOURCE entersourcelabel="audiosourcelabel" addcomponentlabel="addsource" multisource="true" addsourcehelp=helpStrings.addsource}}<fieldset class="collapsible collapsed" id="{{elementid}}_audio-display-options"><input name="mform_isexpanded_{{elementid}}_audio-display-options" type="hidden"><legend class="ftoggler">{{get_string "displayoptions" component}}</legend><div class="fcontainer">{{renderPartial "form_components.display_options" context=this id=CSS.AUDIO}}</div></fieldset><fieldset class="collapsible collapsed" id="{{elementid}}_audio-advanced-settings"><input name="mform_isexpanded_{{elementid}}_audio-advanced-settings" type="hidden"><legend class="ftoggler">{{get_string "advancedsettings" component}}</legend><div class="fcontainer">{{renderPartial "form_components.advanced_settings" context=this id=CSS.AUDIO}}</div></fieldset><fieldset class="collapsible collapsed" id="{{elementid}}_audio-tracks"><input name="mform_isexpanded_{{elementid}}_audio-tracks" type="hidden"><legend class="ftoggler">{{get_string "tracks" component}} {{{helpStrings.tracks}}}</legend><div class="fcontainer">{{renderPartial "form_components.track_tabs" context=this id=CSS.AUDIO}}</div></fieldset>'},FORM_COMPONENTS:{SOURCE:'<div class="{{CSS.SOURCE}} {{id}}"><div class="mb-1"><label for="url-input">{{#entersourcelabel}}{{get_string ../entersourcelabel ../component}}{{/entersourcelabel}}{{^entersourcelabel}}{{get_string "entersource" ../component}}{{/entersourcelabel}}</label><div class="input-group input-append w-100"><input id="url-input" class="form-control {{CSS.URL_INPUT}}" type="url" size="32"/><span class="input-group-append"><button class="btn btn-secondary openmediabrowser" type="button">{{get_string "browserepositories" component}}</button></span></div></div>{{#multisource}}{{renderPartial "form_components.add_component" context=../this label=../addcomponentlabel  help=../addsourcehelp}}{{/multisource}}</div>',ADD_COMPONENT:'<div><a href="#" class="addcomponent">{{#label}}{{get_string ../label ../component}}{{/label}}{{^label}}{{get_string "add" ../component}}{{/label}}</a>{{#help}}{{{../help}}}{{/help}}</div>',REMOVE_COMPONENT:'<div><a href="#" class="removecomponent">{{#label}}{{get_string ../label ../component}}{{/label}}{{^label}}{{get_string "remove" ../component}}{{/label}}</a></div>',DISPLAY_OPTIONS:'<div class="{{CSS.DISPLAY_OPTIONS}}"><div class="mb-1"><label for="{{id}}_media-title-entry">{{get_string "entertitle" component}}</label><input class="form-control fullwidth {{CSS.TITLE_INPUT}}" type="text" id="{{id}}_media-title-entry"size="32"/></div><div class="clearfix"></div>{{#mediatype_video}}<div class="mb-1"><label>{{get_string "size" component}}</label><div class="form-inline {{CSS.POSTER_SIZE}}"><label class="accesshide">{{get_string "videowidth" component}}</label><input type="text" class="form-control mr-1 {{CSS.WIDTH_INPUT}} input-mini" size="4"/> x <label class="accesshide">{{get_string "videoheight" component}}</label><input type="text" class="form-control ml-1 {{CSS.HEIGHT_INPUT}} input-mini" size="4"/></div></div><div class="clearfix"></div>{{renderPartial "form_components.source" context=this id=CSS.POSTER_SOURCE entersourcelabel="poster"}}{{/mediatype_video}}<div>',ADVANCED_SETTINGS:'<div class="{{CSS.ADVANCED_SETTINGS}}"><div class="form-check"><input type="checkbox" checked="true" class="form-check-input {{CSS.MEDIA_CONTROLS_TOGGLE}}"id="{{id}}_media-controls-toggle"/><label class="form-check-label" for="{{id}}_media-controls-toggle">{{get_string "controls" component}}</label></div><div class="form-check"><input type="checkbox" class="form-check-input {{CSS.MEDIA_AUTOPLAY_TOGGLE}}"id="{{id}}_media-autoplay-toggle"/><label class="form-check-label" for="{{id}}_media-autoplay-toggle">{{get_string "autoplay" component}}</label></div><div class="form-check"><input type="checkbox" class="form-check-input {{CSS.MEDIA_MUTE_TOGGLE}}" id="{{id}}_media-mute-toggle"/><label class="form-check-label" for="{{id}}_media-mute-toggle">{{get_string "mute" component}}</label></div><div class="form-check"><input type="checkbox" class="form-check-input {{CSS.MEDIA_LOOP_TOGGLE}}" id="{{id}}_media-loop-toggle"/><label class="form-check-label" for="{{id}}_media-loop-toggle">{{get_string "loop" component}}</label></div></div>',
TRACK_TABS:'<ul class="nav nav-tabs mb-3"><li data-track-kind="{{CSS.TRACK_SUBTITLES}}" class="nav-item"><a class="nav-link active" href="#{{elementid}}_{{id}}_{{CSS.TRACK_SUBTITLES}}" role="tab" data-toggle="tab">{{get_string "subtitles" component}}</a></li><li data-track-kind="{{CSS.TRACK_CAPTIONS}}" class="nav-item"><a class="nav-link" href="#{{elementid}}_{{id}}_{{CSS.TRACK_CAPTIONS}}" role="tab" data-toggle="tab">{{get_string "captions" component}}</a></li><li data-track-kind="{{CSS.TRACK_DESCRIPTIONS}}"  class="nav-item"><a class="nav-link" href="#{{elementid}}_{{id}}_{{CSS.TRACK_DESCRIPTIONS}}" role="tab" data-toggle="tab">{{get_string "descriptions" component}}</a></li><li data-track-kind="{{CSS.TRACK_CHAPTERS}}" class="nav-item"><a class="nav-link" href="#{{elementid}}_{{id}}_{{CSS.TRACK_CHAPTERS}}" role="tab" data-toggle="tab">{{get_string "chapters" component}}</a></li><li data-track-kind="{{CSS.TRACK_METADATA}}" class="nav-item"><a class="nav-link" href="#{{elementid}}_{{id}}_{{CSS.TRACK_METADATA}}" role="tab" data-toggle="tab">{{get_string "metadata" component}}</a></li></ul><div class="tab-content"><div data-track-kind="{{CSS.TRACK_SUBTITLES}}" class="tab-pane active" id="{{elementid}}_{{id}}_{{CSS.TRACK_SUBTITLES}}"><div class="trackhelp">{{{helpStrings.subtitles}}}</div>{{renderPartial "form_components.track" context=this sourcelabel="subtitlessourcelabel" addcomponentlabel="addsubtitlestrack"}}</div><div data-track-kind="{{CSS.TRACK_CAPTIONS}}" class="tab-pane" id="{{elementid}}_{{id}}_{{CSS.TRACK_CAPTIONS}}"><div class="trackhelp">{{{helpStrings.captions}}}</div>{{renderPartial "form_components.track" context=this sourcelabel="captionssourcelabel" addcomponentlabel="addcaptionstrack"}}</div><div data-track-kind="{{CSS.TRACK_DESCRIPTIONS}}" class="tab-pane" id="{{elementid}}_{{id}}_{{CSS.TRACK_DESCRIPTIONS}}"><div class="trackhelp">{{{helpStrings.descriptions}}}</div>{{renderPartial "form_components.track" context=this sourcelabel="descriptionssourcelabel" addcomponentlabel="adddescriptionstrack"}}</div><div data-track-kind="{{CSS.TRACK_CHAPTERS}}" class="tab-pane" id="{{elementid}}_{{id}}_{{CSS.TRACK_CHAPTERS}}"><div class="trackhelp">{{{helpStrings.chapters}}}</div>{{renderPartial "form_components.track" context=this sourcelabel="chapterssourcelabel" addcomponentlabel="addchapterstrack"}}</div><div data-track-kind="{{CSS.TRACK_METADATA}}" class="tab-pane" id="{{elementid}}_{{id}}_{{CSS.TRACK_METADATA}}"><div class="trackhelp">{{{helpStrings.metadata}}}</div>{{renderPartial "form_components.track" context=this sourcelabel="metadatasourcelabel" addcomponentlabel="addmetadatatrack"}}</div></div>',TRACK:'<div class="mb-1 {{CSS.TRACK}}">{{renderPartial "form_components.source" context=this id=CSS.TRACK_SOURCE entersourcelabel=sourcelabel}}<div class="form-group"><label class="w-100" for="lang-input">{{get_string "srclang" component}}</label><select id="lang-input" class="custom-select {{CSS.TRACK_LANG_INPUT}}"><optgroup label="{{get_string "languagesinstalled" component}}">{{#langsinstalled}}<option value="{{code}}" {{#default}}selected="selected"{{/default}}>{{lang}}</option>{{/langsinstalled}}</optgroup><optgroup label="{{get_string "languagesavailable" component}} ">{{#langsavailable}}<option value="{{code}}">{{lang}}</option>{{/langsavailable}}</optgroup></select></div><div class="form-group"><label class="w-100" for="track-input">{{get_string "label" component}}</label><input id="track-input" class="form-control {{CSS.TRACK_LABEL_INPUT}}" type="text"/></div><div class="form-check"><input type="checkbox" class="form-check-input {{CSS.TRACK_DEFAULT_SELECT}}"/><label class="form-check-label">{{get_string "default" component}}</label></div>{{renderPartial "form_components.add_component" context=this label=addcomponentlabel}}</div>'},HTML_MEDIA:{VIDEO:'&nbsp;<video {{#width}}width="{{../width}}" {{/width}}{{#height}}height="{{../height}}" {{/height}}{{#poster}}poster="{{../poster}}" {{/poster}}{{#showControls}}controls="true" {{/showControls}}{{#loop}}loop="true" {{/loop}}{{#muted}}muted="true" {{/muted}}{{#autoplay}}autoplay="true" {{/autoplay}}{{#title}}title="{{../title}}" {{/title}}>{{#sources}}<source src="{{source}}">{{/sources}}{{#tracks}}<track src="{{track}}" kind="{{kind}}" srclang="{{srclang}}" label="{{label}}" {{#defaultTrack}}default="true"{{/defaultTrack}}>{{/tracks}}{{#description}}{{../description}}{{/description}}</video>&nbsp',AUDIO:'&nbsp;<audio {{#showControls}}controls="true" {{/showControls}}{{#loop}}loop="true" {{/loop}}{{#muted}}muted="true" {{/muted}}{{#autoplay}}autoplay="true" {{/autoplay}}{{#title}}title="{{../title}}" {{/title}}>{{#sources}}<source src="{{source}}">{{/sources}}{{#tracks}}<track src="{{track}}" kind="{{kind}}" srclang="{{srclang}}" label="{{label}}" {{#defaultTrack}}default="true"{{/defaultTrack}}>{{/tracks}}{{#description}}{{../description}}{{/description}}</audio>&nbsp',LINK:'<a href="{{url}}" {{#width}}data-width="{{../width}}" {{/width}}{{#height}}data-height="{{../height}}"{{/height}}>{{#name}}{{../name}}{{/name}}{{^name}}{{../url}}{{/name}}</a>'}};d.namespace("M.atto_media").Button=d.Base.create("button",d.M.editor_atto.EditorPlugin,[],{initializer:function(){this.get("host").canShowFilepicker("media")&&(this.editor.delegate("dblclick",this._displayDialogue,"video",this),this.editor.delegate("click",this._handleClick,"video",this),this.addButton({icon:"e/insert_edit_video",callback:this._displayDialogue,tags:"video, audio",tagMatchRequiresAll:!1}))},_getContext:function(e){return d.merge({elementid:this.get("host").get("elementid"),component:t,langsinstalled:this.get("langs").installed,langsavailable:this.get("langs").available,helpStrings:this.get("help"),CSS:l},e)},_handleClick:function(e){var t=e.target,a=this.get("host").getSelectionFromNode(t);this.get("host").getSelection()!==a&&this.get("host").setSelection(a)},_displayDialogue:function(){!1!==this.get("host").getSelection()&&(
"renderPartial"in d.Handlebars.helpers||(!function i(a,e){d.each(e,function(e,t){a.push(t),"object"!=typeof e?d.Handlebars.registerPartial(a.join(".").toLowerCase(),e):i(a,e),a.pop()})}([],c),d.Handlebars.registerHelper("renderPartial",function(e,t){var a,i,n;return e?(a=d.Handlebars.partials[e],i=t.hash.context?d.clone(t.hash.context):{},delete(n=d.merge(i,t.hash)).context,a?new d.Handlebars.SafeString(d.Handlebars.compile(a)(n)):""):""})),this.getDialogue({headerContent:M.util.get_string("createmedia",t),focusAfterHide:!0,width:660,focusOnShowSelector:s.URL_INPUT}).set("bodyContent",this._getDialogueContent(this.get("host").getSelection())).show(),M.form.shortforms({formid:this.get("host").get("elementid")+"_atto_media_form"}))},_getDialogueContent:function(e){var t=d.Node.create(d.Handlebars.compile(c.ROOT)(this._getContext())),a=this.get("host").getSelectedNodes().filter("video,audio").shift(),i=!!a&&this._getMediumProperties(a);return this._attachEvents(this._applyMediumProperties(t,i),e)},_attachEvents:function(e,i){return e.delegate("click",function(e){e.preventDefault(),this._addMediaSourceComponent(e.currentTarget)},s.MEDIA_SOURCE+" .addcomponent",this),e.delegate("click",function(e){e.preventDefault(),this._addTrackComponent(e.currentTarget)},s.TRACK+" .addcomponent",this),e.delegate("click",function(e){var t,a=e.currentTarget;a.get("checked")&&(t=function(e){return this._getTrackTypeFromTabPane(e.ancestor(".tab-pane"))}.bind(this),a.ancestor(".root.tab-content").all(s.TRACK_DEFAULT_SELECT).each(function(e){e!==a&&t(a)===t(e)&&e.set("checked",!1)}))},s.TRACK_DEFAULT_SELECT,this),e.delegate("click",function(e){var t=e.currentTarget,a=(t.ancestor(s.POSTER_SOURCE)?"image":t.ancestor(s.TRACK_SOURCE)&&"subtitle")||"media";e.preventDefault(),this.get("host").showFilepicker(a,this._getFilepickerCallback(t,a),this)},".openmediabrowser",this),e.all(".nav-item").on("click",function(e){e.currentTarget.get("parentNode").all(".active").removeClass("active")}),e.one(".submit").on("click",function(e){e.preventDefault();var t=this._getMediaHTML(e.currentTarget.ancestor(".atto_form")),a=this.get("host");this.getDialogue({focusAfterHide:null}).hide(),t&&(a.setSelection(i),a.insertContentAtFocusPoint(t),this.markUpdated())},this),e},_applyMediumProperties:function(e,t){var n,o,a;return t&&(n=function(e,t){e.one(s.TRACK_SOURCE+" "+s.URL_INPUT).set("value",t.src),e.one(s.TRACK_LANG_INPUT).set("value",t.srclang),e.one(s.TRACK_LABEL_INPUT).set("value",t.label),e.one(s.TRACK_DEFAULT_SELECT).set("checked",t.defaultTrack)},(o=e.one(".root.tab-content > .tab-pane#"+this.get("host").get("elementid")+"_"+t.type.toLowerCase())).one(s.MEDIA_SOURCE+" "+s.URL_INPUT).set("value",t.sources[0]),d.Array.each(t.sources.slice(1),function(t){this._addMediaSourceComponent(o.one(s.MEDIA_SOURCE+" .addcomponent"),function(e){e.one(s.URL_INPUT).set("value",t)})},this),d.Object.each(t.tracks,function(e,t){var a=e.length?e:[{src:"",srclang:"",label:"",defaultTrack:!1}],i=s["TRACK_"+t.toUpperCase()+"_PANE"];n(o.one(i+" "+s.TRACK),a[0]),d.Array.each(a.slice(1),function(t){this._addTrackComponent(o.one(i+" "+s.TRACK+" .addcomponent"),function(e){n(e,t)})},this)},this),o.one(s.TITLE_INPUT).set("value",t.title),o.one(s.MEDIA_CONTROLS_TOGGLE).set("checked",t.controls),o.one(s.MEDIA_AUTOPLAY_TOGGLE).set("checked",t.autoplay),o.one(s.MEDIA_MUTE_TOGGLE).set("checked",t.muted),o.one(s.MEDIA_LOOP_TOGGLE).set("checked",t.loop),"video"===(a=this._getMediumTypeFromTabPane(o))&&(o.one(s.POSTER_SOURCE+" "+s.URL_INPUT).setAttribute("value",t.poster),o.one(s.WIDTH_INPUT).set("value",t.width),o.one(s.HEIGHT_INPUT).set("value",t.height)),o.siblings(".active").removeClass("active"),e.all(".root.nav-tabs .nav-item a").removeClass("active"),o.addClass("active"),e.one(s[a.toUpperCase()+"_TAB"]+" a").addClass("active")),e},_getMediumProperties:function(e){var t=function(e,t){return e.hasAttribute(t)&&(e.getAttribute(t)||""===e.getAttribute(t))},a={subtitles:[],captions:[],descriptions:[],chapters:[],metadata:[]};return e.all("track").each(function(e){a[e.getAttribute("kind")].push({src:e.getAttribute("src"),srclang:e.getAttribute("srclang"),label:e.getAttribute("label"),defaultTrack:t(e,"default")})}),{type:e.test("video")?i.VIDEO:i.AUDIO,sources:e.all("source").get("src"),poster:e.getAttribute("poster"),title:e.getAttribute("title"),width:e.getAttribute("width"),height:e.getAttribute("height"),autoplay:t(e,"autoplay"),loop:t(e,"loop"),muted:t(e,"muted"),controls:t(e,"controls"),tracks:a}},_addTrackComponent:function(e,t){var a=this._getTrackTypeFromTabPane(e.ancestor(".tab-pane")),i=this._getContext({sourcelabel:a+"sourcelabel",addcomponentlabel:"add"+a+"track"});this._addComponent(e,c.FORM_COMPONENTS.TRACK,s.TRACK,i,t)},_addMediaSourceComponent:function(e,t){var a=this._getMediumTypeFromTabPane(e.ancestor(".tab-pane")),i=this._getContext({multisource:!0,id:l.MEDIA_SOURCE,entersourcelabel:a+"sourcelabel",addcomponentlabel:"addsource",addsourcehelp:this.get("help").addsource});this._addComponent(e,c.FORM_COMPONENTS.SOURCE,s.MEDIA_SOURCE,i,t)},_addComponent:function(e,t,a,i,n){var o,l=e.ancestor(a),s=d.Node.create(d.Handlebars.compile(t)(i)),r=this._getContext(i);r.label="remove",(o=d.Node.create(d.Handlebars.compile(c.FORM_COMPONENTS.REMOVE_COMPONENT)(r))).one(".removecomponent").on("click",function(e){e.preventDefault(),l.remove(!0)}),l.insert(s,"after"),e.ancestor().insert(o,"after"),e.ancestor().remove(!0),n&&n.call(this,s)},_getFilepickerCallback:function(n,o){return function(e){var t,a,i;""!==e.url&&(t=n.ancestor(".tab-pane"),n.ancestor(s.SOURCE).one(s.URL_INPUT).set("value",e.url),t.get("id")===this.get("host").get("elementid")+"_"+l.LINK&&t.one(s.NAME_INPUT).set("value",e.file),"subtitle"===o&&(a=e.file.split(".vtt")[0].split("-").slice(-1)[0],(i=this.get("langs").available.reduce(function(e,t){return t.code===a?t:e},!1))&&(n.ancestor(s.TRACK).one(s.TRACK_LABEL_INPUT).set("value",i.lang.substr(0,i.lang.lastIndexOf(" "))),n.ancestor(s.TRACK
).one(s.TRACK_LANG_INPUT).set("value",i.code))))}},_getMediumTypeFromTabPane:function(e){return e.getAttribute("data-medium-type")},_getTrackTypeFromTabPane:function(e){return e.getAttribute("data-track-kind")},_getMediaHTML:function(e){var t=this._getMediumTypeFromTabPane(e.one(".root.tab-content > .tab-pane.active")),a=e.one(s[t.toUpperCase()+"_PANE"]);return this["_getMediaHTML"+t[0].toUpperCase()+t.substr(1)](a)},_getMediaHTMLLink:function(e){var t={url:e.one(s.URL_INPUT).get("value"),name:e.one(s.NAME_INPUT).get("value")||!1};return t.url?d.Handlebars.compile(c.HTML_MEDIA.LINK)(t):""},_getMediaHTMLVideo:function(e){var t=this._getContextForMediaHTML(e);return t.width=e.one(s.WIDTH_INPUT).get("value")||!1,t.height=e.one(s.HEIGHT_INPUT).get("value")||!1,t.poster=e.one(s.POSTER_SOURCE+" "+s.URL_INPUT).get("value")||!1,t.sources.length?d.Handlebars.compile(c.HTML_MEDIA.VIDEO)(t):""},_getMediaHTMLAudio:function(e){var t=this._getContextForMediaHTML(e);return t.sources.length?d.Handlebars.compile(c.HTML_MEDIA.AUDIO)(t):""},_getContextForMediaHTML:function(e){var t=[];return e.all(s.TRACK).each(function(e){t.push({track:e.one(s.TRACK_SOURCE+" "+s.URL_INPUT).get("value"),kind:this._getTrackTypeFromTabPane(e.ancestor(".tab-pane")),label:e.one(s.TRACK_LABEL_INPUT).get("value")||e.one(s.TRACK_LANG_INPUT).get("value"),srclang:e.one(s.TRACK_LANG_INPUT).get("value"),defaultTrack:e.one(s.TRACK_DEFAULT_SELECT).get("checked")?"true":null})},this),{sources:e.all(s.MEDIA_SOURCE+" "+s.URL_INPUT).get("value").filter(function(e){return!!e}).map(function(e){return{source:e}}),description:e.one(s.MEDIA_SOURCE+" "+s.URL_INPUT).get("value")||!1,tracks:t.filter(function(e){return!!e.track}),showControls:e.one(s.MEDIA_CONTROLS_TOGGLE).get("checked"),autoplay:e.one(s.MEDIA_AUTOPLAY_TOGGLE).get("checked"),muted:e.one(s.MEDIA_MUTE_TOGGLE).get("checked"),loop:e.one(s.MEDIA_LOOP_TOGGLE).get("checked"),title:e.one(s.TITLE_INPUT).get("value")||!1}}},{ATTRS:{langs:{},help:{}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","moodle-form-shortforms"]});