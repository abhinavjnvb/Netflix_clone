(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(18),o=n.n(i),r=(n(28),n(29),n(4)),s=n.n(r),l=n(6),d=n(5),u=n(19),h=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(48),n(20)),f=n(23),b=n.n(f),j=n(0),m=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),o=Object(d.a)(i,2),r=o[0],u=o[1],f=Object(c.useState)(""),m=Object(d.a)(f,2),g=m[0],p=m[1];Object(c.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(n);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var O={height:"390",width:"100%",playerVars:{autoPlay:1,origin:window.location.origin}};return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{className:"row_title",children:t}),Object(j.jsxs)("div",{className:"row_posters",children:[r.map((function(e){return Object(j.jsx)("img",{className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(a?e.poster_path:e.backdrop_path),alt:e.name,onClick:function(){return function(e){g?p(""):b()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)||"").then((function(e){console.log(e);var t=new URLSearchParams(new URL(e).search);p(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)}},e.id)})),g&&Object(j.jsx)(v.a,{videoId:g,opts:O})]})]})},g="b4374df747704bbc146bea1d3be95ab0",p={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")},O=(n(71),function(){var e,t,n=Object(c.useState)([]),a=Object(d.a)(n,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(p.fetchNetflixOriginals);case 2:t=e.sent,console.log(t.data.results[Math.floor(Math.random()*t.data.results.length+1)]),o(t.data.results[Math.floor(Math.random()*t.data.results.length+1)]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",background:"url(".concat("https://image.tmdb.org/t/p/original").concat(null===i||void 0===i?void 0:i.backdrop_path,")")},children:[Object(j.jsxs)("div",{className:"banner_contents",children:[Object(j.jsx)("h1",{className:"banner_title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(j.jsxs)("div",{className:"banner_buttons",children:[Object(j.jsx)("button",{className:"banner_button",children:"Play"}),Object(j.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(j.jsx)("h1",{className:"banner_description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(j.jsx)("div",{className:"banner_fadeBottom"})]})}),x=(n(72),function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)}))}),[]),Object(j.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(j.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"}),Object(j.jsx)("img",{className:"nav_avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Netflix avatar"})]})});var _=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(x,{}),Object(j.jsx)(O,{}),Object(j.jsx)(m,{title:"Netflix originals",fetchUrl:p.fetchNetflixOriginals,isLargeRow:!0}),Object(j.jsx)(m,{title:"Trending movies",fetchUrl:p.fetchTrending}),Object(j.jsx)(m,{title:"Top Rated",fetchUrl:p.fetchTopRated}),Object(j.jsx)(m,{title:"Action Movies",fetchUrl:p.fetchActionMovies}),Object(j.jsx)(m,{title:"Comedy Movies",fetchUrl:p.fetchComedyMovies}),Object(j.jsx)(m,{title:"Horror Movies",fetchUrl:p.fetchHorrorMovies}),Object(j.jsx)(m,{title:"Romance Movies",fetchUrl:p.fetchRomanceMovies}),Object(j.jsx)(m,{title:"Documentaries",fetchUrl:p.fetchDocumentaries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.575319f1.chunk.js.map