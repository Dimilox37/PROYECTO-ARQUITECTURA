if (self.CavalryLogger) { CavalryLogger.start_js(["B58If"]); }

__d("ChatSidebarBot.react",["cx","Image.react","Link.react","MessengerTextWithEmoticons.react","React","URI","XUIText.react"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").PureComponent);j=i&&i.prototype;l.prototype.render=function(){return c("React").createElement(c("Link.react"),{className:"_1i-y",href:this.props.threadURI,"data-hovercard":this.props.hovercardURI,onClick:this.props.onClick,rel:"ignore"},c("React").createElement(c("Image.react"),{className:"_2_07",src:this.props.bot.imageSrc.toString(),height:48,width:48,alt:""}),c("React").createElement(c("XUIText.react"),{display:"block",size:"meta1",className:"_2_03 _3-8w"},c("React").createElement(c("MessengerTextWithEmoticons.react"),{renderEmoticons:true,renderEmoji:true,text:this.props.bot.name})))};function l(){i.apply(this,arguments)}l.propTypes={bot:k.object.isRequired,hovercardURI:k.instanceOf(c("URI")).isRequired,onClick:k.func.isRequired,threadURI:k.instanceOf(c("URI")).isRequired};f.exports=l}),null);
__d("ChatSidebarBotsFooter.react",["cx","fbt","LeftRight.react","Link.react","React","Tooltip.react","URI","XUIGrayText.react"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").PureComponent);k=j&&j.prototype;m.prototype.render=function(){var n=i._("Los bots que se muestran aqu\u00ed pueden interactuar con los miembros de la comunidad. Para obtener una lista completa de las integraciones, consulta el directorio de integraciones.");return c("React").createElement(c("LeftRight.react"),{className:"_3-95"},c("React").createElement(c("Tooltip.react"),{tooltip:n},c("React").createElement(c("XUIGrayText.react"),{className:"_imj"},i._("\u00bfQu\u00e9 es esto?"))),c("React").createElement(c("Link.react"),{href:this.props.integrationsURI},i._("Administrar")))};function m(){j.apply(this,arguments)}m.propTypes={integrationsURI:l.instanceOf(c("URI")).isRequired};f.exports=m}),null);
__d("ChatSidebarBotsHeader.react",["cx","fbt","LeftRight.react","React","XUICloseButton.react","XUIText.react"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;m.prototype.render=function(){return c("React").createElement(c("LeftRight.react"),{className:"_2pid _2pim"},c("React").createElement(c("XUIText.react"),{display:"block",headinglevel:3,className:"_55oc"},i._("BOTS")),c("React").createElement(c("XUICloseButton.react"),{className:"_63w-",size:"medium",label:i._("Ocultar bots"),onClick:this.props.onClick}))};function m(){j.apply(this,arguments)}m.propTypes={onClick:l.func.isRequired};f.exports=m}),null);
__d("ChatSidebarBots.react",["cx","fbt","ChatSidebarBot.react","ChatSidebarBotsFooter.react","ChatSidebarBotsHeader.react","ChatSidebarSections","HovercardLink","React","URI","WebMessengerThreadPermalinks","XUICarousel.react","XUICarouselArrow.react","XUICarouselItem.react","emptyFunction"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$ChatSidebarBots2=function(s,t){var u=new(c("URI"))(c("WebMessengerThreadPermalinks").getThreadURIFromUserID(s.id)),v=c("HovercardLink").constructEndpoint({id:s.id});return c("React").createElement(c("XUICarouselItem.react"),{className:"_2_06 _52jv","data-id":s.id,key:s.id},c("React").createElement(c("ChatSidebarBot.react"),{bot:s,hovercardURI:v,onClick:function(event){this.props.onItemClick(s.id,c("ChatSidebarSections").WORKPLACE_BOTS,t);event.preventDefault()}.bind(this),threadURI:u}))}.bind(this),o}m.prototype.render=function(){if(this.props.bots.length===0)return null;return c("React").createElement("div",{className:"_1vze _2_01 _2pi8"},c("React").createElement(c("ChatSidebarBotsHeader.react"),{onClick:this.props.onHideButtonClick}),c("React").createElement(c("XUICarousel.react"),{ref:this.props.carouselRef,arrows:this.$ChatSidebarBots1(),className:"_imi"+(this.props.bots.length>=this.props.botsPerPage?" _2_02":""),initialAutoplay:false,initialIndex:this.props.initialIndex,moveStep:this.props.botsPerPage,onItemClick:c("emptyFunction"),renderArrowsOutsideViewport:true},this.props.bots.map(this.$ChatSidebarBots2)),this.$ChatSidebarBots3())};m.prototype.$ChatSidebarBots3=function(){if(!this.props.isAdmin)return null;return c("React").createElement(c("ChatSidebarBotsFooter.react"),{integrationsURI:this.props.integrationsURI})};m.prototype.$ChatSidebarBots1=function(){if(this.props.bots.length<=this.props.botsPerPage)return null;var n=c("React").createElement(c("XUICarouselArrow.react"),{label:i._("Anterior"),onClick:this.props.onLeftArrowClick},c("React").createElement("span",{className:"_45e8 _45e9"})),o=c("React").createElement(c("XUICarouselArrow.react"),{label:i._("Siguiente"),onClick:this.props.onRightArrowClick},c("React").createElement("span",{className:"_45e8 _45ea"}));return[n,o]};m.propTypes={bots:l.arrayOf(l.object).isRequired,botsPerPage:l.number.isRequired,carouselRef:l.func.isRequired,initialIndex:l.number.isRequired,integrationsURI:l.instanceOf(c("URI")).isRequired,isAdmin:l.bool.isRequired,onHideButtonClick:l.func.isRequired,onItemClick:l.func.isRequired,onLeftArrowClick:l.func.isRequired,onRightArrowClick:l.func.isRequired};m.defaultProps={carouselRef:c("emptyFunction")};f.exports=m}),null);
__d("WorkAdminSection",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ACCESS_REQUESTS:"access_requests",ADMIN_ALERTS:"admin_alerts",ADMIN_ROLES:"admin_roles",ANALYTICS:"analytics",APPS:"apps",AUTHENTICATION:"authentication",BULK_DEACTIVATE:"bulk_deactivate",BUSINESS_DETAILS:"business_details",CONTENT_INSIGHTS:"content_insights",CONTENT_MANAGER:"content_manager",DIRECT_SUPPORT:"direct_support",DOMAINS:"domains",EMPLOYEES_INSIGHTS:"employees_insights",EMPLOYEES_MANAGER:"employees_manager",GROUPS_INSIGHTS:"groups_insights",GROUPS_MANAGER:"groups_manager",OVERVIEW:"overview",PAYMENT_INFORMATION:"payment_information",PROFILE_BADGES:"profile_badges",PROFILE_SETTINGS:"profile_settings",SECURITY:"security",SETTINGS:"settings",SETUP_GROUPS:"setup_groups",SETUP_INTRODUCTION:"setup_introduction",SETUP_INVITES:"setup_invites",SETUP_USERS:"setup_users",USER_SETS:"user_sets"})}),null);
__d("XAtWorkAdminPanelController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/work/admin/",{ref:{type:"Enum",enumType:1},section:{type:"Enum",enumType:1},step:{type:"String"},idp:{type:"Enum",enumType:1},question_id:{type:"FBID"},comment_id:{type:"FBID"},direct_support_topic:{type:"Enum",enumType:0},edit_payment_methods:{type:"Bool",defaultValue:false},app_id:{type:"FBID"}})}),null);
__d("ChatSidebarBotsContainer.react",["invariant","Arbiter","ChatOpenTabEventLogger","ChatSidebarBots.react","ChatSidebarBotsActions","ChatSidebarBotsDispatcher","ChatSidebarBotsStore","FantaTabActions","FluxContainer","MercuryIDs","React","WorkAdminSection","XAtWorkAdminPanelController"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("ChatSidebarBotsActions").module,l=c("ChatSidebarBotsDispatcher").module,m=c("ChatSidebarBotsStore").module,n=c("React").PropTypes;k||h(0);l||h(0);m||h(0);i=babelHelpers.inherits(o,c("React").Component);j=i&&i.prototype;function o(){__p&&__p();var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.$ChatSidebarBotsContainer1=null,this.$ChatSidebarBotsContainer2=null,this.$ChatSidebarBotsContainer6=function(){__p&&__p();var u=this.$ChatSidebarBotsContainer1;if(!u)return;if(u.state.index<=this.props.botsPerPage-1){u.setIndex(this.state.bots.length-1);return}var v=u.prev();if(v<=this.props.botsPerPage-1)u.setIndex(this.$ChatSidebarBotsContainer3())}.bind(this),this.$ChatSidebarBotsContainer7=function(){var u=this.$ChatSidebarBotsContainer1;if(!u)return;if(u.state.index===this.state.bots.length-1){u.setIndex(this.props.botsPerPage-1);return}u.next()}.bind(this),q}o.getStores=function(){return[m]};o.calculateState=function(){return{bots:m.getState().bots,isHidden:m.getState().isHidden}};o.prototype.componentDidMount=function(){l.explicitlyRegisterStores(o.getStores());k.loadBots(this.props.bots);k.loadSettings({isHidden:!!this.props.isInitiallyHidden});this.$ChatSidebarBotsContainer2=c("Arbiter").subscribe("sidebar/visibility",function(p,q){if(this.$ChatSidebarBotsContainer1&&q)this.$ChatSidebarBotsContainer1.forceLayoutUpdate()}.bind(this))};o.prototype.componentWillUnmount=function(){if(this.$ChatSidebarBotsContainer2)this.$ChatSidebarBotsContainer2.unsubscribe()};o.prototype.render=function(){if(this.state.isHidden)return null;var p=c("XAtWorkAdminPanelController").getURIBuilder().setEnum("section",c("WorkAdminSection").APPS).getURI();return c("React").createElement(c("ChatSidebarBots.react"),{bots:this.state.bots,botsPerPage:this.props.botsPerPage,carouselRef:function(q){this.$ChatSidebarBotsContainer1=q}.bind(this),initialIndex:this.$ChatSidebarBotsContainer3(),integrationsURI:p,isAdmin:this.props.isAdmin,onHideButtonClick:this.$ChatSidebarBotsContainer4,onItemClick:this.$ChatSidebarBotsContainer5,onLeftArrowClick:this.$ChatSidebarBotsContainer6,onRightArrowClick:this.$ChatSidebarBotsContainer7})};o.prototype.$ChatSidebarBotsContainer3=function(){return Math.min(this.props.botsPerPage,this.state.bots.length)-1};o.prototype.$ChatSidebarBotsContainer5=function(p,q,r){var s=c("MercuryIDs").getThreadIDFromUserID(p);c("FantaTabActions").openTab(s);c("ChatOpenTabEventLogger").logUserClickOpen(q,p,{global_slot:r})};o.prototype.$ChatSidebarBotsContainer4=function(){k.saveSettings({isHidden:true})};o.propTypes={bots:n.arrayOf(n.object).isRequired,botsPerPage:n.number.isRequired,isAdmin:n.bool.isRequired,isInitiallyHidden:n.bool.isRequired};f.exports=c("FluxContainer").create(o)}),null);
__d("ChatSidebarBotsContainerWrapper.react",["ChatSidebarBotsContainer.react","React"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.prototype.render=function(){return c("React").createElement(c("ChatSidebarBotsContainer.react"),this.props)};function k(){h.apply(this,arguments)}k.propTypes={bots:j.arrayOf(j.object).isRequired,botsPerPage:j.number.isRequired,isAdmin:j.bool.isRequired,isInitiallyHidden:j.bool.isRequired};k.defaultProps={isAdmin:false,isInitiallyHidden:false};f.exports=k}),null);
__d("Poller",["ArbiterMixin","AsyncRequest","CurrentUser","TimeSlice","emptyFunction","mixin","setTimeoutAcrossTransitions","setTimeout"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("mixin")(c("ArbiterMixin")));i=h&&h.prototype;function j(l){"use strict";__p&&__p();i.constructor.call(this);this._config=babelHelpers["extends"]({clearOnQuicklingEvents:true,setupRequest:c("emptyFunction"),maxRequests:Infinity},l);this._handle=null;this._isSkipIndefinitely=false;this._hasSkippedRequest=false;this._requests=0;this._muted=false;this._polling=false;this._skip=false;this._cancelRequest=c("emptyFunction");if(!this._config.dontStart)this.start()}j.prototype.start=function(){"use strict";if(this._polling)return this;this._requests=0;this.request();return this};j.prototype.stop=function(){"use strict";this._cancelRequest();return this};j.prototype.mute=function(){"use strict";this._muted=true;return this};j.prototype.resume=function(){"use strict";__p&&__p();if(this._muted){this._muted=false;if(this._handle===null&&this._polling)return this.request()}if(this._isSkipIndefinitely){this._isSkipIndefinitely=false;return this.request()}return this};j.prototype.skip=function(){"use strict";this._skip=true;return this};j.prototype.startSkipIndefinitely=function(){"use strict";this._isSkipIndefinitely=true;return this};j.prototype.stopSkipIndefinitely=function(){"use strict";this._isSkipIndefinitely=false;if(this._hasSkippedRequest)return this.request();else return this};j.prototype.isSkipIndefinitely=function(){"use strict";return this._isSkipIndefinitely};j.prototype.reset=function(){"use strict";return this.stop().start()};j.prototype.request=function(){"use strict";__p&&__p();this._cancelRequest();this._polling=true;if(!this._config.allowNotLoggedIn&&!k())return this._done();if(this._muted)return this;var l=false;this._cancelRequest=function(){l=true;this._cleanup()}.bind(this);if(this._isSkipIndefinitely){this._deferRequest();this._hasSkippedRequest=true;return this}else this._hasSkippedRequest=false;if(++this._requests>this._config.maxRequests)return this._done();var m=new(c("AsyncRequest"))();m.setIsBackgroundRequest(true);m.setInitialHandler(function(){return!l});m.setFinallyHandler(this._deferRequest.bind(this));m.setInitialHandler=c("emptyFunction");m.setFinallyHandler=c("emptyFunction");this._config.setupRequest(m,this);if(this._skip){this._skip=false;c("setTimeoutAcrossTransitions")(this._deferRequest.bind(this),0)}else m.send();return this};j.prototype.isPolling=function(){"use strict";return this._polling};j.prototype.isMuted=function(){"use strict";return this._muted};j.prototype.setInterval=function(l){"use strict";if(l){this._config.interval=l;this.start()}};j.prototype.getInterval=function(){"use strict";return this._config.interval};j.prototype._cleanup=function(){"use strict";if(this._handle!==null)clearTimeout(this._handle);this._handle=null;this._cancelRequest=c("emptyFunction");this._polling=false};j.prototype._done=function(){"use strict";this._cleanup();this.inform("done",{sender:this});return this};j.prototype._deferRequest=function(){"use strict";__p&&__p();if(!this._polling)return;if(this._requests<this._config.maxRequests){var l=this._config.interval;l=typeof l==="function"?l(this._requests):l;l=l>j.MIN_INTERVAL?l:j.MIN_INTERVAL;if(this._config.clearOnQuicklingEvents)this._handle=c("setTimeout")(c("TimeSlice").guard(function(){this.request()}.bind(this),"Poller setTimeout",{propagationType:c("TimeSlice").PropagationType.ORPHAN}),l);else this._handle=c("setTimeoutAcrossTransitions")(c("TimeSlice").guard(function(){this.request()}.bind(this),"Poller setTimeout",{propagationType:c("TimeSlice").PropagationType.ORPHAN}),l)}else this._done()};j.MIN_INTERVAL=2e3;function k(){return c("CurrentUser").isLoggedInNow()}f.exports=j}),null);