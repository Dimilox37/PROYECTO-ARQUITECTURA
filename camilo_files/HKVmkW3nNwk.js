if (self.CavalryLogger) { CavalryLogger.start_js(["6crmf"]); }

__d("FacepileRoundedProfile.react",["cx","Image.react","React","Tooltip.react","HovercardLink","Link.react","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){__p&&__p();var m=this.props,n=m.borderColor,o=m.hoverBehavior,p=m.imageSize,q=m.isClickable,r=m.profile,s=this.props.style,t=r.glyph_size,u=r.image_src,v=r.entity_id;s=babelHelpers["extends"]({},s,{borderColor:n,height:p+"px",width:p+"px"});var w={};if(t&&t<p)w.margin=(p-t)/2+"px";var x="_4mnq";if(r.className)x=c("joinClasses")(x,r.className);var y=c("React").createElement("div",{className:x,style:s},c("React").createElement(c("Image.react"),{className:"_1h_6",height:t||p,src:u,style:w,width:t||p}));if(o==="name"&&r.name)y=c("React").createElement(c("Tooltip.react"),{className:"_4mns",tooltip:r.name},y);if(v&&(q||o==="hovercard")){var z={};if(o==="hovercard"){var A=c("HovercardLink").constructEndpoint({id:v}).toString();z["data-hovercard"]=A}if(q)z.href="/"+v;y=c("React").createElement(c("Link.react"),z,y)}return y};function l(){i.apply(this,arguments)}l.defaultProps={hoverBehavior:"none",imageSize:32,isClickable:false};l.propTypes={borderColor:k.string,className:k.string,hoverBehavior:k.oneOf(["none","name","hovercard"]),imageSize:k.number,isClickable:k.bool,profile:k.shape({className:k.string,entity_id:k.string,glyph_size:k.number,image_src:k.any.isRequired,name:k.string}).isRequired,style:k.object};f.exports=l}),null);
__d("FacepileRoundedCount.react",["cx","fbt","ix","FacepileRoundedProfile.react","Image.react","React","Tooltip.react"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("React").PropTypes,n=.3438;k=babelHelpers.inherits(o,c("React").Component);l=k&&k.prototype;o.prototype.render=function(){__p&&__p();var p=this.props,q=p.borderColor,r=p.count,s=p.profiles,t=p.size,u=p.style,v=p.use,w=s.length,x=r||w,y={borderColor:q,borderRadius:t,fontSize:t*n+"px",height:t,minWidth:t},z=c("React").createElement("span",{className:"_4mnq _34n6",style:y},c("React").createElement("span",{className:"_40vg"},"+"+x));if(v==="image"){var A=null;switch(t){case 16:A=j("409177");break;case 20:A=j("409178");break;case 28:A=j("409179");break;case 32:A=j("409180");break;case 48:A=j("409181");break}if(A)z=c("React").createElement("div",{className:"_4mnq",style:y},c("React").createElement(c("Image.react"),{className:"_1h_6",src:A}))}else if(v==="face"&&w>0){var B={left:"50%",marginLeft:"-"+t/2+"px"};z=c("React").createElement("div",{className:"_ric",style:{borderColor:q}},c("React").createElement(c("FacepileRoundedProfile.react"),{borderColor:q,imageSize:t,profile:s[0],style:B}),z)}var C=x-w,D=s.map(function(G){return G.name}).filter(Boolean),E=w>0?D.join("\n")+"\n":"";if(C>0){var F=i._({"*":"y {count} personas m\u00e1s.","_1":"y {count} m\u00e1s."},[i.param("count",C),i.plural(C)]);E+=F.toString()}return c("React").createElement(c("Tooltip.react"),{className:"_4mns",style:u,tooltip:E},z)};function o(){k.apply(this,arguments)}o.defaultProps={size:32,use:"count"};o.propTypes={borderColor:m.string,className:m.string,count:m.number,use:m.oneOf(["count","face","image"]),profiles:m.arrayOf(m.shape({className:m.string,entity_id:m.string,glyph_size:m.number,image_src:m.any.isRequired,name:m.string})).isRequired,size:m.number,style:m.object};f.exports=o}),null);
__d("FacepileRounded.react",["cx","FacepileRoundedCount.react","FacepileRoundedProfile.react","React","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes,l=.3125;i=babelHelpers.inherits(m,c("React").Component);j=i&&i.prototype;m.prototype.render=function(){__p&&__p();var n=this.props,o=n.borderColor,p=n.direction,q=n.hoverBehavior,r=n.imageSize,s=n.isClickable,t=n.message,u=n.numProfilesToDisplay,v=n.profiles,w=n.remainingProfilesCount,x=n.remainingProfilesCountStyle,y=p==="descending",z=v.length,A=null,B=this.props.className;B=c("joinClasses")("_4mnv"+(y?" _4wh8":""),B);if(t)A=c("React").createElement("div",{className:"_4mnt"},t);var C=v,D=null;if(u&&u<z){C=v.slice(0,u);D=v.slice(u,z)}var E={imageSize:r,isClickable:s,hoverBehavior:q},F=C.map(function(H,I){var J={zIndex:y?v.length-I:I};if(I>0)J.marginLeft=-(r*l)+"px";return c("React").createElement(c("FacepileRoundedProfile.react"),babelHelpers["extends"]({borderColor:o,key:I,profile:H,style:J},E))}),G=null;if(D)G=c("React").createElement(c("FacepileRoundedCount.react"),{borderColor:o,count:w,profiles:D,size:r,style:{marginLeft:-(r*l)+"px",zIndex:y?0:z},use:x});return c("React").createElement("div",{className:B},c("React").createElement("div",{className:"_4mnw"},F,G),A)};function m(){i.apply(this,arguments)}m.defaultProps={direction:"ascending",hoverBehavior:"none",imageSize:32,isClickable:false,remainingProfilesCountStyle:"count"};m.propTypes={borderColor:k.string,className:k.string,direction:k.oneOf(["ascending","descending"]),hoverBehavior:k.oneOf(["none","name","hovercard"]),imageSize:k.number,isClickable:k.bool,message:k.oneOfType([k.array,k.string,k.object]),numProfilesToDisplay:k.number,profiles:k.arrayOf(k.shape({className:k.string,entity_id:k.string,glyph_size:k.number,image_src:k.any.isRequired,name:k.string})).isRequired,remainingProfilesCount:k.number,remainingProfilesCountStyle:k.oneOf(["count","face","image"])};f.exports=m}),null);
__d("Button.react",["cx","AbstractButton.react","React","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){"use strict";var m=this.props.use||"default",n=this.props.size||"medium",o="_42fu"+(m==="special"?" _42gz":"")+(m==="confirm"?" _42g-":"")+(n==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(m!=="default"?" selected":"");return c("React").createElement(c("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:c("joinClasses")(this.props.className,o)}))};function l(){"use strict";i.apply(this,arguments)}l.propTypes={use:k.oneOf(["special","confirm","default"]),size:k.oneOf(["medium","large"]),suppressed:k.bool};f.exports=l}),null);
__d("LiveVideoIndicator.react",["ix","cx","fbt","DOMContainer.react","Image.react","React","asset","gkx","intlSummarizeNumber","joinClasses"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l;k=babelHelpers.inherits(m,c("React").PureComponent);l=k&&k.prototype;m.prototype.render=function(){__p&&__p();if(this.props.isPreview)return this.$LiveVideoIndicator1();var n=void 0,o=void 0;if(this.props.inBeeper){n="_60yg";o="_60yf"}else if(this.props.isRewound){n="_1dvf";o="_1dvg"}else{n="_5pe-";o="_2wrk"}return c("React").createElement("div",{className:c("joinClasses")((!this.props.inline?"_3htz":"")+(this.props.inline?" _3qry":"")+(!this.props.inline?" _2659":"")+(!this.props.inline?" _530p":"")+" _4ubd _2lwf"+(this.props.isLive?" _3rno":"")+(this.props.compact?" _3eca":""))},c("React").createElement("div",{className:n},c("React").createElement("span",{className:o},this.$LiveVideoIndicator2())),this.$LiveVideoIndicator3())};m.prototype.$LiveVideoIndicator2=function(){if(this.props.isPremiere)return j._("ESTRENO");if(this.props.isBreakingNews)return j._("DIRECTO: RECIENTE");return j._("DIRECTO")};m.prototype.$LiveVideoIndicator1=function(){return c("React").createElement("div",{className:"_5vj"},c("React").createElement("div",{className:"_5vm"},c("React").createElement("span",{className:"_5vo"},j._("VISTA PREVIA"))))};m.prototype.$LiveVideoIndicator3=function(){var n=this.props.viewerCount;if(!n)return c("React").createElement("div",{className:"_1jb_ _2z59"});var o=null;if(!this.props.compact)o=c("React").createElement(c("Image.react"),{className:"_5pf2",src:this.props.isAudio?h("466773"):h("406916")});return c("React").createElement("div",{className:"_1jb_"+(this.props.compact?" _3eca":"")},o,c("intlSummarizeNumber")(n))};function m(){k.apply(this,arguments)}f.exports=m}),null);
__d("LiveVideoPlayerConstants",[],(function a(b,c,d,e,f,g){"use strict";var h={ACTIONS:{SET_IS_REWOUND:"SET_IS_REWOUND"}};f.exports=h}),null);
__d("LiveVideoPlayerStore",["FluxReduceStore","immutable","LiveVideoPlayerConstants","LiveVideoPlayerDispatcher"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("LiveVideoPlayerConstants").ACTIONS;h=babelHelpers.inherits(k,c("FluxReduceStore"));i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.__moduleID=f.id,m}k.prototype.getInitialState=function(){return c("immutable").Map({})};k.prototype.getIsRewound=function(l){return this.getState().getIn([l,"isRewound"],false)};k.prototype.$LiveVideoPlayerStore1=function(l,m){if(!l.hasOption("LivePlayer","isRewound"))l.registerOption("LivePlayer","isRewound",function(){return this.getIsRewound(l.getVideoPlayerID())}.bind(this));l.emit("LivePlayer/isRewoundChanged")};k.prototype.reduce=function(l,m){switch(m.type){case j.SET_IS_REWOUND:l=l.setIn([m.vpc.getVideoPlayerID(),"isRewound"],m.isRewound);setTimeout(function(){return this.$LiveVideoPlayerStore1(m.vpc,m.isRewound)}.bind(this),0);m.vpc.setEnableLiveheadCatchup(!m.isRewound);break;default:break}return l};f.exports=new k(c("LiveVideoPlayerDispatcher"))}),null);
__d("LiveVideoIndicatorContainer.react",["FluxContainer","LiveVideoIndicator.react","LiveVideoPlayerDispatcher","LiveVideoPlayerStore","React"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;j.getStores=function(){return[c("LiveVideoPlayerStore")]};j.calculateState=function(k,l){var m=c("LiveVideoPlayerStore").getIsRewound(l.playerID);return{isRewound:m}};function j(k){i.constructor.call(this,k);c("LiveVideoPlayerDispatcher").explicitlyRegisterStores([c("LiveVideoPlayerStore")])}j.prototype.render=function(){return c("React").createElement(c("LiveVideoIndicator.react"),{compact:this.props.compact,inline:this.props.inline,inBeeper:this.props.inBeeper,isAudio:this.props.isAudio,isBreakingNews:this.props.isBreakingNews,isLive:this.props.isLive,isPremiere:this.props.isPremiere,isPreview:this.props.isPreview,isRewound:this.state.isRewound,viewerCount:this.props.viewerCount})};f.exports=c("FluxContainer").create(j,{withProps:true})}),null);
__d("LiveVideoIndicatorContainerServerCallable.react",["FBJSON","LiveVideoIndicatorContainer.react","React","SubscriptionsHandler"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.state={viewerCount:this.props.viewerCount},l}j.prototype.componentDidMount=function(){this.subscriptions=new(c("SubscriptionsHandler"))();this.subscriptions.addSubscriptions(this.props.videoPlayerController.addListener("VideoWithLiveBroadcast/viewCountChange",function(k){var l=k.getAttribute("data-store"),m=l?c("FBJSON").parse(l).viewerCount:null;this.setState({viewerCount:m})}.bind(this)))};j.prototype.componentWillUnmount=function(){this.subscriptions.release()};j.prototype.render=function(){return c("React").createElement(c("LiveVideoIndicatorContainer.react"),{compact:this.props.compact,inline:this.props.inline,inBeeper:this.props.inBeeper,isAudio:this.props.isAudio,isBreakingNews:this.props.isBreakingNews,isLive:this.props.isLive,isPremiere:this.props.isPremiere,isPreview:this.props.isPreview,playerID:this.props.videoPlayerController.getVideoPlayerID(),viewerCount:this.state.viewerCount})};f.exports=j}),null);
__d("CoverVideoStatus",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({NO_COVER_VIDEO:"no_cover_video",UPLOADING:"uploading",ENCODING:"encoding",PREVIEWING:"previewing",CHOOSING_THUMBNAIL:"choosing_thumbnail",PUBLISHING:"publishing",PUBLISHED:"published",ERROR:"error"})}),null);
__d("XEventsTourPermalinkController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/tours/{tour_id}/",{tour_id:{type:"FBID",required:true},acontext:{type:"String"},afterload:{type:"Enum",enumType:0}})}),null);