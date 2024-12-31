(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[115],{6046:(t,e,o)=>{"use strict";var n=o(6658);o.o(n,"useRouter")&&o.d(e,{useRouter:function(){return n.useRouter}})},2671:(t,e,o)=>{"use strict";o.d(e,{A:()=>g});var n=o(2115),r=o(7650);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}var u=function(t,e){void 0===e&&(e=!0),(0,n.useEffect)(function(){if(e){var o=function(e){"Escape"===e.key&&t(e)};return document.addEventListener("keyup",o),function(){e&&document.removeEventListener("keyup",o)}}},[t,e])},a=function(t,e){void 0===e&&(e=!0),(0,n.useEffect)(function(){if(e){var o=function(){t()};return window.addEventListener("resize",o),function(){e&&window.removeEventListener("resize",o)}}},[t,e])},l=function(t,e,o){void 0===o&&(o=!0),(0,n.useEffect)(function(){if(o){var n=function(o){var n=Array.isArray(t)?t:[t],r=!1;n.forEach(function(t){if(!t.current||t.current.contains(o.target)){r=!0;return}}),o.stopPropagation(),r||e(o)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){o&&(document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n))}}},[t,e,o])},c=function(t,e){void 0===e&&(e=!0),(0,n.useEffect)(function(){if(e){var o=function(e){if(9===e.keyCode){var o,n=null==t?void 0:null===(o=t.current)||void 0===o?void 0:o.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),r=Array.prototype.slice.call(n);if(1===r.length){e.preventDefault();return}var i=r[0],u=r[r.length-1];e.shiftKey&&document.activeElement===i?(e.preventDefault(),u.focus()):document.activeElement===u&&(e.preventDefault(),i.focus())}};return document.addEventListener("keydown",o),function(){e&&document.removeEventListener("keydown",o)}}},[t,e])},s="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,f={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},d=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],p=function(t,e,o,n,r){var i=r.offsetX,u=r.offsetY,a=n?8:0,l=o.split(" "),c=t.top+t.height/2,s=t.left+t.width/2,f=e.height,d=e.width,p=c-f/2,v=s-d/2,m="",h="0%",y="0%";switch(l[0]){case"top":p-=f/2+t.height/2+a,m="rotate(180deg)  translateX(50%)",h="100%",y="50%";break;case"bottom":p+=f/2+t.height/2+a,m="rotate(0deg) translateY(-100%) translateX(-50%)",y="50%";break;case"left":v-=d/2+t.width/2+a,m=" rotate(90deg)  translateY(50%) translateX(-25%)",y="100%",h="50%";break;case"right":v+=d/2+t.width/2+a,m="rotate(-90deg)  translateY(-150%) translateX(25%)",h="50%"}switch(l[1]){case"top":p=t.top,h=t.height/2+"px";break;case"bottom":p=t.top-f+t.height,h=f-t.height/2+"px";break;case"left":v=t.left,y=t.width/2+"px";break;case"right":v=t.left-d+t.width,y=d-t.width/2+"px"}return{top:p="top"===l[0]?p-u:p+u,left:v="left"===l[0]?v-i:v+i,transform:m,arrowLeft:y,arrowTop:h}},v=function(t){var e={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if("string"==typeof t){var o=document.querySelector(t);null!==o&&(e=o.getBoundingClientRect())}return e},m=function(t,e,o,n,r,i){var u=r.offsetX,a=r.offsetY,l={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},c=0,s=v(i),f=Array.isArray(o)?o:[o];for((i||Array.isArray(o))&&(f=[].concat(f,d));c<f.length;){var m={top:(l=p(t,e,f[c],n,{offsetX:u,offsetY:a})).top,left:l.left,width:e.width,height:e.height};if(m.top<=s.top||m.left<=s.left||m.top+m.height>=s.top+s.height||m.left+m.width>=s.left+s.width)c++;else break}return l},h=0,y=function(){var t=document.getElementById("popup-root");return null===t&&((t=document.createElement("div")).setAttribute("id","popup-root"),document.body.appendChild(t)),t};let g=(0,n.forwardRef)(function(t,e){var o=t.trigger,d=void 0===o?null:o,p=t.onOpen,v=void 0===p?function(){}:p,g=t.onClose,w=void 0===g?function(){}:g,b=t.defaultOpen,E=t.open,k=void 0===E?void 0:E,x=t.disabled,C=void 0!==x&&x,L=t.nested,A=void 0!==L&&L,R=t.closeOnDocumentClick,T=void 0===R||R,O=t.repositionOnResize,S=t.closeOnEscape,X=t.on,Y=void 0===X?["click"]:X,z=t.contentStyle,B=void 0===z?{}:z,I=t.arrowStyle,N=void 0===I?{}:I,D=t.overlayStyle,P=t.className,j=void 0===P?"":P,M=t.position,F=void 0===M?"bottom center":M,_=t.modal,q=void 0!==_&&_,H=t.lockScroll,K=void 0!==H&&H,W=t.arrow,G=void 0===W||W,J=t.offsetX,Q=void 0===J?0:J,U=t.offsetY,V=void 0===U?0:U,Z=t.mouseEnterDelay,$=void 0===Z?100:Z,tt=t.mouseLeaveDelay,te=void 0===tt?100:tt,to=t.keepTooltipInside,tn=void 0!==to&&to,tr=t.children,ti=(0,n.useState)(k||void 0!==b&&b),tu=ti[0],ta=ti[1],tl=(0,n.useRef)(null),tc=(0,n.useRef)(null),ts=(0,n.useRef)(null),tf=(0,n.useRef)(null),td=(0,n.useRef)("popup-"+ ++h),tp=!!q||!d,tv=(0,n.useRef)(0);s(function(){return tu?(tf.current=document.activeElement,tC(),tx(),tE()):tk(),function(){clearTimeout(tv.current)}},[tu]),(0,n.useEffect)(function(){"boolean"==typeof k&&(k?tm():th())},[k,C]);var tm=function(t){tu||C||(ta(!0),setTimeout(function(){return v(t)},0))},th=function(t){var e;tu&&!C&&(ta(!1),tp&&(null===(e=tf.current)||void 0===e||e.focus()),setTimeout(function(){return w(t)},0))},ty=function(t){null==t||t.stopPropagation(),tu?th(t):tm(t)},tg=function(t){clearTimeout(tv.current),tv.current=setTimeout(function(){return tm(t)},$)},tw=function(t){null==t||t.preventDefault(),ty()},tb=function(t){clearTimeout(tv.current),tv.current=setTimeout(function(){return th(t)},te)},tE=function(){tp&&K&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},tk=function(){tp&&K&&(document.getElementsByTagName("body")[0].style.overflow="auto")},tx=function(){var t,e=null==tc?void 0:null===(t=tc.current)||void 0===t?void 0:t.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),o=Array.prototype.slice.call(e)[0];null==o||o.focus()};(0,n.useImperativeHandle)(e,function(){return{open:function(){tm()},close:function(){th()},toggle:function(){ty()}}});var tC=function(){if(!tp&&tu&&(null==tl?void 0:tl.current)&&(null==tl?void 0:tl.current)&&(null==tc?void 0:tc.current)){var t,e,o=m(tl.current.getBoundingClientRect(),tc.current.getBoundingClientRect(),F,G,{offsetX:Q,offsetY:V},tn);tc.current.style.top=o.top+window.scrollY+"px",tc.current.style.left=o.left+window.scrollX+"px",G&&ts.current&&(ts.current.style.transform=o.transform,ts.current.style.setProperty("-ms-transform",o.transform),ts.current.style.setProperty("-webkit-transform",o.transform),ts.current.style.top=(null===(t=N.top)||void 0===t?void 0:t.toString())||o.arrowTop,ts.current.style.left=(null===(e=N.left)||void 0===e?void 0:e.toString())||o.arrowLeft)}};u(th,void 0===S||S),c(tc,tu&&tp),a(tC,void 0===O||O),l(d?[tc,tl]:[tc],th,T&&!A);var tL=function(){var t=tp?f.popupContent.modal:f.popupContent.tooltip,e={className:"popup-content "+(""!==j?j.split(" ").map(function(t){return t+"-content"}).join(" "):""),style:i({},t,B,{pointerEvents:"auto"}),ref:tc,onClick:function(t){t.stopPropagation()}};return!q&&Y.indexOf("hover")>=0&&(e.onMouseEnter=tg,e.onMouseLeave=tb),e},tA=function(){return n.createElement("div",Object.assign({},tL(),{key:"C",role:tp?"dialog":"tooltip",id:td.current}),G&&!tp&&n.createElement("div",{ref:ts,style:f.popupArrow},n.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(""!==j?j.split(" ").map(function(t){return t+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:i({position:"absolute"},N)},n.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),tr&&"function"==typeof tr?tr(th,tu):tr)},tR=!(Y.indexOf("hover")>=0),tT=tp?f.overlay.modal:f.overlay.tooltip,tO=[tR&&n.createElement("div",{key:"O","data-testid":"overlay","data-popup":tp?"modal":"tooltip",className:"popup-overlay "+(""!==j?j.split(" ").map(function(t){return t+"-overlay"}).join(" "):""),style:i({},tT,void 0===D?{}:D,{pointerEvents:T&&A||tp?"auto":"none"}),onClick:T&&A?th:void 0,tabIndex:-1},tp&&tA()),!tp&&tA()];return n.createElement(n.Fragment,null,function(){for(var t={key:"T",ref:tl,"aria-describedby":td.current},e=Array.isArray(Y)?Y:[Y],o=0,r=e.length;o<r;o++)switch(e[o]){case"click":t.onClick=ty;break;case"right-click":t.onContextMenu=tw;break;case"hover":t.onMouseEnter=tg,t.onMouseLeave=tb;break;case"focus":t.onFocus=tg,t.onBlur=tb}if("function"==typeof d){var i=d(tu);return!!d&&n.cloneElement(i,t)}return!!d&&n.cloneElement(d,t)}(),tu&&r.createPortal(tO,y()))})},6576:()=>{}}]);