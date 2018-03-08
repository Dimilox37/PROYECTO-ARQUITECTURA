if (self.CavalryLogger) { CavalryLogger.start_js(["JqNua"]); }

__d("MessagesJewelThreadlistRowContainer.react",["ChatOpenTab","ChatOpenTabEventLogger","FantaTabActions","ImmutableObject","MercuryDelayedRoger","MercuryIDs","MercuryThreadlistRowContainer.react","MessagesJewelThreadListRow.react","MessengerDiscoveryEntryPoint","MessagingTag","MessengerMessageRequestsTypedLogger","ReactComponentWithPureRenderMixin","React","StoreAndPropBasedStateMixin","CurrentUser","TimeSlice"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("MercuryDelayedRoger").get(),i=c("React").PropTypes,j=c("React").createClass({displayName:"MessagesJewelThreadlistRowContainer",mixins:[c("ReactComponentWithPureRenderMixin"),c("StoreAndPropBasedStateMixin")(h)],propTypes:{folder:i.string,thread:i.instanceOf(c("ImmutableObject")).isRequired,viewer:i.string.isRequired,handleChatTabOpen:i.func},statics:{calculateState:function k(l){return{wasSeenByAll:h.wasSeenByAll(l.thread.thread_id)}}},render:function k(){return c("React").createElement(c("MercuryThreadlistRowContainer.react"),{ChildClass:c("MessagesJewelThreadListRow.react"),onClick:this._handleClick,showPresence:c("ChatOpenTab").canOpenTab(),thread:this.props.thread,viewer:this.props.viewer,wasSeenByAll:this.state.wasSeenByAll})},_handleClick:function k(l){__p&&__p();if(l.button===1||l.altKey||l.ctrlKey||l.metaKey||l.shiftKey)return;if(!c("ChatOpenTab").canOpenTab())return;if(this.props.handleChatTabOpen)c("TimeSlice").guard(this.props.handleChatTabOpen,"Jewelupdate after Chat tab open",{propagationType:c("TimeSlice").PropagationType.ORPHAN})();l.preventDefault();var m=this.props.thread.thread_id,n=c("CurrentUser").getID(),o=c("MercuryIDs").getThreadKeyfromThreadIDUserID(m,n);c("FantaTabActions").openTab(m,[c("MessengerDiscoveryEntryPoint").FB_PAGE_JEWEL_THREAD]);c("ChatOpenTabEventLogger").logClickOpen("jewel",m);var p=void 0;switch(this.props.folder){case"inbox":p="inbox";break;case"pending":p="pending";break;case"other":p="other";break}if(this.props.thread.folder!==c("MessagingTag").INBOX)new(c("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_thread_open").setThreadID(c("MercuryIDs").getUserIDFromThreadID(m)).setSurface(p).setFolderType(this.props.thread.folder).setThreadKey(o).log()}});f.exports=j}),null);
__d("MessagesJewelThreadList.react",["cx","fbt","BootloadedComponent.react","EventProfiler","ImmutableObject","JSResource","Link.react","MercuryConfig","MessagesJewelThreadlistRowContainer.react","MessagingTag","React","ScrollableArea.react","TimeSlice","XUISpinner.react","debounce","getViewportDimensions","requireWeak","requestIdleCallback","throttle"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=160,m=60,n=10,o=c("React").PropTypes;j=babelHelpers.inherits(p,c("React").Component);k=j&&j.prototype;function p(){__p&&__p();var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=k.constructor).call.apply(q,[this].concat(t)),this.$MessagesJewelThreadList3=function(){if(this.props.isLoaded)return;var v=this.refs.scrollable.getArea();if(v.getScrollTop()+v.getClientHeight()>=v.getScrollHeight()-1)this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest()}.bind(this),this.$MessagesJewelThreadList9=function(v){v.preventDefault();this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest()}.bind(this),this.$MessagesJewelThreadList8=function(v){if(this.props.onFilteredRequestsClick)this.props.onFilteredRequestsClick(v)}.bind(this),this.state={height:this.$MessagesJewelThreadList2()},r}p.prototype.componentDidMount=function(){this.$MessagesJewelThreadList1=Event.listen(window,"resize",c("debounce")(function(){this.setState({height:this.$MessagesJewelThreadList2()})}.bind(this)));c("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],true,"click");var q=function q(){c("requestIdleCallback")(function(){c("requireWeak")("FantaTabsEagerBootloader",function(r){return r.bootload()})})};c("TimeSlice").guard(q,"JewelOpen fanta eagerbootloader",{propagationType:c("TimeSlice").PropagationType.ORPHAN})()};p.prototype.componentDidUpdate=function(q){if(q.threads.length===0&&this.props.threads.length!==0)this.props.onRenderThreads&&this.props.onRenderThreads();c("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],true,"click")};p.prototype.componentWillUnmount=function(){this.$MessagesJewelThreadList1.remove()};p.prototype.render=function(){return c("React").createElement(c("ScrollableArea.react"),{className:"_2q3u",height:this.state.height,onScroll:c("throttle")(this.$MessagesJewelThreadList3,50),ref:"scrollable"},c("React").createElement("ul",{className:"jewelContent"},this.props.p2pJewelBannerContainer?c("React").createElement("li",null,this.props.p2pJewelBannerContainer):null,this.$MessagesJewelThreadList4(),this.$MessagesJewelThreadList5(),this.props.threads.map(function(q){return this.$MessagesJewelThreadList6(q)}.bind(this))),this.$MessagesJewelThreadList7())};p.prototype.$MessagesJewelThreadList6=function(q){if(Array.isArray(q))return this.$MessagesJewelThreadList4(q);else return c("React").createElement(c("MessagesJewelThreadlistRowContainer.react"),{folder:this.props.folder,key:q.thread_id,showAggregation:this.props.showAggregation,thread:q,viewer:this.props.viewer,handleChatTabOpen:this.props.handleChatTabOpen})};p.prototype.$MessagesJewelThreadList2=function(){var q=(this.props.maxInitialThreadCount||n)*m;return Math.min(q,c("getViewportDimensions")().height-l)};p.prototype.$MessagesJewelThreadList7=function(){__p&&__p();if(this.props.showAggregation)return null;else if(this.props.isLoaded){if(this.props.folder===c("MessagingTag").PENDING)return c("React").createElement("div",{className:"_16bh _16bi"},c("React").createElement(c("Link.react"),{onClick:this.$MessagesJewelThreadList8},i._("Ver solicitudes filtradas")));return null}if(this.props.isLoading)return c("React").createElement(c("XUISpinner.react"),{className:"jewelLoading"});return c("React").createElement("div",{className:"_v8y"},c("React").createElement(c("Link.react"),{href:"#",onClick:this.$MessagesJewelThreadList9},i._("Mostrar mensajes anteriores")))};p.prototype.$MessagesJewelThreadList4=function(q){var r=c("MercuryConfig").MCMA,s=this.props.newMessageRequestThreads;if(q&&r)s=q;if(!this.props.jewelRequestsUI&&!r||this.props.folder===c("MessagingTag").PENDING||!s||s.length===0)return null;return c("React").createElement(c("BootloadedComponent.react"),{key:s[0].thread_id,bootloadPlaceholder:c("React").createElement("li",{style:{height:60}}),bootloadLoader:c("JSResource")("MessagesJewelMessageRequestsRow.react").__setRef("MessagesJewelThreadList.react"),onClick:function(t){return this.$MessagesJewelThreadList10(t,s)}.bind(this),threads:s,viewer:this.props.viewer})};p.prototype.$MessagesJewelThreadList5=function(){if(!this.props.jewelRequestsUI||this.props.folder!==c("MessagingTag").PENDING)return null;return c("React").createElement("li",{className:"_16bh _16bi"},i._("Abre una solicitud para saber qui\u00e9n te env\u00eda el mensaje."),c("React").createElement("br",null),i._("No sabr\u00e1s que lo has visto hasta que aceptes."))};p.prototype.$MessagesJewelThreadList10=function(q,r){this.props.onAggregationClick&&this.props.onAggregationClick(q,r)};p.propTypes={folder:o.string,isLoaded:o.bool,isLoading:o.bool,maxInitialThreadCount:o.number,jewelRequestsUI:o.bool,onFilteredRequestsClick:o.func,onLoadMoreRequest:o.func,onMessageRequestsClick:o.func,onRenderThreads:o.func,onAggregationClick:o.func,p2pJewelBannerContainer:o.element,showAggregation:o.bool,threads:o.arrayOf(o.oneOfType([o.instanceOf(c("ImmutableObject")),o.arrayOf(o.instanceOf(c("ImmutableObject")))])).isRequired,viewer:o.string.isRequired};f.exports=p}),null);
__d("MercuryJewelThreadlistControl",["csx","cx","fbt","ArbiterMixin","CurrentUser","CSS","DOM","Event","JSLogger","MercuryFilters","MercuryThreadlistConstants","MercuryThreadlistContainer.react","MessagesJewelThreadList.react","MessagingTag","MessengerURIConstants","React","ReactDOM","MercuryThreadInformer","MercuryUnreadState","mixin","gkx"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l,m=c("JSLogger").create("mercury_jewel"),n=c("MessagingTag").PENDING,o="back_to_inbox",p=j._("Ver todo en Messenger");k=babelHelpers.inherits(q,c("mixin")(c("ArbiterMixin")));l=k&&k.prototype;function q(r){"use strict";__p&&__p();l.constructor.call(this);this.$JewelThreadlistControl17=function(t,u){t.preventDefault();this.$JewelThreadlistControl1=u;var v=this.$JewelThreadlistControl3;if(this.$JewelThreadlistControl6[v])c("CSS").removeClass(this.$JewelThreadlistControl6[v],"_1sdd");this.$JewelThreadlistControl8=false;this.$JewelThreadlistControl3="aggregation";this.render()}.bind(this);this.$JewelThreadlistControl15=function(t){t.preventDefault();this.$JewelThreadlistControl9(c("MessagingTag").PENDING,c("MercuryFilters").ALL)}.bind(this);this.$JewelThreadlistControl16=function(t){t.preventDefault();this.$JewelThreadlistControl9(c("MessagingTag").OTHER,c("MercuryFilters").ALL)}.bind(this);var s=r.getFlyout();this.$JewelThreadlistControl1=[];this.$JewelThreadlistControl2=c("DOM").find(s,"._3v_l");this.$JewelThreadlistControl3=c("MessagingTag").INBOX;this.$JewelThreadlistControl4=c("MercuryFilters").ALL;this.$JewelThreadlistControl5=c("CurrentUser").getID();this.$JewelThreadlistControl6={};this.$JewelThreadlistControl7={};this.$JewelThreadlistControl6[c("MessagingTag").INBOX]=c("DOM").find(s,"._1sde");this.$JewelThreadlistControl7[c("MessagingTag").INBOX]=c("DOM").find(s,"._1sdg");this.$JewelThreadlistControl8=false;c("Event").listen(this.$JewelThreadlistControl6[c("MessagingTag").INBOX],"click",function(){return this.$JewelThreadlistControl9(c("MessagingTag").INBOX,c("MercuryFilters").ALL)}.bind(this));if(!c("gkx")("AT6h5--3KUdxbat1rL4n2mVcPcg9eZ8bwokXjpPZS-_sSShoFlPyHXdioNqIwODAz2vH7270MK0r4x8XFkaYt6-h")){this.$JewelThreadlistControl6[n]=c("DOM").find(s,"._1sdf");this.$JewelThreadlistControl7[n]=c("DOM").find(s,"._1sdh");c("Event").listen(this.$JewelThreadlistControl6[n],"click",function(){return this.$JewelThreadlistControl9(n,c("MercuryFilters").ALL)}.bind(this))}else{this.$JewelThreadlistControl6[o]=c("DOM").find(s,"._34zq");c("Event").listen(this.$JewelThreadlistControl6[o],"click",function(){return this.$JewelThreadlistControl9(c("MessagingTag").INBOX,c("MercuryFilters").ALL)}.bind(this))}this.$JewelThreadlistControl10=c("DOM").find(s,"._1c1m");this.$JewelThreadlistControl11=c("DOM").find(s,"._4djt");this.$JewelThreadlistControl12=c("MercuryUnreadState").get();c("Event").listen(this.$JewelThreadlistControl10,"click",function(t){this.$JewelThreadlistControl13();t.kill()}.bind(this));c("MercuryThreadInformer").get().subscribe("unread-updated",function(){return this.$JewelThreadlistControl14()}.bind(this));this.$JewelThreadlistControl14();this.render();m.bump("opened_threadlist_"+this.$JewelThreadlistControl3)}q.prototype.render=function(){"use strict";c("ReactDOM").render(c("React").createElement(c("MercuryThreadlistContainer.react"),{ChildClass:c("MessagesJewelThreadList.react"),folder:this.$JewelThreadlistControl3,filter:this.$JewelThreadlistControl4,jewelRequestsUI:c("gkx")("AT6h5--3KUdxbat1rL4n2mVcPcg9eZ8bwokXjpPZS-_sSShoFlPyHXdioNqIwODAz2vH7270MK0r4x8XFkaYt6-h"),viewer:this.$JewelThreadlistControl5,onMessageRequestsClick:this.$JewelThreadlistControl15,onFilteredRequestsClick:this.$JewelThreadlistControl16,onAggregationClick:this.$JewelThreadlistControl17,resetAggregatedThreads:this.$JewelThreadlistControl8,threadIDs:this.$JewelThreadlistControl1}),this.$JewelThreadlistControl2)};q.prototype.$JewelThreadlistControl13=function(){"use strict";this.$JewelThreadlistControl12.markFolderAsRead(this.$JewelThreadlistControl3)};q.prototype.$JewelThreadlistControl9=function(r,s){"use strict";__p&&__p();this.$JewelThreadlistControl8=true;this.$JewelThreadlistControl1=[];if(this.$JewelThreadlistControl3!==r||this.$JewelThreadlistControl4!==s){var t=this.$JewelThreadlistControl3,u=r===c("MessagingTag").INBOX,v=r;m.bump("opened_threadlist_"+r);if(this.$JewelThreadlistControl6[v])c("CSS").addClass(this.$JewelThreadlistControl6[v],"_1sdd");if(this.$JewelThreadlistControl6[t])c("CSS").removeClass(this.$JewelThreadlistControl6[t],"_1sdd");this.$JewelThreadlistControl3=r;this.$JewelThreadlistControl4=s;if(u){this.$JewelThreadlistControl11.href=c("MessengerURIConstants").FACEBOOK_PREFIX;this.$JewelThreadlistControl11.text=p;this.$JewelThreadlistControl5=c("CurrentUser").getID()}else if(r==n){this.$JewelThreadlistControl11.href=c("MessengerURIConstants").FACEBOOK_PREFIX+c("MessengerURIConstants").MESSAGE_REQUESTS_PATH;this.$JewelThreadlistControl11.text=p;this.$JewelThreadlistControl5=c("CurrentUser").getID()}if(c("gkx")("AT6h5--3KUdxbat1rL4n2mVcPcg9eZ8bwokXjpPZS-_sSShoFlPyHXdioNqIwODAz2vH7270MK0r4x8XFkaYt6-h")){c("CSS").conditionShow(this.$JewelThreadlistControl6[c("MessagingTag").INBOX],u);c("CSS").conditionShow(this.$JewelThreadlistControl6[o],!u)}this.render()}};q.prototype.$JewelThreadlistControl14=function(){"use strict";this.$JewelThreadlistControl18(c("MessagingTag").INBOX);if(!c("gkx")("AT6h5--3KUdxbat1rL4n2mVcPcg9eZ8bwokXjpPZS-_sSShoFlPyHXdioNqIwODAz2vH7270MK0r4x8XFkaYt6-h"))this.$JewelThreadlistControl18(n)};q.prototype.$JewelThreadlistControl18=function(r){"use strict";var s=void 0;if(this.$JewelThreadlistControl12.exceedsMaxCount(r))s=c("MercuryThreadlistConstants").MAX_UNREAD_COUNT;else s=this.$JewelThreadlistControl12.getUnreadCount(r);this.$JewelThreadlistControl19(s,r)};q.prototype.$JewelThreadlistControl19=function(r,s){"use strict";__p&&__p();var t=this.$JewelThreadlistControl7[s];if(!t)return;var u=r?r.toString():0;if(r>0){if(r==c("MercuryThreadlistConstants").MAX_UNREAD_COUNT)u+="+";c("DOM").setContent(t,j._("({unread_count})",[j.param("unread_count",u)]))}else c("DOM").setContent(t,"")};f.exports=q}),null);
__d("MercuryJewel",["Arbiter","EventProfiler","MercuryJewelCountControl","MercuryServerPayloadPreprocessor"],(function a(b,c,d,e,f,g){__p&&__p();var h=false,i=false,j=null;function k(l,m){"use strict";__p&&__p();c("MercuryJewelCountControl").constructStores();c("MercuryServerPayloadPreprocessor").get().handleUpdate(m);this.$MercuryJewel1=new(c("MercuryJewelCountControl"))(l);l.subscribeOnce("opened",function(){this.$MercuryJewel2(l)}.bind(this));l.subscribeOnce("user-open",function(){this.$MercuryJewel3(l)}.bind(this));l.subscribe("updated",function(n,o){if(o&&o.count>0)this.$MercuryJewel2(l)}.bind(this))}k.prototype.$MercuryJewel2=function(l){"use strict";__p&&__p();this.$MercuryJewel3(l);if(!h){h=true;if(!l.isOpen())j=c("EventProfiler").notifyRunningEagerInteraction(["Messages_Jewel_Button"],"click");e(["MercuryJewelThreadlistControl"],function(m){this.$MercuryJewel4=new m(l)}.bind(this));c("Arbiter").inform("mercury-jewel/opened",null,c("Arbiter").BEHAVIOR_STATE)}};k.prototype.$MercuryJewel3=function(l){"use strict";if(!i&&l.isOpen()){i=true;c("EventProfiler").tagCurrentActiveInteractionsAs("FirstMercuryJewelOpen");if(j)j()}};f.exports=k}),null);