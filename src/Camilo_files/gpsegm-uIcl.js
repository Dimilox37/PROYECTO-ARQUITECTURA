if (self.CavalryLogger) { CavalryLogger.start_js(["TlsSb"]); }

__d("InstanceProxy",[],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this.$InstanceProxy1=i}h.prototype.getInstance=function(){"use strict";return this.$InstanceProxy1};h.prototype.setInstance=function(i){"use strict";this.$InstanceProxy1=i};f.exports=h}),null);
__d("TimezoneAutoset",["AsyncRequest","emptyFunction"],(function a(b,c,d,e,f,g){__p&&__p();var h=false;function i(l){var m=new Date(),n=m.getTimezoneOffset()/15,o=m.getTime()/1e3,p=Math.round((l-o)/900),q=Math.round(n+p)%96;if(q==0)return 0;else if(q>48)q-=Math.ceil(q/96)*96;else if(q<-56)q+=Math.ceil(q/-96)*96;return q*15}function j(l,m,n){__p&&__p();if(!l||undefined==m)return;if(h)return;h=true;var o=-i(l);if(n||o!=m){var p="/ajax/timezone/update.php";new(c("AsyncRequest"))().setURI(p).setData({gmt_off:o,is_forced:n}).setErrorHandler(c("emptyFunction")).setTransportErrorHandler(c("emptyFunction")).setOption("suppressErrorAlerts",true).send()}}var k={setInputValue:function l(m,n){m.value=i(n)},setTimezone:j};f.exports=k}),null);
__d("DesktopHscrollUnitEventConstants",[],(function a(b,c,d,e,f,g){f.exports={HSCROLL_ITEM_INSERTED_EVENT:"DesktopHScrollUnit/itemInserted",HSCROLL_ITEM_SHOWN_EVENT:"DesktopHScrollUnit/itemShown",HSCROLL_ITEM_HIDE_EVENT:"DesktopHScrollUnit/HideIndividualItem",HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT:"DesktopHScrollUnit/scrollItemBeforeXout",HSCROLL_ITEM_UNHIDE_EVENT:"DesktopHScrollUnit/unhideIndividualItem",HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN:"logLastAdXout",HSCROLL_PAGER_ITEM_HIDE_EVENT:"onXoutIndividualItem"}}),null);
__d("LoadingIndicator.react",["cx","ix","React","Image.react","keyMirror","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k,l=c("keyMirror")({white:true,blue:true,black:true}),m=c("keyMirror")({small:true,medium:true,large:true}),n={white:{large:i("85426"),medium:i("85427"),small:i("85428")},blue:{large:i("85429"),small:i("85430")},black:{large:i("85423")}};j=babelHelpers.inherits(o,c("React").Component);k=j&&j.prototype;o.prototype.render=function(){"use strict";var p=this.props.color,q=this.props.size;if(!n[p])return c("React").createElement("span",null);if(!n[p][q])return c("React").createElement("span",null);var r=this.props.showonasync?"uiLoadingIndicatorAsync":"",s=n[p][q];return c("React").createElement(c("Image.react"),babelHelpers["extends"]({},this.props,{src:s,className:c("joinClasses")(this.props.className,r)}))};function o(){"use strict";j.apply(this,arguments)}o.SIZES=m;o.COLORS=l;f.exports=o}),null);
__d("EntstreamFeedObject",["csx","CSS","Parent"],(function a(b,c,d,e,f,g,h){var i={getRoot:function j(k){return c("Parent").bySelector(k,"._5jmm")},getHscrollOuterRootIfAvailable:function j(k){var l=k;if(c("CSS").matchesSelector(l,"._170y"))l=i.getRoot(l.parentNode);return l}};f.exports=i}),null);
__d("HelpLiteFlyoutBootloader",["regeneratorRuntime","Deferred","JSResource"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=false,i=null,j=null,k={loadFlyout:function l(){return c("regeneratorRuntime").async(function m(n){while(1)switch(n.prev=n.next){case 0:k.loadFlyoutWithHelpType(null);case 1:case"end":return n.stop()}},null,this)},loadFlyoutWithHelpType:function l(m){__p&&__p();var n,o,p,q;return c("regeneratorRuntime").async(function r(s){__p&&__p();while(1)switch(s.prev=s.next){case 0:s.next=2;return c("regeneratorRuntime").awrap(c("JSResource")("HelpLiteFlyout").__setRef("HelpLiteFlyoutBootloader").load());case 2:n=s.sent;if(!h){s.next=6;break}n.refreshHelp();return s.abrupt("return");case 6:h=true;if(m)k.setHelpType(m);s.next=10;return c("regeneratorRuntime").awrap(this._getDeferredFlyoutElements().getPromise());case 10:o=s.sent;p=o.flyout;q=o.flyoutRoot;n.registerFlyoutToggler(p,q);n.loadBody();case 15:case"end":return s.stop()}},null,this)},setHelpType:function l(m){j=m},getHelpType:function l(){return j},_getDeferredFlyoutElements:function l(){if(i==null)i=new(c("Deferred"))();return i},registerFlyoutElements:function l(m,n){this._getDeferredFlyoutElements().resolve({flyout:m,flyoutRoot:n})}};f.exports=k}),null);
__d("legacy:onload-action",["PageHooks"],(function a(b,c,d,e,f,g){b._domreadyHook=c("PageHooks")._domreadyHook;b._onloadHook=c("PageHooks")._onloadHook;b.runHook=c("PageHooks").runHook;b.runHooks=c("PageHooks").runHooks;b.keep_window_set_as_loaded=c("PageHooks").keepWindowSetAsLoaded}),3);
__d("LitestandMessages",[],(function a(b,c,d,e,f,g){var h=Object.freeze({NEWSFEED_LOAD:"LitestandMessages/NewsFeedLoad",LEAVE_HOME:"LitestandMessages/LeaveHome",STORIES_REQUESTED:"LitestandMessages/StoriesRequested",STORIES_INSERTED:"LitestandMessages/StoriesInserted",NEWER_STORIES_REQUESTED:"LitestandMessages/NewerStoriesRequested",NEWER_STORIES_INSERTED:"LitestandMessages/NewerStoriesInserted",NEW_STORIES_CONTAINER_CREATED:"LitestandMessages/NewStoriesContainer",RHC_RELOADED:"LitestandMessages/RHCReloaded",STREAM_LOAD_ERROR:"LitestandMessages/StreamLoadError",DUPLICATE_CURSOR_ERROR:"LitestandMessages/DuplicateCursorError",STREAM_LOAD_RETRY:"LitestandMessages/StreamLoadRetry"});f.exports=h}),null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar"],(function a(b,c,d,e,f,g){Object.assign(c("AsyncRequest").prototype,{setNectarModuleData:function h(i){if(this.method=="POST")c("Nectar").addModuleData(this.data,i)}})}),null);
__d("coalesce",[],(function a(b,c,d,e,f,g){function h(){for(var i=0;i<arguments.length;++i)if(arguments[i]!=null)return arguments[i];return null}f.exports=h}),null);
__d("OnVisible",["Arbiter","DOM","Event","Parent","Run","Vector","ViewportBounds","coalesce","queryThenMutateDOM"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=[],i=void 0,j=0,k=[],l=void 0,m=void 0,n=void 0,o=void 0,p=void 0;function q(){__p&&__p();h.forEach(function(w){w.remove()});if(m){m.remove();l.remove();i.unsubscribe();m=l=i=null}j=0;h.length=0}function r(){__p&&__p();if(!h.length){q();return}k.length=0;n=c("Vector").getScrollPosition().y;o=c("Vector").getViewportDimensions().y;p=c("ViewportBounds").getTop();var w=h.length;for(var x=0;x<w;++x){var y=h[x];if(isNaN(y.elementHeight))k.push(x);y.elementHeight=c("Vector").getElementDimensions(y.element).y;y.elementPos=c("Vector").getElementPosition(y.element);y.hidden=c("Parent").byClass(y.element,"hidden_elem");if(y.scrollArea){y.scrollAreaHeight=c("Vector").getElementDimensions(y.scrollArea).y;y.scrollAreaY=c("Vector").getElementPosition(y.scrollArea).y}}j=w}function s(){__p&&__p();for(var w=Math.min(h.length,j)-1;w>=0;--w){var x=h[w];if(!x.elementPos||x.removed){h.splice(w,1);continue}if(x.hidden)continue;var y=x.buffer,z=false,A=n+o+y,B=x.elementPos.y;if(A>B){var C=n+p-y,D=B+x.elementHeight;z=!x.strict||C<B&&A>D;if(z&&x.scrollArea){var E=x.scrollAreaY+x.scrollAreaHeight+y;z=B>=x.scrollAreaY-y&&B<E}}if(x.inverse?!z:z){x.remove();x.handler(k.indexOf(w)!==-1)}}}function t(){u();if(h.length)return;m=c("Event").listen(window,"scroll",u);l=c("Event").listen(window,"resize",u);i=c("Arbiter").subscribe("dom-scroll",u)}function u(){c("queryThenMutateDOM")(r,s,"OnVisible/positionCheck")}function v(w,x,y,z,A,B){__p&&__p();this.element=w;this.handler=x;this.strict=y;this.buffer=c("coalesce")(z,300);this.inverse=c("coalesce")(A,false);this.scrollArea=B||null;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();if(h.length===0)c("Run").onLeave(q);t();h.push(this)}v.prototype.remove=function(){if(this.removed)return;this.removed=true;if(this.scrollAreaListener)this.scrollAreaListener.remove()};v.prototype.reset=function(){this.elementHeight=null;this.removed=false;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();h.indexOf(this)===-1&&h.push(this);t()};v.prototype.setBuffer=function(w){this.buffer=w;u()};v.prototype.checkBuffer=function(){u()};v.prototype.getElement=function(){return this.element};v.prototype.$OnVisible1=function(){return c("Event").listen(c("DOM").find(this.scrollArea,".uiScrollableAreaWrap"),"scroll",this.checkBuffer)};Object.assign(v,{checkBuffer:u});f.exports=v}),null);
__d("PopoverMenuContextMinWidth",["cx","CSS","Style","shield"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(j){"use strict";this._popoverMenu=j;this._popover=j.getPopover()}i.prototype.enable=function(){"use strict";this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",c("shield")(this._onSetMenu,this))};i.prototype.disable=function(){"use strict";__p&&__p();this._setMenuSubscription.unsubscribe();this._setMenuSubscription=null;if(this._showSubscription){this._showSubscription.unsubscribe();this._showSubscription=null}if(this._menuSubscription){this._menuSubscription.unsubscribe();this._menuSubscription=null}};i.prototype._onSetMenu=function(){"use strict";this._menu=this._popoverMenu.getMenu();this._showSubscription=this._popover.subscribe("show",c("shield")(this._updateWidth,this));var j=this._updateWidth.bind(this);this._menuSubscription=this._menu.subscribe(["change","resize"],function(){setTimeout(j,0)});this._updateWidth()};i.prototype._updateWidth=function(){"use strict";var j=this._menu.getRoot(),k=this._popoverMenu.getTriggerElem(),l=k.offsetWidth;c("Style").set(j,"min-width",l+"px");c("CSS").conditionClass(j,"_575s",l>=j.offsetWidth)};Object.assign(i.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i}),null);
__d("TidyArbiterMixin",["Arbiter","ArbiterMixin","Run"],(function a(b,c,d,e,f,g){var h={};Object.assign(h,c("ArbiterMixin"),{_getArbiterInstance:function i(){if(!this._arbiter){this._arbiter=new(c("Arbiter"))();c("Run").onLeave(function(){delete this._arbiter}.bind(this))}return this._arbiter}});f.exports=h}),null);
__d("cxodecode",["invariant"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=36,j=2;function k(l){if(!l)return"";var m=l.cxononce;m||h(0);var n=m.substr(0,m.length-j),o=parseInt(m.substr(-j),i),p="";for(var q=0;q<n.length;q+=j)p+=String.fromCharCode(parseInt(n.substr(q,j),i)^o);return p}f.exports=k}),null);
__d("FbFeedHighlight",["cx","CSS","DOM","DOMScroll","JSXDOM"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=1e3,j=1e3,k=null;function l(){return c("JSXDOM").div({className:"_1usz"},c("JSXDOM").div({className:"_1us-"}),c("JSXDOM").div({className:"_1us_"}),c("JSXDOM").div({className:"_1ut0"}),c("JSXDOM").div({className:"_1ut1"}))}var m={highlightAndScrollTo:function n(o){m.highlightAndScrollToWithTime(o,j,0)},highlightAndScrollToWithTime:function n(o,p,q){m.highlightWithTime(o,p);m.scrollTo(o,q,0)},highlightSingle:function n(o){m.highlightSingleWithTime(o,j)},highlightSingleWithTime:function n(o,p){__p&&__p();var q=l();c("DOM").appendContent(o,q);setTimeout(function(){if(k)c("DOM").remove(k);k=q;c("CSS").addClass(o,"_1ut2")},0);setTimeout(function(){c("CSS").removeClass(o,"_1ut2");setTimeout(function(){c("DOM").remove(q);if(q==k)k=null},i+p)},i+p)},highlight:function n(o){m.highlightWithTime(o,j)},highlightWithTime:function n(o,p){var q=m.highlightPermanent(o);setTimeout(function(){c("CSS").removeClass(o,"_1ut2");setTimeout(c("DOM").remove.bind(null,q),i+i)},i+p)},highlightPermanent:function n(o){var p=l();c("DOM").appendContent(o,p);setTimeout(function(){c("CSS").addClass(o,"_1ut2")},0);return p},scrollTo:function n(o,p,q){setTimeout(function(){c("DOMScroll").scrollTo(o,750,false,false,p)},q)}};f.exports=m}),null);
__d("StickyPlaceholderInput",["Event","CSS","DOM","Input","Parent","emptyFunction","getElementText"],(function a(b,c,d,e,f,g){__p&&__p();function h(l){return c("Parent").byClass(l,"uiStickyPlaceholderInput")}function i(l){return c("DOM").scry(l,".placeholder")[0]}function j(l){l=l||window.event;var m=l.target||l.srcElement;if(c("DOM").isNodeOfType(m,["input","textarea"])){var n=h(m);if(n)setTimeout(function(){c("CSS").conditionClass(n,"uiStickyPlaceholderEmptyInput",!m.value.length)},0)}}var k={init:function l(){k.init=c("emptyFunction");c("Event").listen(document.documentElement,{keydown:j,keyup:j,paste:j,focusout:j})},registerInput:function l(m){k.init();var n=m.getAttribute("placeholder")||"";if(n.length)if(document.activeElement===m)var o=c("Event").listen(m,"blur",function(){k.manipulateInput(m,n);o.remove()});else k.manipulateInput(m,n)},manipulateInput:function l(m,n){__p&&__p();var o=c("DOM").create("div",{className:"placeholder","aria-hidden":"true"},n),p=c("DOM").create("div",{className:"uiStickyPlaceholderInput"},o);if(c("DOM").isNodeOfType(m,"textarea"))c("CSS").addClass(p,"uiStickyPlaceholderTextarea");c("Event").listen(o,"click",function(){m.focus()});if(m.value===n)m.value="";m.setAttribute("placeholder","");c("DOM").replace(m,p);c("DOM").appendContent(p,m);c("CSS").conditionClass(p,"uiStickyPlaceholderEmptyInput",!m.value.length)},setPlaceholderText:function l(m,n){var o=h(m);if(!o)c("Input").setPlaceholder(m,n);else{var p=i(o);p&&c("DOM").setContent(p,n)}},getPlaceholderText:function l(m){var n=h(m),o=i(n);return o&&c("getElementText")(o)},update:function l(m){var n=h(m);if(n)c("CSS").conditionClass(n,"uiStickyPlaceholderEmptyInput",!m.value.length)},getVisibleText:function l(m){var n=h(m);if(c("CSS").hasClass(n,"uiStickyPlaceholderEmptyInput")){var o=i(n);return o&&c("getElementText")(o)}else return m.value}};f.exports=k}),null);
__d("ContextualLayerPositionClassOnContext",["cx","CSS"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(k){"use strict";this._layer=k}i.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe("reposition",this._updateClassName.bind(this));if(this._layer.isShown())this._updateClassName()};i.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;if(this._prevClassName){c("CSS").removeClass(this._layer.getContext(),this._prevClassName);this._prevClassName=null}};i.prototype._updateClassName=function(k,l){"use strict";var m=this._layer.getContext(),n=j(l);if(this._prevClassName){if(this._prevClassName===n)return;c("CSS").removeClass(m,this._prevClassName)}c("CSS").addClass(m,n);this._prevClassName=n};function j(k){__p&&__p();var l=k.getAlignment(),m=k.getPosition();if(m==="below")if(l==="left")return"_nk";else if(l==="right")return"_nl";else return"_nm";else if(m==="above")if(l==="left")return"_nn";else if(l==="right")return"_no";else return"_np";else if(m==="left")return"_nq";else return"_nr"}Object.assign(i.prototype,{_subscription:null,_prevClassName:null});f.exports=i}),null);
__d("BanzaiNectar",["Banzai"],(function a(b,c,d,e,f,g){function h(j){return{log:function k(l,m,n){var o={e:m,a:n};c("Banzai").post("nectar:"+l,o,j)}}}var i=h();i.create=h;f.exports=i}),null);
__d("isCanvasAppURI",["isFacebookURI"],(function a(b,c,d,e,f,g){"use strict";function h(i){return c("isFacebookURI")(i)&&i.getSubdomain()==="apps"}f.exports=h}),null);
__d("filterSet",["Set"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i,j){__p&&__p();var k=new(c("Set"))();for(var l=i,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var o;if(m){if(n>=l.length)break;o=l[n++]}else{n=l.next();if(n.done)break;o=n.value}var p=o;if(j(p))k.add(p)}return k}f.exports=h}),null);
__d("PageLikeConstants",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({LIKED:"liked",UNLIKED:"unliked",LIKED_SUCCESS:"liked_success",SPM_CALLOUT:"spm_callout",LAZY_CLICK:"lazy_click"})}),null);
__d("NonBlockingIFrame",["Promise","DOM","TimeSlice"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i,j;function k(){__p&&__p();var n=arguments.length<=0||arguments[0]===undefined?h:arguments[0],o=arguments.length<=1||arguments[1]===undefined?document.body:arguments[1],p,q={className:"nonBlockingIframe",width:0,height:0,frameborder:0,scrolling:"no","aria-hidden":"true"};if(n!==h)q.src=n;p=c("DOM").create("iframe",q);p.style.left="-1000px";p.style.position="absolute";c("DOM").appendContent(o,p);if(n===h){p.contentDocument.open();p.contentDocument.close()}return p}function l(){__p&&__p();return new(c("Promise"))(function(n){__p&&__p();if(!i)i=k();if(i.contentDocument.readyState==="complete")n(i);else{if(!j)j=new(c("Promise"))(function(n){i.contentWindow.onload=c("TimeSlice").guard(function(){n(i)},"NonBlockingIFrame window.onload")});n(j)}})}var m={loadImage:function n(o){__p&&__p();return l().then(function(p){return new(c("Promise"))(function(q,r){var s=p.contentWindow.Image,t=new s();t.onload=c("TimeSlice").guard(function(){q(t)},"NonBlockingIFrame image.onload");t.onerror=c("TimeSlice").guard(function(){r(t)},"NonBlockingIFrame image.onerror");t.onabort=c("TimeSlice").guard(function(){r(t)},"NonBlockingIFrame image.onabort");t.src=o})})},loadIFrame:function n(){var o=arguments.length<=0||arguments[0]===undefined?h:arguments[0];return l().then(function(p){var q=p.contentDocument.body;return k(o,q)})}};f.exports=m}),null);
__d("DamerauLevenshtein",[],(function a(b,c,d,e,f,g){__p&&__p();var h={DamerauLevenshteinDistance:function i(j,k){__p&&__p();if(j.length===0)return k.length;if(k.length===0)return j.length;if(j===k)return 0;var l,m,n=[];n[0]=[];n[1]=[];n[2]=[];for(m=0;m<=k.length;m++)n[0][m]=m;for(l=1;l<=j.length;l++)for(m=1;m<=k.length;m++){n[l%3][0]=l;var o=j.charAt(l-1)===k.charAt(m-1)?0:1;n[l%3][m]=Math.min(n[(l-1)%3][m]+1,n[l%3][m-1]+1,n[(l-1)%3][m-1]+o);if(l>1&&m>1&&j.charAt(l-1)==k.charAt(m-2)&&j.charAt(l-2)==k.charAt(m-1))n[l%3][m]=Math.min(n[l%3][m],n[(l-2)%3][m-2]+o)}return n[j.length%3][k.length]}};f.exports=h}),null);
__d("XPlatformXOutableElementController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/platform/async/xoutelement/",{type:{type:"Enum",required:true,enumType:0},fbid:{type:"Int",required:true}})}),null);