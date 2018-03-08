if (self.CavalryLogger) { CavalryLogger.start_js(["MZiBm"]); }

__d("messengerMuteDialogReactComponent",["MessengerMuteDialogReact.bs"],(function a(b,c,d,e,f,g){"use strict";var h=c("MessengerMuteDialogReact.bs").jsComponent;f.exports=h}),null);
__d("VideoWatchAndScrollControl.react",["ix","cx","fbt","AbstractButton.react","CurrentUser","Image.react","Locale","React","ReactDOM","TooltipData","VideoWebDriverIDs","VideoPlayerExperiments","XUIAmbientNUX.react","asset","shallowCompare"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("React").PropTypes;k=babelHelpers.inherits(n,c("React").Component);l=k&&k.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.$VideoWatchAndScrollControl1=function(){if(typeof this.props.onWNSNUXClose==="function")this.props.onWNSNUXClose()}.bind(this),p}n.prototype.shouldComponentUpdate=function(o,p){return c("shallowCompare")(this,o,p)};n.prototype.onMouseOut=function(o){c("ReactDOM").findDOMNode(this.refs.button).blur()};n.prototype.onButtonClick=function(){if(this.props.showWNSNUX)this.$VideoWatchAndScrollControl1();this.props.onEnterWatchAndScroll&&this.props.onEnterWatchAndScroll()};n.prototype.getIconSrc=function(){__p&&__p();var o=c("VideoPlayerExperiments").rhcWNSEnabled,p=c("Locale").isRTL();if(o&&!p||!o&&p){var q=c("VideoPlayerExperiments").pipEntryIcon;if(q)return q;if(this.props.isSlidingWNSEligible)return h("463043");return h("426217")}if(this.props.isSlidingWNSEligible)return h("463039");return h("463040")};n.prototype.render=function(){var o=c("React").createElement(c("Image.react"),{className:"_rwt",src:this.getIconSrc()}),p=c("CurrentUser").isWorkUser()?j._("Contin\u00faa viendo v\u00eddeos mientras usas Workplace"):j._("Contin\u00faa viendo v\u00eddeos mientras usas Facebook"),q=c("React").createElement(c("AbstractButton.react"),babelHelpers["extends"]({},c("TooltipData").propsFor(p,"above"),{className:"_zbd"+(c("VideoPlayerExperiments").rhcWNS&&c("VideoPlayerExperiments").responsiveRHC?" _4xu4":""),"data-testid":c("VideoWebDriverIDs").WNS_CONTROL,disabled:this.props.disabled,image:o,label:j._("Ir a reproducci\u00f3n con opci\u00f3n de desplazamiento"),labelIsHidden:true,onClick:this.onButtonClick.bind(this),onMouseOut:this.onMouseOut.bind(this),ref:"button",tabIndex:this.props.tabIndex,type:"button"})),r=j._("\u00bfEl v\u00eddeo no se reproduce?"),s=j._("Haz clic para cargar el v\u00eddeo mientras contin\u00faas usando Facebook"),t=c("React").createElement(c("XUIAmbientNUX.react"),{alignment:"right",contextRef:function(){return this.refs.button}.bind(this),customwidth:250,onCloseButtonClick:this.$VideoWatchAndScrollControl1,shown:this.props.showWNSNUX,position:"above",width:"custom"},c("React").createElement("div",{className:"_302j"},r),s);return c("React").createElement("span",null,q,t)};n.propTypes={onEnterWatchAndScroll:m.func,tabIndex:m.string};f.exports=n}),null);