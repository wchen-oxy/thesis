(self.webpackChunkthesis=self.webpackChunkthesis||[]).push([[678],{1530:function(e,t){var a,n,r,s,o,l,i,u,c,d,f,m,p,b,g,h;n="undefined"!=typeof window?window:this,o="0.5.4",l="hasOwnProperty",i=/[\.\/]/,u=/\s*,\s*/,c=function(e,t){return e-t},d={n:{}},f=function(){for(var e=0,t=this.length;e<t;e++)if(void 0!==this[e])return this[e]},m=function(){for(var e=this.length;--e;)if(void 0!==this[e])return this[e]},p=Object.prototype.toString,b=String,g=Array.isArray||function(e){return e instanceof Array||"[object Array]"==p.call(e)},h=function(e,t){var a,n=s,o=Array.prototype.slice.call(arguments,2),l=h.listeners(e),i=0,u=[],d={},p=[],b=r;p.firstDefined=f,p.lastDefined=m,r=e,s=0;for(var g=0,v=l.length;g<v;g++)"zIndex"in l[g]&&(u.push(l[g].zIndex),l[g].zIndex<0&&(d[l[g].zIndex]=l[g]));for(u.sort(c);u[i]<0;)if(a=d[u[i++]],p.push(a.apply(t,o)),s)return s=n,p;for(g=0;g<v;g++)if("zIndex"in(a=l[g]))if(a.zIndex==u[i]){if(p.push(a.apply(t,o)),s)break;do{if((a=d[u[++i]])&&p.push(a.apply(t,o)),s)break}while(a)}else d[a.zIndex]=a;else if(p.push(a.apply(t,o)),s)break;return s=n,r=b,p},h._events=d,h.listeners=function(e){var t,a,n,r,s,o,l,u,c=g(e)?e:e.split(i),f=d,m=[f],p=[];for(r=0,s=c.length;r<s;r++){for(u=[],o=0,l=m.length;o<l;o++)for(a=[(f=m[o].n)[c[r]],f["*"]],n=2;n--;)(t=a[n])&&(u.push(t),p=p.concat(t.f||[]));m=u}return p},h.separator=function(e){e?(e="["+(e=b(e).replace(/(?=[\.\^\]\[\-])/g,"\\"))+"]",i=new RegExp(e)):i=/[\.\/]/},h.on=function(e,t){if("function"!=typeof t)return function(){};for(var a=g(e)?g(e[0])?e:[e]:b(e).split(u),n=0,r=a.length;n<r;n++)!function(e){for(var a,n=g(e)?e:b(e).split(i),r=d,s=0,o=n.length;s<o;s++)r=(r=r.n).hasOwnProperty(n[s])&&r[n[s]]||(r[n[s]]={n:{}});for(r.f=r.f||[],s=0,o=r.f.length;s<o;s++)if(r.f[s]==t){a=!0;break}!a&&r.f.push(t)}(a[n]);return function(e){+e==+e&&(t.zIndex=+e)}},h.f=function(e){var t=[].slice.call(arguments,1);return function(){h.apply(null,[e,null].concat(t).concat([].slice.call(arguments,0)))}},h.stop=function(){s=1},h.nt=function(e){var t=g(r)?r.join("."):r;return e?new RegExp("(?:\\.|\\/|^)"+e+"(?:\\.|\\/|$)").test(t):t},h.nts=function(){return g(r)?r:r.split(i)},h.off=h.unbind=function(e,t){if(e){var a=g(e)?g(e[0])?e:[e]:b(e).split(u);if(a.length>1)for(var n=0,r=a.length;n<r;n++)h.off(a[n],t);else{a=g(e)?e:b(e).split(i);var s,o,c,f,m,p=[d],v=[];for(n=0,r=a.length;n<r;n++)for(f=0;f<p.length;f+=c.length-2){if(c=[f,1],s=p[f].n,"*"!=a[n])s[a[n]]&&(c.push(s[a[n]]),v.unshift({n:s,name:a[n]}));else for(o in s)s[l](o)&&(c.push(s[o]),v.unshift({n:s,name:o}));p.splice.apply(p,c)}for(n=0,r=p.length;n<r;n++)for(s=p[n];s.n;){if(t){if(s.f){for(f=0,m=s.f.length;f<m;f++)if(s.f[f]==t){s.f.splice(f,1);break}!s.f.length&&delete s.f}for(o in s.n)if(s.n[l](o)&&s.n[o].f){var y=s.n[o].f;for(f=0,m=y.length;f<m;f++)if(y[f]==t){y.splice(f,1);break}!y.length&&delete s.n[o].f}}else for(o in delete s.f,s.n)s.n[l](o)&&s.n[o].f&&delete s.n[o].f;s=s.n}e:for(n=0,r=v.length;n<r;n++){for(o in(s=v[n]).n[s.name].f)continue e;for(o in s.n[s.name].n)continue e;delete s.n[s.name]}}}else h._events=d={n:{}}},h.once=function(e,t){var a=function(){return h.off(e,a),t.apply(this,arguments)};return h.on(e,a)},h.version=o,h.toString=function(){return"You are running Eve 0.5.4"},n.eve=h,e.exports?e.exports=h:void 0===(a=function(){return h}.apply(t,[]))||(e.exports=a)},9601:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return N},default:function(){return M}});var n=a(7294),r=a.p+"static/v2-aae1212fddb4b1d95d5c30a1980df6c3.png",s=a(1883),o=a(3190);var l=e=>{const{0:t,1:a}=(0,n.useState)(!1);return console.log(t),n.createElement("header",null,n.createElement("div",{id:"nav-logo-container"},n.createElement("img",{src:r}),n.createElement("button",{id:"logo",onClick:()=>e.scrollTo(e.welcomeRef,0)},"Thesis")),n.createElement("nav",null,n.createElement("div",{id:"web-navigation-bar"},n.createElement("button",{onClick:()=>e.scrollTo(e.scheduleRef,-200)},n.createElement("span",null,"Schedule")),n.createElement("button",{onClick:()=>e.scrollTo(e.staffRef,-100)},n.createElement("span",null,"Staff")),n.createElement("a",{href:"https://beacons.ai/thesisindoor"},n.createElement("span",null,"Links")))),n.createElement("div",{id:"mobile-navigation-bar"},n.createElement(o.slide,{right:!0,onOpen:()=>a(!0),onClose:()=>a(!1),isOpen:t},n.createElement("a",{className:"menu-item",onClick:()=>e.scrollTo(e.scheduleRef,-200)},"Schedule"),n.createElement("a",{className:"menu-item",onClick:()=>e.scrollTo(e.staffRef,-100)},"Staff"),n.createElement("a",{className:"menu-item",href:"https://beacons.ai/thesisindoor"},"Links"))))},i=a.p+"static/newbackground-low-a0cb7e5ba62b4456376971a3ca15d68b.jpg",u=a.p+"static/body-aa6ad3d0646b8c95e7812a17edb46c1e.png",c=a.p+"static/arm-abc2b06f43b1a7dbdee86667cad4fc34.png";var d=e=>n.createElement("h1",{className:"glitch","data-text":e.text},e.text);var f=e=>{const t=(0,n.useRef)(null),a=(0,n.useRef)(null),r=e=>{const a=window.pageYOffset,n=(t.current.getBoundingClientRect().top,a/-10*.5+15);let r=t.current.style;const s="rotate("+n.toString()+"deg)";if(a<1)r.transform="rotate(15deg)";else{if(!(a<300))return;r.transform=s}};return(0,n.useEffect)((()=>{document.addEventListener("scroll",r)}),[]),n.createElement("div",{id:"welcome",ref:e.reference},n.createElement("div",{id:"welcome-text"},n.createElement(d,{text:"Thesis"}),n.createElement(d,{text:"Percussion"}),n.createElement("p",null,"Statement To Be Made")),n.createElement("div",{id:"background-container"},n.createElement("img",{id:"background",alt:"cover goes here",src:i})),n.createElement("div",{className:"foo loading",id:"arm-container",ref:t},n.createElement("img",{className:"welcome-image",id:"arm",src:c})),n.createElement("div",{className:"loading",id:"body-container",ref:a},n.createElement("img",{className:"welcome-image",id:"body",src:u})))},m=a.p+"static/bwncpa-clear-bf410b3dfda314d54641ee5b7ce9ca21.png";var p=e=>n.createElement("div",{className:"award"},n.createElement("img",{src:m}),n.createElement("h3",null,e.location),n.createElement("h4",null,"First Place"));var b=e=>n.createElement("div",{id:"awards"},n.createElement("h1",null,"Competition Results"),n.createElement("div",{id:"awards-list"},[{location:"James Logan HS",date:"March 18, 2023"},{location:"American Canyon",date:"Feb 11, 2023"},{location:"NCPA Championships Stockton Arena",date:"April 15, 2023"}].map(((e,t)=>n.createElement(p,Object.assign({key:t,index:t},e))))));var g=e=>n.createElement("div",null,n.createElement("h2",null,e.event),n.createElement("h4",null,e.description));var h=e=>{const t=(0,s.useStaticQuery)("1088844929").allSanitySchedule.nodes;return n.createElement("div",{id:"schedule"},n.createElement("h1",{ref:e.reference},"2024 Schedule"),n.createElement("div",{id:"events"},t.map(((e,t)=>n.createElement(g,{key:t,event:e.event,description:e.description})))))};var v=e=>n.createElement("div",{className:"person"},n.createElement("img",{src:e.image}),n.createElement("h3",null,e.title),n.createElement("h4",null,e.name));var y=e=>n.createElement("div",{className:"staff"},n.createElement("h2",null,e.title),n.createElement("div",{className:"staff-list"},e.data.map(((e,t)=>n.createElement(v,Object.assign({key:t,index:t},e))))));var C={Aaron:a.p+"static/aaron-c4a6b0df86d7b4575af74d57da589c76.jpg",Ahmad:a.p+"static/Ahmad-fdab42bb497b8c9652bf30530ead5ab1.jpg",Bailey:a.p+"static/bailey-bf84cfedadbedf78a3b02d3862141b28.jpg",Brandon:a.p+"static/brandon-f092aef8e3748ee29a55fee3db50788c.jpg",Brianna:a.p+"static/Brianna-33f8a49a8e30be3119acd157e91f497c.jpg",Bryan:a.p+"static/bryanC-afaf17f3b840ded30fc6b4307a2853d9.jpg",Casey:a.p+"static/casey-e526ced57e099031415c34cf53eeed17.jpg",Charlotte:a.p+"static/charlotte-5f1d70315b7a4fe55254b28b589d39a3.jpg",Chris:a.p+"static/Chris-8f4e8c4e81f7b5c2d371406055bd5bf4.jpg",ChrisSwan:a.p+"static/Chris-swan-9b5a852b531a72197d91fb52b84717a6.jpg",Emily:a.p+"static/emily-f9759eeff27680b2fc5c774cb85364a0.jpg",Gabe:a.p+"static/Gabe-2eb1d3aa493af3fdfb7b40a359266d0c.jpg",Jaime:a.p+"static/jaime-ddb8d6a29e8a9e4d1c1e54d5b2561956.jpg",Joy:a.p+"static/Joy-752853ddac4126e2e1c0feae8eead160.jpg",Kevin:a.p+"static/KevinG-cfa22eb53ad7ad5870b55c91e4ad7a28.jpg",KK:a.p+"static/kk-c5d9f78ae7cdbf340b7b94e4e0cbace0.jpg",Matt:a.p+"static/mattC-053c54e5fd9a2dd6d0022dc4cf67d0ae.jpg",Nick:a.p+"static/nickC-abd32d613c5b4c402e9f21c45c049904.jpg",Sean:a.p+"static/Sean-03c57c0bd4de475703ca33eb6a921a9f.jpg",Trent:a.p+"static/trent-4167187f9945dcbb3e15cd17621a7c2b.jpg",Zak:a.p+"static/zak-0e61f65f57778ef3ec711ea5565afefa.jpg"};var O=e=>n.createElement("div",{id:"footer"},n.createElement("p",null,"All Rights Reservered")),E=a.p+"static/group-20b56beedb4e8f60d054c76b6c90bf0a.jpg";const T=[{image:C.Trent,title:"FE Composer",name:"Trent Groneworld"},{image:C.Sean,title:"Battery Arranger",name:"Sean Clark"},{image:C.KK,title:"Program Coordinator",name:"KK Rasmussen"},{image:C.Bailey,title:"Choreographer",name:"Bailey Yang"},{image:C.Chris,title:"Visual Consultant",name:"Jaime Holly"},{image:C.Zak,title:"Visual Consultant",name:"Zak Stillwell"}],w=[{image:C.Gabe,title:"Sound Lead",name:"Gabe Boquiren"},{image:C.Ahmad,title:"Front Ensemble Instructor",name:"Ahmad Yousefi"},{image:C.ChrisSwan,title:"Front Ensemble Instructor",name:"Chris Swan"},{image:C.Matt,title:"Visual Lead",name:"Matt Costales"},{image:C.Brianna,title:"Visual Instructor",name:"Brianna Gier"},{image:C.Charlotte,title:"Visual Instructor",name:"Charlotte Alegado"},{image:C.Joy,title:"Visual Instructor",name:"Joy Duarte"}],x=[{image:C.Brandon,title:"Battery Instructor",name:"Brandon Adamson"},{image:C.Nick,title:"Battery Instructor",name:"Nick Cordoni"},{image:C.Bryan,title:"Battery Instructor",name:"Bryan Criswell"},{image:C.Joy,title:"Battery Instructor",name:"Joy Duarte"},{image:C.Kevin,title:"Battery Instructor",name:"Kevin Garrett"}];var M=()=>{const e=(0,n.useRef)(null),t=(0,n.useRef)(null),a=(0,n.useRef)(null),r=(0,n.useRef)(null);return n.createElement("main",{id:"main"},n.createElement(l,{scheduleRef:e,staffRef:t,linksRef:a,welcomeRef:r,scrollTo:(e,t)=>{console.log(e,t);const a=e.current.getBoundingClientRect().top+window.pageYOffset+t;window.scrollTo({top:a,behavior:"smooth"})}}),n.createElement(f,{reference:r}),n.createElement("div",{id:"splash"},n.createElement("h1",null,"The Only World Class Group of the Bay Area")),n.createElement("div",{id:"bcp"},n.createElement("img",{src:(0,s.withPrefix)(E)})),n.createElement(b,null),n.createElement(h,{reference:e}),n.createElement("h1",{id:"staff-title",ref:t},"Staff"),n.createElement(y,{title:"Design",data:T}),n.createElement(y,{title:"Front",data:w}),n.createElement(y,{title:"Battery",data:x}),n.createElement(O,null))};const N=()=>n.createElement("title",null,"Thesis")},3190:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={slide:a(6432),stack:a(7277),elastic:a(2996),bubble:a(3414),push:a(3976),pushRotate:a(8796),scaleDown:a(9070),scaleRotate:a(6001),fallDown:a(5576),reveal:a(6523)},e.exports=t.default},4510:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function s(e){return e&&e.__esModule?e:{default:e}}var o=a(7294),l=s(o),i=s(a(5697)),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,a){for(var n=!0;n;){var r=e,s=t,o=a;n=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,s);if(void 0!==l){if("value"in l)return l.value;var i=l.get;if(void 0===i)return;return i.call(o)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=s,a=o,n=!0,l=u=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={hover:!1}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getLineStyle",value:function(e){return n({position:"absolute",height:"20%",left:0,right:0,top:2*e*20+"%",opacity:this.state.hover?.6:1},this.state.hover&&this.props.styles.bmBurgerBarsHover)}},{key:"render",value:function(){var e=this,t=void 0;if(this.props.customIcon){var a={className:("bm-icon "+(this.props.customIcon.props.className||"")).trim(),style:n({width:"100%",height:"100%"},this.props.styles.bmIcon)};t=l.default.cloneElement(this.props.customIcon,a)}else t=l.default.createElement("span",null,[0,1,2].map((function(t){return l.default.createElement("span",{key:t,className:("bm-burger-bars "+e.props.barClassName+" "+(e.state.hover?"bm-burger-bars-hover":"")).trim(),style:n({},e.getLineStyle(t),e.props.styles.bmBurgerBars)})})));return l.default.createElement("div",{className:("bm-burger-button "+this.props.className).trim(),style:n({zIndex:1e3},this.props.styles.bmBurgerButton)},l.default.createElement("button",{type:"button",id:"react-burger-menu-btn",onClick:this.props.onClick,onMouseOver:function(){e.setState({hover:!0}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!0})},onMouseOut:function(){e.setState({hover:!1}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!1})},style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},"Open Menu"),t)}}]),t}(o.Component);t.default=u,u.propTypes={barClassName:i.default.string,customIcon:i.default.element,styles:i.default.object},u.defaultProps={barClassName:"",className:"",styles:{}},e.exports=t.default},5430:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=function(e,t,a){for(var n=!0;n;){var r=e,s=t,o=a;n=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,s);if(void 0!==l){if("value"in l)return l.value;var i=l.get;if(void 0===i)return;return i.call(o)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=s,a=o,n=!0,l=u=void 0}};function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=a(7294),u=o(i),c=o(a(5697)),d=function(e){function t(){l(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getCrossStyle",value:function(e){return{position:"absolute",width:3,height:14,transform:"before"===e?"rotate(45deg)":"rotate(-45deg)"}}},{key:"render",value:function(){var e,t=this;if(this.props.customIcon){var a={className:("bm-cross "+(this.props.customIcon.props.className||"")).trim(),style:n({width:"100%",height:"100%"},this.props.styles.bmCross)};e=u.default.cloneElement(this.props.customIcon,a)}else e=u.default.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map((function(e,a){return u.default.createElement("span",{key:a,className:("bm-cross "+t.props.crossClassName).trim(),style:n({},t.getCrossStyle(e),t.props.styles.bmCross)})})));return u.default.createElement("div",{className:("bm-cross-button "+this.props.className).trim(),style:n({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.bmCrossButton)},u.default.createElement("button",n({type:"button",id:"react-burger-cross-btn",onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},!this.props.isOpen&&{tabIndex:-1}),"Close Menu"),e)}}]),t}(i.Component);t.default=d,d.propTypes={crossClassName:c.default.string,customIcon:c.default.element,isOpen:c.default.bool,styles:c.default.object},d.defaultProps={crossClassName:"",className:"",styles:{},isOpen:!1},e.exports=t.default},6661:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={overlay:function(e){return{position:"fixed",zIndex:1e3,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:e?1:0,MozTransform:e?"":"translate3d(100%, 0, 0)",MsTransform:e?"":"translate3d(100%, 0, 0)",OTransform:e?"":"translate3d(100%, 0, 0)",WebkitTransform:e?"":"translate3d(100%, 0, 0)",transform:e?"":"translate3d(100%, 0, 0)",transition:e?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(e,t,a){return{position:"fixed",right:a?0:"inherit",zIndex:1100,width:t,height:"100%",MozTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block"}}},e.exports=t.default},4660:function(e,t){"use strict";function a(){var e=Array.from(document.getElementsByClassName("bm-item")).shift();e&&e.focus()}function n(){var e=Array.from(document.getElementsByClassName("bm-item")).pop();e&&e.focus()}function r(){var e=document.getElementById("react-burger-cross-btn");e&&e.focus()}function s(e){if(document.activeElement.className.includes("bm-item")){var t=document.activeElement[e];t?t.focus():r()}else"previousElementSibling"===e?n():a()}Object.defineProperty(t,"__esModule",{value:!0}),t.focusOnFirstMenuItem=a,t.focusOnLastMenuItem=n,t.focusOnCrossButton=r,t.focusOnMenuButton=function(){var e=document.getElementById("react-burger-menu-btn");e&&e.focus()},t.focusOnMenuItem=s,t.focusOnNextMenuItem=function(){s("nextElementSibling")},t.focusOnPreviousMenuItem=function(){s("previousElementSibling")}},9978:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=void 0;try{e=a(1223)}finally{return e}},e.exports=t.default},2539:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.pxToNum=function(e){return parseInt(e.slice(0,-2),10)}},4126:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,s=i}finally{try{!n&&l.return&&l.return()}finally{if(r)throw s}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function s(e){return e&&e.__esModule?e:{default:e}}var o=s(a(7294)),l=(s(a(3935)),s(a(5697))),i=s(a(6661)),u=a(4660),c=s(a(4510)),d=s(a(5430));t.default=function(e){if(!e)throw new Error("No styles supplied");var t="ArrowDown",a="ArrowUp";var s=function(s){var l,f,m=o.default.useState(!1),p=n(m,2),b=p[0],g=p[1],h=o.default.useRef(),v=o.default.useRef({}),y=(l=s.isOpen,f=o.default.useRef(l),o.default.useEffect((function(){f.current=l})),f.current);function C(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];v.current=e,x(),setTimeout((function(){g((function(t){return void 0!==e.isOpen?e.isOpen:!t}))}))}function O(){"function"==typeof s.onClose?s.onClose():C()}function E(e,t){var a=s.width,n=s.right;return e(b,"string"!=typeof a?a+"px":a,n,t)}function T(t,a,n){var o="bm"+t.replace(t.charAt(0),t.charAt(0).toUpperCase()),l=i.default[t]?E(i.default[t]):{};return e[t]&&(l=r({},l,E(e[t],a+1))),s.styles[o]&&(l=r({},l,s.styles[o])),n&&(l=r({},l,n)),s.noTransition&&delete l.transition,l}function w(e,t,a){var n=document.getElementById(e);if(n){var r=E(t);for(var o in r)r.hasOwnProperty(o)&&(n.style[o]=a?r[o]:"");var l=function(e){return e.style["overflow-x"]=a?"hidden":""};s.htmlClassName||l(document.querySelector("html")),s.bodyClassName||l(document.querySelector("body"))}else console.error("Element with ID '"+e+"' not found")}function x(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0],a=function(e,a){return e.classList[t?"add":"remove"](a)};s.htmlClassName&&a(document.querySelector("html"),s.htmlClassName),s.bodyClassName&&a(document.querySelector("body"),s.bodyClassName),e.pageWrap&&s.pageWrapId&&w(s.pageWrapId,e.pageWrap,t),e.outerContainer&&s.outerContainerId&&w(s.outerContainerId,e.outerContainer,t);var n=document.querySelector(".bm-menu-wrap");n&&(t?n.removeAttribute("hidden"):n.setAttribute("hidden",!0))}function M(){h.current&&clearTimeout(h.current)}function N(e){switch((e=e||window.event).key){case"Escape":s.disableCloseOnEsc||(O(),(0,u.focusOnMenuButton)());break;case t:(0,u.focusOnNextMenuItem)();break;case a:(0,u.focusOnPreviousMenuItem)();break;case"Home":(0,u.focusOnFirstMenuItem)();break;case"End":(0,u.focusOnLastMenuItem)()}}function k(e){if((e=e||window.event).target===document.getElementById("react-burger-menu-btn"))switch(e.key){case t:case" ":C();break;case a:C({focusOnLastItem:!0})}}return o.default.useEffect((function(){return s.isOpen&&C({isOpen:!0,noStateChange:!0}),function(){x(!1),M()}}),[]),o.default.useEffect((function(){var t,a;void 0!==s.isOpen&&s.isOpen!==b&&s.isOpen!==y?C():e.svg&&(t=document.getElementById("bm-morph-shape"),a=e.svg.lib(t).select("path"),b?e.svg.animate(a):setTimeout((function(){a.attr("d",e.svg.pathInitial)}),300))})),o.default.useEffect((function(){var e=v.current,t=e.noStateChange,a=e.focusOnLastItem;t||s.onStateChange({isOpen:b}),s.disableAutoFocus||(b?a?(0,u.focusOnLastMenuItem)():(0,u.focusOnFirstMenuItem)():document.activeElement?document.activeElement.blur():document.body.blur()),M(),h.current=setTimeout((function(){h.current=null,b||x(!1)}),500);var n=b?N:k,r=s.customOnKeyDown||n;return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[b]),o.default.createElement("div",null,!s.noOverlay&&o.default.createElement("div",{className:("bm-overlay "+s.overlayClassName).trim(),onClick:function(){!0===s.disableOverlayClick||"function"==typeof s.disableOverlayClick&&s.disableOverlayClick()||O()},style:T("overlay")}),!1!==s.customBurgerIcon&&o.default.createElement("div",{style:T("burgerIcon")},o.default.createElement(c.default,{onClick:function(){"function"==typeof s.onOpen?s.onOpen():C()},styles:s.styles,customIcon:s.customBurgerIcon,className:s.burgerButtonClassName,barClassName:s.burgerBarClassName,onIconStateChange:s.onIconStateChange})),o.default.createElement("div",{id:s.id,className:("bm-menu-wrap "+s.className).trim(),style:T("menuWrap"),"aria-hidden":!b},e.svg&&o.default.createElement("div",{id:"bm-morph-shape",className:("bm-morph-shape "+s.morphShapeClassName).trim(),style:T("morphShape")},o.default.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 800",preserveAspectRatio:"none"},o.default.createElement("path",{d:e.svg.pathInitial}))),o.default.createElement("div",{className:("bm-menu "+s.menuClassName).trim(),style:T("menu")},o.default.createElement(s.itemListElement,{className:("bm-item-list "+s.itemListClassName).trim(),style:T("itemList")},o.default.Children.map(s.children,(function(e,t){if(e){var a=["bm-item",s.itemClassName,e.props.className].filter((function(e){return!!e})).join(" "),n=r({key:t,className:a,style:T("item",t,e.props.style)},!b&&{tabIndex:-1});return o.default.cloneElement(e,n)}})))),!1!==s.customCrossIcon&&o.default.createElement("div",{style:T("closeButton")},o.default.createElement(d.default,{onClick:O,styles:s.styles,customIcon:s.customCrossIcon,className:s.crossButtonClassName,crossClassName:s.crossClassName,isOpen:b}))))};return s.propTypes={bodyClassName:l.default.string,burgerBarClassName:l.default.string,burgerButtonClassName:l.default.string,className:l.default.string,crossButtonClassName:l.default.string,crossClassName:l.default.string,customBurgerIcon:l.default.oneOfType([l.default.element,l.default.oneOf([!1])]),customCrossIcon:l.default.oneOfType([l.default.element,l.default.oneOf([!1])]),customOnKeyDown:l.default.func,disableAutoFocus:l.default.bool,disableCloseOnEsc:l.default.bool,disableOverlayClick:l.default.oneOfType([l.default.bool,l.default.func]),htmlClassName:l.default.string,id:l.default.string,isOpen:l.default.bool,itemClassName:l.default.string,itemListClassName:l.default.string,itemListElement:l.default.oneOf(["div","nav"]),menuClassName:l.default.string,morphShapeClassName:l.default.string,noOverlay:l.default.bool,noTransition:l.default.bool,onClose:l.default.func,onIconHoverChange:l.default.func,onOpen:l.default.func,onStateChange:l.default.func,outerContainerId:e&&e.outerContainer?l.default.string.isRequired:l.default.string,overlayClassName:l.default.string,pageWrapId:e&&e.pageWrap?l.default.string.isRequired:l.default.string,right:l.default.bool,styles:l.default.object,width:l.default.oneOfType([l.default.number,l.default.string])},s.defaultProps={bodyClassName:"",burgerBarClassName:"",burgerButtonClassName:"",className:"",crossButtonClassName:"",crossClassName:"",disableAutoFocus:!1,disableCloseOnEsc:!1,htmlClassName:"",id:"",itemClassName:"",itemListClassName:"",menuClassName:"",morphShapeClassName:"",noOverlay:!1,noTransition:!1,onStateChange:function(){},outerContainerId:"",overlayClassName:"",pageWrapId:"",styles:{},width:300,onIconHoverChange:function(){},itemListElement:"nav"},s},e.exports=t.default},3414:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(9978)),s=n(a(4126)),o=a(2539),l={svg:{lib:r.default,pathInitial:"M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z",pathOpen:"M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z",animate:function(e){var t=0,a=this.pathOpen.split(";"),n=a.length,r=window.mina;!function s(){t>n-1||(e.animate({path:a[t]},0===t?400:500,0===t?r.easein:r.elastic,(function(){s()})),t++)}()}},morphShape:function(e,t,a){return{position:"absolute",width:"100%",height:"100%",right:a?"inherit":0,left:a?0:"inherit",MozTransform:a?"rotateY(180deg)":"rotateY(0deg)",MsTransform:a?"rotateY(180deg)":"rotateY(0deg)",OTransform:a?"rotateY(180deg)":"rotateY(0deg)",WebkitTransform:a?"rotateY(180deg)":"rotateY(0deg)",transform:a?"rotateY(180deg)":"rotateY(0deg)"}},menuWrap:function(e,t,a){return{MozTransform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:e?"transform 0.4s 0s":"transform 0.4s"}},menu:function(e,t,a){var n=(0,o.pxToNum)(t)-140;return{position:"fixed",MozTransform:e?"":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",MsTransform:e?"":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",OTransform:e?"":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",WebkitTransform:e?"":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transform:e?"":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transition:e?"opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:e?1:0}},item:function(e,t,a,n){var r=(0,o.pxToNum)(t)-140;return{MozTransform:e?"translate3d(0, 0, 0)":a?"translate3d("+r+", 0, 0)":"translate3d(-"+r+", 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":a?"translate3d("+r+", 0, 0)":"translate3d(-"+r+", 0, 0)",OTransform:e?"translate3d(0, 0, 0)":a?"translate3d("+r+", 0, 0)":"translate3d(-"+r+", 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":a?"translate3d("+r+", 0, 0)":"translate3d(-"+r+", 0, 0)",transform:e?"translate3d(0, 0, 0)":a?"translate3d("+r+", 0, 0)":"translate3d(-"+r+", 0, 0)",transition:e?"opacity 0.3s 0.4s, transform 0.3s 0.4s":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:e?1:0}},closeButton:function(e,t,a){var n=(0,o.pxToNum)(t)-140;return{MozTransform:e?"translate3d(0, 0, 0)":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",OTransform:e?"translate3d(0, 0, 0)":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transform:e?"translate3d(0, 0, 0)":a?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transition:e?"opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:e?1:0}}};t.default=(0,s.default)(l),e.exports=t.default},2996:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(9978)),s=n(a(4126)),o=a(2539),l={svg:{lib:r.default,pathInitial:"M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z",pathOpen:"M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z",animate:function(e){e.animate({path:this.pathOpen},400,window.mina.easeinout)}},morphShape:function(e,t,a){return{position:"absolute",width:120,height:"100%",right:a?"inherit":0,left:a?0:"inherit",MozTransform:a?"rotateY(180deg)":"",MsTransform:a?"rotateY(180deg)":"",OTransform:a?"rotateY(180deg)":"",WebkitTransform:a?"rotateY(180deg)":"",transform:a?"rotateY(180deg)":""}},menuWrap:function(e,t,a){return{MozTransform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"translate3d(0, 0, 0)":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.3s"}},menu:function(e,t,a){return{position:"fixed",right:a?0:"inherit",width:(0,o.pxToNum)(t)-120,whiteSpace:"nowrap",boxSizing:"border-box",overflow:"visible"}},itemList:function(e,t,a){if(a)return{position:"relative",left:"-110px",width:"170%",overflow:"auto"}},pageWrap:function(e,t,a){return{MozTransform:e?"":a?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",MsTransform:e?"":a?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",OTransform:e?"":a?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",WebkitTransform:e?"":a?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",transform:e?"":a?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",transition:e?"all 0.3s":"all 0.3s 0.1s"}},outerContainer:function(e){return{overflow:e?"":"hidden"}}};t.default=(0,s.default)(l),e.exports=t.default},5576:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(4126),s=(n=r)&&n.__esModule?n:{default:n};t.default=(0,s.default)({menuWrap:function(e){return{MozTransform:e?"":"translate3d(0, -100%, 0)",MsTransform:e?"":"translate3d(0, -100%, 0)",OTransform:e?"":"translate3d(0, -100%, 0)",WebkitTransform:e?"":"translate3d(0, -100%, 0)",transform:e?"":"translate3d(0, -100%, 0)",transition:"all 0.5s ease-in-out"}},pageWrap:function(e,t,a){return{MozTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",MsTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",OTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",WebkitTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transition:"all 0.5s"}},outerContainer:function(e){return{perspective:"1500px",perspectiveOrigin:"0% 50%",overflow:e?"":"hidden"}}}),e.exports=t.default},3976:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(4126),s=(n=r)&&n.__esModule?n:{default:n};t.default=(0,s.default)({pageWrap:function(e,t,a){return{MozTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",MsTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",OTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",WebkitTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transition:"all 0.5s"}},outerContainer:function(e){return{overflow:e?"":"hidden"}}}),e.exports=t.default},8796:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(4126),s=(n=r)&&n.__esModule?n:{default:n};t.default=(0,s.default)({pageWrap:function(e,t,a){return{MozTransform:e?"":a?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",MsTransform:e?"":a?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",OTransform:e?"":a?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",WebkitTransform:e?"":a?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",transform:e?"":a?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",transformOrigin:a?"100% 50%":"0% 50%",transformStyle:"preserve-3d",transition:"all 0.5s"}},outerContainer:function(e){return{perspective:"1500px",overflow:e?"":"hidden"}}}),e.exports=t.default},6523:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(4126),s=(n=r)&&n.__esModule?n:{default:n};t.default=(0,s.default)({menuWrap:function(e,t,a){return{MozTransform:"translate3d(0, 0, 0)",MsTransform:"translate3d(0, 0, 0)",OTransform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)",zIndex:e?1e3:-1}},overlay:function(e,t,a){return{zIndex:1400,MozTransform:e?a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",MsTransform:e?a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",OTransform:e?a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",WebkitTransform:e?a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",transform:e?a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",transition:"all 0.5s",visibility:e?"visible":"hidden"}},pageWrap:function(e,t,a){return{MozTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",MsTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",OTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",WebkitTransform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transform:e?"":a?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transition:"all 0.5s",zIndex:1200,position:"relative"}},burgerIcon:function(e,t,a){return{MozTransform:e?a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",MsTransform:e?a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",OTransform:e?a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",WebkitTransform:e?a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",transform:e?a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",transition:"all 0.1s",position:"relative",zIndex:1300}},outerContainer:function(e){return{overflow:e?"":"hidden"}}}),e.exports=t.default},9070:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(4126),s=(n=r)&&n.__esModule?n:{default:n};t.default=(0,s.default)({pageWrap:function(e,t){return{MozTransform:e?"":"translate3d(0, 0, -"+t+")",MsTransform:e?"":"translate3d(0, 0, -"+t+")",OTransform:e?"":"translate3d(0, 0, -"+t+")",WebkitTransform:e?"":"translate3d(0, 0, -"+t+")",transform:e?"":"translate3d(0, 0, -"+t+")",transformOrigin:"100%",transformStyle:"preserve-3d",transition:"all 0.5s"}},outerContainer:function(){return{perspective:"1500px"}}}),e.exports=t.default},6001:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(4126),s=(n=r)&&n.__esModule?n:{default:n};t.default=(0,s.default)({pageWrap:function(e,t,a){return{MozTransform:e?"":a?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",MsTransform:e?"":a?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",OTransform:e?"":a?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",WebkitTransform:e?"":a?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",transform:e?"":a?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",transformStyle:"preserve-3d",transition:"all 0.5s",overflow:e?"":"hidden"}},outerContainer:function(e){return{perspective:"1500px",overflow:e?"":"hidden"}}}),e.exports=t.default},6432:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(4126),s=(n=r)&&n.__esModule?n:{default:n};t.default=(0,s.default)({}),e.exports=t.default},7277:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(4126),s=(n=r)&&n.__esModule?n:{default:n};t.default=(0,s.default)({menuWrap:function(e,t,a){return{MozTransform:e?"":a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",MsTransform:e?"":a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",OTransform:e?"":a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",WebkitTransform:e?"":a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",transform:e?"":a?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",transition:e?"transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)":"transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)"}},item:function(e,t,a,n){return{MozTransform:e?"":"translate3d(0, "+500*n+"px, 0)",MsTransform:e?"":"translate3d(0, "+500*n+"px, 0)",OTransform:e?"":"translate3d(0, "+500*n+"px, 0)",WebkitTransform:e?"":"translate3d(0, "+500*n+"px, 0)",transform:e?"":"translate3d(0, "+500*n+"px, 0)",transition:e?"transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)":"transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)"}}}),e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-fd3e6f5a37f29bc9a346.js.map