(this.webpackJsonpfreact=this.webpackJsonpfreact||[]).push([[0],{10:function(e,t,n){"use strict";var r=n(17),c=n(5),a={remarks:[{value:"Garmin",check:!1}],checkCount:0,allCheck:!1};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0,n=e.remarks,r=e.allCheck,u=e.checkCount;switch(t.type){case c.a:return e.remarks.push({value:t.value,check:!1}),e;case c.e:return e.remarks=e.remarks.filter((function(e,n){return n!==t.value&&e})),e;case c.d:return{remarks:n=n.filter((function(e,t){return!e.check})),checkCount:u=n.length,allCheck:r=!1};case c.c:return n[t.value].check=!n[t.value].check,u=n.filter((function(e){return e.check})).length,{remarks:n,checkCount:u,allCheck:r=u>=n.length};case c.b:var i;return r?(i=!1,r=!1,u=0):(r=!0,u=n.length,i=!0),{remarks:n=n.map((function(e){return e.check=i,e})),checkCount:u,allCheck:r};default:return e}},i=n(12),o=n.n(i),s={};var l=Object(r.b)({remarks:u,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.h:case c.f:return t.data}return e},login_state:function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.g:return!!o.a.get("_token");default:return!1}}}),h=n(39),d=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):r.c)(Object(r.a)(h.a)),f=Object(r.d)(l,d);t.a=f},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return O}));var r=n(19),c=n.n(r),a=n(26),u=n(5),i=n(21),o=n(40),s=n.n(o),l=n(18),h=n(12),d=n.n(h),f=n(10),b=s.a.create({baseURL:"/api",headers:{},timeout:3e3});b.interceptors.request.use((function(e){var t=d.a.get("_token")||null;return t&&(e.headers={Authorization:"Bearer ".concat(t)}),e}));var j={};b.interceptors.response.use((function(e){return console.log(e),e}),(function(e){var t=e.response.status,n=new l.a({});switch(t){case 401:return d.a.remove("_token"),f.a.dispatch(O()),setTimeout((function(){return n.history.replace({pathname:"/login"})}),0),Promise.reject("Permission denied")}}));var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,c){var a="data";switch(t.toUpperCase()){case"REQUEST":case"GET":case"HEAD":case"OPTIONS":a="params"}b(Object(i.a)({headers:j,url:e,method:t},a,n)).then((function(e){var t=e.status,n=e.data;switch(t){case 200:case 401:r(n)}r(n),console.log(e)})).catch((function(e){c(e)}))}))},v=function(e){return Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p("/login","POST",e).then((function(e){var t=e.code,n=(e.msg,e.data.token);0===t&&(d.a.set("_token",n,{expires:1}),f.a.dispatch({type:u.h,data:e.data})),console.log(e)}));case 2:case"end":return t.stop()}}),t)})))},m=function(){return Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/user","GET").then((function(e){var t=e.code,n=(e.msg,e.data);return 0===t&&f.a.dispatch({type:u.f,data:n}),!1}));case 2:case"end":return e.stop()}}),e)})))},O=function(){return{type:u.g}}},46:function(e,t,n){},47:function(e,t,n){},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l}));var r="add_remarks",c="del_remarks",a="del_check_remarks",u="check_remarks_item",i="check_remarks_all",o="login_user",s="get_user_info",l="is_user_login"},74:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(22),u=n.n(a),i=(n(46),n(47),n(13)),o=n(14),s=n(16),l=n(15),h=n(11),d=n.n(h),f=n(1),b=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,r=t.value;return Object(f.jsx)("li",{className:"list-group-item",children:Object(f.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(f.jsx)("span",{className:"text-start",children:r}),Object(f.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.props.onDelete(n)},children:"del"})]})})}}]),n}(r.Component);b.propsTypes={id:d.a.number.isRequired,value:d.a.string.isRequired,onDelete:d.a.func.isRequired},b.defaultProps={id:0,value:"empty"};r.Component;var j=n(18),p=n(3),v=n(38),m=n(12),O=n.n(m),g=n(10),k=(n(41),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={login_state:!0},r.unsubscribe=null,r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.a.subscribe((function(){e.getLoginState()}))}},{key:"componentWillUnmount",value:function(){var e;null===(e=this.unsubscribe)||void 0===e||e.call(this)}},{key:"getLoginState",value:function(){var e=g.a.getState().login_state;this.setState={login_state:e}}},{key:"render",value:function(){var e=O.a.get("_token")||"";return Object(f.jsx)("div",{children:e?Object(f.jsx)(p.b,Object(v.a)({},this.props)):Object(f.jsx)(p.a,{to:"/login"})})}}]),n}(r.Component)),_=function(e){return Object(r.lazy)((function(){return new Promise((function(t,n){e.then((function(e){console.log("\u52a0\u8f7d\u5b8c\u6bd5, \u5ef6\u8fdf\u4f20\u9001"),setTimeout((function(){console.log("\u4f20\u9001"),t(e)}),10)}))}))}))},x=function(e){Object(s.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"main",children:Object(f.jsx)(r.Suspense,{fallback:"loading...",children:Object(f.jsxs)(p.d,{children:[Object(f.jsx)(p.b,{path:"/",exact:!0,render:function(){return Object(f.jsx)(p.a,{to:"/guide"})}}),Object(f.jsx)(p.b,{path:"/guide",component:_(n.e(6).then(n.bind(null,80)))}),Object(f.jsx)(p.b,{path:"/remarks",component:_(n.e(3).then(n.bind(null,85)))}),Object(f.jsx)(p.b,{path:"/login",component:_(n.e(4).then(n.bind(null,81)))}),Object(f.jsx)(k,{path:"/user",component:_(n.e(5).then(n.bind(null,82)))}),Object(f.jsx)(p.b,{path:"/404",component:_(n.e(7).then(n.bind(null,83)))}),Object(f.jsx)(p.b,{render:function(){return Object(f.jsx)(p.a,{to:"/404"})}})]})})})}}]),c}(r.Component);var w=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(j.a,{children:Object(f.jsx)(p.b,{path:"/",component:x})})})},y=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))},C=(n(73),n(37));u.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(C.a,{store:g.a,children:Object(f.jsx)(w,{})})}),document.getElementById("root")),y()}},[[74,1,2]]]);
//# sourceMappingURL=main.d473fcd6.chunk.js.map