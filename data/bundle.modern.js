var e,t,n,_,o,r,l={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,n){var _,o=arguments,r={};for(_ in t)"key"!==_&&"ref"!==_&&(r[_]=t[_]);if(arguments.length>3)for(n=[n],_=3;_<arguments.length;_++)n.push(o[_]);if(null!=n&&(r.children=n),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===r[_]&&(r[_]=e.defaultProps[_]);return f(e,r,t&&t.key,t&&t.ref,null)}function f(t,n,_,o,r){var l={type:t,props:n,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(l.__v=l),e.vnode&&e.vnode(l),l}function p(e){return e.children}function d(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?h(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function m(r){(!r.__d&&(r.__d=!0)&&t.push(r)&&!n++||o!==e.debounceRendering)&&((o=e.debounceRendering)||_)(y)}function y(){for(var e;n=t.length;)e=t.sort(function(e,t){return e.__v.__b-t.__v.__b}),t=[],e.some(function(e){var t,n,_,o,r,l,i;e.__d&&(l=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],(_=c({},r)).__v=_,o=P(i,r,_,t.__n,void 0!==i.ownerSVGElement,null,n,null==l?h(r):l),D(n,r),o!=l&&v(r)))})}function g(e,t,n,_,o,r,u,c,s){var f,p,d,v,m,y,g,S=n&&n.__k||i,b=S.length;if(c==l&&(c=null!=r?r[0]:b?h(n,0):null),f=0,t.__k=k(t.__k,function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=S[f])||d&&n.key==d.key&&n.type===d.type)S[f]=void 0;else for(p=0;p<b;p++){if((d=S[p])&&n.key==d.key&&n.type===d.type){S[p]=void 0;break}d=null}if(v=P(e,n,d=d||l,_,o,r,u,c,s),(p=n.ref)&&d.ref!=p&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(p,n.__c||v,n)),null!=v){var i;if(null==y&&(y=v),void 0!==n.__d)i=n.__d,n.__d=void 0;else if(r==d||v!=c||null==v.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(v),i=null;else{for(m=c,p=0;(m=m.nextSibling)&&p<b;p+=2)if(m==v)break e;e.insertBefore(v,c),i=c}"option"==t.type&&(e.value="")}c=void 0!==i?i:v.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&d.__e==c&&c.parentNode!=e&&(c=h(d))}return f++,n}),t.__e=y,null!=r&&"function"!=typeof t.type)for(f=r.length;f--;)null!=r[f]&&a(r[f]);for(f=b;f--;)null!=S[f]&&A(S[f],S[f]);if(g)for(f=0;f<g.length;f++)x(g[f],g[++f],g[++f])}function k(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var _=0;_<e.length;_++)k(e[_],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?f(null,e,null,null,e):null!=e.__e||null!=e.__c?f(e.type,e.props,e.key,null,e.__v):e):e);return n}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===u.test(t)?n+"px":null==n?"":n}function b(e,t,n,_,o){var r,l,i,u,c;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(r=e.style,"string"==typeof n)r.cssText=n;else{if("string"==typeof _&&(r.cssText="",_=null),_)for(u in _)n&&u in n||S(r,u,"");if(n)for(c in n)_&&n[c]===_[c]||S(r,c,n[c])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),i=t.toLowerCase(),t=(i in e?i:t).slice(2),n?(_||e.addEventListener(t,w,l),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,w,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function w(t){this.l[t.type](e.event?e.event(t):t)}function P(t,n,_,o,r,l,i,u,a){var s,f,h,v,m,y,k,S,b,w,P=n.type;if(void 0!==n.constructor)return null;(s=e.__b)&&s(n);try{e:if("function"==typeof P){if(S=n.props,b=(s=P.contextType)&&o[s.__c],w=s?b?b.props.value:s.__:o,_.__c?k=(f=n.__c=_.__c).__=f.__E:("prototype"in P&&P.prototype.render?n.__c=f=new P(S,w):(n.__c=f=new d(S,w),f.constructor=P,f.render=C),b&&b.sub(f),f.props=S,f.state||(f.state={}),f.context=w,f.__n=o,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=P.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=c({},f.__s)),c(f.__s,P.getDerivedStateFromProps(S,f.__s))),v=f.props,m=f.state,h)null==P.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==P.getDerivedStateFromProps&&S!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(S,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(S,f.__s,w)||n.__v===_.__v&&!f.__){for(f.props=S,f.state=f.__s,n.__v!==_.__v&&(f.__d=!1),f.__v=n,n.__e=_.__e,n.__k=_.__k,f.__h.length&&i.push(f),s=0;s<n.__k.length;s++)n.__k[s]&&(n.__k[s].__=n);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(S,f.__s,w),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(v,m,y)})}f.context=w,f.props=S,f.state=f.__s,(s=e.__r)&&s(n),f.__d=!1,f.__v=n,f.__P=t,s=f.render(f.props,f.state,f.context),n.__k=null!=s&&s.type==p&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=f.getChildContext&&(o=c(c({},o),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(v,m)),g(t,n,_,o,r,l,i,u,a),f.base=n.__e,f.__h.length&&i.push(f),k&&(f.__E=f.__=null),f.__e=!1}else null==l&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=E(_.__e,n,_,o,r,l,i,a);(s=e.diffed)&&s(n)}catch(t){n.__v=null,e.__e(t,n,_)}return n.__e}function D(t,n){e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function E(e,t,n,_,o,r,u,c){var a,s,f,p,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null!=r)for(a=0;a<r.length;a++)if(null!=(s=r[a])&&((null===t.type?3===s.nodeType:s.localName===t.type)||e==s)){e=s,r[a]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),r=null,c=!1}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else{if(null!=r&&(r=i.slice.call(e.childNodes)),f=(h=n.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(h===l)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||f)&&(p&&f&&p.__html==f.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,_,o){var r;for(r in n)"children"===r||"key"===r||r in t||b(e,r,null,n[r],_);for(r in t)o&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||b(e,r,t[r],n[r],_)})(e,v,h,o,c),p?t.__k=[]:(t.__k=t.props.children,g(e,t,n,_,"foreignObject"!==t.type&&o,r,u,l,c)),c||("value"in v&&void 0!==(a=v.value)&&a!==e.value&&b(e,"value",a,h.value,!1),"checked"in v&&void 0!==(a=v.checked)&&a!==e.checked&&b(e,"checked",a,h.checked,!1))}return e}function x(t,n,_){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,_)}}function A(t,n,_){var o,r,l;if(e.unmount&&e.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||x(o,null,n)),_||"function"==typeof t.type||(_=null!=(r=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){e.__e(t,n)}o.base=o.__P=null}if(o=t.__k)for(l=0;l<o.length;l++)o[l]&&A(o[l],n,_);null!=r&&a(r)}function C(e,t,n){return this.constructor(e,n)}e={__e:function(e,t){for(var n,_;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(_=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(_=!0,n.componentDidCatch(e)),_)return m(n.__E=n)}catch(t){e=t}throw e}},d.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},d.prototype.render=p,t=[],n=0,_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=l;var T,H,F,N=0,U=[],R=e.__r,M=e.diffed,L=e.__c,I=e.unmount;function W(t,n){e.__h&&e.__h(H,t,N||n),N=0;var _=H.__H||(H.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function B(){U.some(function(t){if(t.__P)try{t.__H.__h.forEach(O),t.__H.__h.forEach(G),t.__H.__h=[]}catch(n){return t.__H.__h=[],e.__e(n,t.__v),!0}}),U=[]}function O(e){e.t&&e.t()}function G(e){var t=e.__();"function"==typeof t&&(e.t=t)}function q(e,t){return"function"==typeof t?t(e):t}e.__r=function(e){R&&R(e),T=0,(H=e.__c).__H&&(H.__H.__h.forEach(O),H.__H.__h.forEach(G),H.__H.__h=[])},e.diffed=function(t){M&&M(t);var n=t.__c;if(n){var _=n.__H;_&&_.__h.length&&(1!==U.push(n)&&F===e.requestAnimationFrame||((F=e.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(_),cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(B))}},e.__c=function(t,n){n.some(function(t){try{t.__h.forEach(O),t.__h=t.__h.filter(function(e){return!e.__||G(e)})}catch(_){n.some(function(e){e.__h&&(e.__h=[])}),n=[],e.__e(_,t.__v)}}),L&&L(t,n)},e.unmount=function(t){I&&I(t);var n=t.__c;if(n){var _=n.__H;if(_)try{_.__.forEach(function(e){return e.t&&e.t()})}catch(t){e.__e(t,n.__v)}}},function(t,n,_){var o,u,c;e.__&&e.__(t,n),u=(o=void 0===r)?null:n.__k,t=s(p,null,[t]),c=[],P(n,n.__k=t,u||l,l,void 0!==n.ownerSVGElement,u?null:i.slice.call(n.childNodes),c,l,o),D(c,t)}(s(()=>{const[t,n]=(N=1,function(e,t,n){var _=W(T++,2);return _.__c||(_.__c=H,_.__=[q(void 0,[">"]),function(t){var n=e(_.__[0],t);_.__[0]!==n&&(_.__[0]=n,_.__c.setState({}))}]),_.__}(q)),_=["> Cycle START","> Searching...","> Found 3 people","> MAC ADDRESS 10BXFF33H5","> Saveing data.","> Updating Data Base","> Send Preamble 2400.5","> Found MAC ADDRESS AA.49.CF.80.11x","> Prepair Transmit","> Transmitting Test Signal","> Found 1 Device","> Set Packat size = Jambo","> Set data mode = stream","> Get device info","> ....Device data downloaded","> Update network server","> ERROR 404!!!","> Recover data 0x6356227","> update network server",".... Update seccessfull...","> Searching...","> Found 1 new Target device","> Increase transmit power 87%","> Set Duplex Mode = FULL","> Check IP Conf","> Set Detection mode = Parallel","> Set POWER MAX","> Send IMF_BEACON true","> Save DB","> Update API","> Contact Server","> Police detected !!!!!!!","> Set POWER MIN","> Set Transmit power 5%","> Set TimeOut 1 minuet","> Delay","> ...........","> Delay","> ...........","> Delay","> ...........","> Delay","> ...........","> Delay","> ...........","> Delay","> ...........","> Set Power mode = increase logaritmic","> Power UP","> Search for devices","> No new device found","> Recover old device data log","> ReTransmit base"];let o=[],r=0,l=0,i=1;return function(t,n){var _=W(T++,3);!e.__s&&function(e,t){return!e||t.some(function(t,n){return t!==e[n]})}(_.__H,n)&&(_.__=t,_.__H=n,H.__H.__h.push(_))}(()=>{const e=setInterval(()=>{for(o=[];l<i;l++)o.push(_[l]);o.push(">_"),n(o),i++,r++,r<7?l=0:r>=7&&(l=r-7,i=r),r>_.length&&(r=0,i=1,l=0)},2500);return()=>clearInterval(e)},[]),s("div",{id:"app"},s("h1",null,"5G System Logger"),s("div",{id:"box"},t.map(e=>s("p",null,e))))},null),window.preact_root);