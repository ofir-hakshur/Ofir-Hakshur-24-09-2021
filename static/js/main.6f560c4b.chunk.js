(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{64:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),i=n.n(a),o=n(18),s=n(10),u=n.n(s),l=n(12),d=n(22),j=n(14),h=n.n(j),p=n(11),b=n.n(p),f={tempEndPoint:"https://jsonplaceholder.typicode.com/users",apikey:"ZSqquvHhCYForYQWzUKukJNOLbLDOZ1S",telAvivKey:"215854",baseRoute:"https://dataservice.accuweather.com",autoCompleteApiEndPoint:"locations/v1/cities/autocomplete",currentWeatherEndPoint:"currentconditions/v1",dailyWeatherEndPoint:"forecasts/v1/daily/5day",geoPositionEndPoint:"locations/v1/cities/geoposition/search"},O=(n(64),{ONE_SECOND:1e3,TEL_AVIV:"Tel Aviv",FAHRENHEIT:"F",CELSIUS:"C",DAYS:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"}}),m=function(e){var t=new Date(e).getDay();return O.DAYS[t]},v=function(e,t){if(e==O.FAHRENHEIT)return t;var n=function(e){return 5/9*(e-32)}(t);return Number.parseFloat(n).toPrecision(3)},y=function(e){return"home-layout-"+e},x=n(3),g=(n(68),n(1));var E=function(e){var t=e.display;return Object(g.jsx)("i",{className:"fa".concat(t?"s":"r"," fa-heart like-margin")})},C=function(e){return{type:"CHANGE_CITY",payload:e}},N=function(e){return{type:"CHANGE_DAILY",payload:e}},T=function(e){return{type:"CHANGE_CITY_NAME",payload:e}},k=function(e){var t=e.isCurrentCityInFavoriteList,n=Object(x.c)((function(e){return e.units})),r=Object(x.c)((function(e){return e.currentCityWeather})),c=Object(x.c)((function(e){return e.currentCityName})),a=Object(x.b)();return Object(g.jsxs)("div",{className:"btns-wrapper",children:[Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:"btn btn-secondary",onClick:n==O.CELSIUS?function(){return a({type:"TO_FARHENHEIT"})}:function(){return a({type:"TO_CELSIUS"})},children:n==O.CELSIUS?"To farhenheit":"To celsius"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(E,{display:t()}),Object(g.jsx)("button",{className:1==t()?"btn btn-danger":"btn btn-success",onClick:1==t()?function(){return a({type:"REMOVE_FROMFAVORITE_CITIES",payload:{cityWeather:r[0],cityName:c}})}:function(){return a({type:"ADD_TO_FAVORITE_CITIES",payload:{cityWeather:r[0],cityName:c}})},children:1==t()?"remove from favorites":"add to favorites"})]})]})},A=function(){var e=Object(x.c)((function(e){return e.units})),t=Object(x.c)((function(e){return e.currentCityWeather})),n=Object(x.c)((function(e){return e.currentCityName}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"home-box home-currentWeather",children:[n," ",t&&0!=t.length&&v(e,t[0].Temperature.Imperial.Value),Object(g.jsx)("span",{className:"home-minorMargin",children:e==O.FAHRENHEIT?Object(g.jsx)("span",{children:"\u2109"}):Object(g.jsx)("span",{children:"\u2103"})})]}),Object(g.jsx)("div",{className:"home-weatherText",children:t&&0!=t.length&&t[0].WeatherText})]})},I=function(){var e=Object(x.c)((function(e){return e.units})),t=Object(x.c)((function(e){return e.currentDaily}));return Object(g.jsx)("div",{className:"row row-cols-auto",children:!h.a.isEmpty(t)&&t.DailyForecasts.map((function(t){return Object(g.jsxs)("div",{className:"home-box home-margin",children:[v(e,t.Temperature.Minimum.Value)," - ",v(e,t.Temperature.Maximum.Value),Object(g.jsx)("span",{className:"home-minorMargin",children:e==O.FAHRENHEIT?Object(g.jsx)("span",{children:"\u2109"}):Object(g.jsx)("span",{children:"\u2103"})}),Object(g.jsx)("div",{children:m(t.Date)})]},t.EpochDate)}))})},_=function(e){var t=e.textBox,n=e.handleTextBoxOnChange,r=e.suggestedCities,c=e.handleCityOnClick;return Object(g.jsxs)("div",{className:"home-textBox",children:[Object(g.jsx)("input",{type:"text",placeholder:"Search..",value:t,onChange:function(e){return n(e.currentTarget.value)}}),Object(g.jsx)("div",{className:"home-suggestedCities",children:r.length>0&&Object(g.jsx)("div",{children:r.map((function(e){return Object(g.jsx)("div",{className:"home-autocompleteItems",children:Object(g.jsx)("span",{onClick:function(){return c(e.LocalizedName)},children:e.LocalizedName})},e.Key)}))})})]})},S=function(){var e=Object(x.c)((function(e){return e.themes})),t=Object(x.c)((function(e){return e.currentCityWeather})),n=Object(x.c)((function(e){return e.favoriteCities})),c=Object(x.c)((function(e){return e.currentCityName})),a=Object(x.b)(),i=Object(r.useState)([]),o=Object(d.a)(i,2),s=o[0],h=o[1],p=Object(r.useState)(""),m=Object(d.a)(p,2),v=m[0],E=m[1],S=Object(r.useState)(f.telAvivKey),w=Object(d.a)(S,2),R=w[0],F=w[1],H=Object(r.useCallback)(Object(j.debounce)((function(e){return D(e)}),O.ONE_SECOND),[]);Object(r.useEffect)((function(){0==t.length&&navigator.geolocation.getCurrentPosition(M,K)}),[]);var D=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=7;break}return e.next=3,b.a.get("".concat(f.baseRoute,"/").concat(f.autoCompleteApiEndPoint),{params:{apikey:f.apikey,q:t}});case 3:n=e.sent,h(n.data),e.next=8;break;case 7:h([]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(t),n=s.filter((function(e){return e.LocalizedName==t}))[0].Key,h([]),n!=R&&Y(t,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:y(e),children:[Object(g.jsx)(_,{handleTextBoxOnChange:function(e){E(e),H(e)},textBox:v,suggestedCities:s,handleCityOnClick:W}),Object(g.jsx)(k,{isCurrentCityInFavoriteList:function(){return n.filter((function(e){return c==e.cityName})).length>0}}),Object(g.jsxs)("div",{className:"home-margin",children:[Object(g.jsx)(A,{}),Object(g.jsx)(I,{})]})]});function L(){return(L=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(f.baseRoute,"/").concat(f.currentWeatherEndPoint,"/").concat(f.telAvivKey),{params:{apikey:f.apikey}});case 2:t=e.sent,n=t.data,a(C(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(f.baseRoute,"/").concat(f.dailyWeatherEndPoint,"/").concat(f.telAvivKey),{params:{apikey:f.apikey}});case 2:t=e.sent,n=t.data,a(N(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return V.apply(this,arguments)}function V(){return(V=Object(l.a)(u.a.mark((function e(t){var n,r,c,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.coords.latitude,",").concat(t.coords.longitude),e.next=3,b.a.get("".concat(f.baseRoute,"/").concat(f.geoPositionEndPoint),{params:{apikey:f.apikey,q:n}});case 3:return r=e.sent,c=r.data.LocalizedName,e.next=7,b.a.get("".concat(f.baseRoute,"/").concat(f.autoCompleteApiEndPoint),{params:{apikey:f.apikey,q:c}});case 7:a=e.sent,i=a.data.filter((function(e){return e.LocalizedName==c}))[0].Key,Y(c,i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){!function(){L.apply(this,arguments)}(),function(){P.apply(this,arguments)}()}function Y(e,t){return G.apply(this,arguments)}function G(){return(G=Object(l.a)(u.a.mark((function e(t,n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(T(t)),F(n),e.next=4,b.a.get("".concat(f.baseRoute,"/").concat(f.currentWeatherEndPoint,"/").concat(n),{params:{apikey:f.apikey}});case 4:return r=e.sent,e.next=7,b.a.get("".concat(f.baseRoute,"/").concat(f.dailyWeatherEndPoint,"/").concat(n),{params:{apikey:f.apikey}});case 7:c=e.sent,a(C(r.data)),a(N(c.data));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},w=S,R=(n(70),function(){var e=Object(x.c)((function(e){return e.themes})),t=Object(x.b)();return Object(g.jsxs)("nav",{className:"navbar-wrapper",children:[Object(g.jsx)("div",{children:"Ofir Hakshur - Weather App"}),Object(g.jsxs)("div",{children:[Object(g.jsx)(o.b,{to:"/",children:"Home"}),Object(g.jsx)(o.b,{to:"/favorites",children:"Favorites"}),Object(g.jsx)("button",{onClick:"light"==e?function(){return t({type:"TO_DARK"})}:function(){return t({type:"TO_LIGHT"})},children:"Dark/Light Theme"})]})]})}),F=n(4);n(72);var H=function(){var e=Object(x.c)((function(e){return e.themes})),t=Object(x.c)((function(e){return e.units})),n=Object(x.c)((function(e){return e.favoriteCities}));return Object(g.jsx)("div",{style:{backgroundColor:e},children:Object(g.jsx)("div",{className:"favorites-container ".concat(e),children:Object(g.jsx)("div",{className:"row row-cols-auto",children:n.map((function(e){return Object(g.jsxs)("div",{className:"favorites-box",children:[Object(g.jsx)("div",{children:e.cityName}),Object(g.jsxs)("div",{children:[e.cityWeather.Temperature.Metric.Value," ",Object(g.jsx)("span",{className:"home-minorMargin",children:t==O.FAHRENHEIT?Object(g.jsx)("span",{children:"\u2109"}):Object(g.jsx)("span",{children:"\u2103"})})]}),Object(g.jsx)("div",{children:e.cityWeather.WeatherText})]},e.cityName)}))})})})},D=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(R,{}),Object(g.jsxs)(F.c,{children:[Object(g.jsx)(F.a,{path:"/favorites",render:function(){return Object(g.jsx)(H,{})}}),Object(g.jsx)(F.a,{path:"/",render:function(){return Object(g.jsx)(w,{})}})]})]})},W=(n(73),n(15)),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"F",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TO_FARHENHEIT":return"F";case"TO_CELSIUS":return"C";default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TO_LIGHT":return"light";case"TO_DARK":return"dark";default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CHANGE_CITY"===t.type?t.payload:e},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"CHANGE_DAILY"===t.type?t.payload:e},K=n(38),Y=5,G="Tel Aviv",z=function(e,t){var n=e.length;return n>=0&&n<Y?[].concat(Object(K.a)(e),[t]):e},B=function(e,t){return 0!=e.filter((function(e){return e.cityName==t.cityName})).length?e.filter((function(e){return t.cityName!=e.cityName})):e},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_FAVORITE_CITIES":return z(e,t.payload);case"REMOVE_FROMFAVORITE_CITIES":return B(e,t.payload);default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return"CHANGE_CITY_NAME"===t.type?t.payload:e},J=Object(W.combineReducers)({currentCityName:q,favoriteCities:U,units:L,themes:P,currentCityWeather:M,currentDaily:V}),Z=n(37),Q=Object(W.createStore)(J,Object(Z.composeWithDevTools)());i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(x.a,{store:Q,children:Object(g.jsx)(o.a,{children:Object(g.jsx)(D,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.6f560c4b.chunk.js.map