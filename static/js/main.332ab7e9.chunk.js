(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{63:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(19),i=n.n(c),s=n(18),o=n(37),u=n(11),l=n(10),d=n.n(l),h=n(13),j=n(15),b=n.n(j),p=n(12),m=n.n(p),f={tempEndPoint:"https://jsonplaceholder.typicode.com/users",apikey:"H8fDv5gREko67t9XQ5yCxJPdM1sGfjm2",telAvivKey:"215854",baseRoute:"https://dataservice.accuweather.com",autoCompleteApiEndPoint:"locations/v1/cities/autocomplete",currentWeatherEndPoint:"currentconditions/v1",dailyWeatherEndPoint:"forecasts/v1/daily/5day",geoPositionEndPoint:"locations/v1/cities/geoposition/search"},O=(n(63),{ONE_SECOND:1e3,TEL_AVIV:"Tel Aviv",FAHRENHEIT:"F",CELSIUS:"C",DAYS:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"}}),v=function(e){var t=new Date(e).getDay();return O.DAYS[t]},y=function(e,t){if(e==O.FAHRENHEIT)return t;var n=function(e){return 5/9*(e-32)}(t);return Number.parseFloat(n).toPrecision(3)},x=function(e){return"home-layout-"+e},C=n(4),N=(n(67),n(1));var g=function(e){var t=e.display;return Object(N.jsx)("i",{className:"fa".concat(t?"s":"r"," fa-heart like-margin")})},E=function(e){var t=e.currentCityWeather,n=e.isCurrentCityInFavoriteList,r=e.addToFavorites,a=e.removeFromFavorites,c=e.currentCityName,i=Object(C.c)((function(e){return e.units})),s=Object(C.b)();return Object(N.jsxs)("div",{className:"btns-wrapper",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("button",{className:"btn btn-secondary",onClick:function(){return s({type:"TO_CELSIUS"})},hidden:i==O.CELSIUS,children:"celsius"}),Object(N.jsx)("button",{className:"btn btn-secondary",onClick:function(){return s({type:"TO_FARHENHEIT"})},hidden:i==O.FAHRENHEIT,children:"fahrenheit"})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(g,{display:n()}),Object(N.jsx)("button",{className:"btn btn-success",hidden:n(),onClick:function(){return r({cityWeather:t[0],cityName:c})},children:"add to favorites"}),Object(N.jsx)("button",{className:"btn btn-danger",hidden:!n(),onClick:function(){return a({cityWeather:t[0],cityName:c})},children:"remove from favorites"})]})]})},k=function(e){var t=e.currentCityName,n=e.currentCityWeather,r=Object(C.c)((function(e){return e.units}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"home-box home-currentWeather",children:[t," ",n&&0!=n.length&&y(r,n[0].Temperature.Imperial.Value),Object(N.jsx)("span",{className:"home-minorMargin",children:r==O.FAHRENHEIT?Object(N.jsx)("span",{children:"\u2109"}):Object(N.jsx)("span",{children:"\u2103"})})]}),Object(N.jsx)("div",{className:"home-weatherText",children:n&&0!=n.length&&n[0].WeatherText})]})},T=function(e){var t=e.currentCityDailyWeather,n=Object(C.c)((function(e){return e.units}));return Object(N.jsx)("div",{className:"row row-cols-auto",children:!b.a.isEmpty(t)&&t.DailyForecasts.map((function(e){return Object(N.jsxs)("div",{className:"home-box home-margin",children:[y(n,e.Temperature.Minimum.Value)," - ",y(n,e.Temperature.Maximum.Value),Object(N.jsx)("span",{className:"home-minorMargin",children:n==O.FAHRENHEIT?Object(N.jsx)("span",{children:"\u2109"}):Object(N.jsx)("span",{children:"\u2103"})}),Object(N.jsx)("div",{children:v(e.Date)})]},e.EpochDate)}))})},F=function(e){var t=e.textBox,n=e.handleTextBoxOnChange,r=e.suggestedCities,a=e.handleCityOnClick;return Object(N.jsxs)("div",{className:"home-textBox",children:[Object(N.jsx)("input",{type:"text",placeholder:"Search..",value:t,onChange:function(e){return n(e.currentTarget.value)}}),Object(N.jsx)("div",{className:"home-suggestedCities",children:r.length>0&&Object(N.jsx)("div",{children:r.map((function(e){return Object(N.jsx)("div",{className:"home-autocompleteItems",children:Object(N.jsx)("span",{onClick:function(){return a(e.LocalizedName)},children:e.LocalizedName})},e.Key)}))})})]})},W=function(e){var t=e.favoriteCities,n=e.addToFavorites,a=e.removeFromFavorites,c=e.currentCityWeather,i=e.setCurrentCityWeather,s=e.currentCityDailyWeather,o=e.setCurrentCityDailyWeather,l=Object(C.c)((function(e){return e.themes})),b=Object(r.useState)([]),p=Object(u.a)(b,2),v=p[0],y=p[1],g=Object(r.useState)(""),W=Object(u.a)(g,2),w=W[0],S=W[1],A=Object(r.useState)(O.TEL_AVIV),H=Object(u.a)(A,2),I=H[0],D=H[1],R=Object(r.useState)(f.telAvivKey),P=Object(u.a)(R,2),L=P[0],_=P[1],K=Object(r.useCallback)(Object(j.debounce)((function(e){return M(e)}),O.ONE_SECOND),[]);Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition(U,G)}),[]);var M=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=7;break}return e.next=3,m.a.get("".concat(f.baseRoute,"/").concat(f.autoCompleteApiEndPoint),{params:{apikey:f.apikey,q:t}});case 3:n=e.sent,y(n.data),e.next=8;break;case 7:y([]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t),n=v.filter((function(e){return e.LocalizedName==t}))[0].Key,y([]),n!=L&&J(t,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:x(l),children:[Object(N.jsx)(F,{handleTextBoxOnChange:function(e){S(e),K(e)},textBox:w,suggestedCities:v,handleCityOnClick:V}),Object(N.jsx)(E,{currentCityWeather:c,isCurrentCityInFavoriteList:function(){return t.filter((function(e){return I==e.cityName})).length>0},addToFavorites:n,removeFromFavorites:a,currentCityName:I}),Object(N.jsxs)("div",{className:"home-margin",children:[Object(N.jsx)(k,{currentCityName:I,currentCityWeather:c}),Object(N.jsx)(T,{currentCityDailyWeather:s})]})]});function B(){return(B=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(f.baseRoute,"/").concat(f.currentWeatherEndPoint,"/").concat(f.telAvivKey),{params:{apikey:f.apikey}});case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(f.baseRoute,"/").concat(f.dailyWeatherEndPoint,"/").concat(f.telAvivKey),{params:{apikey:f.apikey}});case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return q.apply(this,arguments)}function q(){return(q=Object(h.a)(d.a.mark((function e(t){var n,r,a,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.coords.latitude,",").concat(t.coords.longitude),e.next=3,m.a.get("".concat(f.baseRoute,"/").concat(f.geoPositionEndPoint),{params:{apikey:f.apikey,q:n}});case 3:return r=e.sent,a=r.data.LocalizedName,e.next=7,m.a.get("".concat(f.baseRoute,"/").concat(f.autoCompleteApiEndPoint),{params:{apikey:f.apikey,q:a}});case 7:c=e.sent,i=c.data.filter((function(e){return e.LocalizedName==a}))[0].Key,J(a,i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){!function(){B.apply(this,arguments)}(),function(){z.apply(this,arguments)}()}function J(e,t){return Y.apply(this,arguments)}function Y(){return Y=Object(h.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(t),_(n),e.next=4,m.a.get("".concat(f.baseRoute,"/").concat(f.currentWeatherEndPoint,"/").concat(n),{params:{apikey:f.apikey}});case 4:return r=e.sent,e.next=7,m.a.get("".concat(f.baseRoute,"/").concat(f.dailyWeatherEndPoint,"/").concat(n),{params:{apikey:f.apikey}});case 7:a=e.sent,i(r.data),o(a.data);case 10:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}},w=W,S=5,A=(n(69),function(){var e=Object(C.c)((function(e){return e.themes})),t=Object(C.b)();return Object(N.jsxs)("nav",{className:"navbar-wrapper",children:[Object(N.jsx)("div",{children:"Herolo weather task - Ofir Hakshur"}),Object(N.jsxs)("div",{children:[Object(N.jsx)(s.b,{to:"/",children:"Home"}),Object(N.jsx)(s.b,{to:"/favorites",children:"Favorites"}),Object(N.jsx)("button",{onClick:"light"==e?function(){return t({type:"TO_DARK"})}:function(){return t({type:"TO_LIGHT"})},children:"Dark/Light Theme"})]})]})}),H=n(3);n(71);var I=function(e){var t=e.favoriteCities,n=Object(C.c)((function(e){return e.themes})),r=Object(C.c)((function(e){return e.units}));return Object(N.jsx)("div",{style:{backgroundColor:n},children:Object(N.jsx)("div",{className:"favorites-container ".concat(n),children:Object(N.jsx)("div",{className:"row row-cols-auto",children:t.map((function(e){return Object(N.jsxs)("div",{className:"favorites-box",children:[Object(N.jsx)("div",{children:e.cityName}),Object(N.jsxs)("div",{children:[e.cityWeather.Temperature.Metric.Value," ",Object(N.jsx)("span",{className:"home-minorMargin",children:r==O.FAHRENHEIT?Object(N.jsx)("span",{children:"\u2109"}):Object(N.jsx)("span",{children:"\u2103"})})]}),Object(N.jsx)("div",{children:e.cityWeather.WeatherText})]},e.cityName)}))})})})},D=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({}),i=Object(u.a)(c,2),s=i[0],l=i[1],d=Object(r.useState)([]),h=Object(u.a)(d,2),j=h[0],b=h[1],p=function(e){var t=j.length;if(t>=0&&t<S){var n=[].concat(Object(o.a)(j),[e]);b(n)}},m=function(e){if(0!=j.filter((function(t){return t.cityName==e.cityName})).length){var t=j.filter((function(t){return e.cityName!=t.cityName}));b(t)}};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(A,{}),Object(N.jsxs)(H.c,{children:[Object(N.jsx)(H.a,{path:"/favorites",render:function(){return Object(N.jsx)(I,{favoriteCities:j})}}),Object(N.jsx)(H.a,{path:"/",render:function(){return Object(N.jsx)(w,{currentCityDailyWeather:s,setCurrentCityDailyWeather:l,currentCityWeather:n,setCurrentCityWeather:a,addToFavorites:p,removeFromFavorites:m,favoriteCities:j})}})]})]})},R=(n(72),n(22)),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"F",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TO_FARHENHEIT":return"F";case"TO_CELSIUS":return"C";default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TO_LIGHT":return"light";case"TO_DARK":return"dark";default:return e}},_=Object(R.a)({units:P,themes:L}),K=Object(R.b)(_);i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(C.a,{store:K,children:Object(N.jsx)(s.a,{children:Object(N.jsx)(D,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.332ab7e9.chunk.js.map