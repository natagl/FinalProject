(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,n){e.exports=n(65)},41:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(32),s=n.n(o),u=(n(41),n(16)),i=n(1),l=n.n(i),p=n(3),m=n(8),h=n(9),f=n(11),g=n(10),d=n(12),b=n(15),v=n(13),O=n(33),E=n.n(O);console.log("client "),a="https://app-final-glinska.herokuapp.com";var j=E.a.create({withCredentials:!0,baseURL:a}),w={isLoggedIn:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/is-logged-in");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.post("/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logIn:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.post("/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},y=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(r.Component);var k=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Not found"))},x=n(17),C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={},n.handleChange=function(e){return n.setState(Object(x.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.signUp(n.state);case 4:a=e.sent,n.props.setUser(Object(u.a)({},a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("*****",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement("h2",null,"SignUP"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),c.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),c.a.createElement("input",{type:"submit",value:"Sign Up"})))}}]),t}(r.Component),U=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={},n.handleChange=function(e){return n.setState(Object(x.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.logIn(n.state);case 4:a=e.sent,n.props.setUser(Object(u.a)({},a.data)),n.props.doFlashMessage("Logged In Successfully",!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("=-=-=-=-=-",e.t0.response.data),"Unauthorized"===e.t0.response.data?n.props.doFlashMessage("Email/Password Combination Incorrect, please check credentials and try again",!1):"Bad Request"===e.t0.response.data&&n.props.doFlashMessage("Please make sure to enter an Email AND Password",!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement("h2",null,"LogIn"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{name:"email",type:"email",onChange:this.handleChange}),c.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange}),c.a.createElement("input",{type:"submit",value:"Log In"})))}}]),t}(r.Component),S=function(e){return e.user.email||e.history.push("/log-in"),c.a.createElement("div",null,"Profile Welcome ",e.user.email," !!!")},I=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={},n.setUser=function(e){return n.setState(e)},n.logOut=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.logOut();case 2:e.sent,n.setUser({email:null,createdAt:null,updatedAt:null,_id:null});case 4:case"end":return e.stop()}}),e)}))),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.isLoggedIn();case 2:t=e.sent,this.setState(Object(u.a)({},t.data)),console.log("cool");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement(b.a,null,this.state.email,c.a.createElement("nav",null,c.a.createElement(b.b,{to:"/"},"Home |"),this.state.email?c.a.createElement(r.Fragment,null,c.a.createElement(b.b,{onClick:this.logOut,to:"/"},"Log Out |"),c.a.createElement(b.b,{to:"/profile"},"Profile|")):c.a.createElement(r.Fragment,null,c.a.createElement(b.b,{to:"/sign-up"},"Sign Up |"),c.a.createElement(b.b,{to:"/log-in"},"Log In |"))),c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(y,e)}}),c.a.createElement(v.a,{exact:!0,path:"/sign-up",render:function(t){return c.a.createElement(C,Object.assign({},t,{setUser:e.setUser}))}}),c.a.createElement(v.a,{exact:!0,path:"/log-in",render:function(t){return c.a.createElement(U,Object.assign({},t,{setUser:e.setUser}))}}),c.a.createElement(v.a,{exact:!0,path:"/profile",render:function(t){return c.a.createElement(S,Object.assign({},t,{user:e.state}))}}),c.a.createElement(v.a,{component:k})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.5e296ec8.chunk.js.map