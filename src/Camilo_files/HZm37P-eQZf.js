if (self.CavalryLogger) { CavalryLogger.start_js(["AuZZl"]); }

__d("InstreamVideoAdBreak",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){this.$InstreamVideoAdBreak1=i.instreamPlacement;this.$InstreamVideoAdBreak2=i.index;this.$InstreamVideoAdBreak3=i.timeOffsetInMs;this.$InstreamVideoAdBreak4=i.adBreakDurationInMs;this.$InstreamVideoAdBreak5=i.isAdBreakAutoInserted}h.prototype.getInstreamPlacement=function(){return this.$InstreamVideoAdBreak1};h.prototype.getIndex=function(){return this.$InstreamVideoAdBreak2};h.prototype.getTimeOffsetInMs=function(){return this.$InstreamVideoAdBreak3};h.prototype.getAdBreakDurationInMs=function(){return this.$InstreamVideoAdBreak4};h.prototype.getIsAdBreakAutoInserted=function(){return this.$InstreamVideoAdBreak5};f.exports=h}),null);
__d("ScaledImage.react",["cx","Image.react","React","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){"use strict";__p&&__p();var m=this.props,n=m.className,o=m.height,p=m.imageSize,q=m.width,r=babelHelpers.objectWithoutProperties(m,["className","height","imageSize","width"]),s={height:o,width:q},t=p.width/p.height,u=q/o,v=void 0;if(t>u){var w=o/p.height,x=p.width*w;v={height:o,left:-Math.floor((x-q)/2),width:x}}else{var y=q/p.width,z=p.height*y;v={height:z,top:-Math.floor((z-o)/2),width:q}}return c("React").createElement("div",{className:c("joinClasses")(n,"uiScaledImageContainer"),style:s},c("React").createElement(c("Image.react"),babelHelpers["extends"]({style:v},r)))};function l(){"use strict";i.apply(this,arguments)}l.propTypes={height:k.number.isRequired,imageSize:k.shape({height:k.number.isRequired,width:k.number.isRequired}).isRequired,width:k.number.isRequired};f.exports=l}),null);
__d("FeedObjectCapstone",["csx","DOM","Parent","ge"],(function a(b,c,d,e,f,g,h){__p&&__p();var i={getCapstone:function j(k){var l=c("DOM").scry(k,"._x1g");if(!l.length)l=c("DOM").scry(k.parentNode,"._x1g");return l?l[0]:null},addCapstoneByStoryID:function j(k,l){var m=c("Parent").bySelector(c("ge")(k),"._5jmm");this.addCapstone(m,l)},addCapstone:function j(k,l){var m=c("DOM").find(k,"._5v3q");if(m)k=m;this.removeCapstone(k);if(l)c("DOM").prependContent(k,l);return l},removeCapstone:function j(k){var l=i.getCapstone(k);if(l)c("DOM").remove(l)}};f.exports=i}),null);
__d("EntstreamFeedObjectFollowup",["csx","cx","Arbiter","CSS","DOM","EntstreamFeedObject","Event","FeedObjectCapstone","ge"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j="EntstreamFeedObjectFollowup/removed",k={getFollowup:function l(m){var n=c("DOM").scry(m,"._5lum");if(!n.length)n=c("DOM").scry(m.parentNode,"._5lum");return n?n[0]:null},initCloseButton:function l(m){var n=c("DOM").scry(m,"._5xsl");if(n.length==0)return;var o=c("Event").listen(n[0],"click",function(){o.remove();c("DOM").remove(m);c("Arbiter").inform(j,m)});m.listener=o},stopListenCloseButton:function l(m){if(m.listener)m.listener.remove()},addFollowup:function l(m,n,o){__p&&__p();var p=c("CSS").matchesSelector(m,"._5pat"),q=c("DOM").create("div",{className:"_5lum"});if(p)c("CSS").addClass(q,"_5pau");else c("CSS").addClass(q,"_1f84");if(o)if(typeof o==="string")c("CSS").addClass(q,o);else if(o instanceof Array)for(var r=0;r<o.length;r++)c("CSS").addClass(q,o[r]);var s=c("DOM").scry(m,"._5v3q")[0];if(s)m=s;var t=k.getFollowup(m);if(t)this.removeFollowup(t);c("FeedObjectCapstone").removeCapstone(m);if(n){c("DOM").appendContent(q,n);this.initCloseButton(q);if(c("CSS").matchesSelector(q,"._4-u3"))c("DOM").prependContent(m,q);else c("DOM").insertBefore(m,q)}else c("DOM").prependContent(m,q);return q},removeFollowup:function l(m){var n=k.getFollowup(m);this.stopListenCloseButton(n);c("DOM").remove(n);c("Arbiter").inform(j,n)},appendToFollowup:function l(m,n){var o=c("EntstreamFeedObject").getRoot(c("ge")(m)),p=k.getFollowup(o);c("DOM").appendContent(p,n)},addInstreamAdsFollowup:function l(m){var n=c("DOM").scry(m,"._211q"),o=c("DOM").create("div",{className:"_5lum"});c("DOM").prependContent(n[0],o);return o}};f.exports=k}),null);
__d("ModernWatchQueueFollowedShowTapMutation.graphql",[],(function a(b,c,d,e,f,g){"use strict";var h=function(){var i=[{kind:"LocalArgument",name:"input",type:"WatchQueueFollowedShowTapData!",defaultValue:null}],j=[{kind:"LinkedField",alias:null,name:"watch_queue_followed_show_tap",storageKey:null,args:[{kind:"Variable",name:"data",variableName:"input",type:"WatchQueueFollowedShowTapData!"}],concreteType:"WatchQueueFollowedShowTapResponsePayload",plural:false,selections:[{kind:"ScalarField",alias:null,name:"client_mutation_id",args:null,storageKey:null}]}];return{kind:"Request",operationKind:"mutation",name:"ModernWatchQueueFollowedShowTapMutation",id:"1431198360290030",text:null,metadata:{},fragment:{kind:"Fragment",name:"ModernWatchQueueFollowedShowTapMutation",type:"Mutation",metadata:null,argumentDefinitions:i,selections:j},operation:{kind:"Operation",name:"ModernWatchQueueFollowedShowTapMutation",argumentDefinitions:i,selections:j}}}();f.exports=h}),null);
__d("ModernWatchQueueFollowedShowTapMutation",["RelayModern","ModernWatchQueueFollowedShowTapMutation.graphql"],(function a(b,c,d,e,f,g){"use strict";var h=c("RelayModern").commitMutation,i=c("RelayModern").graphql,j=function j(){return c("ModernWatchQueueFollowedShowTapMutation.graphql")};function k(l,m,n){return h(l,{mutation:j,variables:{input:{actor_id:m.actorID,page_id:m.pageID}},onCompleted:n&&n.onCompleted,onError:n&&n.onError})}f.exports={commit:k}}),null);
__d("SUIAnalyticsGriffinTheme",["cssVar","React","SUIAtlasIcon.react","SUIModalCardUniform.business","SUITheme","SUIThreeStateCheckboxInputUniform.business","SUITypeStyle","SUIBusinessThemeComponents"],(function a(b,c,d,e,f,g,h){"use strict";var i="Helvetica, Arial, sans-serif",j={black:"#000000",blackOpacity40:"rgba(0, 0, 0, .4)",blueGray50:"#4b4f56",white:"#ffffff",blue:"#3A84C5",blueCalendarLight:"#99C6ED",blueTint10:"#ecf0f7",blueTint50:"#93D4F0",blueTint85:"#DEF2FA",blueDark:"#365899",blueToken:"#688BA9",yellow:"#FFA933",yellowTint85:"#FFF2E0",gray:"#4E5665",gray15:"#D8D8D8",grayDark:"#666E7C",grayWash:"#F6F6F6",grayBorder:"#D7D7D7",neutral02:"#F9F9F9",neutral03:"#F6F6F6",neutral06:"#EEEEEE",neutral15:"#D0DAE0",neutral30:"#A0B0BB",neutral72:"#466072",red:"#F55D5D",redTint85:"#FDE6E6",activeText:"#3A84C5",activeWash:"#EEEEEE",defaultText:"#79828E",disabledText:"#A0A4AD",error:"#fa3e3e",mediumText:"#4b4f56",warning:"#F5A623",bigLightGreen:"#31B34E",bigDarkGreen:"#057F28",bigLightGray:"#DADCDE",bigDarkGray:"#5B5C5E"},k={defaultSemiBold:new(c("SUITypeStyle"))({color:j.defaultText,fontFamily:i,fontWeight:"600",fontSize:"12px"}),defaultLightBig:new(c("SUITypeStyle"))({color:j.blueGray50,fontFamily:i,fontWeight:"300",fontSize:"24px"}),defaultLightSmall:new(c("SUITypeStyle"))({color:j.blueGray50,fontFamily:i,fontWeight:"400",fontSize:"12px"}),defaultNormal:new(c("SUITypeStyle"))({color:j.defaultText,fontFamily:i,fontWeight:"400",fontSize:"12px"}),defaultNormal12:new(c("SUITypeStyle"))({color:j.defaultText,fontFamily:i,fontSize:"12px"}),defaultNormal16:new(c("SUITypeStyle"))({color:j.defaultText,fontFamily:i,fontWeight:"400",fontSize:"16px"}),typeSemiBold16:new(c("SUITypeStyle"))({color:j.defaultText,fontFamily:i,fontWeight:"600",fontSize:"16px"}),typeBlack:new(c("SUITypeStyle"))({fontSize:"12px",color:j.black,fontFamily:i,fontWeight:"400"}),typeNormalBigLight:new(c("SUITypeStyle"))({color:j.defaultText,fontFamily:i,fontWeight:"200",fontSize:"24px"}),typeBlackBig:new(c("SUITypeStyle"))({fontSize:"24px",color:j.black,fontFamily:i,fontWeight:"400"}),typeBlackBold:new(c("SUITypeStyle"))({fontSize:"12px",color:j.black,fontFamily:i,fontWeight:"600"}),typeDisabledTitle:new(c("SUITypeStyle"))({fontSize:"12px",color:"#bec2c9",fontFamily:i,fontWeight:"600"})},l=function l(p){return c("React").createElement(c("SUIAtlasIcon.react"),babelHelpers["extends"]({},p,{colorDefault:j.gray15,colorDisabled:j.gray,colorHover:j.gray15,name:"delete"}))},m=function m(p){return c("React").createElement(c("SUIAtlasIcon.react"),babelHelpers["extends"]({},p,{colorDefault:j.white,colorDisabled:j.gray,colorHover:j.white,name:"delete"}))},n={SUIButton:{height:{normal:32,"short":24,tall:48},padding:{normal:{button:"16px",icon:"6px",onlyIcon:"19px"},"short":{button:"16px",icon:"6px",onlyIcon:"19px"},tall:{button:"16px",icon:"6px",onlyIcon:"19px"}},typeStyle:k.defaultSemiBold,use:{"default":{active:{background:j.grayBorder,borderColor:j.grayBorder,color:j.defaultText},disabled:{background:j.grayWash,borderColor:j.grayBorder,color:j.disabledText},hover:{background:j.grayWash,borderColor:j.grayBorder,color:j.defaultText},normal:{background:j.grayWash,borderColor:j.grayBorder,color:j.defaultText}},special:{active:{background:j.bigDarkGreen,borderColor:j.bigDarkGreen,color:j.white},disabled:{background:j.bigLightGray,borderColor:j.bigLightGray,color:j.bigDarkGray},hover:{background:j.bigLightGreen,borderColor:j.bigLightGreen,color:j.white},normal:{background:j.bigLightGreen,borderColor:j.bigLightGreen,color:j.white}},confirm:{active:{background:j.blueDark,borderColor:j.blue,color:j.white},disabled:{background:j.grayWash,borderColor:j.grayBorder,color:j.disabledText},hover:{background:j.blue,borderColor:j.blue,color:j.white},normal:{background:j.blue,borderColor:j.blue,color:j.white}},flat:c("SUIBusinessThemeComponents").SUIButton.use.flat,flatWhite:c("SUIBusinessThemeComponents").SUIButton.use.flatWhite}},SUIButtonIcon:{colorConfirm:j.activeText,colorDefault:j.defaultText,colorDisabled:j.disabledText,colorSpecial:j.defaultText,defaultSize:18,iconComponent:c("SUIAtlasIcon.react")},SUIThreeStateCheckboxInput:c("SUIThreeStateCheckboxInputUniform.business"),SUICloseButton:{dark:{large:l,small:l},light:{large:m,small:m},iconSize:{large:24,small:14}},SUICalendarPager:{dayColor:j.blue,daySelectedColor:j.white,dayDisabledColor:j.disabledText,dayNameColor:j.defaultText,gridBorderColor:j.gray15,pagerBackgroundColor:j.white,pagerBorderColor:j.white,rangeBackgroundColor:j.blueTint10,selectedBackgroundColor:j.blue,typeStyle:k.defaultNormal12},SUIDateInput:{inputIcon:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.gray15,name:"calendarMonth",size:24}),layerBackgroundColor:j.white,layerBorderColor:j.grayBorder},SUIDateTimeRangePicker:{backgroundColor:j.white,borderColor:j.grayBorder,typeStyle:k.defaultNormal},SUITooltip:{backgroundColor:j.black,color:j.white,typeStyle:babelHelpers["extends"]({},k.defaultNormal,{WebkitFontSmoothing:"auto"})},SUIHelpMessage:{icon:c("React").createElement(c("SUIAtlasIcon.react"),{name:"information",style:{color:j.black}})},SUIError:{error:{borderColor:j.error,icon:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.error,name:"warning",size:24})},warning:{borderColor:j.warning,icon:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.warning,name:"warning",size:24})}},SUIInlineTypeahead:{dividerBorderColor:j.gray15,searchIcon:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.gray15,name:"search"})},SUILoadingBar:{backgroundColor:j.blue,movingColor:j.blueTint50},SUIModalCard:babelHelpers["extends"]({},c("SUIModalCardUniform.business"),{boxShadow:"0px 1px 0px 0px rgba(0, 0, 0, 0.10)",backgroundColor:j.white,typeStyles:{content:k.defaultLightSmall,footer:k.defaultNormal,header:k.defaultLightBig}}),SUIModalBackgroundDEPRECATED:c("SUIBusinessThemeComponents").SUIModalBackgroundDEPRECATED,SUISelector:{backgroundColor:j.white,borderColor:j.grayBorder,boxShadow:"none"},SUISelectorButton:c("SUIBusinessThemeComponents").SUISelectorButton,SUISelectorOption:c("SUIBusinessThemeComponents").SUISelectorOption,SUISelectorSeparator:{color:j.grayBorder,margin:{bottom:"12px",left:"12px",right:"12px",top:"12px"}},SUISearchableSelector:{disabledSubtitleTypeStyle:k.typeDisabledTitle,disabledTitleTypeStyle:k.typeDisabledTitle,dropdownBackgroundColor:j.white,dropdownBorderColor:j.grayBorder,headerBackgroundColor:j.white,headerTypeStyle:k.defaultSemiBold,subtitleColor:j.gray15,subtitleTypeStyle:k.defaultNormal,titleTypeStyle:k.defaultSemiBold},SUIHighlightedText:{backgroundColor:j.white},SUISearchInput:{cancelIcon:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.gray,colorHover:j.gray15,name:"delete"}),searchIcon:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.gray15,colorFocused:j.gray,name:"search",size:24})},SUISplitButton:{chevronPadding:"4px",use:{confirm:{chevron:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.white,colorDisabled:j.white,name:"chevronDown",style:{padding:"0 5px"}}),dividerColor:j.white},"default":{chevron:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.defaultText,colorDisabled:j.disabledText,name:"chevronDown",style:{padding:"0 5px"}}),dividerColor:j.grayBorder},special:{chevron:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.white,colorDisabled:j.white,name:"chevronDown",style:{padding:"0 5px"}}),dividerColor:j.white},flat:{chevron:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.defaultText,colorDisabled:j.disabledText,name:"chevronDown",style:{padding:"0 5px"}}),dividerColor:j.grayBorder},flatWhite:{chevron:c("React").createElement(c("SUIAtlasIcon.react"),{colorDefault:j.white,colorDisabled:j.white,name:"chevronDown",style:{padding:"0 5px"}}),dividerColor:j.white}}},SUILink:{normalColor:j.activeText,hoverColor:j.blueDark},SUITable:{cellPadding:12,colors:{cell:j.neutral72,cellBorder:"#DADDE1",cellErrorBackground:j.redTint85,cellHoverBackground:"#EBEDF0",cellModifiedBackground:j.neutral15,cellSelectedBackground:j.blueTint85,cellSelectedHoverBackground:"#EBEDF0",cellWarningBackground:j.yellowTint85,error:j.red,heading:j.blueGray50,headingBackground:"#F5F7F8",headingRule:"#e5e5e5",headingSortable:j.blueGray50,headingSortableSelected:"#066CD2",highlight:j.blue,loading:j.neutral30,loadingBackground:j.neutral03,noItemsMessage:j.neutral72,rowBackground:"#F5F6F7",rowStripe:j.white,text:j.neutral72,warning:j.yellow},textStyles:{cell:k.defaultNormal12,heading:k.defaultNormal12,table:k.defaultNormal12}},SUITextArea:{disabled:{background:j.grayWash,borderColor:j.grayBorder},enabled:{background:j.white,borderColor:j.grayBorder},focusedBorderColor:"#4080ff",placeholderColor:j.gray15,placeholderColorFocused:j.gray,typeStyle:k.defaultNormal},SUITextInput:{characterCountTypeStyle:new(c("SUITypeStyle"))({color:j.gray15,fontFamily:i,fontSize:"11px",fontWeight:"normal"}),disabled:{background:j.grayWash,borderColor:j.grayBorder},enabled:{background:j.white,borderColor:j.grayBorder},errorIconMargin:"3px",focusedBorderColor:"#4080ff",height:32,maxLengthHighlightColor:"rgba(250, 62, 62, 0.3)",placeholderColor:j.gray15,placeholderColorFocused:j.gray,typeStyle:k.defaultNormal},SUIText:{header1:{fontFamily:i,fontSize:24,lineHeight:32},header2:{fontFamily:i,fontSize:20,lineHeight:24},header3:{fontFamily:i,fontSize:16,lineHeight:24},header4:{fontFamily:i,fontSize:14,lineHeight:20},body1:{fontFamily:i,fontSize:14,lineHeight:18},body1_DEPRECATED:{fontFamily:i,fontSize:16,lineHeight:18},body2:{fontFamily:i,fontSize:13,lineHeight:17},body2_DEPRECATED:{fontFamily:i,fontSize:14,lineHeight:16},body3:{fontFamily:i,fontSize:12,lineHeight:16},body3_DEPRECATED:{fontFamily:i,fontSize:13,lineHeight:15},meta1:{fontFamily:i,fontSize:10,lineHeight:12},display:{fontFamily:i,fontSize:40,lineHeight:48},heading:{fontFamily:i,fontSize:24,lineHeight:32},subheading:{fontFamily:i,fontSize:20,lineHeight:24},headline:{fontFamily:i,fontSize:16,lineHeight:24},regular:{fontFamily:i,fontSize:14,lineHeight:20},regularUI:{fontFamily:i,fontSize:14,lineHeight:16},xsmall:{fontFamily:i,fontSize:8,lineHeight:10},shade:{dark:"#1d2129",light:"#90949c",link:"#365899",medium:"#4b4f56",white:j.white},small:{fontFamily:i,fontSize:10,lineHeight:12},medium:{fontFamily:i,fontSize:12,lineHeight:14},large:{fontFamily:i,fontSize:14,lineHeight:16},color:{disabled:"#929598",disabledDark:"#4c4c4c",interactive:"#066CD2",negative:"#CE002F",positive:"#057F28",primary:"#1C1D1D",primaryDark:"#cccccc",secondary:"#5B5C5E",secondaryDark:"#7f7f7f",white:"#FFFFFF"},xlarge:{fontFamily:i,fontSize:16,lineHeight:18},xxlarge:{fontFamily:i,fontSize:18,lineHeight:20}},SUIToggle:{height:24,off:{hover:{backgroundColor:j.gray,color:j.white},normal:{backgroundColor:j.gray,color:j.white}},on:{hover:{backgroundColor:j.blue,color:j.white},normal:{backgroundColor:j.blue,color:j.white}},switchColor:j.white,typeStyle:k.defaultSemiBold},SUIToggleButtonGroup:{normal:{backgroundColor:j.grayWash,borderColor:j.grayBorder,color:j.defaultText},selected:{backgroundColor:j.activeWash,borderColor:j.grayBorder,color:j.activeText}},SUIToken:{backgroundColor:j.blueToken,color:j.white,typeStyle:k.defaultSemiBold},SUITokenizer:{disabled:{backgroundColor:j.white,borderColor:j.grayBorder},enabled:{backgroundColor:j.white,borderColor:j.grayBorder},typeaheadInput:{typeStyle:k.defaultNormal}},SUITokenizerItem:c("SUIBusinessThemeComponents").SUITokenizerItem,SUITokenizerItemList:c("SUIBusinessThemeComponents").SUITokenizerItemList,SUITypeahead:{input:{backgroundColor:"#ffffff",borderColor:"#ced0d4",errorBorderColor:"#fa3e3e",typeStyle:k.defaultNormal,height:32},dropdown:{backgroundColor:"#ffffff",borderColor:"#e9ebee",boxShadow:"0px 1px 0px 0px rgba(0, 0, 0, 0.10)",itemPadding:{bottom:"8px",left:"12px",right:"12px",top:"8px"}},highlight:{backgroundColor:"#e9ebee"}},SUIHorizontalLayout:{margin:8},SUICustomPopover_DEPRECATED:{backgroundColor:j.white,borderColor:"#4f5664",borderHighlightColor:"#4f5664",color:j.white}},o=new(c("SUITheme"))({id:"analytics_griffin",components:n});f.exports=o}),null);
__d("XLtgLanguageDialectTypeaheadController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/translation/dialects/",{value:{type:"String",defaultValue:""},q:{type:"String",defaultValue:""},dialect_set:{type:"Enum",defaultValue:"language_detection",enumType:1},render:{type:"Enum",defaultValue:"default",enumType:1}})}),null);
__d("LanguageDialectAsyncSearchSource",["WebAsyncSearchSource","XLtgLanguageDialectTypeaheadController"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("WebAsyncSearchSource"));i=h&&h.prototype;function j(k,l,m){i.constructor.call(this,{asyncErrorHandler:m,bootstrapRequests:[{uri:c("XLtgLanguageDialectTypeaheadController").getURIBuilder().setEnum("dialect_set",k).setEnum("render",l).getURI()}]})}j.prototype.searchImpl=function(k,l,m){if(!k)l(Object.values(this.getAllEntriesMap()),k);else i.searchImpl.call(this,k,l,m)};f.exports=j}),null);
__d("LanguageDialectRenderStyle",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({DEFAULT:"default",INTERNAL:"internal",ULM_CATEGORIES:"ulm_categories"})}),null);
__d("LanguageDialectCategory",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({VIEWER_UNDERSTOOD:"viewer_understood",OTHER:"other"})}),null);
__d("LanguageDialectViewRenderer.react",["cx","fbt","LanguageDialectCategory","LanguageDialectRenderStyle","React","XUIGrayText.react","XUITypeaheadViewItem.react","groupArray"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;l.prototype.$LanguageDialectViewRenderer1=function(m){"use strict";return c("React").createElement(c("XUITypeaheadViewItem.react"),{key:m.getUniqueID(),entry:m,highlighted:m===this.props.highlightedEntry,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight})};l.prototype.$LanguageDialectViewRenderer2=function(m,n){"use strict";__p&&__p();var o=null;switch(m){case c("LanguageDialectCategory").VIEWER_UNDERSTOOD:o=i._("Idiomas usados frecuentemente");break;case c("LanguageDialectCategory").OTHER:o=i._("Otros idiomas");break;default:break}var p=n.map(function(q){return this.$LanguageDialectViewRenderer1(q)}.bind(this));if(o)p.unshift(c("React").createElement(c("XUIGrayText.react"),{key:m,className:"_2pir _2pi2",shade:"light",display:"block"},o));return p};l.prototype.$LanguageDialectViewRenderer3=function(){__p&&__p();var m;"use strict";var n=c("groupArray")(this.props.entries,function(p){return p.getType()}),o=Object.keys(n);if(o.length===1)return this.$LanguageDialectViewRenderer2("",this.props.entries);if(Object.prototype.hasOwnProperty.call(n,c("LanguageDialectCategory").VIEWER_UNDERSTOOD)){o.splice(o.indexOf(c("LanguageDialectCategory").VIEWER_UNDERSTOOD),1);o.unshift(c("LanguageDialectCategory").VIEWER_UNDERSTOOD)}return(m=[]).concat.apply(m,o.map(function(p){return this.$LanguageDialectViewRenderer2(p,n[p])}.bind(this)))};l.prototype.render=function(){"use strict";var m=this.props.renderStyle===c("LanguageDialectRenderStyle").ULM_CATEGORIES?this.$LanguageDialectViewRenderer3():this.$LanguageDialectViewRenderer2("",this.props.entries);return c("React").createElement("ul",{className:"_5p0r",role:this.props.role},m)};function l(){"use strict";j.apply(this,arguments)}f.exports=l}),null);
__d("LanguageDialectInlineTypeahead.react",["cx","AbstractTypeahead.react","React","LanguageDialectAsyncSearchSource","LanguageDialectRenderStyle","LanguageDialectViewRenderer.react"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(k,c("React").Component);j=i&&i.prototype;function k(l){"use strict";__p&&__p();j.constructor.call(this,l);this.$LanguageDialectInlineTypeahead1=function(m){this.props.onSelect&&this.props.onSelect(m);this.$LanguageDialectInlineTypeahead3()}.bind(this);this.$LanguageDialectInlineTypeahead2=function(event){var m=event.target.value;this.props.onChange&&this.props.onChange(m);this.setState({query:event.target.value})}.bind(this);this.$LanguageDialectInlineTypeahead3=function(){this.setState({query:""})}.bind(this);this.searchSource=new(c("LanguageDialectAsyncSearchSource"))(this.props.dialectType,this.props.renderStyle);this.state={query:""}}k.prototype.componentWillReceiveProps=function(l){"use strict";if(l.dialectType!==this.props.dialectType||l.renderStyle!==this.props.renderStyle)this.searchSource=new(c("LanguageDialectAsyncSearchSource"))(l.dialectType,l.renderStyle)};k.prototype.render=function(){"use strict";var l={};this.props.excludedDialects.forEach(function(m){return l[m]=true});return c("React").createElement(c("AbstractTypeahead.react"),{autoHighlight:true,inputClassName:this.props.className||"_5p0s",hideViewWithEntries:false,showEntriesOnFocus:true,onSelectAttempt:this.$LanguageDialectInlineTypeahead1,onChange:this.$LanguageDialectInlineTypeahead2,onClear:this.$LanguageDialectInlineTypeahead3,searchSource:this.searchSource,placeholder:this.props.placeholder,excludedEntries:l,queryString:this.state.query,presenter:{ViewRenderer:c("LanguageDialectViewRenderer.react"),maxEntries:200,useLayer:false,extraRendererProps:{renderStyle:this.props.renderStyle}}})};k.defaultProps={excludedDialects:[],renderStyle:c("LanguageDialectRenderStyle").DEFAULT};f.exports=k}),null);
__d("SUIButtonIcon.react",["React","SUIComponent","SUITheme"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes,k={use:"default"};h=babelHelpers.inherits(l,c("SUIComponent"));i=h&&h.prototype;l.prototype.render=function(){__p&&__p();var m=c("SUITheme").get(this).SUIButtonIcon,n=m.iconComponent,o=this.props,p=o.disabled,q=o.size,r=q===undefined?m.defaultSize:q,s=o.use,t=babelHelpers.objectWithoutProperties(o,["disabled","size","use"]),u=void 0;if(p)u=m.colorDisabled;else switch(s){case"confirm":u=m.colorConfirm;break;case"special":u=m.colorSpecial;break;default:u=m.colorDefault}return c("React").createElement(n,babelHelpers["extends"]({},t,{colorDefault:u,size:r}))};function l(){h.apply(this,arguments)}l.propTypes={className:j.string,disabled:j.bool,name:j.string,size:j.number,style:j.object,theme:j.instanceOf(c("SUITheme")),use:j.oneOf(["confirm","default","special"]).isRequired};l.defaultProps=k;f.exports=l}),null);
__d("CommercialBreakMobileEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SUBSCRIPTION_SUCCESS:"commercial_break_skywalker_subscription_success",SUBSCRIPTION_FAILURE:"commercial_break_skywalker_subscription_failure",RECEIVE_INTENT_MSG:"commercial_break_skywalker_receive_intent",RECEIVE_START_MSG:"commercial_break_skywalker_receive_start",RECEIVE_INVALID_MSG:"commercial_break_skywalker_receive_invalid_message",VIDEO_FETCH_SUCCESS:"commercial_break_video_fetch_success",VIDEO_FETCH_FAILURE:"commercial_break_video_fetch_failure",COMMERCIAL_BREAK_INLINE_TO_FULLSCREEN:"commercial_break_inline_to_fullscreen",COMMERCIAL_BREAK_FULLSCREEN_TO_INLINE:"commercial_break_fullscreen_to_inline",COMMERCIAL_BREAK_SCROLLED_AWAY:"commercial_break_scrolled_away",COMMERCIAL_BREAK_SCROLLED_INTO:"commercial_break_scrolled_into",COMMERCIAL_BREAK_START_NFX:"commercial_break_start_nfx",COMMERCIAL_BREAK_HIDE_AD:"commercial_break_hide_ad",COMMERCIAL_BREAK_HIDE_AD_BREAKS:"commercial_break_hide_ad_breaks",COMMERCIAL_BREAK_START:"commercial_break_start",COMMERCIAL_BREAK_START_AD:"commercial_break_start_ad",COMMERCIAL_BREAK_TRANSIT:"commercial_break_transit",COMMERCIAL_BREAK_WAIT_FOR:"commercial_break_wait_for",COMMERCIAL_BREAK_STATIC_COUNTDOWN:"commercial_break_static_countdown",COMMERCIAL_BREAK_END:"commercial_break_end",COMMERCIAL_BREAK_PAUSE_AD:"commercial_break_pause_ad",COMMERCIAL_BREAK_PLAY_AD:"commercial_break_play_ad",COMMERCIAL_BREAK_NO_AD_TRANSITION:"commercial_break_no_ad_transition",COMMERCIAL_BREAK_ELIGIBLE_VOD_START:"commercial_break_eligible_vod_start",COMMERCIAL_BREAK_START_SHOW_NOTHING:"commercial_break_start_show_nothing",COMMERCIAL_BREAK_STARTING_INDICATOR:"commercial_break_starting_indicator",COMMERCIAL_BREAK_START_TIME_DELTA:"commercial_break_start_time_delta",COMMERCIAL_BREAK_IMPRESSION_ATTEMPT:"commercial_break_impression_attempt",COMMERCIAL_BREAK_SKYWALKER_RECEIVED_DUPLICATE_EVENT:"commercial_break_skywalker_received_duplicate_event",COMMERCIAL_BREAK_ADS_LOADED:"commercial_break_ads_loaded",COMMERCIAL_BREAK_FIRE_EVENT_IN_TRACKER:"commercial_break_fire_event_in_tracker",COMMERCIAL_BREAK_LOG_IMPRESSION_IN_TRACKER:"commercial_break_log_impression_in_tracker",COMMERCIAL_BREAK_REGISTER_VIDEO:"commercial_break_register_video",COMMERCIAL_BREAK_RESUME_HOST_VIDEO:"commercial_break_resume_host_video",COMMERCIAL_BREAK_CLICK_ON_STARTING_INDICATOR:"commercial_break_click_on_starting_indicator",COMMERCIAL_BREAK_PLUGIN_IS_ON_DIFFERENT_HOSTVIDEO:"commercial_break_plugin_is_on_different_hostvideo",COMMERCIAL_BREAK_LOG_AD_IMPRESSION:"commercial_break_log_ad_impression",COMMERCIAL_BREAK_CLICK:"commercial_break_click",COMMERCIAL_BREAK_SCRUB_THROUGH:"commercial_break_scrub_through",COMMERCIAL_BREAK_SCRUBBER_LEAVE_BEFORE_AD_BREAK:"commercial_break_scrubber_leave_before_ad_break",COMMERCIAL_BREAK_SCRUBBER_LEAVE_DURING_AD_BREAK:"commercial_break_scrubber_leave_during_ad_break",COMMERCIAL_BREAK_CONTEXT_CARD_INFO_BUTTON_CLICK:"commercial_break_context_card_info_button_click",COMMERCIAL_BREAK_TAP_ON_TRAILER:"commercial_break_tap_on_trailer",COMMERCIAL_BREAK_PRE_ROLL_FETCH_SUCCESS_LATE:"commercial_break_pre_roll_fetch_success_late"})}),null);
__d("CommercialBreakNoAdReason",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({NO_VIDEO_AD:"no_video_ad",TIME_SPENT_INSUFFICIENT:"time_spent_insufficient",PLAYBACK_ERROR:"playback_error",HIDE_AD:"hide_ad",WAIT_FOR_FAILED:"wait_for_failed",SPONSORED_STORY:"sponsored_story",CONTROL_GROUP:"control_group",DUPLICATE_VIDEO:"duplicate_video",INACTIVE_TAB:"inactive_tab",IS_COMMENTING:"is_commenting",SCRUBBER_FETCH_INCOMPLETE:"scrubber_fetch_incomplete"})}),null);
__d("InstreamVideoAdType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({LIVE:"live",VOD:"vod",NONLIVE:"nonlive",LIVE_POST_ROLL:"live_post_roll",VOD_POST_ROLL:"vod_post_roll",NONLIVE_POST_ROLL:"nonlive_post_roll",LIVE_AD_PODS:"live_ad_pods",NONLIVE_PRE_ROLL:"nonlive_pre_roll"})}),null);
__d("CommercialBreakExposureLogger",["CommercialBreakMobileEvent","CommercialBreakNoAdReason","DateConsts","InstreamVideoAdType","MarauderLogger","QE","SubscriptionsHandler"],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j,k,l,m,n){"use strict";__p&&__p();this.$CommercialBreakExposureLogger1=i;this.$CommercialBreakExposureLogger2=j;this.$CommercialBreakExposureLogger3=k;this.$CommercialBreakExposureLogger4=l;this.$CommercialBreakExposureLogger5=m;this.$CommercialBreakExposureLogger6=n;this.$CommercialBreakExposureLogger7=new(c("SubscriptionsHandler"))();if(k&&l)this.$CommercialBreakExposureLogger7.addSubscriptions(this.$CommercialBreakExposureLogger1.addListener("updateStatus",this.$CommercialBreakExposureLogger8.bind(this)))}h.prototype.$CommercialBreakExposureLogger8=function(){"use strict";__p&&__p();var i=this.$CommercialBreakExposureLogger1.getCurrentTimePosition()*c("DateConsts").MS_PER_SEC;for(var j=0;j<this.$CommercialBreakExposureLogger3.length;j++){var k=this.$CommercialBreakExposureLogger3[j].getTimeOffsetInMs()||0;if(i<=k&&i+this.$CommercialBreakExposureLogger6>k){this.$CommercialBreakExposureLogger7.release();c("QE").logExposure(this.$CommercialBreakExposureLogger4);if(!this.$CommercialBreakExposureLogger5){var l={ad_break_index:this.$CommercialBreakExposureLogger3[j].getIndex(),commercial_break_no_ad_reason:c("CommercialBreakNoAdReason").CONTROL_GROUP,host_video_id:this.$CommercialBreakExposureLogger1.getVideoID(),instream_video_ad_type:this.$CommercialBreakExposureLogger2?c("InstreamVideoAdType").VOD:c("InstreamVideoAdType").NONLIVE};c("MarauderLogger").log(c("CommercialBreakMobileEvent").COMMERCIAL_BREAK_START_SHOW_NOTHING,"commercial_break",l)}return}}};f.exports=h}),null);
__d("CommercialBreakHostStoryComponentType",[],(function a(b,c,d,e,f,g){var h=Object.freeze({POP_OVER_MENU:"POP_OVER_MENU",HOST_STORY_HEADER:"HOST_STORY_HEADER"});f.exports=h}),null);
__d("StoryComponentVideoPlayerControllerRegistry",["CommercialBreakExperiments","CommercialBreakHostStoryComponentType","EventEmitter","Map"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=new(c("EventEmitter"))(),i=new(c("Map"))(),j=new(c("Map"))(),k=new(c("Map"))();function l(p){var q=p,r=[];while(q){r.unshift(q);q=q.parentElement}return r}function m(p,q){__p&&__p();if(p===null)return null;var r=l(p),s=null,t=null;q.forEach(function(u){var v=u[0],w=u[1],x=l(v);for(var y=0;y<r.length;++y)if(r[y]!==x[y]){if(t===null||y>t){t=y;s=w}break}});return s}var n={registerVideoPlayerController:function p(q,r){__p&&__p();var s=q.getVideoID(),t=i.get(s);if(t)t.push(q);else{t=[q];i.set(s,t)}var u=null;if(r===c("CommercialBreakHostStoryComponentType").POP_OVER_MENU)u=this.findPopoverAsyncMenuForVideoPlayerController(q);else if(r===c("CommercialBreakHostStoryComponentType").HOST_STORY_HEADER)u=this.findHostStoryControllerForVideoPlayerController(q);if(!u)return;h.emit(u.getInstanceID()+"/register",q)},registerHostStoryController:function p(q,r,s){var t=k.get(r);if(t)t.push(q);else{t=[q];k.set(r,t)}this._informStoryComponentRegister(q.getContainerElement(),q.getInstanceID(),r,s)},registerPopoverAsyncMenu:function p(q,r){__p&&__p();var s=r.host_video_id;if(!s)return;var t=new o(q,r),u=t.getInstanceID(),v=j.get(s);if(!v){v=[];j.set(s,v)}v.push(t);this._informStoryComponentRegister(t.getTriggerElem(),u,s,t.registerVideoPlayerController.bind(t))},_informStoryComponentRegister:function p(q,r,s,t){h.addListener(r+"/register",t);var u=this.findVideoPlayerControllerForElement(q,s);if(!u)return;h.emit(r+"/register",u)},findVideoPlayerControllerForElement:function p(q,r){var s=i.get(r);if(!s)return null;return m(q,s.filter(function(t){return!t.isState("destroyed")&&!t.isState("fallback")}).map(function(t){return[t.getRootNode(),t]}))},findPopoverAsyncMenuForVideoPlayerController:function p(q){var r=j.get(q.getVideoID());if(!r)return null;return m(q.getRootNode(),r.map(function(s){return[s.getTriggerElem(),s]}))},findHostStoryControllerForVideoPlayerController:function p(q){var r=k.get(q.getVideoID());if(!r)return null;return m(q.getRootNode(),r.map(function(s){return[s.getContainerElement(),s]}))}};function o(p,q){this._menu=p;this._originalEndpoint=this._menu._endpoint;this._additionalData=q}o.prototype.registerVideoPlayerController=function(p){p.addListener("commercialBreak/updateOptionMenuURI",function(q){this._updateEndpoint(q)}.bind(this));p.addListener("commercialBreak/recoverOptionMenuURI",function(){return this._updateEndpoint(this._originalEndpoint)}.bind(this))};o.prototype._updateEndpoint=function(p){var q=this._menu;q.setMenu(q._loadingMenu);q._setFocus(q._loadingMenu);q._endpoint=p;if(q._fetched){q._fetched=false;q.fetchMenu()}};o.prototype.getInstanceID=function(){return this._menu._instanceId.toString()};o.prototype.getTriggerElem=function(){return this._menu.getTriggerElem()};o.prototype.getOptionsButtonID=function(){return this._additionalData.options_button_id||""};f.exports=n}),null);
__d("CommercialBreakState",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({INIT:"INIT",PREPARE:"PREPARE",AD_REQUEST_SENT:"AD_REQUEST_SENT",CB_SCHEDULED:"CB_SCHEDULED",ENTERING_TRANSITION:"ENTERING_TRANSITION",PLAY_AD:"PLAY_AD",LEAVING_TRANSITION:"LEAVING_TRANSITION"})}),null);
__d("LanguageDialectSetTypes",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({LANGUAGE_DETECTION:"language_detection",MT_SOURCE:"source",MT_TARGET:"target",MLC:"mlc",MT_SOURCE_DARK_TRAFFIC:"source_dark",MT_TARGET_DARK_TRAFFIC:"target_dark"})}),null);
__d("SphericalPhotoProjectionUtils",["degToRad","gl-matrix","radToDeg"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("gl-matrix").glMatrix,i=c("gl-matrix").mat4,j=c("gl-matrix").vec3,k={getMaxMinVfov:function l(m,n){var o=c("degToRad")(m.partialRightDegrees||180),p=c("degToRad")(m.partialLeftDegrees||180),q=c("degToRad")(m.partialTopDegrees||90),r=c("degToRad")(m.partialBottomDegrees||90),s=(o+p)/2,t=(q+r)/2,u=2*Math.atan(s/n),v=this.getMinFullVfov(t,t);return{maxVfov:c("radToDeg")(Math.max(u,v)),minVfov:c("radToDeg")(Math.min(v,u/2))}},getMaxVfov:function l(m,n){return this.getMaxMinVfov(m,n).maxVfov},getMinFullVfov:function l(m,n){var o=(m+n)/2;return 2*Math.atan(o)},getMinFullHfov:function l(m,n){var o=(m+n)/2;return 2*Math.atan(o)},getZoomProgressFromFov:function l(m,n,o){return Math.max(0,Math.min(1,(m-o)/(n-o)))},getZoomProgress:function l(m,n,o){var p=this.getMaxMinVfov(n,o),q=p.maxVfov,r=p.minVfov;return this.getZoomProgressFromFov(m,q,r)},getHfov:function l(m,n){var o=2*Math.atan(Math.tan(m/2)*n);return o},normalizeLimits:function l(m){__p&&__p();var n=m.partialLeftDegrees||0,o=m.partialRightDegrees||0,p=m.partialTopDegrees||0,q=m.partialBottomDegrees||0;if(n<0&&o<0){var r=Math.max(n,o);n-=r;o-=r}if(p<0&&q<0){var s=Math.max(p,q);p-=s;q-=s}return{partialLeftDegrees:n,partialRightDegrees:o,partialTopDegrees:p,partialBottomDegrees:q}},getPartialLimits:function l(m,n,o){var p=this.getMaxMinVfov(o,n),q=p.maxVfov,r=p.minVfov,s=c("degToRad")(m),t=this.getHfov(s,n),u=this.getZoomProgressFromFov(m,q,r),v=Math.tan(t/2),w=Math.tan(s/2),x=Math.sin(v)*u+v*(1-u),y=Math.cos(v)*u+1*(1-u),z=Math.sin(w)*u+w*(1-u),A=Math.cos(w)*u+1*(1-u),B=function B(G,H,I){var J=Math.sin(G),K=Math.cos(G);return m>q?0:c("radToDeg")(Math.atan2(J*I-K*H,J*H+K*I))},C=c("degToRad")(o.partialLeftDegrees||180),D=c("degToRad")(o.partialRightDegrees||180),E=c("degToRad")(o.partialTopDegrees||90),F=c("degToRad")(o.partialBottomDegrees||90);return this.normalizeLimits({partialLeftDegrees:B(C,x,y),partialRightDegrees:B(D,x,y),partialTopDegrees:B(E,z,A),partialBottomDegrees:B(F,z,A)})},projectVertex:function l(m,n,o,p){var q=m[0],r=m[1],s=o?Math.sin(q):Math.sin(q)*Math.cos(r),t=o?r:Math.sin(r),u=o?Math.cos(q):Math.cos(q)*Math.cos(r);s=p*s+(1-p)*q;t=p*t+(1-p)*r;u=p*u+(1-p)*1;var v=j.fromValues(s,t,u);j.transformMat4(v,v,n);return v},getSphericalFromVertex:function l(m){var n=m[0],o=m[1],p=m[2],q=Math.atan2(n,p),r=Math.atan2(o,Math.sqrt(n*n+p*p));return{yaw:q,pitch:r}},getRelativeHfov:function l(m,n,o){var p=this.getPartialLimits(m,n,o),q=o.partialLeftDegrees||180,r=o.partialRightDegrees||180,s=p.partialLeftDegrees||0,t=p.partialRightDegrees||0;return c("degToRad")(r-t+q-s)},getRelativeVfov:function l(m,n,o){var p=this.getPartialLimits(m,n,o),q=o.partialTopDegrees||90,r=o.partialBottomDegrees||90,s=p.partialTopDegrees||0,t=p.partialBottomDegrees||0;return c("degToRad")(q-s+r-t)},convert2dTo3d:function l(m,n,o,p,q,r){var s=p/q,t=p/2,u=q/2,v=(m-t)*(2/p),w=(n-u)*(2/q),x=c("degToRad")(o.fov),y=this.getHfov(x,s),z=this.getMinFullHfov(c("degToRad")(r.partialLeftDegrees||180),c("degToRad")(r.partialRightDegrees||180)),A=Math.tan(x/2),B=Math.tan(y/2),C=Math.tan(Math.min(y,z)/2),D=v*B,E=-w*A;if(D>C||D<-C)return null;var F=this.getZoomProgress(o.fov,r,s),G=i.create();i.rotateY(G,G,c("degToRad")(o.yaw));i.rotateX(G,G,-c("degToRad")(o.pitch));var H=this.projectVertex(j.fromValues(D,E,-1),G,false,F),I=this.getSphericalFromVertex(H),J=c("radToDeg")(I.yaw);return{yaw:J<0?360+J:J,pitch:c("radToDeg")(I.pitch)}},convert3dTo2d:function l(m,n,o,p,q,r){var s=c("degToRad")(m),t=c("degToRad")(n),u=c("degToRad")(o.fov),v=p/q,w=this.getHfov(u,v),x=this.getMinFullHfov(c("degToRad")(r.partialLeftDegrees||180),c("degToRad")(r.partialRightDegrees||180)),y=Math.tan(w/2),z=Math.tan(Math.min(w,x)/2),A=z/y,B=this.getMinFullVfov(c("degToRad")(r.partialTopDegrees||90),c("degToRad")(r.partialBottomDegrees||90)),C=Math.tan(u/2),D=Math.tan(Math.min(u,B)/2),E=D/C,F=this.getRelativeHfov(o.fov,v,r),G=this.getRelativeVfov(o.fov,v,r),H=i.create();i.rotateY(H,H,c("degToRad")(o.yaw));i.rotateX(H,H,-c("degToRad")(o.pitch));i.invert(H,H);var I=s+Math.PI,J=t+Math.PI/2,K=-Math.sin(J)*Math.sin(I),L=-Math.cos(J),M=-Math.sin(J)*Math.cos(I),N=j.fromValues(K,L,M);j.transformMat4(N,N,H);var O=Math.atan2(N[0],N[2]),P=Math.atan2(N[1],Math.sqrt(N[0]*N[0]+N[2]*N[2])),Q=.5+O*A/F,R=.5-P*E/G;return{x:Q*p,y:R*q}}};f.exports=k}),null);
__d("CompositeSearchSource",["Promise","AbstractSearchSource","Set"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("AbstractSearchSource"));i=h&&h.prototype;function j(k){i.constructor.call(this);this.$CompositeSearchSource1=k}j.prototype.bootstrapImpl=function(k){var l=this.$CompositeSearchSource1.map(function(m){return new(c("Promise"))(function(n){return m.bootstrap(n)})});c("Promise").all(l).done(k)};j.prototype.searchImpl=function(k,l,m){__p&&__p();var n=this.sourceInfo(k),o=n.map(function(r){return[]}),p=n.map(function(r){return undefined}),q=function q(){};n.forEach(function(r,s){var t=r.source,u=r.substituteQueryString,v=r.entryMapper,w=r.substituteOptions;t.search(u===undefined?k:u,function(x,k,y){o[s]=v?x.map(v):x;p[s]=y;q()},w||m)});q=function(){var r=this.$CompositeSearchSource2(o),s=this.$CompositeSearchSource3(p);if(m&&m.skipCallbackOnEmptyResults&&r.length==0&&s!="COMPLETE")return;l(r,k,s)}.bind(this);q()};j.prototype.sourceInfo=function(k){return this.$CompositeSearchSource1.map(function(l){return{source:l}})};j.prototype.$CompositeSearchSource2=function(k){var l=[],m=new(c("Set"))();k.forEach(function(n){n.forEach(function(o){var p=o.getUniqueID();if(!m.has(p)){m.add(p);l.push(o)}})});return l};j.prototype.$CompositeSearchSource3=function(k){__p&&__p();for(var l=k,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var o;if(m){if(n>=l.length)break;o=l[n++]}else{n=l.next();if(n.done)break;o=n.value}var p=o;if(p==="ACTIVE")return"ACTIVE";else if(p!=="COMPLETE")return undefined}return"COMPLETE"};f.exports=j}),null);