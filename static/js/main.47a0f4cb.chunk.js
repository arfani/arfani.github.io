(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{18:function(e,n,t){e.exports=t(30)},23:function(e,n,t){},24:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(8),i=t.n(c),r=(t(23),t(24),t(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=t(14),u=t(4),f=t(6),d=function(e,n){if("convLang"===n.type)switch(n.lang){case"english":case"indo":case"sasak":case"arab":(e=Object(f.a)({},e)).lang=n.dataLang}return e},h=t(16),g=function(){return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:"text-center p-5 m-5 text-light"},o.a.createElement("h1",null,o.a.createElement("i",{className:"fa fa-cog fa-spin"})),o.a.createElement("h3",null,"Preparing data..."),o.a.createElement("p",null,"Thanks for waiting :)")))},m=o.a.lazy((function(){return Promise.all([t.e(2),t.e(4)]).then(t.bind(null,137))})),p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c;fetch("https://restapi-cv.herokuapp.com/main").then((function(e){return e.json()})).then((function(e){var n=Object(u.d)(d,e.data,p(Object(u.a)(h.a)));i.a.render(o.a.createElement(s.a,{store:n},o.a.createElement(a.Suspense,{fallback:o.a.createElement(g,null)},o.a.createElement(m,null))),document.getElementById("root"))})).catch((function(e){console.log(e),i.a.render(o.a.createElement("h2",{className:"bg-light text-dark text-center p-5 m-5"},"Connection failed... please, check log in console !"),document.getElementById("root"))})),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");r?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):l(n,e)}))}}()}},[[18,1,3]]]);
//# sourceMappingURL=main.47a0f4cb.chunk.js.map