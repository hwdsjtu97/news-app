(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){e.exports=a(144)},106:function(e,t,a){},107:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},120:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(15),o=a.n(r),i=(a(106),a(107),a(108),a(38)),l=a(8),s=a(7),u=a(9),m=a(10),d=a(43),h=(a(109),a(110),a(96)),p=(a(111),a(16)),f=a(183),v=a(174),E=a(175),b=a(176),g=a(184),O=a(88),k=a.n(O),y=a(146),j=a(46),S=a(177),C=a(179),w=a(181),x=a(178),N=a(180),I=a(182),L=Object(p.a)((function(e){return{root:{margin:0,padding:e.spacing(2),borderBottom:"1px solid #DEDEDE",width:"auto"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},title:{fontWeight:500}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,r=Object(h.a)(e,["children","classes","onClose"]);return c.a.createElement(v.a,Object.assign({disableTypography:!0,className:a.root},r),c.a.createElement(y.a,{variant:"h6",className:a.title},t),n?c.a.createElement(g.a,{"aria-label":"close",className:a.closeButton,onClick:n},c.a.createElement(k.a,null)):null)})),T=(Object(p.a)((function(e){return{root:{padding:e.spacing(2)}}}))(E.a),Object(p.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(b.a),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClickOpen=function(e){n.setState({open:!0}),e.preventDefault()},n.handleClose=function(e){n.setState({open:!1}),e.preventDefault()},n.state={open:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.newsTitle,a=e.shareUrl;return c.a.createElement("div",{className:"share-button"},c.a.createElement(j.a,{onClick:this.handleClickOpen}),c.a.createElement(f.a,{onClose:this.handleClose,"aria-labelledby":"customized-dialog-title",open:this.state.open},c.a.createElement(L,{id:"customized-dialog-title",onClose:this.handleClose},t),c.a.createElement("h1",{style:{textAlign:"center",fontSize:"20px",margin:"20px"}},"Share via"),c.a.createElement("div",{className:"button-bar",style:{display:"flex",marginBottom:"20px"}},c.a.createElement("div",{style:{flexGrow:"1",textAlign:"center"}},c.a.createElement(S.a,{url:a,quote:"#CSCI_571_NewsApp"},c.a.createElement(x.a,{round:!0}))),c.a.createElement("div",{style:{flexGrow:"1",textAlign:"center"}},c.a.createElement(C.a,{url:a,hashtags:["CSCI_571_NewsApp"]},c.a.createElement(N.a,{round:!0}))),c.a.createElement("div",{style:{flexGrow:"1",textAlign:"center"}},c.a.createElement(w.a,{url:a,subject:"#CSCI_571_NewsApp"},c.a.createElement(I.a,{round:!0}))))))}}]),a}(c.a.Component)),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item;return c.a.createElement("div",{className:"news-context"},c.a.createElement("h1",{style:{display:"inline-block"}},e.webTitle," ",c.a.createElement(T,{newsTitle:e.webTitle,shareUrl:e.url})),c.a.createElement("p",null,e.description),c.a.createElement("div",{className:"context-foot"},c.a.createElement("span",{className:"date"},e.date.substring(0,10)),c.a.createElement("div",{id:e.section},e.section.toUpperCase())))}}]),a}(c.a.Component),B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item,t=e.imgUrl;return c.a.createElement("a",{href:"/article?id=".concat(e.id),style:{all:"unset"}},c.a.createElement("div",{className:"news-container"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:t,alt:""})),c.a.createElement(A,{item:e})))}}]),a}(c.a.Component),z=(a(120),a(26)),U=a(21),_=a(34),D=a(71),R=a(11),q=a(49);function P(){var e=Object(_.a)(["\n    all:unset;\n    color:black;\n    text-decoration: none;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n        all:unset;\n    }\n"]);return P=function(){return e},e}var G=Object(q.a)(U.b)(P()),W=function(e){return c.a.createElement(G,{to:"/search?q=".concat(e.data.value,"&source=").concat(e.data.source)},c.a.createElement(R.z.Option,e))};function F(e,t,a){var n;return function(){var c=this,r=arguments,o=function(){n=null,a||e.apply(c,r)},i=a&&!n;clearTimeout(n),n=setTimeout(o,t),i&&e.apply(c,r)}}var M={label:"Enter Keywords ..",value:"default"},J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleInputChange=F((function(e){var t=e.replace(/\W/g,"");return n.setState({inputValue:t}),t}),1e3),n.promiseOptions=F((function(e,t){setTimeout((function(){n.handleSearchChange(e,t,n.props.source)}),1e3)}),1e3),n.handleSearchChange=function(e,t,a){try{fetch("https://api.cognitive.microsoft.com/bing/v7.0/suggestions?q=".concat(e),{headers:{"Ocp-Apim-Subscription-Key":"529ec4d1f06e487983c2615d0100196a"}}).then((function(e){return e.json()})).then((function(e){var n=e.suggestionGroups[0].searchSuggestions.map((function(e){return{value:e.displayText,label:e.displayText,source:a}}));t(n)}))}catch(n){console.error("Error fetching search ".concat(e),n)}};var c=void 0===e.source?localStorage.getItem("source"):e.source;return n.state={inputValue:"",source:c},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"container",style:{width:"250px",display:"block"}},c.a.createElement(D.a,{loadOptions:this.promiseOptions,onInputChange:this.handleInputChange,defaultValue:M,style:{width:"100%"},components:{Option:W},noOptionsMessage:function(){return c.a.createElement("span",null,"No match")}})))}}]),a}(c.a.Component),V=(a(83),a(41)),H=a(20),K=(a(84),a(69)),Y=a.n(K),$=a(33),Q=a(50),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var c="guardian"===e.source;return n.state={checked:c,like:!1,source:e.source},n.changeSource=e.changeSource,n.handleChange=n.handleChange.bind(Object(z.a)(n)),n.handleLike=n.handleLike.bind(Object(z.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t,a=this;t=e?"guardian":"nytimes",this.setState({checked:e,source:t},(function(){a.changeSource()}))}},{key:"handleLike",value:function(e){this.setState(Object(d.a)({},this.state,{like:e}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"header"},c.a.createElement(V.a,{variant:"dark",className:"color-nav",expand:"lg"},c.a.createElement(J,{source:this.state.source}),c.a.createElement(V.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(V.a.Collapse,{id:"basic-navbar-nav",className:"navbar-collapse"},c.a.createElement(H.a,{className:"mr-auto"},c.a.createElement(H.a.Link,{href:"/",active:"/"===window.location.pathname},"Home"),c.a.createElement(H.a.Link,{href:"/world",active:"/world"===window.location.pathname},"World"),c.a.createElement(H.a.Link,{href:"/politics",active:"/politics"===window.location.pathname},"Politics"),c.a.createElement(H.a.Link,{href:"/business",active:"/business"===window.location.pathname},"Business"),c.a.createElement(H.a.Link,{href:"/technology",active:"/technology"===window.location.pathname},"Technology"),c.a.createElement(H.a.Link,{href:"sports",active:"/business"===window.location.pathname},"Sports")),c.a.createElement(U.b,{to:"/favorites"},c.a.createElement("div",{"data-tip":"Bookmark",onClick:function(){return e.handleLike(!0)}},this.state.like?c.a.createElement($.a,{style:{color:"white",fontSize:"20px",margin:"10px"}}):c.a.createElement($.b,{style:{color:"white",fontSize:"20px",margin:"10px"}}))),c.a.createElement(Q.a,{place:"bottom",type:"dark",effect:"solid"}),c.a.createElement("div",{className:"sourceSwitch"},c.a.createElement("span",{className:"news"},"NYTimes"),c.a.createElement(Y.a,{onChange:function(){return e.handleChange(!e.state.checked)},checked:this.state.checked,onColor:"#0d96f5",offColor:"#dddddd",uncheckedIcon:!1,checkedIcon:!1}),c.a.createElement("span",{className:"news"},"Guardian")))))}}]),a}(c.a.Component),Z=a(4),ee=(a(125),a(94)),te=a.n(ee);a(129);function ae(){var e=Object(_.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return ae=function(){return e},e}var ne=Object(Z.css)(ae()),ce=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loading:!0},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"sweet-loading"},c.a.createElement(te.a,{css:ne,size:40,color:"#123abc",loading:this.state.loading}),c.a.createElement("p",null,"loading"))}}]),a}(c.a.Component),re="https://news-app-wendihua.azurewebsites.net",oe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a),(e=t.call(this)).changeSource=function(){"guardian"===e.state.source?e.setState({source:"nytimes"},(function(){localStorage.setItem("source","nytimes")})):e.setState({source:"guardian"},(function(){localStorage.setItem("source","guardian")}))};var n=void 0===localStorage.source?"guardian":localStorage.source;return e.state={source:n},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(X,{source:this.state.source,changeSource:this.changeSource}),c.a.createElement("div",{className:"news-list"},this.state.isLoaded?this.state.results.map((function(e,t){return c.a.createElement(B,{key:t,item:e})})):c.a.createElement(ce,null)))}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.match,n=t.location,c="".concat(re,"/").concat(this.state.source).concat(a.url);this.setState({match:a,location:n}),fetch(c).then((function(e){return e.json()})).then((function(t){e.setState(Object(d.a)({},e.state,{results:t.returns,isLoaded:!0}))}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(t.source!==this.state.source){var c=this.props,r=c.match,o=(c.location,"".concat(re,"/").concat(this.state.source).concat(r.url));fetch(o).then((function(e){return e.json()})).then((function(e){n.setState(Object(d.a)({},n.state,{results:e.returns,isLoaded:!0}))}),(function(e){n.setState({isLoaded:!0,error:e})}))}}}]),a}(c.a.Component),ie=(c.a.Component,c.a.Component,a(130),a(73)),le=a(19),se=(a(66),a(95)),ue=a.n(se),me=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.id;this.removeCommentBox=ue()("5723096048730112-proj",{createBoxUrl:function(e,t){return t.search="",t.hash=e,t.href}})}},{key:"componentWillUnmount",value:function(){this.removeCommentBox()}},{key:"render",value:function(){var e=this.props.id;return c.a.createElement("div",null,c.a.createElement("div",{className:"commentbox",id:e}))}}]),a}(c.a.Component);Storage.prototype.setObject=function(e,t){this.setItem(e,JSON.stringify(t))},Storage.prototype.getObject=function(e){var t=this.getItem(e);return t&&JSON.parse(t)};var de=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).saveFavorite=function(e){var t={};if(t[e.id]=e,void 0===localStorage.favorite)localStorage.setObject("favorite",t);else{var a=localStorage.getObject("favorite");a[e.id]=e,localStorage.setObject("favorite",a)}},n.removeFavorite=function(e){var t=localStorage.getObject("favorite");delete t[e.id],localStorage.setObject("favorite",t)},n.changeCollapse=function(){"collapsed"===n.state.collapsed?(n.setState({collapsed:"expand"}),n.scroll(n.myRef)):(n.setState({collapsed:"collapsed"}),n.scroll(n.myRef2))},n.notifyA=function(e){Object(le.b)("Saving ".concat(e),{containerId:"A",bodyClassName:"notify"})},n.notifyB=function(e){Object(le.b)("Removing ".concat(e),{containerId:"A",bodyClassName:"notify"})},n.myRef=c.a.createRef(),n.myRef2=c.a.createRef(),void 0===localStorage.favorite&&localStorage.setObject("favorite",{});var r=void 0!==localStorage.getObject("favorite")[e.content.id];return n.state={collapsed:"collapsed",like:r,content:e.content},n.handleLike=n.handleLike.bind(Object(z.a)(n)),n.changeCollapse=n.changeCollapse.bind(Object(z.a)(n)),n.scroll=n.scroll.bind(Object(z.a)(n)),n}return Object(s.a)(a,[{key:"handleLike",value:function(e,t){this.setState({like:e}),e?(this.notifyA(t),this.saveFavorite(this.state.content)):(this.notifyB(t),this.removeFavorite(this.state.content))}},{key:"scroll",value:function(e){e.current.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.props.content,a=t.image,n=t.description;return c.a.createElement("div",{className:"article-container"},c.a.createElement("h1",null,t.title),c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"date"},t.date),c.a.createElement("div",{className:"share"},c.a.createElement("div",{"data-tip":"Facebook",style:{flexGrow:"1",textAlign:"center"}},c.a.createElement(S.a,{url:t.url,quote:"#CSCI_571_NewsApp"},c.a.createElement(x.a,{round:!0,size:"30px"}))),c.a.createElement("div",{"data-tip":"Twitter",style:{flexGrow:"1",textAlign:"center"}},c.a.createElement(C.a,{url:t.url,hashtags:["CSCI_571_NewsApp"]},c.a.createElement(N.a,{round:!0,size:"30px"}))),c.a.createElement("div",{"data-tip":"Email",style:{flexGrow:"1",textAlign:"center"}},c.a.createElement(w.a,{url:t.url,subject:"#CSCI_571_NewsApp"},c.a.createElement(I.a,{round:!0,size:"30px"})))),c.a.createElement("div",{className:"bookmark"},c.a.createElement(le.a,{containerId:"A",position:le.b.POSITION.TOP_CENTER,hideProgressBar:!0}),c.a.createElement("div",{"data-tip":"Bookmark",onClick:function(){e.handleLike(!e.state.like,t.title)}},this.state.like?c.a.createElement($.a,{style:{color:"red",fontSize:"25px",margin:"10px"}}):c.a.createElement($.b,{style:{color:"red",fontSize:"25px",margin:"10px"}})),c.a.createElement(Q.a,{place:"top",type:"dark",effect:"solid"}))),c.a.createElement("img",{ref:this.myRef2,src:a,alt:""}),c.a.createElement("p",{className:this.state.collapsed},n),c.a.createElement("div",{className:"expand-button",onClick:function(){e.changeCollapse()}},"collapsed"===this.state.collapsed?c.a.createElement(ie.b,null):c.a.createElement(ie.a,null)),c.a.createElement("div",{ref:this.myRef},c.a.createElement(me,{id:t.id})))}}]),a}(c.a.Component),he=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var c="guardian"===e.source;return n.state={checked:c,like:e.like,source:e.source},n.changeSource=e.changeSource,n.handleChange=n.handleChange.bind(Object(z.a)(n)),n.handleLike=n.handleLike.bind(Object(z.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){var t,a=this;t=e?"guardian":"nytimes",this.setState({checked:e,source:t},(function(){a.changeSource()}))}},{key:"handleLike",value:function(e){this.setState(Object(d.a)({},this.state,{like:e}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"header"},c.a.createElement(V.a,{variant:"dark",className:"color-nav",expand:"lg"},c.a.createElement(J,{source:this.state.source}),c.a.createElement(V.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(V.a.Collapse,{id:"basic-navbar-nav",className:"navbar-collapse"},c.a.createElement(H.a,{className:"mr-auto"},c.a.createElement(H.a.Link,{href:"/"},"Home"),c.a.createElement(H.a.Link,{href:"world"},"World"),c.a.createElement(H.a.Link,{href:"politics"},"Politics"),c.a.createElement(H.a.Link,{href:"business"},"Business"),c.a.createElement(H.a.Link,{href:"technology"},"Technology"),c.a.createElement(H.a.Link,{href:"sports"},"Sports")),c.a.createElement(U.b,{to:"/favorites"},c.a.createElement("div",{"data-tip":"Bookmark",onClick:function(){return e.handleLike(!0)}},this.state.like?c.a.createElement($.a,{style:{color:"white",fontSize:"20px",margin:"10px"}}):c.a.createElement($.b,{style:{color:"white",fontSize:"20px",margin:"10px"}}))),c.a.createElement(Q.a,{place:"bottom",type:"dark",effect:"solid"}))))}}]),a}(c.a.Component),pe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);e.match;var c=e.location.search.slice(4),r=null===c.match(/www.nytimes.com/g)?"guardian":"nytimes";return n.state={content:{},isLoaded:!1,source:r,articleId:c},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.match,e.location,this.state.content);return c.a.createElement("div",null,c.a.createElement(he,{like:!1}),this.state.isLoaded?c.a.createElement(de,{content:t}):c.a.createElement(ce,null))}}]),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=(t.match,t.location.search.slice(4),"".concat("https://news-app-wendihua.azurewebsites.net","/").concat(this.state.source,"/article?id=").concat(this.state.articleId));fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({content:t,isLoaded:!0})}),(function(t){e.setState({isLoaded:!0,error:t})}))}}]),a}(c.a.Component),fe=(a(131),a(86),a(62));function ve(){var e=Object(_.a)(["\n    all:unset;\n    text-decoration: none;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n        all:unset;\n    }\n"]);return ve=function(){return e},e}var Ee=Object(q.a)(U.b)(ve()),be=function(e){return c.a.createElement("div",{style:{display:"inline-block"}},c.a.createElement(j.b,{onClick:function(t){var a;t.preventDefault(),e.deleteItem(e.id),a=e.title,e.id,Object(le.b)("Removing ".concat(a),{bodyClassName:"notify",containerId:"favorite"})}}))},ge=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleTruncate=function(e){n.state.truncated!==e&&n.setState({truncated:e})},n.state={content:e.content,truncated:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.content,a=e.deleteItem;return c.a.createElement("div",{className:"card-main"},c.a.createElement(Ee,{to:"/article?id=".concat(t.id),style:{textDecoration:"none"}},c.a.createElement("h1",null,c.a.createElement(fe.a,{onTruncate:this.handleTruncate,lines:2,ellipsis:c.a.createElement("span",null,"... ",c.a.createElement(T,{newsTitle:t.title,shareUrl:t.url}),c.a.createElement(be,{deleteItem:a,id:t.id,title:t.title}))},t.title),this.state.truncated?null:c.a.createElement("span",null," ",c.a.createElement(T,{newsTitle:t.title,shareUrl:t.url}),c.a.createElement(be,{deleteItem:a,id:t.id,title:t.title}))),c.a.createElement("img",{src:t.image,alt:""}),c.a.createElement("div",{className:"card-foot"},c.a.createElement("span",{className:"date"},t.date),c.a.createElement("div",{id:t.section},t.section.toUpperCase()),c.a.createElement("div",{id:t.source},t.source.toUpperCase()))))}}]),a}(c.a.Component),Oe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).deleteItem=function(e){var t=n.state,a=t.favoriteList,c=t.favorite,r=a.indexOf(e);-1!==r&&a.splice(r,1),delete c[e],localStorage.setObject("favorite",c),n.setState({favorite:c,favoriteList:a})};var c=localStorage.getObject("favorite"),r=[];for(var o in c)r.push(o);return n.state={favorite:c,favoriteList:r},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.favorite,n=t.favoriteList;return c.a.createElement("div",null,c.a.createElement(he,{like:!0}),0===n.length?c.a.createElement("h1",{style:{textAlign:"center",fontSize:"30px"}},"You have no saved articles"):c.a.createElement("h1",{style:{margin:"20px 0 10px 20px"}},"Favorites"),c.a.createElement(le.a,{containerId:"favorite",position:le.b.POSITION.TOP_CENTER,hideProgressBar:!0}),c.a.createElement("div",{className:"fav-main"},n.map((function(t,n){return c.a.createElement("div",{className:"item",key:n},c.a.createElement(ge,{content:a[t],deleteItem:e.deleteItem}))}))))}}]),a}(c.a.Component);function ke(){var e=Object(_.a)(["\n    all:unset;\n    text-decoration: none;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n        all:unset;\n    }\n"]);return ke=function(){return e},e}var ye=Object(q.a)(U.b)(ke()),je=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleTruncate=function(e){n.state.truncated!==e&&n.setState({truncated:e})},n.state={content:e.content,truncated:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.content;e.deleteItem;return c.a.createElement("div",{className:"card-main"},c.a.createElement(ye,{to:"/article?id=".concat(t.id),style:{textDecoration:"none"}},c.a.createElement("h1",null,c.a.createElement(fe.a,{onTruncate:this.handleTruncate,lines:2,ellipsis:c.a.createElement("span",null,"... ",c.a.createElement(T,{newsTitle:t.title,shareUrl:t.url}))},t.title),this.state.truncated?null:c.a.createElement("span",null," ",c.a.createElement(T,{newsTitle:t.title,shareUrl:t.url}))),c.a.createElement("img",{src:t.image,alt:""}),c.a.createElement("div",{className:"card-foot"},c.a.createElement("span",{className:"date"},t.date),c.a.createElement("div",{id:t.section},t.section.toUpperCase()))))}}]),a}(c.a.Component),Se=a(74),Ce=a.n(Se),we="https://news-app-wendihua.azurewebsites.net",xe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);var c=Ce.a.parse(e.location.search);return null===localStorage.getItem("source")&&localStorage.setItem("source","guardian"),"undefined"===c.source&&(c.source=localStorage.getItem("source")),n.state={q:c.q,source:c.source,isLoaded:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(he,null),c.a.createElement("h1",{style:{margin:"20px 0 10px 20px"}},"Results"),c.a.createElement(le.a,{containerId:"favorite",position:le.b.POSITION.TOP_CENTER,hideProgressBar:!0}),this.state.isLoaded?c.a.createElement("div",{className:"fav-main"},this.state.results.map((function(t,a){return c.a.createElement("div",{className:"item",key:a},c.a.createElement(je,{content:t,deleteItem:e.deleteItem}))}))):c.a.createElement(ce,null))}},{key:"componentDidMount",value:function(){var e=this,t="".concat(we,"/").concat(this.state.source,"/search?q=").concat(this.state.q);fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({results:t.returns,isLoaded:!0})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(e.location.search!==this.props.location.search){var c=Ce.a.parse(this.props.location.search);"undefined"===c.source&&(c.source=localStorage.getItem("source")),this.setState({q:c.q,source:c.source});var r="".concat(we,"/").concat(c.source,"/search?q=").concat(c.q);fetch(r).then((function(e){return e.json()})).then((function(e){n.setState({results:e.returns,isLoaded:!0})}),(function(e){n.setState({isLoaded:!0,error:e})}))}}}]),a}(c.a.Component);var Ne=function(){return null===localStorage.getItem("favorite")&&localStorage.setObject("favorite",{}),null===localStorage.getItem("source")&&localStorage.setItem("source","guardian"),c.a.createElement("main",null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",component:oe,exact:!0}),c.a.createElement(i.a,{path:"/world",component:oe}),c.a.createElement(i.a,{path:"/sports",component:oe}),c.a.createElement(i.a,{path:"/politics",component:oe}),c.a.createElement(i.a,{path:"/business",component:oe}),c.a.createElement(i.a,{path:"/technology",component:oe}),c.a.createElement(i.a,{path:"/favorites",component:Oe}),c.a.createElement(i.a,{path:"/article",component:pe}),c.a.createElement(i.a,{path:"/search",component:xe})),c.a.createElement("div",{className:"news-list"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(U.a,null,c.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){},86:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.e20ab079.chunk.js.map