/*! For license information please see component---src-pages-index-js-7a90ab52f7e65f084d6d.js.LICENSE.txt */
(self.webpackChunkthesis=self.webpackChunkthesis||[]).push([[678],{1530:function(e,t){var r,a,n,s,o,i,l,c,f,u,d,m,p,y,g,h;a="undefined"!=typeof window?window:this,o="0.5.4",i="hasOwnProperty",l=/[\.\/]/,c=/\s*,\s*/,f=function(e,t){return e-t},u={n:{}},d=function(){for(var e=0,t=this.length;e<t;e++)if(void 0!==this[e])return this[e]},m=function(){for(var e=this.length;--e;)if(void 0!==this[e])return this[e]},p=Object.prototype.toString,y=String,g=Array.isArray||function(e){return e instanceof Array||"[object Array]"==p.call(e)},h=function(e,t){var r,a=s,o=Array.prototype.slice.call(arguments,2),i=h.listeners(e),l=0,c=[],u={},p=[],y=n;p.firstDefined=d,p.lastDefined=m,n=e,s=0;for(var g=0,b=i.length;g<b;g++)"zIndex"in i[g]&&(c.push(i[g].zIndex),i[g].zIndex<0&&(u[i[g].zIndex]=i[g]));for(c.sort(f);c[l]<0;)if(r=u[c[l++]],p.push(r.apply(t,o)),s)return s=a,p;for(g=0;g<b;g++)if("zIndex"in(r=i[g]))if(r.zIndex==c[l]){if(p.push(r.apply(t,o)),s)break;do{if((r=u[c[++l]])&&p.push(r.apply(t,o)),s)break}while(r)}else u[r.zIndex]=r;else if(p.push(r.apply(t,o)),s)break;return s=a,n=y,p},h._events=u,h.listeners=function(e){var t,r,a,n,s,o,i,c,f=g(e)?e:e.split(l),d=u,m=[d],p=[];for(n=0,s=f.length;n<s;n++){for(c=[],o=0,i=m.length;o<i;o++)for(r=[(d=m[o].n)[f[n]],d["*"]],a=2;a--;)(t=r[a])&&(c.push(t),p=p.concat(t.f||[]));m=c}return p},h.separator=function(e){e?(e="["+(e=y(e).replace(/(?=[\.\^\]\[\-])/g,"\\"))+"]",l=new RegExp(e)):l=/[\.\/]/},h.on=function(e,t){if("function"!=typeof t)return function(){};for(var r=g(e)?g(e[0])?e:[e]:y(e).split(c),a=0,n=r.length;a<n;a++)!function(e){for(var r,a=g(e)?e:y(e).split(l),n=u,s=0,o=a.length;s<o;s++)n=(n=n.n).hasOwnProperty(a[s])&&n[a[s]]||(n[a[s]]={n:{}});for(n.f=n.f||[],s=0,o=n.f.length;s<o;s++)if(n.f[s]==t){r=!0;break}!r&&n.f.push(t)}(r[a]);return function(e){+e==+e&&(t.zIndex=+e)}},h.f=function(e){var t=[].slice.call(arguments,1);return function(){h.apply(null,[e,null].concat(t).concat([].slice.call(arguments,0)))}},h.stop=function(){s=1},h.nt=function(e){var t=g(n)?n.join("."):n;return e?new RegExp("(?:\\.|\\/|^)"+e+"(?:\\.|\\/|$)").test(t):t},h.nts=function(){return g(n)?n:n.split(l)},h.off=h.unbind=function(e,t){if(e){var r=g(e)?g(e[0])?e:[e]:y(e).split(c);if(r.length>1)for(var a=0,n=r.length;a<n;a++)h.off(r[a],t);else{r=g(e)?e:y(e).split(l);var s,o,f,d,m,p=[u],b=[];for(a=0,n=r.length;a<n;a++)for(d=0;d<p.length;d+=f.length-2){if(f=[d,1],s=p[d].n,"*"!=r[a])s[r[a]]&&(f.push(s[r[a]]),b.unshift({n:s,name:r[a]}));else for(o in s)s[i](o)&&(f.push(s[o]),b.unshift({n:s,name:o}));p.splice.apply(p,f)}for(a=0,n=p.length;a<n;a++)for(s=p[a];s.n;){if(t){if(s.f){for(d=0,m=s.f.length;d<m;d++)if(s.f[d]==t){s.f.splice(d,1);break}!s.f.length&&delete s.f}for(o in s.n)if(s.n[i](o)&&s.n[o].f){var v=s.n[o].f;for(d=0,m=v.length;d<m;d++)if(v[d]==t){v.splice(d,1);break}!v.length&&delete s.n[o].f}}else for(o in delete s.f,s.n)s.n[i](o)&&s.n[o].f&&delete s.n[o].f;s=s.n}e:for(a=0,n=b.length;a<n;a++){for(o in(s=b[a]).n[s.name].f)continue e;for(o in s.n[s.name].n)continue e;delete s.n[s.name]}}}else h._events=u={n:{}}},h.once=function(e,t){var r=function(){return h.off(e,r),t.apply(this,arguments)};return h.on(e,r)},h.version=o,h.toString=function(){return"You are running Eve 0.5.4"},a.eve=h,e.exports?e.exports=h:void 0===(r=function(){return h}.apply(t,[]))||(e.exports=r)},565:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return rr},default:function(){return tr}});var a=r(7294),n=r.t(a,2),s=r.p+"static/v2-aae1212fddb4b1d95d5c30a1980df6c3.png",o=r(3190);var i=e=>{const{0:t,1:r}=(0,a.useState)(!1);return a.createElement("header",null,a.createElement("div",{id:"nav-logo-container"},a.createElement("img",{src:s}),a.createElement("button",{id:"logo",onClick:()=>e.scrollTo(e.welcomeRef,0)},"Thesis")),a.createElement("nav",null,a.createElement("div",{id:"web-navigation-bar"},a.createElement("button",{onClick:()=>e.scrollTo(e.scheduleRef,-200)},a.createElement("span",null,"Schedule")),a.createElement("button",{onClick:()=>e.scrollTo(e.staffRef,-100)},a.createElement("span",null,"Staff")),a.createElement("a",{href:"https://beacons.ai/thesisindoor"},a.createElement("span",null,"Links")))),a.createElement("div",{id:"mobile-navigation-bar"},a.createElement(o.slide,{right:!0,onOpen:()=>r(!0),onClose:()=>r(!1),isOpen:t},a.createElement("a",{className:"menu-item",onClick:()=>e.scrollTo(e.scheduleRef,-200)},"Schedule"),a.createElement("a",{className:"menu-item",onClick:()=>e.scrollTo(e.staffRef,-100)},"Staff"),a.createElement("a",{className:"menu-item",href:"https://beacons.ai/thesisindoor"},"Links"))))},l=r.p+"static/body-min-40cd3cdc90a2b12367de59419abbcd64.png",c=r.p+"static/arm-abc2b06f43b1a7dbdee86667cad4fc34.png";var f=e=>a.createElement("h1",{className:"glitch","data-text":e.text},e.text);var u=e=>{const t=(0,a.useRef)(null),r=(0,a.useRef)(null);return a.createElement("div",{id:"welcome",ref:e.reference},a.createElement("div",{id:"welcome-text"},a.createElement(f,{text:"Thesis"}),a.createElement(f,{text:"Percussion"}),a.createElement("p",null,"Statement To Be Made")),a.createElement("div",{id:"background-container"}),a.createElement("div",{className:"foo loading",id:"arm-container",ref:t},a.createElement("img",{className:"welcome-image",id:"arm",src:c})),a.createElement("div",{className:"loading",id:"body-container",ref:r},a.createElement("img",{className:"welcome-image",id:"body",src:l})))},d=r.p+"static/bwncpa-clear-bf410b3dfda314d54641ee5b7ce9ca21.png";var m=e=>a.createElement("div",{className:"award"},a.createElement("img",{src:d}),a.createElement("h3",null,e.location),a.createElement("h4",null,"First Place"));var p=e=>a.createElement("div",{id:"awards"},a.createElement("h1",null,"Competition Results"),a.createElement("div",{id:"awards-list"},[{location:"James Logan HS",date:"March 18, 2023"},{location:"American Canyon",date:"Feb 11, 2023"},{location:"NCPA Championships Stockton Arena",date:"April 15, 2023"}].map(((e,t)=>a.createElement(m,Object.assign({key:t,index:t},e)))))),y=r(1883);var g=e=>a.createElement("div",null,a.createElement("h2",null,e.event),a.createElement("h4",null,e.description));var h=e=>{const t=(0,y.useStaticQuery)("1088844929").allSanitySchedule.nodes;return a.createElement("div",{id:"schedule"},a.createElement("h1",{ref:e.reference},"2024 Schedule"),a.createElement("div",{id:"events"},t.map(((e,t)=>a.createElement(g,{key:t,event:e.event,description:e.description})))))};var b=e=>a.createElement("div",{className:"person"},a.createElement("img",{src:e.image}),a.createElement("h3",null,e.title),a.createElement("h4",null,e.name));var v=e=>a.createElement("div",{className:"staff"},a.createElement("h2",null,e.title),a.createElement("div",{className:"staff-list"},e.data.map(((e,t)=>a.createElement(b,Object.assign({key:t,index:t},e))))));var x={Aaron:r.p+"static/aaron-c4a6b0df86d7b4575af74d57da589c76.jpg",Ahmad:r.p+"static/Ahmad-fdab42bb497b8c9652bf30530ead5ab1.jpg",Bailey:r.p+"static/bailey-bf84cfedadbedf78a3b02d3862141b28.jpg",Brandon:r.p+"static/brandon-f092aef8e3748ee29a55fee3db50788c.jpg",Brianna:r.p+"static/Brianna-33f8a49a8e30be3119acd157e91f497c.jpg",Bryan:r.p+"static/bryanC-afaf17f3b840ded30fc6b4307a2853d9.jpg",Casey:r.p+"static/casey-e526ced57e099031415c34cf53eeed17.jpg",Charlotte:r.p+"static/charlotte-5f1d70315b7a4fe55254b28b589d39a3.jpg",Chris:r.p+"static/Chris-8f4e8c4e81f7b5c2d371406055bd5bf4.jpg",ChrisSwan:r.p+"static/Chris-swan-9b5a852b531a72197d91fb52b84717a6.jpg",Emily:r.p+"static/emily-f9759eeff27680b2fc5c774cb85364a0.jpg",Gabe:r.p+"static/Gabe-2eb1d3aa493af3fdfb7b40a359266d0c.jpg",Jaime:r.p+"static/jaime-ddb8d6a29e8a9e4d1c1e54d5b2561956.jpg",Joy:r.p+"static/Joy-752853ddac4126e2e1c0feae8eead160.jpg",Kevin:r.p+"static/KevinG-cfa22eb53ad7ad5870b55c91e4ad7a28.jpg",KK:r.p+"static/kk-c5d9f78ae7cdbf340b7b94e4e0cbace0.jpg",Matt:r.p+"static/mattC-053c54e5fd9a2dd6d0022dc4cf67d0ae.jpg",Nick:r.p+"static/nickC-abd32d613c5b4c402e9f21c45c049904.jpg",Sean:r.p+"static/Sean-03c57c0bd4de475703ca33eb6a921a9f.jpg",Trent:r.p+"static/trent-4167187f9945dcbb3e15cd17621a7c2b.jpg",Zak:r.p+"static/zak-0e61f65f57778ef3ec711ea5565afefa.jpg"};var w=e=>a.createElement("div",{id:"footer"},a.createElement("p",null,"All Rights Reservered")),C=r.p+"static/group-20b56beedb4e8f60d054c76b6c90bf0a.jpg",O=r.p+"static/yell-crop-7dd0459a79d04154ccdc3c1be981ec4c.png",E=r.p+"static/drum-92242eab9ad03c0ac541267793218df2.png",k=r(5893);var N=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(a){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),S=Math.abs,T=String.fromCharCode,M=Object.assign;function _(e){return e.trim()}function I(e,t,r){return e.replace(t,r)}function j(e,t){return e.indexOf(t)}function z(e,t){return 0|e.charCodeAt(t)}function $(e,t,r){return e.slice(t,r)}function A(e){return e.length}function P(e){return e.length}function Y(e,t){return t.push(e),e}var B=1,W=1,R=0,V=0,L=0,F="";function D(e,t,r,a,n,s,o){return{value:e,root:t,parent:r,type:a,props:n,children:s,line:B,column:W,length:o,return:""}}function X(e,t){return M(D("",null,null,"",null,null,0),e,{length:-e.length},t)}function H(){return L=V>0?z(F,--V):0,W--,10===L&&(W=1,B--),L}function G(){return L=V<R?z(F,V++):0,W++,10===L&&(W=1,B++),L}function K(){return z(F,V)}function q(){return V}function J(e,t){return $(F,e,t)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z(e){return B=W=1,R=A(F=e),V=0,[]}function Q(e){return F="",e}function ee(e){return _(J(V-1,ae(91===e?e+2:40===e?e+1:e)))}function te(e){for(;(L=K())&&L<33;)G();return U(e)>2||U(L)>3?"":" "}function re(e,t){for(;--t&&G()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return J(e,q()+(t<6&&32==K()&&32==G()))}function ae(e){for(;G();)switch(L){case e:return V;case 34:case 39:34!==e&&39!==e&&ae(L);break;case 40:41===e&&ae(e);break;case 92:G()}return V}function ne(e,t){for(;G()&&e+L!==57&&(e+L!==84||47!==K()););return"/*"+J(t,V-1)+"*"+T(47===e?e:G())}function se(e){for(;!U(K());)G();return J(e,V)}var oe="-ms-",ie="-moz-",le="-webkit-",ce="comm",fe="rule",ue="decl",de="@keyframes";function me(e,t){for(var r="",a=P(e),n=0;n<a;n++)r+=t(e[n],n,e,t)||"";return r}function pe(e,t,r,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ue:return e.return=e.return||e.value;case ce:return"";case de:return e.return=e.value+"{"+me(e.children,a)+"}";case fe:e.value=e.props.join(",")}return A(r=me(e.children,a))?e.return=e.value+"{"+r+"}":""}function ye(e){return Q(ge("",null,null,null,[""],e=Z(e),0,[0],e))}function ge(e,t,r,a,n,s,o,i,l){for(var c=0,f=0,u=o,d=0,m=0,p=0,y=1,g=1,h=1,b=0,v="",x=n,w=s,C=a,O=v;g;)switch(p=b,b=G()){case 40:if(108!=p&&58==z(O,u-1)){-1!=j(O+=I(ee(b),"&","&\f"),"&\f")&&(h=-1);break}case 34:case 39:case 91:O+=ee(b);break;case 9:case 10:case 13:case 32:O+=te(p);break;case 92:O+=re(q()-1,7);continue;case 47:switch(K()){case 42:case 47:Y(be(ne(G(),q()),t,r),l);break;default:O+="/"}break;case 123*y:i[c++]=A(O)*h;case 125*y:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+f:-1==h&&(O=I(O,/\f/g,"")),m>0&&A(O)-u&&Y(m>32?ve(O+";",a,r,u-1):ve(I(O," ","")+";",a,r,u-2),l);break;case 59:O+=";";default:if(Y(C=he(O,t,r,c,f,n,i,v,x=[],w=[],u),s),123===b)if(0===f)ge(O,t,C,C,x,s,u,i,w);else switch(99===d&&110===z(O,3)?100:d){case 100:case 108:case 109:case 115:ge(e,C,C,a&&Y(he(e,C,C,0,0,n,i,v,n,x=[],u),w),n,w,u,i,a?x:w);break;default:ge(O,C,C,C,[""],w,0,i,w)}}c=f=m=0,y=h=1,v=O="",u=o;break;case 58:u=1+A(O),m=p;default:if(y<1)if(123==b)--y;else if(125==b&&0==y++&&125==H())continue;switch(O+=T(b),b*y){case 38:h=f>0?1:(O+="\f",-1);break;case 44:i[c++]=(A(O)-1)*h,h=1;break;case 64:45===K()&&(O+=ee(G())),d=K(),f=u=A(v=O+=se(q())),b++;break;case 45:45===p&&2==A(O)&&(y=0)}}return s}function he(e,t,r,a,n,s,o,i,l,c,f){for(var u=n-1,d=0===n?s:[""],m=P(d),p=0,y=0,g=0;p<a;++p)for(var h=0,b=$(e,u+1,u=S(y=o[p])),v=e;h<m;++h)(v=_(y>0?d[h]+" "+b:I(b,/&\f/g,d[h])))&&(l[g++]=v);return D(e,t,r,0===n?fe:i,l,c,f)}function be(e,t,r){return D(e,t,r,ce,T(L),$(e,2,-2),0)}function ve(e,t,r,a){return D(e,t,r,ue,$(e,0,a),$(e,a+1,-1),a)}var xe=function(e,t,r){for(var a=0,n=0;a=n,n=K(),38===a&&12===n&&(t[r]=1),!U(n);)G();return J(e,V)},we=function(e,t){return Q(function(e,t){var r=-1,a=44;do{switch(U(a)){case 0:38===a&&12===K()&&(t[r]=1),e[r]+=xe(V-1,t,r);break;case 2:e[r]+=ee(a);break;case 4:if(44===a){e[++r]=58===K()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=T(a)}}while(a=G());return e}(Z(e),t))},Ce=new WeakMap,Oe=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,a=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Ce.get(r))&&!a){Ce.set(e,!0);for(var n=[],s=we(t,n),o=r.props,i=0,l=0;i<s.length;i++)for(var c=0;c<o.length;c++,l++)e.props[l]=n[i]?s[i].replace(/&\f/g,o[c]):o[c]+" "+s[i]}}},Ee=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ke(e,t){switch(function(e,t){return 45^z(e,0)?(((t<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3):0}(e,t)){case 5103:return"-webkit-print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return le+e+ie+e+oe+e+e;case 6828:case 4268:return le+e+oe+e+e;case 6165:return le+e+oe+"flex-"+e+e;case 5187:return le+e+I(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return le+e+oe+"flex-item-"+I(e,/flex-|-self/,"")+e;case 4675:return le+e+oe+"flex-line-pack"+I(e,/align-content|flex-|-self/,"")+e;case 5548:return le+e+oe+I(e,"shrink","negative")+e;case 5292:return le+e+oe+I(e,"basis","preferred-size")+e;case 6060:return"-webkit-box-"+I(e,"-grow","")+le+e+oe+I(e,"grow","positive")+e;case 4554:return le+I(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,"-webkit-$1"),/(image-set)/,"-webkit-$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,"-webkit-$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+e+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,"-webkit-$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(e)-1-t>6)switch(z(e,t+1)){case 109:if(45!==z(e,t+4))break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==z(e,t+3)?"$3":"$2-$3"))+e;case 115:return~j(e,"stretch")?ke(I(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==z(e,t+1))break;case 6444:switch(z(e,A(e)-3-(~j(e,"!important")&&10))){case 107:return I(e,":",":-webkit-")+e;case 101:return I(e,/(.+:)([^;!]+)(;|!.+)?/,"$1-webkit-"+(45===z(e,14)?"inline-":"")+"box$3$1"+"-webkit-$2$3$1"+"-ms-$2box$3")+e}break;case 5936:switch(z(e,t+11)){case 114:return le+e+oe+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return le+e+oe+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return le+e+oe+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return le+e+oe+e+e}return e}var Ne=[function(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case ue:e.return=ke(e.value,e.length);break;case de:return me([X(e,{value:I(e.value,"@","@-webkit-")})],a);case fe:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return me([X(e,{props:[I(t,/:(read-\w+)/,":-moz-$1")]})],a);case"::placeholder":return me([X(e,{props:[I(t,/:(plac\w+)/,":-webkit-input-$1")]}),X(e,{props:[I(t,/:(plac\w+)/,":-moz-$1")]}),X(e,{props:[I(t,/:(plac\w+)/,"-ms-input-$1")]})],a)}return""}))}}],Se=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||Ne;var n,s,o={},i=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;i.push(e)}));var l,c,f,u,d=[pe,(u=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],m=(c=[Oe,Ee].concat(a,d),f=P(c),function(e,t,r,a){for(var n="",s=0;s<f;s++)n+=c[s](e,t,r,a)||"";return n});s=function(e,t,r,a){l=r,me(ye(e?e+"{"+t.styles+"}":t.styles),m),a&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new N({key:t,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:s};return p.sheet.hydrate(i),p};function Te(e,t,r){var a="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):a+=r+" "})),a}var Me=function(e,t,r){var a=e.key+"-"+t.name;!1===r&&void 0===e.registered[a]&&(e.registered[a]=t.styles)},_e=function(e,t,r){Me(e,t,r);var a=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var n=t;do{e.insert(t===n?"."+a:"",n,e.sheet,!0),n=n.next}while(void 0!==n)}};var Ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function je(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var ze=/[A-Z]|^ms/g,$e=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ae=function(e){return 45===e.charCodeAt(1)},Pe=function(e){return null!=e&&"boolean"!=typeof e},Ye=je((function(e){return Ae(e)?e:e.replace(ze,"-$&").toLowerCase()})),Be=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace($e,(function(e,t,r){return Re={name:t,styles:r,next:Re},t}))}return 1===Ie[e]||Ae(e)||"number"!=typeof t||0===t?t:t+"px"};function We(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return Re={name:r.name,styles:r.styles,next:Re},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)Re={name:a.name,styles:a.styles,next:Re},a=a.next;return r.styles+";"}return function(e,t,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=We(e,t,r[n])+";";else for(var s in r){var o=r[s];if("object"!=typeof o)null!=t&&void 0!==t[o]?a+=s+"{"+t[o]+"}":Pe(o)&&(a+=Ye(s)+":"+Be(s,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var i=We(e,t,o);switch(s){case"animation":case"animationName":a+=Ye(s)+":"+i+";";break;default:a+=s+"{"+i+"}"}}else for(var l=0;l<o.length;l++)Pe(o[l])&&(a+=Ye(s)+":"+Be(s,o[l])+";")}return a}(e,t,r);case"function":if(void 0!==e){var n=Re,s=r(e);return Re=n,We(e,t,s)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var Re,Ve=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var Le=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,n="";Re=void 0;var s=e[0];null==s||void 0===s.raw?(a=!1,n+=We(r,t,s)):n+=s[0];for(var o=1;o<e.length;o++)n+=We(r,t,e[o]),a&&(n+=s[o]);Ve.lastIndex=0;for(var i,l="";null!==(i=Ve.exec(n));)l+="-"+i[1];var c=function(e){for(var t,r=0,a=0,n=e.length;n>=4;++a,n-=4)t=1540483477*(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(n){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(a)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(n)+l;return{name:c,styles:n,next:Re}},Fe=!!n.useInsertionEffect&&n.useInsertionEffect,De=Fe||function(e){return e()},Xe=(Fe||a.useLayoutEffect,{}.hasOwnProperty),He=a.createContext("undefined"!=typeof HTMLElement?Se({key:"css"}):null);He.Provider;var Ge=function(e){return(0,a.forwardRef)((function(t,r){var n=(0,a.useContext)(He);return e(t,n,r)}))};var Ke=a.createContext({});var qe="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Je=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;return Me(t,r,a),De((function(){return _e(t,r,a)})),null};var Ue=Ge((function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var s=e[qe],o=[n],i="";"string"==typeof e.className?i=Te(t.registered,o,e.className):null!=e.className&&(i=e.className+" ");var l=Le(o,void 0,a.useContext(Ke));i+=t.key+"-"+l.name;var c={};for(var f in e)Xe.call(e,f)&&"css"!==f&&f!==qe&&(c[f]=e[f]);return c.ref=r,c.className=i,a.createElement(a.Fragment,null,a.createElement(Je,{cache:t,serialized:l,isStringTag:"string"==typeof s}),a.createElement(s,c))})),Ze=(r(434),r(8679),k.Fragment);function Qe(e,t,r){return Xe.call(t,"css")?k.jsx(Ue,function(e,t){var r={};for(var a in t)Xe.call(t,a)&&(r[a]=t[a]);return r[qe]=e,r}(e,t),r):k.jsx(e,t,r)}function et(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Le(t)}var tt=function(){var e=et.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},rt=function e(t){for(var r=t.length,a=0,n="";a<r;a++){var s=t[a];if(null!=s){var o=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))o=e(s);else for(var i in o="",s)s[i]&&i&&(o&&(o+=" "),o+=i);break;default:o=s}o&&(n&&(n+=" "),n+=o)}}return n};function at(e,t,r){var a=[],n=Te(e,a,r);return a.length<2?r:n+t(a)}var nt=function(e){var t=e.cache,r=e.serializedArr;return De((function(){for(var e=0;e<r.length;e++)_e(t,r[e],!1)})),null},st=Ge((function(e,t){var r=[],n=function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];var s=Le(a,t.registered);return r.push(s),Me(t,s,!1),t.key+"-"+s.name},s={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return at(t.registered,n,rt(r))},theme:a.useContext(Ke)},o=e.children(s);return!0,a.createElement(a.Fragment,null,a.createElement(nt,{cache:t,serializedArr:r}),o)}));var ot=Object.defineProperty,it=(e,t,r)=>(((e,t,r)=>{t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),lt=new Map,ct=new WeakMap,ft=0,ut=void 0;function dt(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(ct.has(r)||(ft+=1,ct.set(r,ft.toString())),ct.get(r)):"0"):e[t]}`;var r})).toString()}function mt(e,t,r={},a=ut){if(void 0===window.IntersectionObserver&&void 0!==a){const n=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:s,elements:o}=function(e){let t=dt(e),r=lt.get(t);if(!r){const a=new Map;let n;const s=new IntersectionObserver((t=>{t.forEach((t=>{var r;const s=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(r=a.get(t.target))||r.forEach((e=>{e(s,t)}))}))}),e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:a},lt.set(t,r)}return r}(r);let i=o.get(e)||[];return o.has(e)||o.set(e,i),i.push(t),s.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),lt.delete(n))}}var pt=class extends a.Component{constructor(e){super(e),it(this,"node",null),it(this,"_unobserveCb",null),it(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),it(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!=typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:s}=this.props;this._unobserveCb=mt(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"==typeof e){const{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}const{as:t,triggerOnce:r,threshold:n,root:s,rootMargin:o,onChange:i,skip:l,trackVisibility:c,delay:f,initialInView:u,fallbackInView:d,...m}=this.props;return a.createElement(t||"div",{ref:this.handleNode,...m},e)}};function yt({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:s,triggerOnce:o,skip:i,initialInView:l,fallbackInView:c,onChange:f}={}){var u;const[d,m]=a.useState(null),p=a.useRef(),[y,g]=a.useState({inView:!!l,entry:void 0});p.current=f,a.useEffect((()=>{if(i||!d)return;let a;return a=mt(d,((e,t)=>{g({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&o&&a&&(a(),a=void 0)}),{root:s,rootMargin:n,threshold:e,trackVisibility:r,delay:t},c),()=>{a&&a()}}),[Array.isArray(e)?e.toString():e,d,s,n,o,i,r,c,t]);const h=null==(u=y.entry)?void 0:u.target,b=a.useRef();d||!h||o||i||b.current===h||(b.current=h,g({inView:!!l,entry:void 0}));const v=[m,y.inView,y.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var gt=r(4954);tt`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,tt`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,tt`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,tt`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,tt`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,tt`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tt`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,tt`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,tt`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tt`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const ht=tt`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,bt=tt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vt=tt`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xt=tt`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wt=tt`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ct=tt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ot=tt`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Et=tt`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kt=tt`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nt=tt`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,St=tt`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Tt=tt`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mt=tt`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function _t(e,t){return r=>r?e():t()}function It(e){return _t(e,(()=>null))}function jt(e){return It((()=>({opacity:0})))(e)}const zt=e=>{const{cascade:t=!1,damping:r=.5,delay:n=0,duration:s=1e3,fraction:o=0,keyframes:i=Ct,triggerOnce:l=!1,className:c,style:f,childClassName:u,childStyle:d,children:m,onVisibilityChange:p}=e,y=(0,a.useMemo)((()=>function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:a=Ct,iterationCount:n=1}){return et`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:s})),[s,i]);return null==m?null:"string"==typeof(g=m)||"number"==typeof g||"boolean"==typeof g?Qe(At,{...e,animationStyles:y,children:String(m)}):(0,gt.isFragment)(m)?Qe(Pt,{...e,animationStyles:y}):Qe(Ze,{children:a.Children.map(m,((i,m)=>{if(!(0,a.isValidElement)(i))return null;const g=n+(t?m*s*r:0);switch(i.type){case"ol":case"ul":return Qe(st,{children:({cx:t})=>Qe(i.type,{...i.props,className:t(c,i.props.className),style:Object.assign({},f,i.props.style),children:Qe(zt,{...e,children:i.props.children})})});case"li":return Qe(pt,{threshold:o,triggerOnce:l,onChange:p,children:({inView:e,ref:t})=>Qe(st,{children:({cx:r})=>Qe(i.type,{...i.props,ref:t,className:r(u,i.props.className),css:It((()=>y))(e),style:Object.assign({},d,i.props.style,jt(!e),{animationDelay:g+"ms"})})})});default:return Qe(pt,{threshold:o,triggerOnce:l,onChange:p,children:({inView:e,ref:t})=>Qe("div",{ref:t,className:c,css:It((()=>y))(e),style:Object.assign({},f,jt(!e),{animationDelay:g+"ms"}),children:Qe(st,{children:({cx:e})=>Qe(i.type,{...i.props,className:e(u,i.props.className),style:Object.assign({},d,i.props.style)})})})})}}))});var g},$t={display:"inline-block",whiteSpace:"pre"},At=e=>{const{animationStyles:t,cascade:r=!1,damping:a=.5,delay:n=0,duration:s=1e3,fraction:o=0,triggerOnce:i=!1,className:l,style:c,children:f,onVisibilityChange:u}=e,{ref:d,inView:m}=yt({triggerOnce:i,threshold:o,onChange:u});return _t((()=>Qe("div",{ref:d,className:l,style:Object.assign({},c,$t),children:f.split("").map(((e,r)=>Qe("span",{css:It((()=>t))(m),style:{animationDelay:n+r*s*a+"ms"},children:e},r)))})),(()=>Qe(Pt,{...e,children:f})))(r)},Pt=e=>{const{animationStyles:t,fraction:r=0,triggerOnce:a=!1,className:n,style:s,children:o,onVisibilityChange:i}=e,{ref:l,inView:c}=yt({triggerOnce:a,threshold:r,onChange:i});return Qe("div",{ref:l,className:n,css:It((()=>t))(c),style:Object.assign({},s,jt(!c)),children:o})};tt`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,tt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tt`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,tt`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,tt`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,tt`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,tt`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Yt=tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Bt=tt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Wt=tt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Rt=tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Vt=tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Lt=tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ft=tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Dt=tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Xt=tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ht=tt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Gt=tt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Kt=tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,qt=tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Jt=e=>{const{big:t=!1,direction:r,reverse:n=!1,...s}=e,o=(0,a.useMemo)((()=>function(e,t,r){switch(r){case"bottom-left":return t?Bt:bt;case"bottom-right":return t?Wt:vt;case"down":return e?t?Vt:wt:t?Rt:xt;case"left":return e?t?Ft:Ot:t?Lt:Ct;case"right":return e?t?Xt:kt:t?Dt:Et;case"top-left":return t?Ht:Nt;case"top-right":return t?Gt:St;case"up":return e?t?qt:Mt:t?Kt:Tt;default:return t?Yt:ht}}(t,n,r)),[t,r,n]);return Qe(zt,{keyframes:o,...s})};tt`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,tt`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tt`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,tt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;tt`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,tt`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,tt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;tt`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tt`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tt`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,tt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,tt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;tt`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tt`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tt`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tt`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,tt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,tt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,tt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;tt`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,tt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tt`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,tt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,tt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,tt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var Ut=e=>{const t=300,r=800;return a.createElement("div",null,a.createElement("div",{id:"splash"},a.createElement("div",{className:"spacer"}," "),a.createElement("div",{className:"text max"},a.createElement(Jt,{className:"anim-text",delay:t},a.createElement("h1",{id:"we-text"},"We")),a.createElement(Jt,{className:"anim-img",delay:r},a.createElement("img",{id:"we-img",src:E}))),a.createElement("div",{className:"text max"},a.createElement(Jt,{className:"anim-img",delay:r},a.createElement("img",{id:"are-img",src:O})),a.createElement(Jt,{className:"anim-text",delay:t},a.createElement("h1",{id:"are-text"},"Are"))),a.createElement("div",{className:"text min"},a.createElement(Jt,{className:"anim-text",delay:t},a.createElement("h1",{id:"we-text"},"We")),a.createElement(Jt,{className:"anim-img",delay:r},a.createElement("img",{id:"we-img",src:E}))),a.createElement("div",{className:"text min"},a.createElement(Jt,{className:"anim-text",delay:t},a.createElement("h1",{id:"are-text"},"Are")),a.createElement(Jt,{className:"anim-img",delay:r},a.createElement("img",{id:"are-img",src:O}))),a.createElement("div",{className:"spacer"}," "),a.createElement(Jt,{cascade:!0,damping:.5},a.createElement("h1",null,"The "),a.createElement("h1",null,"Premier"),a.createElement("h1",null,"World Class"),a.createElement("h1",null,"Division of the Bay Area"))),a.createElement("div",{id:"bcp"},a.createElement("img",{src:C})))};const Zt=[{image:x.Trent,title:"FE Composer",name:"Trent Groneworld"},{image:x.Sean,title:"Battery Arranger",name:"Sean Clark"},{image:x.KK,title:"Program Coordinator",name:"KK Rasmussen"},{image:x.Bailey,title:"Choreographer",name:"Bailey Yang"},{image:x.Chris,title:"Visual Consultant",name:"Jaime Holly"},{image:x.Zak,title:"Visual Consultant",name:"Zak Stillwell"}],Qt=[{image:x.Gabe,title:"Sound Lead",name:"Gabe Boquiren"},{image:x.Ahmad,title:"Front Ensemble Instructor",name:"Ahmad Yousefi"},{image:x.ChrisSwan,title:"Front Ensemble Instructor",name:"Chris Swan"},{image:x.Matt,title:"Visual Lead",name:"Matt Costales"},{image:x.Brianna,title:"Visual Instructor",name:"Brianna Gier"},{image:x.Charlotte,title:"Visual Instructor",name:"Charlotte Alegado"},{image:x.Joy,title:"Visual Instructor",name:"Joy Duarte"}],er=[{image:x.Brandon,title:"Battery Instructor",name:"Brandon Adamson"},{image:x.Nick,title:"Battery Instructor",name:"Nick Cordoni"},{image:x.Bryan,title:"Battery Instructor",name:"Bryan Criswell"},{image:x.Joy,title:"Battery Instructor",name:"Joy Duarte"},{image:x.Kevin,title:"Battery Instructor",name:"Kevin Garrett"}];var tr=()=>{const e=(0,a.useRef)(null),t=(0,a.useRef)(null),r=(0,a.useRef)(null),n=(0,a.useRef)(null);return a.createElement("main",{id:"main"},a.createElement(i,{scheduleRef:e,staffRef:t,linksRef:r,welcomeRef:n,scrollTo:(e,t)=>{console.log(e,t);const r=e.current.getBoundingClientRect().top+window.pageYOffset+t;window.scrollTo({top:r,behavior:"smooth"})}}),a.createElement(u,{reference:n}),a.createElement("div",null),a.createElement("div",{id:"remainder"},a.createElement(Ut,null),a.createElement(p,null),a.createElement(h,{reference:e}),a.createElement("h1",{id:"staff-title",ref:t},"Staff"),a.createElement(v,{title:"Design",data:Zt}),a.createElement(v,{title:"Front",data:Qt}),a.createElement(v,{title:"Battery",data:er}),a.createElement(w,null)))};const rr=()=>a.createElement("title",null,"Thesis")},8679:function(e,t,r){"use strict";var a=r(9864),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function l(e){return a.isMemo(e)?o:i[e.$$typeof]||n}i[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[a.Memo]=o;var c=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,a){if("string"!=typeof r){if(p){var n=m(r);n&&n!==p&&e(t,n,a)}var o=f(r);u&&(o=o.concat(u(r)));for(var i=l(t),y=l(r),g=0;g<o.length;++g){var h=o[g];if(!(s[h]||a&&a[h]||y&&y[h]||i&&i[h])){var b=d(r,h);try{c(t,h,b)}catch(v){}}}}return t}},4415:function(e,t){"use strict";var r,a=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case s:case i:case o:case d:case m:return e;default:switch(e=e&&e.$$typeof){case f:case c:case u:case y:case p:case l:return e;default:return t}}case n:return t}}}r=Symbol.for("react.module.reference"),t.isFragment=function(e){return h(e)===s}},4954:function(e,t,r){"use strict";e.exports=r(4415)},3190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={slide:r(6432),stack:r(7277),elastic:r(2996),bubble:r(3414),push:r(3976),pushRotate:r(8796),scaleDown:r(9070),scaleRotate:r(6001),fallDown:r(5576),reveal:r(6523)},e.exports=t.default},4510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();function s(e){return e&&e.__esModule?e:{default:e}}var o=r(7294),i=s(o),l=s(r(5697)),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,r){for(var a=!0;a;){var n=e,s=t,o=r;a=!1,null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,s);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(o)}var c=Object.getPrototypeOf(n);if(null===c)return;e=c,t=s,r=o,a=!0,i=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={hover:!1}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"getLineStyle",value:function(e){return a({position:"absolute",height:"20%",left:0,right:0,top:2*e*20+"%",opacity:this.state.hover?.6:1},this.state.hover&&this.props.styles.bmBurgerBarsHover)}},{key:"render",value:function(){var e=this,t=void 0;if(this.props.customIcon){var r={className:("bm-icon "+(this.props.customIcon.props.className||"")).trim(),style:a({width:"100%",height:"100%"},this.props.styles.bmIcon)};t=i.default.cloneElement(this.props.customIcon,r)}else t=i.default.createElement("span",null,[0,1,2].map((function(t){return i.default.createElement("span",{key:t,className:("bm-burger-bars "+e.props.barClassName+" "+(e.state.hover?"bm-burger-bars-hover":"")).trim(),style:a({},e.getLineStyle(t),e.props.styles.bmBurgerBars)})})));return i.default.createElement("div",{className:("bm-burger-button "+this.props.className).trim(),style:a({zIndex:1e3},this.props.styles.bmBurgerButton)},i.default.createElement("button",{type:"button",id:"react-burger-menu-btn",onClick:this.props.onClick,onMouseOver:function(){e.setState({hover:!0}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!0})},onMouseOut:function(){e.setState({hover:!1}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!1})},style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},"Open Menu"),t)}}]),t}(o.Component);t.default=c,c.propTypes={barClassName:l.default.string,customIcon:l.default.element,styles:l.default.object},c.defaultProps={barClassName:"",className:"",styles:{}},e.exports=t.default},5430:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=function(e,t,r){for(var a=!0;a;){var n=e,s=t,o=r;a=!1,null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,s);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(o)}var c=Object.getPrototypeOf(n);if(null===c)return;e=c,t=s,r=o,a=!0,i=c=void 0}};function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=r(7294),c=o(l),f=o(r(5697)),u=function(e){function t(){i(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"getCrossStyle",value:function(e){return{position:"absolute",width:3,height:14,transform:"before"===e?"rotate(45deg)":"rotate(-45deg)"}}},{key:"render",value:function(){var e,t=this;if(this.props.customIcon){var r={className:("bm-cross "+(this.props.customIcon.props.className||"")).trim(),style:a({width:"100%",height:"100%"},this.props.styles.bmCross)};e=c.default.cloneElement(this.props.customIcon,r)}else e=c.default.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map((function(e,r){return c.default.createElement("span",{key:r,className:("bm-cross "+t.props.crossClassName).trim(),style:a({},t.getCrossStyle(e),t.props.styles.bmCross)})})));return c.default.createElement("div",{className:("bm-cross-button "+this.props.className).trim(),style:a({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.bmCrossButton)},c.default.createElement("button",a({type:"button",id:"react-burger-cross-btn",onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},!this.props.isOpen&&{tabIndex:-1}),"Close Menu"),e)}}]),t}(l.Component);t.default=u,u.propTypes={crossClassName:f.default.string,customIcon:f.default.element,isOpen:f.default.bool,styles:f.default.object},u.defaultProps={crossClassName:"",className:"",styles:{},isOpen:!1},e.exports=t.default},6661:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={overlay:function(e){return{position:"fixed",zIndex:1e3,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:e?1:0,MozTransform:e?"":"translate3d(100%, 0, 0)",MsTransform:e?"":"translate3d(100%, 0, 0)",OTransform:e?"":"translate3d(100%, 0, 0)",WebkitTransform:e?"":"translate3d(100%, 0, 0)",transform:e?"":"translate3d(100%, 0, 0)",transition:e?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(e,t,r){return{position:"fixed",right:r?0:"inherit",zIndex:1100,width:t,height:"100%",MozTransform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block"}}},e.exports=t.default},4660:function(e,t){"use strict";function r(){var e=Array.from(document.getElementsByClassName("bm-item")).shift();e&&e.focus()}function a(){var e=Array.from(document.getElementsByClassName("bm-item")).pop();e&&e.focus()}function n(){var e=document.getElementById("react-burger-cross-btn");e&&e.focus()}function s(e){if(document.activeElement.className.includes("bm-item")){var t=document.activeElement[e];t?t.focus():n()}else"previousElementSibling"===e?a():r()}Object.defineProperty(t,"__esModule",{value:!0}),t.focusOnFirstMenuItem=r,t.focusOnLastMenuItem=a,t.focusOnCrossButton=n,t.focusOnMenuButton=function(){var e=document.getElementById("react-burger-menu-btn");e&&e.focus()},t.focusOnMenuItem=s,t.focusOnNextMenuItem=function(){s("nextElementSibling")},t.focusOnPreviousMenuItem=function(){s("previousElementSibling")}},9978:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=void 0;try{e=r(1223)}finally{return e}},e.exports=t.default},2539:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.pxToNum=function(e){return parseInt(e.slice(0,-2),10)}},4126:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(l){n=!0,s=l}finally{try{!a&&i.return&&i.return()}finally{if(n)throw s}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};function s(e){return e&&e.__esModule?e:{default:e}}var o=s(r(7294)),i=(s(r(3935)),s(r(5697))),l=s(r(6661)),c=r(4660),f=s(r(4510)),u=s(r(5430));t.default=function(e){if(!e)throw new Error("No styles supplied");var t="ArrowDown",r="ArrowUp";var s=function(s){var i,d,m=o.default.useState(!1),p=a(m,2),y=p[0],g=p[1],h=o.default.useRef(),b=o.default.useRef({}),v=(i=s.isOpen,d=o.default.useRef(i),o.default.useEffect((function(){d.current=i})),d.current);function x(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];b.current=e,k(),setTimeout((function(){g((function(t){return void 0!==e.isOpen?e.isOpen:!t}))}))}function w(){"function"==typeof s.onClose?s.onClose():x()}function C(e,t){var r=s.width,a=s.right;return e(y,"string"!=typeof r?r+"px":r,a,t)}function O(t,r,a){var o="bm"+t.replace(t.charAt(0),t.charAt(0).toUpperCase()),i=l.default[t]?C(l.default[t]):{};return e[t]&&(i=n({},i,C(e[t],r+1))),s.styles[o]&&(i=n({},i,s.styles[o])),a&&(i=n({},i,a)),s.noTransition&&delete i.transition,i}function E(e,t,r){var a=document.getElementById(e);if(a){var n=C(t);for(var o in n)n.hasOwnProperty(o)&&(a.style[o]=r?n[o]:"");var i=function(e){return e.style["overflow-x"]=r?"hidden":""};s.htmlClassName||i(document.querySelector("html")),s.bodyClassName||i(document.querySelector("body"))}else console.error("Element with ID '"+e+"' not found")}function k(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0],r=function(e,r){return e.classList[t?"add":"remove"](r)};s.htmlClassName&&r(document.querySelector("html"),s.htmlClassName),s.bodyClassName&&r(document.querySelector("body"),s.bodyClassName),e.pageWrap&&s.pageWrapId&&E(s.pageWrapId,e.pageWrap,t),e.outerContainer&&s.outerContainerId&&E(s.outerContainerId,e.outerContainer,t);var a=document.querySelector(".bm-menu-wrap");a&&(t?a.removeAttribute("hidden"):a.setAttribute("hidden",!0))}function N(){h.current&&clearTimeout(h.current)}function S(e){switch((e=e||window.event).key){case"Escape":s.disableCloseOnEsc||(w(),(0,c.focusOnMenuButton)());break;case t:(0,c.focusOnNextMenuItem)();break;case r:(0,c.focusOnPreviousMenuItem)();break;case"Home":(0,c.focusOnFirstMenuItem)();break;case"End":(0,c.focusOnLastMenuItem)()}}function T(e){if((e=e||window.event).target===document.getElementById("react-burger-menu-btn"))switch(e.key){case t:case" ":x();break;case r:x({focusOnLastItem:!0})}}return o.default.useEffect((function(){return s.isOpen&&x({isOpen:!0,noStateChange:!0}),function(){k(!1),N()}}),[]),o.default.useEffect((function(){var t,r;void 0!==s.isOpen&&s.isOpen!==y&&s.isOpen!==v?x():e.svg&&(t=document.getElementById("bm-morph-shape"),r=e.svg.lib(t).select("path"),y?e.svg.animate(r):setTimeout((function(){r.attr("d",e.svg.pathInitial)}),300))})),o.default.useEffect((function(){var e=b.current,t=e.noStateChange,r=e.focusOnLastItem;t||s.onStateChange({isOpen:y}),s.disableAutoFocus||(y?r?(0,c.focusOnLastMenuItem)():(0,c.focusOnFirstMenuItem)():document.activeElement?document.activeElement.blur():document.body.blur()),N(),h.current=setTimeout((function(){h.current=null,y||k(!1)}),500);var a=y?S:T,n=s.customOnKeyDown||a;return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[y]),o.default.createElement("div",null,!s.noOverlay&&o.default.createElement("div",{className:("bm-overlay "+s.overlayClassName).trim(),onClick:function(){!0===s.disableOverlayClick||"function"==typeof s.disableOverlayClick&&s.disableOverlayClick()||w()},style:O("overlay")}),!1!==s.customBurgerIcon&&o.default.createElement("div",{style:O("burgerIcon")},o.default.createElement(f.default,{onClick:function(){"function"==typeof s.onOpen?s.onOpen():x()},styles:s.styles,customIcon:s.customBurgerIcon,className:s.burgerButtonClassName,barClassName:s.burgerBarClassName,onIconStateChange:s.onIconStateChange})),o.default.createElement("div",{id:s.id,className:("bm-menu-wrap "+s.className).trim(),style:O("menuWrap"),"aria-hidden":!y},e.svg&&o.default.createElement("div",{id:"bm-morph-shape",className:("bm-morph-shape "+s.morphShapeClassName).trim(),style:O("morphShape")},o.default.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 800",preserveAspectRatio:"none"},o.default.createElement("path",{d:e.svg.pathInitial}))),o.default.createElement("div",{className:("bm-menu "+s.menuClassName).trim(),style:O("menu")},o.default.createElement(s.itemListElement,{className:("bm-item-list "+s.itemListClassName).trim(),style:O("itemList")},o.default.Children.map(s.children,(function(e,t){if(e){var r=["bm-item",s.itemClassName,e.props.className].filter((function(e){return!!e})).join(" "),a=n({key:t,className:r,style:O("item",t,e.props.style)},!y&&{tabIndex:-1});return o.default.cloneElement(e,a)}})))),!1!==s.customCrossIcon&&o.default.createElement("div",{style:O("closeButton")},o.default.createElement(u.default,{onClick:w,styles:s.styles,customIcon:s.customCrossIcon,className:s.crossButtonClassName,crossClassName:s.crossClassName,isOpen:y}))))};return s.propTypes={bodyClassName:i.default.string,burgerBarClassName:i.default.string,burgerButtonClassName:i.default.string,className:i.default.string,crossButtonClassName:i.default.string,crossClassName:i.default.string,customBurgerIcon:i.default.oneOfType([i.default.element,i.default.oneOf([!1])]),customCrossIcon:i.default.oneOfType([i.default.element,i.default.oneOf([!1])]),customOnKeyDown:i.default.func,disableAutoFocus:i.default.bool,disableCloseOnEsc:i.default.bool,disableOverlayClick:i.default.oneOfType([i.default.bool,i.default.func]),htmlClassName:i.default.string,id:i.default.string,isOpen:i.default.bool,itemClassName:i.default.string,itemListClassName:i.default.string,itemListElement:i.default.oneOf(["div","nav"]),menuClassName:i.default.string,morphShapeClassName:i.default.string,noOverlay:i.default.bool,noTransition:i.default.bool,onClose:i.default.func,onIconHoverChange:i.default.func,onOpen:i.default.func,onStateChange:i.default.func,outerContainerId:e&&e.outerContainer?i.default.string.isRequired:i.default.string,overlayClassName:i.default.string,pageWrapId:e&&e.pageWrap?i.default.string.isRequired:i.default.string,right:i.default.bool,styles:i.default.object,width:i.default.oneOfType([i.default.number,i.default.string])},s.defaultProps={bodyClassName:"",burgerBarClassName:"",burgerButtonClassName:"",className:"",crossButtonClassName:"",crossClassName:"",disableAutoFocus:!1,disableCloseOnEsc:!1,htmlClassName:"",id:"",itemClassName:"",itemListClassName:"",menuClassName:"",morphShapeClassName:"",noOverlay:!1,noTransition:!1,onStateChange:function(){},outerContainerId:"",overlayClassName:"",pageWrapId:"",styles:{},width:300,onIconHoverChange:function(){},itemListElement:"nav"},s},e.exports=t.default},3414:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(9978)),s=a(r(4126)),o=r(2539),i={svg:{lib:n.default,pathInitial:"M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z",pathOpen:"M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z",animate:function(e){var t=0,r=this.pathOpen.split(";"),a=r.length,n=window.mina;!function s(){t>a-1||(e.animate({path:r[t]},0===t?400:500,0===t?n.easein:n.elastic,(function(){s()})),t++)}()}},morphShape:function(e,t,r){return{position:"absolute",width:"100%",height:"100%",right:r?"inherit":0,left:r?0:"inherit",MozTransform:r?"rotateY(180deg)":"rotateY(0deg)",MsTransform:r?"rotateY(180deg)":"rotateY(0deg)",OTransform:r?"rotateY(180deg)":"rotateY(0deg)",WebkitTransform:r?"rotateY(180deg)":"rotateY(0deg)",transform:r?"rotateY(180deg)":"rotateY(0deg)"}},menuWrap:function(e,t,r){return{MozTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:e?"transform 0.4s 0s":"transform 0.4s"}},menu:function(e,t,r){var a=(0,o.pxToNum)(t)-140;return{position:"fixed",MozTransform:e?"":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",MsTransform:e?"":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",OTransform:e?"":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",WebkitTransform:e?"":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",transform:e?"":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",transition:e?"opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:e?1:0}},item:function(e,t,r,a){var n=(0,o.pxToNum)(t)-140;return{MozTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",OTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transition:e?"opacity 0.3s 0.4s, transform 0.3s 0.4s":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:e?1:0}},closeButton:function(e,t,r){var a=(0,o.pxToNum)(t)-140;return{MozTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",OTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",transform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",transition:e?"opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:e?1:0}}};t.default=(0,s.default)(i),e.exports=t.default},2996:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(9978)),s=a(r(4126)),o=r(2539),i={svg:{lib:n.default,pathInitial:"M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z",pathOpen:"M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z",animate:function(e){e.animate({path:this.pathOpen},400,window.mina.easeinout)}},morphShape:function(e,t,r){return{position:"absolute",width:120,height:"100%",right:r?"inherit":0,left:r?0:"inherit",MozTransform:r?"rotateY(180deg)":"",MsTransform:r?"rotateY(180deg)":"",OTransform:r?"rotateY(180deg)":"",WebkitTransform:r?"rotateY(180deg)":"",transform:r?"rotateY(180deg)":""}},menuWrap:function(e,t,r){return{MozTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.3s"}},menu:function(e,t,r){return{position:"fixed",right:r?0:"inherit",width:(0,o.pxToNum)(t)-120,whiteSpace:"nowrap",boxSizing:"border-box",overflow:"visible"}},itemList:function(e,t,r){if(r)return{position:"relative",left:"-110px",width:"170%",overflow:"auto"}},pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",MsTransform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",OTransform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",WebkitTransform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",transform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",transition:e?"all 0.3s":"all 0.3s 0.1s"}},outerContainer:function(e){return{overflow:e?"":"hidden"}}};t.default=(0,s.default)(i),e.exports=t.default},5576:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(4126),s=(a=n)&&a.__esModule?a:{default:a};t.default=(0,s.default)({menuWrap:function(e){return{MozTransform:e?"":"translate3d(0, -100%, 0)",MsTransform:e?"":"translate3d(0, -100%, 0)",OTransform:e?"":"translate3d(0, -100%, 0)",WebkitTransform:e?"":"translate3d(0, -100%, 0)",transform:e?"":"translate3d(0, -100%, 0)",transition:"all 0.5s ease-in-out"}},pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",MsTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",OTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",WebkitTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transition:"all 0.5s"}},outerContainer:function(e){return{perspective:"1500px",perspectiveOrigin:"0% 50%",overflow:e?"":"hidden"}}}),e.exports=t.default},3976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(4126),s=(a=n)&&a.__esModule?a:{default:a};t.default=(0,s.default)({pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",MsTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",OTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",WebkitTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transition:"all 0.5s"}},outerContainer:function(e){return{overflow:e?"":"hidden"}}}),e.exports=t.default},8796:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(4126),s=(a=n)&&a.__esModule?a:{default:a};t.default=(0,s.default)({pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",MsTransform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",OTransform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",WebkitTransform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",transform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",transformOrigin:r?"100% 50%":"0% 50%",transformStyle:"preserve-3d",transition:"all 0.5s"}},outerContainer:function(e){return{perspective:"1500px",overflow:e?"":"hidden"}}}),e.exports=t.default},6523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(4126),s=(a=n)&&a.__esModule?a:{default:a};t.default=(0,s.default)({menuWrap:function(e,t,r){return{MozTransform:"translate3d(0, 0, 0)",MsTransform:"translate3d(0, 0, 0)",OTransform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)",zIndex:e?1e3:-1}},overlay:function(e,t,r){return{zIndex:1400,MozTransform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",MsTransform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",OTransform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",WebkitTransform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",transform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",transition:"all 0.5s",visibility:e?"visible":"hidden"}},pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",MsTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",OTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",WebkitTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transition:"all 0.5s",zIndex:1200,position:"relative"}},burgerIcon:function(e,t,r){return{MozTransform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",MsTransform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",OTransform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",WebkitTransform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",transform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",transition:"all 0.1s",position:"relative",zIndex:1300}},outerContainer:function(e){return{overflow:e?"":"hidden"}}}),e.exports=t.default},9070:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(4126),s=(a=n)&&a.__esModule?a:{default:a};t.default=(0,s.default)({pageWrap:function(e,t){return{MozTransform:e?"":"translate3d(0, 0, -"+t+")",MsTransform:e?"":"translate3d(0, 0, -"+t+")",OTransform:e?"":"translate3d(0, 0, -"+t+")",WebkitTransform:e?"":"translate3d(0, 0, -"+t+")",transform:e?"":"translate3d(0, 0, -"+t+")",transformOrigin:"100%",transformStyle:"preserve-3d",transition:"all 0.5s"}},outerContainer:function(){return{perspective:"1500px"}}}),e.exports=t.default},6001:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(4126),s=(a=n)&&a.__esModule?a:{default:a};t.default=(0,s.default)({pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",MsTransform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",OTransform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",WebkitTransform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",transform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",transformStyle:"preserve-3d",transition:"all 0.5s",overflow:e?"":"hidden"}},outerContainer:function(e){return{perspective:"1500px",overflow:e?"":"hidden"}}}),e.exports=t.default},6432:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(4126),s=(a=n)&&a.__esModule?a:{default:a};t.default=(0,s.default)({}),e.exports=t.default},7277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(4126),s=(a=n)&&a.__esModule?a:{default:a};t.default=(0,s.default)({menuWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",MsTransform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",OTransform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",WebkitTransform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",transform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",transition:e?"transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)":"transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)"}},item:function(e,t,r,a){return{MozTransform:e?"":"translate3d(0, "+500*a+"px, 0)",MsTransform:e?"":"translate3d(0, "+500*a+"px, 0)",OTransform:e?"":"translate3d(0, "+500*a+"px, 0)",WebkitTransform:e?"":"translate3d(0, "+500*a+"px, 0)",transform:e?"":"translate3d(0, "+500*a+"px, 0)",transition:e?"transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)":"transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)"}}}),e.exports=t.default},9921:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case u:case s:case i:case o:case m:return e;default:switch(e=e&&e.$$typeof){case c:case d:case g:case y:case l:return e;default:return t}}case n:return t}}}function C(e){return w(e)===u}t.AsyncMode=f,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=a,t.ForwardRef=d,t.Fragment=s,t.Lazy=g,t.Memo=y,t.Portal=n,t.Profiler=i,t.StrictMode=o,t.Suspense=m,t.isAsyncMode=function(e){return C(e)||w(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===s},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===u||e===i||e===o||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===y||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===b||e.$$typeof===v||e.$$typeof===x||e.$$typeof===h)},t.typeOf=w},9864:function(e,t,r){"use strict";e.exports=r(9921)},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-7a90ab52f7e65f084d6d.js.map