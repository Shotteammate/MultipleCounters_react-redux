(window.webpackJsonpcounter=window.webpackJsonpcounter||[]).push([[0],{13:function(e,n,t){e.exports=t(25)},18:function(e,n,t){},19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),o=t(5),u=t.n(o),i=(t(18),t(19),function(e){var n=e.id,t=e.count,r=e.handleINC,o=e.handleDEC;return c.a.createElement("div",null,t," "," ",c.a.createElement("button",{onClick:function(){r(n)}},"+"),c.a.createElement("button",{onClick:function(){o(n)}},"-"))}),a=t(4),l={increment:function(e){return{type:"INCREMENT",id:e}},decrement:function(e){return{type:"DECREMENT",id:e}}},d=Object(a.b)((function(e){return{counters:e.counter.counters}}),l)((function(e){var n=e.counters,t=e.increment,r=e.decrement,o=function(e){t(e)},u=function(e){r(e)},a=n.map((function(e){return c.a.createElement(i,{key:e.id,id:e.id,count:e.count,handleINC:o,handleDEC:u})}));return c.a.createElement("div",null,a)})),E=t(3),f=t(12),s=t(11);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b={counters:[{id:0,count:0},{id:1,count:0}],counterId:2},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INCREMENT":return O({},e,{counters:e.counters.map((function(e){return e.id===n.id?O({},e,{count:e.count+1}):e}))});case"DECREMENT":return O({},e,{counters:e.counters.map((function(e){return e.id===n.id?O({},e,{count:e.count-1}):e}))});case"ADD_COUNTER":var t={id:e.counterId++,count:0};return O({},e,{counters:[].concat(Object(f.a)(e.counters),[t])});default:return e}},v=Object(E.b)({counter:m}),w=Object(E.c)(v,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),y={add:function(){return{type:"ADD_COUNTER"}}},D=Object(a.b)(null,y)((function(e){var n=e.add;return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){n()}},"Add Counter"))}));var j=function(){return c.a.createElement(a.a,{store:w},c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Counter App"),c.a.createElement(d,null),c.a.createElement(D,null)))};u.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.90002ebc.chunk.js.map