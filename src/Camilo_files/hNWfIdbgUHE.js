if (self.CavalryLogger) { CavalryLogger.start_js(["TGpE4"]); }

__d("GroupMemberSuggestionConstants",[],(function a(b,c,d,e,f,g){f.exports={suggestionIDPrefix:"suggested_member_"}}),null);
__d("EntStreamGroupMall",["DOM","$","ge","ScrollingPager"],(function a(b,c,d,e,f,g){__p&&__p();var h={replacePager:function i(j,k){c("DOM").setContent(c("$")("pagelet_group_pager"),j);if(k){var l=c("ScrollingPager").getInstance(k);if(l)l.register()}},replaceFilesPager:function i(j,k){c("DOM").setContent(c("$")("group_files_pager_"+k),j)},replacePostApprovalSection:function i(j){var k=c("ge")("pagelet_consolidate_posts");if(k!==null)c("DOM").setContent(k,j)},replaceScheduledPostsSection:function i(j){var k=c("ge")("pagelet_scheduled_posts");if(k!==null)c("DOM").setContent(k,j)}};f.exports=h}),null);
__d("GroupDescription",["Arbiter","Event","tidyEvent"],(function a(b,c,d,e,f,g){var h={onDescriptionActionButtonClick:function i(j){c("tidyEvent")(c("Event").listen(j,"click",function(){c("Arbiter").inform("GroupsRHC/expandDescContainer")}))}};f.exports=h}),null);
__d("GroupsDescTagContainer",["cx","Arbiter","CSS","Event","tidyEvent"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(j,k,l){"use strict";this.$GroupsDescTagContainer1=j;this.$GroupsDescTagContainer2=k;this.$GroupsDescTagContainer3=l;this.checkAndCollapseContent();c("Arbiter").subscribe("GroupsRHC/expandDescContainer",this.expandContainer.bind(this))}i.prototype.checkAndCollapseContent=function(){"use strict";if(this.$GroupsDescTagContainer1.getBoundingClientRect().height<=this.$GroupsDescTagContainer3)return;c("CSS").addClass(this.$GroupsDescTagContainer1,"__gz");c("CSS").show(this.$GroupsDescTagContainer2);c("tidyEvent")(c("Event").listen(this.$GroupsDescTagContainer2,"click",this.expandContainer.bind(this)))};i.prototype.expandContainer=function(){"use strict";c("CSS").removeClass(this.$GroupsDescTagContainer1,"__gz");c("CSS").hide(this.$GroupsDescTagContainer2)};f.exports=i}),null);
__d("GroupsMemberCountUpdater",["Arbiter","DOM"],(function a(b,c,d,e,f,g){__p&&__p();function h(){}h.subscribeMemberCount=function(i){c("Arbiter").subscribe("GroupsMemberCount/changeText",function(j,k){c("DOM").setContent(i,k)})};h.subscribeNewMemberCount=function(i){c("Arbiter").subscribe("GroupsMemberCount/changeNewMembersText",function(j,k){c("DOM").setContent(i,k)})};h.subscribeWelcomeMemberCount=function(i){c("Arbiter").subscribe("GroupsMemberCount/changeWelcomeMembersText",function(j,k){c("DOM").setContent(i,k)})};f.exports=h}),null);
__d("XGroupsMemberSuggestionSeeMoreAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/groups/membersuggestion/seemore/",{group_id:{type:"Int",required:true},already_suggested_ids:{type:"IntVector",required:true},see_more_link_id:{type:"String",required:true},suggestion_list_id:{type:"String",required:true},replace_suggestion_id:{type:"Int"},page_id:{type:"FBID"},ref:{type:"String",defaultValue:""},source:{type:"String"}})}),null);
__d("GroupsMemberSuggestionsUtils",["csx","AsyncRequest","DOMQuery","GroupMemberSuggestionConstants","XGroupsMemberSuggestionSeeMoreAsyncController","ge"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i={getSuggestedMemberIDs:function j(){var k=c("DOMQuery").scry(c("ge")("pagelet_group_rhc"),"._275p");if(k.length===0)return[];var l=k[0],m=c("DOMQuery").scry(l,"li"),n=m.map(function(o){if(o.id.startsWith(c("GroupMemberSuggestionConstants").suggestionIDPrefix))return o.id.slice(c("GroupMemberSuggestionConstants").suggestionIDPrefix.length);return null});return n.filter(function(o){return o!==null})},seeMoreSuggestions:function j(k,l,m,n,o,p,q){var r=i.getSuggestedMemberIDs(),s=c("XGroupsMemberSuggestionSeeMoreAsyncController").getURIBuilder().setInt("group_id",k).setIntVector("already_suggested_ids",r).setString("see_more_link_id",m).setString("suggestion_list_id",n).setInt("replace_suggestion_id",l).setFBID("page_id",o).setString("ref",p).setString("source",q).getURI();new(c("AsyncRequest"))(s).send()}};f.exports=i}),null);
__d("XGroupMemberSuggestionXoutAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/groups/membersuggestion/xout/",{})}),null);
__d("GroupMemberSuggestionInvitationToggle",["ActorURI","AsyncRequest","Button","CSS","Event","GroupsMemberSuggestionsUtils","XGroupMemberSuggestionXoutAsyncController","tidyEvent"],(function a(b,c,d,e,f,g){__p&&__p();var h={init:function i(j){__p&&__p();c("tidyEvent")(c("Event").listen(j.button,"click",function(){__p&&__p();c("Button").setEnabled(j.button,false);var k="/ajax/groups/members/add_post.php";if(j.pageID)k=c("ActorURI").create(k,j.pageID);var l={group_id:j.groupID,members:[j.suggestionID],message_id:j.completionTextID,recommendation_key:j.recommendationKey,ref:j.ref,source:j.source};new(c("AsyncRequest"))(k).setData(l).setHandler(function(m){var n=m.getPayload();if(n&&n.error_occurred)c("Button").setEnabled(j.button,true);else c("GroupsMemberSuggestionsUtils").seeMoreSuggestions(j.groupID,j.suggestionID,j.seeMoreLinkID,j.suggestionListID,j.pageID,j.ref,j.source)}).send()}));c("tidyEvent")(c("Event").listen(j.suggestionRow,"mouseenter",function(){c("CSS").show(j.xoutButton)}));c("tidyEvent")(c("Event").listen(j.suggestionRow,"mouseleave",function(){c("CSS").hide(j.xoutButton)}));c("tidyEvent")(c("Event").listen(j.xoutButton,"click",function(){var k=c("XGroupMemberSuggestionXoutAsyncController").getURIBuilder().getURI();if(j.pageID)k=c("ActorURI").create(k,j.pageID);var l={group_id:j.groupID,invitee_id:j.suggestionID,recommendation_key:j.recommendationKey,source:j.source};new(c("AsyncRequest"))(k).setData(l).setHandler(function(){c("GroupsMemberSuggestionsUtils").seeMoreSuggestions(j.groupID,j.suggestionID,j.seeMoreLinkID,j.suggestionListID,j.pageID,j.ref,j.source)}).send()}))}};f.exports=h}),null);
__d("GroupMemberSuggestionsRhcUnit",["Event","GroupsMemberSuggestionsUtils","tidyEvent"],(function a(b,c,d,e,f,g){"use strict";var h={init__NEW:function i(j){c("tidyEvent")(c("Event").listen(j.seeMoreLink,"click",function(){c("GroupsMemberSuggestionsUtils").seeMoreSuggestions(j.groupID,null,j.seeMoreLinkID,j.suggestionListID,j.pageID,j.ref,j.source)}))}};f.exports=h}),null);
__d("XGroupMemberSuggestionsUnitXoutAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/groups/suggestionunit/xout/",{})}),null);
__d("GroupMemberSuggestionsRhcUnitContainer",["AsyncRequest","CSS","Event","XGroupMemberSuggestionsUnitXoutAsyncController","tidyEvent"],(function a(b,c,d,e,f,g){"use strict";var h={init:function i(j){c("tidyEvent")(c("Event").listen(j.hideLink,"click",function(){c("CSS").hide(j.root);var k=c("XGroupMemberSuggestionsUnitXoutAsyncController").getURIBuilder().setInt("group_id",j.groupId).setString("source",j.source).setString("recommendation_key",j.recommenderId).getURI();new(c("AsyncRequest"))(k).setErrorHandler(function(){c("CSS").show(j.root);return}).send()}))}};f.exports=h}),null);
__d("GroupNewMemberWelcomePost",["CSS","Arbiter"],(function a(b,c,d,e,f,g){__p&&__p();var h=null;i.prototype.construct=function(){"use strict"};i.initRhcNotice=function(j){"use strict";h=j};i.registerForComposerFinish=function(j){"use strict";c("Arbiter").subscribe("Pages/composeFinished",function(k,l){if(l.composerID===j)if(h!=null)c("CSS").hide(h)})};function i(){"use strict"}f.exports=i}),null);
__d("GroupsAddMemberTypeahead",["Arbiter","DOM","Typeahead","ge"],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j){if(i&&j)this.init(i,j)}Object.assign(h.prototype,{init:function i(j,k){j.subscribe("select",function(l,m){c("Arbiter").inform("GroupsAddMemberTypeahead/add",{gid:k,uid:m.selected.uid,name:m.selected.text,photo:m.selected.photo})});c("Arbiter").subscribe("GroupsAddMemberTypeahead/updateGroupToken",this.resetTypeaheadCaches.bind(this))},resetTypeaheadCaches:function i(j,k){var l=c("DOM").scry(c("ge")("pagelet_group_"),".uiTypeahead:not(.uiPlacesTypeahead)");for(var m=0;m<l.length;m++){var n=c("Typeahead").getInstance(l[m]);if(n){var o=n.getData();o.updateToken(k.token);n.getCore().subscribe("focus",o.bootstrap.bind(o))}}}});f.exports=h}),null);
__d("legacy:GroupsAddMemberTypeahead",["GroupsAddMemberTypeahead"],(function a(b,c,d,e,f,g){b.GroupsAddMemberTypeahead=c("GroupsAddMemberTypeahead")}),3);
__d("GroupsAddTypeaheadView",["Arbiter","ContextualTypeaheadView"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("ContextualTypeaheadView"));i=h&&h.prototype;j.prototype.select=function(k){"use strict";var l=this.results[this.index];c("Arbiter").inform("GroupsMemberSuggestion/remove",l.uid);if(l.is_member)this.reset();else i.select.call(this,k)};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("GroupsAddMemberTypeaheadView",["csx","cx","fbt","CSS","CurrentUser","DOM","GroupsAddTypeaheadView","ex","getOrCreateDOMID"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l,m="friends",n="others",o="coworkers",p="email";function q(s){__p&&__p();var t;switch(s){case m:t=j._("Amigos");break;case n:t=j._("Otros");break;case o:t=j._("Compa\u00f1eros de trabajo");break;case p:t=j._("Correo electr\u00f3nico");break;default:throw new Error(c("ex")("The given typeahead result category seems to be untransformed: %s",s))}var u=c("DOM").create("li",{className:"_3cz5",data:s},t);return u}k=babelHelpers.inherits(r,c("GroupsAddTypeaheadView"));l=k&&k.prototype;r.prototype.getItems=function(){"use strict";return c("DOM").scry(this.content,'li[role="option"]')};r.prototype.buildResults=function(s){"use strict";__p&&__p();var t,u=null;if(typeof this.renderer=="function"){t=this.renderer;u=this.renderer.className||""}else{t=b.TypeaheadRenderers[this.renderer];u=this.renderer}t=t.bind(this);var v=null,w=s.reduce(function(w,z,A){__p&&__p();var B=z.node||t(z,A),C=z.bootstrapped&&z.type!="email"?m:n;if(c("CurrentUser").isWorkUser())if(z.aux_data&&z.aux_data.is_email)C=p;else C=o;z.header=C;if(C!==v){var D=q(C);if(v!==null)c("CSS").addClass(D,"_3cz6");w=w.concat(D);v=C}return w.concat(B)},[]);if(w.length>0){var x=w.filter(function(z){return c("CSS").matchesSelector(z,"._3cz5")});if(x.length==1&&w[0].className==="_3cz5"&&w[0].attributes.data.value===n)w.shift()}var y=c("DOM").create("ul",{className:u,id:"typeahead_list_"+c("getOrCreateDOMID")(this.typeahead?this.typeahead:this.element)},w);y.setAttribute("role","listbox");return y};r.prototype.render=function(s,t,u){"use strict";var v={friends:[],others:[]};t.reduce(function(w,x){if(x.header===m)w.friends.push(x);else w.others.push(x);return w},v);t=v.friends.concat(v.others);return l.render.call(this,s,t,u)};function r(){"use strict";k.apply(this,arguments)}f.exports=r}),null);
__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],(function a(b,c,d,e,f,g){__p&&__p();var h={buildRequest:function i(j,k){__p&&__p();var l=(c("Form").getAttribute(j,"method")||"GET").toUpperCase(),m=k&&c("Parent").byTag(k,"button")||k,n=m&&c("Parent").byClass(m,"stat_elem")||j;if(c("CSS").hasClass(n,"async_saving"))return null;if(m&&(m.form!==j||m.nodeName!="INPUT"&&m.nodeName!="BUTTON"||m.type!="submit")){var o=c("DOMQuery").scry(j,".enter_submit_target")[0];o&&(m=o)}var p=c("Form").serialize(j,m);c("Form").setDisabled(j,true);var q=c("Form").getAttribute(j,"ajaxify")||c("Form").getAttribute(j,"action"),r=!!c("Form").getAttribute(j,"data-cors");c("trackReferrer")(j,q);return new(c("AsyncRequest"))().setAllowCrossOrigin(r).setURI(q).setData(p).setNectarModuleDataSafe(j).setReadOnly(l=="GET").setMethod(l).setRelativeTo(j).setStatusElement(n).setInitialHandler(c("Form").setDisabled.bind(null,j,false)).setHandler(function(s){c("Event").fire(j,"success",{response:s})}).setErrorHandler(function(s){if(c("Event").fire(j,"error",{response:s})!==false)c("AsyncResponse").defaultErrorHandler(s)}).setFinallyHandler(c("Form").setDisabled.bind(null,j,false))},send:function i(j,k){var l=h.buildRequest(j,k);if(l)l.send();return l}};f.exports=h}),null);
__d("TypeaheadSubmitOnSelect",["FormSubmit"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this._typeahead=i}h.prototype.enable=function(){"use strict";this._subscription=this._typeahead.subscribe("select",function(){var i=this._typeahead.getCore().getElement().form;if(i)i.getAttribute("rel")=="async"?c("FormSubmit").send(i):i.submit()}.bind(this))};h.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null};Object.assign(h.prototype,{_subscription:null});f.exports=h}),null);
__d("GroupsAddMessage",["CSS","Event","Toggler","TypeaheadSubmitOnSelect"],(function a(b,c,d,e,f,g){__p&&__p();var h={showNUX:true,toggleState:function i(j,k,l){__p&&__p();j.init();var m=j.getCore();m.reset();k.value="";if(!c("CSS").hasClass(l,"openToggler")){j.disableBehavior(c("TypeaheadSubmitOnSelect"));m.resetOnSelect=false}else{j.enableBehavior(c("TypeaheadSubmitOnSelect"));m.resetOnSelect=true}},initEvents:function i(j,k,l,m,n,o,p){c("Event").listen(j,"click",function(){h.toggleState(n,m,p)});c("Event").listen(k,"click",function(){h.toggleState(n,m,p);c("Toggler").toggle(p)});c("Event").listen(l,"success",function(){var q=n.getCore();q.reset()})},initNUXEvent:function i(j,k,l){c("Event").listen(j.getCore().getElement(),"select",function(event){if(k&&h.showNUX){k.show();c("Event").kill(event);h.showNUX=false}})}};f.exports=h}),null);
__d("GroupsAddMemberTypeaheadRenderer",["cx","fbt","DOM"],(function a(b,c,d,e,f,g,h,i){__p&&__p();function j(k,l){__p&&__p();var m=[];if(k.photo)m.push(c("DOM").create("img",{alt:"",src:k.photo,className:"_2-fx"}));if(k.text)m.push(c("DOM").create("span",{className:"_2-fy"},k.text));if(k.subtext){var n=[k.subtext];m.push(c("DOM").create("span",{className:"subtext"},n))}var o;if(k.type==="member")o=i._("Ya es miembro");else if(k.already_invited_to_group)o=i._("Persona ya invitada");else o=k.category;m.push(c("DOM").create("span",{className:"subtext"},o));var p=c("DOM").create("li",{className:k.type||""},m);if(k.text){p.setAttribute("title",k.text);p.setAttribute("role","option");p.setAttribute("aria-label",k.text)}return p}j.className="_2-fz";f.exports=j}),null);
__d("XGroupCommerceLoadMoreYourPostsInIslandController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/groupcommerce/ajax/yourposts/loadmore/",{load_more_container_id:{type:"String",required:true},cursor:{type:"String"},group_id:{type:"Int",required:true},load_count:{type:"Int",required:true},from_other_groups:{type:"Bool",defaultValue:false}})}),null);
__d("GroupYourPosts",["csx","cx","AsyncRequest","CSS","DataStore","DOM","Event","Parent","XGroupCommerceLoadMoreYourPostsInIslandController","getOrCreateDOMID"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j={setupShowMorePosts:function k(l,m){var n=c("Event").listen(l,"click",function(){n.remove();c("DOM").remove(l);m.forEach(function(o){c("CSS").show(o)})})},showMorePostsOnMarkAsSold:function k(l,m,n){__p&&__p();var o=false,p=0,q=function q(){__p&&__p();if(p===0)return;var s=c("DOM").scry(l,"._3nno")[0];if(!s){p=0;return}var t=c("DataStore").get(s,"cursor");if(!t)if(o){p=0;return}else o=true;var u=c("XGroupCommerceLoadMoreYourPostsInIslandController").getURIBuilder().setString("load_more_container_id",c("getOrCreateDOMID")(s)).setString("cursor",t).setInt("group_id",m).setInt("load_count",n).setBool("from_other_groups",o).getURI();new(c("AsyncRequest"))().setURI(u).setHandler(function(v){setTimeout(function(){p--;if(v.payload.postsLoaded===0&&!o)p++;q()},0)}).setErrorHandler(function(){}).send()},r=0;c("Event").listen(l,"click",function(event){__p&&__p();var s=c("Parent").bySelector(event.target,"._3nnn");if(!s)return;var t=c("DataStore").get(s,"markassold");if(!t)return;if(r%n===0)if(p++===0)q();r++})}};f.exports=j}),null);
__d("LitestandRHCAds",["csx","AdsRefreshHandler","Arbiter","DOMQuery","Event","NavigationMessage","Run","SubscriptionsHandler","ge"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=void 0,j=void 0,k=void 0,l=void 0,m=void 0;function n(){j&&j.forceLoadIfEnoughTimePassed(0)}function o(){var t=c("DOMQuery").scry(k,"._5f85 a")[0];if(t&&i)i.addSubscriptions(c("Event").listen(t,"click",n))}function p(){var t=c("ge")(l);if(t&&m){t.appendChild(m);m=null}}function q(){if(j){j.cleanup();j=null}if(i){i.release();i=null}m=null}function r(t,u){m=u;n()}var s={init:function t(u,v,w){k=c("ge")(u);l=u;j=new(c("AdsRefreshHandler"))(k,v,w).subscribeDefaultEventsForRefresh();i=new(c("SubscriptionsHandler"))();i.addSubscriptions(c("Arbiter").subscribe(c("NavigationMessage").NAVIGATION_BEGIN,q),c("Arbiter").subscribe("AdsRefreshHandler/AdsLoaded",o),c("Arbiter").subscribe("AdsRefreshHandler/AdsLoaded",p),c("Arbiter").subscribe("ProfileQuestionAnswered",r));o();c("Run").onLeave(q)}};f.exports=s}),null);
__d("GroupAddMemberCustomTypeahead",["Typeahead"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("Typeahead"));i=h&&h.prototype;function j(k,l,m,n,o){"use strict";i.constructor.call(this,k,l,m,n);this._memberSuggestions=o}j.prototype.containsInSuggestedMembers=function(k){"use strict";var l=parseInt(k,10);return this._memberSuggestions.indexOf(l)>-1};j.prototype.addSuggestedMember=function(k){"use strict";var l=parseInt(k,10);this._memberSuggestions.push(l)};j.prototype.removeSuggestedMember=function(k){"use strict";var l=parseInt(k,10),m=this._memberSuggestions.indexOf(l);if(m>-1)this._memberSuggestions.splice(m,1)};f.exports=j}),null);
__d("legacy:SubmitOnSelectTypeaheadBehavior",["TypeaheadSubmitOnSelect"],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.submitOnSelect=function(h){h.enableBehavior(c("TypeaheadSubmitOnSelect"))}}),3);
__d("TypeaheadShowResultsOnFocus",["Event","Keys"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this._typeahead=i}h.prototype.enable=function(){"use strict";this._typeahead.getCore().resetOnKeyup=false;this._subscription=this._typeahead.subscribe("bootstrap",function(i,j){this.firstFetch(j,this._typeahead.getCore(),this._typeahead.getData())}.bind(this));this._keyUpListener=c("Event").listen(this._typeahead.getCore().getElement(),"keyup",function(event){if(c("Event").getKeyCode(event)==c("Keys").BACKSPACE||c("Event").getKeyCode(event)==c("Keys").DELETE)this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this));this._focusListener=c("Event").listen(this._typeahead.getCore().getElement(),"focus",function(event){this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this))};h.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null;this._keyUpListener.remove();this._keyUpListener=null;this._focusListener.remove();this._focusListener=null};h.prototype.firstFetch=function(i,j,k){"use strict";!i.bootstrapping&&this.respond(j,k)};h.prototype.respond=function(i,j){"use strict";if(!i.getValue())this.refreshAndShowNeededResults(i,j)};h.prototype.refreshAndShowNeededResults=function(i,j){"use strict";var k=this.getUidsFromData(j);i.setValue("");var l=j.buildUids(" ",k);j.respond("",l)};h.prototype.getUidsFromData=function(i){"use strict";var j=i.getAllEntries(),k=[];for(var l in j)k.push({uid:j[l].uid,index:j[l].index});k.sort(function(m,n){return m.index-n.index});return k.map(function(m){return m.uid})};Object.assign(h.prototype,{_subscription:null,_keyUpListener:null,_focusListener:null});f.exports=h}),null);
__d("TypeaheadCustomGroupShowMemberSuggestionsOnFocus",["TypeaheadShowResultsOnFocus"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("TypeaheadShowResultsOnFocus"));i=h&&h.prototype;j.prototype.enable=function(){"use strict";i.enable.call(this);this.enableCustomizedFeature()};j.prototype.firstFetch=function(k,l,m){"use strict";setTimeout(function(){i.firstFetch.call(this,k,l,m)}.bind(this),200)};j.prototype.enableCustomizedFeature=function(){"use strict";this._typeahead.subscribe("select",function(k,l){this._typeahead.removeSuggestedMember(l.selected.uid);this.refreshAndShowNeededResults(this._typeahead.getCore(),this._typeahead.getData())}.bind(this))};j.prototype.getUidsFromData=function(k){"use strict";var l=k.getAllEntries(),m=[];for(var n in l)if(this._typeahead.containsInSuggestedMembers(l[n].uid))m.push({uid:l[n].uid,index:l[n].index});m.sort(function(o,p){return o.index-p.index});return m.map(function(o){return o.uid})};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("TypeaheadCustomGroupShowMemberSuggestionsOnRHCFocus",["TypeaheadCustomGroupShowMemberSuggestionsOnFocus"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("TypeaheadCustomGroupShowMemberSuggestionsOnFocus"));i=h&&h.prototype;j.prototype.enableCustomizedFeature=function(){"use strict";this._typeahead.subscribe("select",function(k,l){this._typeahead.removeSuggestedMember(l.selected.uid)}.bind(this))};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);