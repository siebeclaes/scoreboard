(this.webpackJsonpscoreboard=this.webpackJsonpscoreboard||[]).push([[0],{118:function(e,t,n){e.exports=n(240)},123:function(e,t,n){},124:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),u=n.n(o),l=(n(123),n(124),n(125),n(81)),c=n(82),i=n(44),s=n(50),m=function(){return r.a.createElement(c.a,{bg:"dark",variant:"dark",fixed:"top",expand:"lg"},r.a.createElement(c.a.Brand,null,"Scoreboard"),r.a.createElement(i.a,{className:"mr-auto"},r.a.createElement(s.LinkContainer,{to:"/groups"},r.a.createElement(i.a.Link,null,"Ploegen")),r.a.createElement(s.LinkContainer,{to:"/rounds"},r.a.createElement(i.a.Link,null,"Reeksen")),r.a.createElement(s.LinkContainer,{to:"/intermediatescore"},r.a.createElement(i.a.Link,null,"Tussenstand")),r.a.createElement(s.LinkContainer,{to:"/finalscore"},r.a.createElement(i.a.Link,null,"Eindstand"))))},h=n(32),d=n(13),p=n(14),f=n(16),b=n(15),g=n(9),E=n(17),v=n(6),k=n(7),j=n(11),O=n(21),S=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={number:"",name:""},n.dispatch=e.dispatch,n.handleInputChange=n.handleInputChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(h.a)({},a,n))}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.name.trim()||this.nameInput.focus(),this.state.number.trim()&&this.state.name.trim()){var t=parseInt(this.state.number,10);isNaN(t)||this.dispatch(function(e,t){return{type:"ADD_GROUP",number:e,name:t}}(t,this.state.name)),this.setState({number:"",name:""}),this.numberInput.focus()}}},{key:"render",value:function(){var e=this;return r.a.createElement(k.a,{className:"p-4",onSubmit:this.handleSubmit},r.a.createElement(k.a.Row,null,r.a.createElement(j.a,{className:"col-md-2"},r.a.createElement(k.a.Control,{name:"number",placeholder:"Tafelnummer",ref:function(t){e.numberInput=t},value:this.state.number,onChange:this.handleInputChange})),r.a.createElement(j.a,null,r.a.createElement(k.a.Control,{name:"name",placeholder:"Ploegsnaam",ref:function(t){e.nameInput=t},value:this.state.name,onChange:this.handleInputChange})),r.a.createElement(O.a,{type:"submit"},"Ploeg toevoegen")))}}]),t}(r.a.Component),y=Object(v.b)()(S),w=function(e){var t=e.number,n=e.name,a=e.joker,o=e.totalScore;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,o))},C=n(33),P=function(e){var t=e.groups;return r.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Tafel"),r.a.createElement("th",null,"Ploegsnaam"),r.a.createElement("th",null,"Joker"),r.a.createElement("th",null,"Totaal score"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(w,{key:e.number,number:e.number,name:e.name,joker:e.joker,totalScore:e.totalScore})}))))},I=n(30),N=n(42),D=n.n(N),x=n(65),A=n.n(x);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){return e.groups},L=function(e){return e.rounds},F=function(e){return e.scores},U=function(e,t){return e.scores},z=function(e,t){return t.round},B=function(e,t){return e.rounds.filter((function(e){return e.number===parseInt(t.match.params.round)}))},G=Object(I.a)((function(e,t){return e.groups}),(function(e,t){return e.rounds}),U,(function(e,t){return t.includeJoker}),(function(e,t,n,a){var r=D()(t,["number"],["asc"]),o=r.map((function(e){return e.name})),u=e.map((function(e,t){var o=r.map((function(t){var r=A()(n,(function(n){return n.round===t.number&&n.group===e.number}));return r?a?r:J({},r,{joker:!1}):{points:0,joker:!1}})),u=n.filter((function(t){return t.group===e.number})).reduce((function(e,t){return t.joker&&a?e+2*t.points:e+t.points}),0);return{groupName:e.name,roundScores:o,totalScore:u}}));return{rounds:o,scores:D()(u,["totalScore"],["desc"]).map((function(e,t){return J({},e,{ranking:t+1})}))}})),_=Object(I.a)(R,L,F,(function(e,t,n){return e.map((function(e,a){var r=A()(n,(function(t){return t.joker&&t.group===e.number})),o=void 0;r&&(o=A()(t,(function(e){return e.number===r.round})).name);var u=n.filter((function(t){return t.group===e.number})).reduce((function(e,t){return t.joker?e+2*t.points:e+t.points}),0);return J({},e,{joker:o||"-",totalScore:u})}))})),K=Object(I.a)(R,(function(e){return e.map((function(e,t){return e.number}))})),M=Object(I.a)(_,(function(e){return D()(e,["number"],["asc"])})),W=Object(I.a)(L,(function(e){return D()(e,["number"],["asc"])})),H=Object(I.a)(F,(function(e){return e.filter((function(e){return e.joker})).map((function(e,t){return e.group}))})),$=Object(v.b)((function(e){return{groups:M(e)}}),(function(e){return{}}))(P),q=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=JSON.stringify(this.props.fullState),n="data:application/json;charset=utf-8,"+encodeURIComponent(t),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download","scoreboard.json"),a.click()}},{key:"render",value:function(){return r.a.createElement(k.a,{className:"p-4",onSubmit:this.handleSubmit},r.a.createElement(O.a,{type:"submit"},"Alle info downloaden"))}}]),t}(r.a.Component),Q=Object(v.b)((function(e){return{fullState:e}}),(function(e){return{}}))(q),V=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={token:""},n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=JSON.stringify(this.props.fullState);fetch("https://api.keyvalue.xyz/new/state",{method:"POST",body:n}).then((function(e){t.setState({token:e})}))}},{key:"render",value:function(){return r.a.createElement(k.a,{className:"p-4",onSubmit:this.handleSubmit},this.state.token,r.a.createElement(O.a,{type:"submit"},"Alle info uploaden naar cloud"))}}]),t}(r.a.Component),X=Object(v.b)((function(e){return{fullState:e}}),(function(e){return{}}))(V),Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(X,null),r.a.createElement(y,null),r.a.createElement($,null))},Z=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={number:"",name:"",maxPoints:"",jokerAllowed:!1},n.dispatch=e.dispatch,n.handleInputChange=n.handleInputChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(h.a)({},a,n))}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.name.trim()||this.nameInput.focus(),this.state.number.trim()&&this.state.name.trim()&&this.state.maxPoints.trim()){var t=parseInt(this.state.number,10),n=parseInt(this.state.maxPoints,10);isNaN(t)||this.dispatch(function(e,t,n,a){return{type:"ADD_ROUND",number:e,name:t,maxPoints:n,jokerAllowed:a}}(t,this.state.name,n,this.state.jokerAllowed)),this.setState({number:"",name:"",maxPoints:"",jokerAllowed:!1}),this.numberInput.focus()}}},{key:"render",value:function(){var e=this;return r.a.createElement(k.a,{className:"p-4",onSubmit:this.handleSubmit},r.a.createElement(k.a.Row,null,r.a.createElement(j.a,{className:"col-md-2"},r.a.createElement(k.a.Control,{name:"number",placeholder:"Reeksnummer",ref:function(t){e.numberInput=t},value:this.state.number,onChange:this.handleInputChange})),r.a.createElement(j.a,null,r.a.createElement(k.a.Control,{name:"name",placeholder:"Reeksnaam",ref:function(t){e.nameInput=t},value:this.state.name,onChange:this.handleInputChange})),r.a.createElement(j.a,null,r.a.createElement(k.a.Control,{name:"maxPoints",placeholder:"Maximum score",ref:function(t){e.maxInput=t},value:this.state.maxPoints,onChange:this.handleInputChange})),r.a.createElement(j.a,null,r.a.createElement(k.a.Check,{label:"Joker toegestaan",name:"jokerAllowed",checked:this.state.jokerAllowed,onChange:this.handleInputChange})),r.a.createElement(O.a,{type:"submit"},"Reeks toevoegen")))}}]),t}(r.a.Component),ee=Object(v.b)()(Z),te=n(38),ne=function(e){var t=e.number,n=e.name,a=e.maxPoints,o=e.jokerAllowed;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,o?"Ja":"Nee"),r.a.createElement("td",null,r.a.createElement(te.Link,{to:"/roundscore/"+t},"Punten ingeven")))},ae=function(e){var t=e.rounds;return r.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Reeksnaam"),r.a.createElement("th",null,"Maximum score"),r.a.createElement("th",null,"Joker toegestaan"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(ne,{key:e.number,number:e.number,name:e.name,maxPoints:e.maxPoints,jokerAllowed:e.jokerAllowed})}))))},re=Object(v.b)((function(e){return{rounds:W(e)}}),(function(e){return{}}))(ae),oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(re,null))},ue=n(63),le=n.n(ue),ce=n(43),ie=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={group:"",points:"",showError:!1,errorText:""},n.round=e.round,n.dispatch=e.dispatch,n.handleInputChange=n.handleInputChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n.handleClose=n.handleClose.bind(Object(g.a)(n)),n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,a=t.name;this.setState(Object(h.a)({},a,n))}},{key:"handleClose",value:function(e){this.setState({showError:!1,errorText:""})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.state.points.trim()||this.pointsInput.focus(),this.state.group.trim()&&this.state.points.trim()){var t=this.round.jokerAllowed,n=this.round.maxPoints,a=this.props.groupsThatUsedJoker,r=parseInt(this.state.group,10),o=parseInt(this.state.points,10),u=this.state.points.includes("+");if(!isNaN(r)&&!isNaN(o)){if(-1===le()(this.props.groupNumbers,(function(e){return e===r})))return console.log("Group number not found"),this.groupInput.focus(),void this.setState({showError:!0,errorText:"Het opgegeven tafelnummer bestaat niet."});if(o>n)return void this.setState({showError:!0,errorText:"De ingegeven score is meer dan het maximum in deze ronde."});if(u&&!t)return void this.setState({showError:!0,errorText:"De joker kan niet gebruikt worden in deze ronde."});if(u&&-1!==le()(a,(function(e){return e===r})))return console.log("Group has already used joker"),this.pointsInput.focus(),void this.setState({showError:!0,errorText:"Deze groep heeft zijn joker al eens ingezet."});this.dispatch(function(e,t,n,a){return{type:"ADD_SCORE",round:e,group:t,points:n,joker:a}}(this.round.number,r,o,u))}var l=r+1;this.setState({group:l.toString(),points:"",showError:!1,errorText:""}),this.pointsInput.focus()}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:"p-4",onSubmit:this.handleSubmit},r.a.createElement(k.a.Row,null,r.a.createElement(j.a,{className:"col-md-2"},r.a.createElement(k.a.Control,{name:"group",placeholder:"Tafelnummer",ref:function(t){e.groupInput=t},value:this.state.group,onChange:this.handleInputChange})),r.a.createElement(j.a,null,r.a.createElement(k.a.Control,{name:"points",placeholder:"Aantal punten",ref:function(t){e.pointsInput=t},value:this.state.points,onChange:this.handleInputChange})),r.a.createElement(O.a,{type:"submit"},"Punt toevoegen"))),r.a.createElement(ce.a,{show:this.state.showError,animation:!1},r.a.createElement(ce.a.Header,{closeButton:!0},r.a.createElement(ce.a.Title,null,"Fout bij ingeven van score")),r.a.createElement(ce.a.Body,null,this.state.errorText),r.a.createElement(ce.a.Footer,null,r.a.createElement(O.a,{varian:"secondary",onClick:this.handleClose},"Sluiten"))))}}]),t}(r.a.Component),se=Object(v.b)((function(e){return{groupNumbers:K(e),groupsThatUsedJoker:H(e)}}),(function(e){return{dispatch:e}}))(ie),me=function(e){var t=e.group,n=e.groupName,a=e.points,o=e.joker;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,o?"Ja":"Nee"))},he=function(e){var t=e.scores;return r.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Tafel"),r.a.createElement("th",null,"Groepsnaam"),r.a.createElement("th",null,"Score"),r.a.createElement("th",null,"Joker ingezet"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(me,{key:t,group:e.group,groupName:e.groupName,points:e.points,joker:e.joker})}))))},de=Object(v.b)((function(){var e=Object(I.a)(U,R,z,(function(e,t,n){return D()(e.filter((function(e){return e.round===n})).map((function(e,n){var a=t.find((function(t){return t.number===e.group}));return J({},e,{groupName:a.name})})),["group"],["desc"])}));return function(t,n){return{scores:e(t,n)}}}),(function(e){return{}}))(he),pe=function(e){e.match.params;var t=e.round;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t.name),r.a.createElement(se,{round:t}),r.a.createElement(de,{round:t.number}))},fe=Object(v.b)((function(){var e=Object(I.a)(B,(function(e){return e[0]}));return function(t,n){return{round:e(t,n)}}}),(function(e){return{}}))(pe),be=function(e){var t=e.ranking,n=e.blank,a=e.finalScore;return r.a.createElement("tr",{className:"finalscore-row"+(n?" hidden-score":"")},r.a.createElement("td",null,t),r.a.createElement("td",null,a.groupName),a.roundScores.map((function(e,t){return r.a.createElement("td",{key:t},e.joker?2*e.points+"*":e.points)})),r.a.createElement("td",null,a.totalScore))},ge=function(e){function t(e){var n;Object(d.a)(this,t),n=Object(f.a)(this,Object(b.a)(t).call(this,e));var a=e.finalScores;return n.numPages=Math.ceil(a.scores.length/10),n.handleKeyDown=n.handleKeyDown.bind(Object(g.a)(n)),n.state={allScores:a,page:-1,lastPageStep:-1,scoresToShow:[]},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.showPage(this.numPages-1,9),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"showPage",value:function(e,t){this.setState((function(n,a){var r=10*e,o=10*(e+1);return{allScores:n.allScores,page:e,lastPageStep:t,scoresToShow:n.allScores.scores.slice(r,o)}}))}},{key:"handleKeyDown",value:function(e){if(38===e.keyCode&&this.state.page>-1)if(0===this.state.page&&this.state.lastPageStep>0)this.showPage(0,this.state.lastPageStep-1);else{if(0===this.state.page&&0===this.state.lastPageStep)return;1===this.state.page?this.showPage(0,9):this.showPage(this.state.page-1,-1)}else 40===e.keyCode&&this.state.page<this.numPages-1&&(0===this.state.page&&this.state.lastPageStep<9?this.showPage(0,this.state.lastPageStep+1):this.showPage(this.state.page+1,-1))}},{key:"render",value:function(){var e=this;return-1===this.state.page?r.a.createElement(r.a.Fragment,null):r.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Ranking"),r.a.createElement("th",null,"Groepsnaam"),this.state.allScores.rounds.map((function(e,t){return r.a.createElement("td",{key:e},e)})),r.a.createElement("th",null,"Totaal Score"))),r.a.createElement("tbody",null,this.state.scoresToShow.map((function(t,n){return r.a.createElement(be,{key:t.groupName,blank:0===e.state.page&&n<e.state.lastPageStep,ranking:t.ranking,finalScore:t})}))))}}]),t}(r.a.Component),Ee=function(e){var t=e.finalScores;return r.a.createElement(ge,{finalScores:t})},ve=Object(v.b)((function(e,t){return{finalScores:G(e,t)}}),(function(e){return{}}))(Ee),ke=function(e){e.match.params;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Tussenstand"),r.a.createElement(ve,{includeJoker:!1}))},je=function(e){e.match.params;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Eindstand"),r.a.createElement(ve,{includeJoker:!0}))},Oe=n(34);var Se=function(){return r.a.createElement(te.BrowserRouter,null,r.a.createElement(l.a,{className:"App"},r.a.createElement(m,null),r.a.createElement(l.a,{className:"main-content"},r.a.createElement(Oe.g,null,r.a.createElement(Oe.d,{path:"/groups"},r.a.createElement(Y,null)),r.a.createElement(Oe.d,{path:"/rounds"},r.a.createElement(oe,null)),r.a.createElement(Oe.d,{path:"/roundscore/:round",component:fe}),r.a.createElement(Oe.d,{path:"/intermediatescore",component:ke}),r.a.createElement(Oe.d,{path:"/finalscore",component:je})))))},ye=n(39),we=function(e,t,n){var a=!1,r=e.map((function(e,r){return t!==e.number?e:(a=!0,{number:t,name:n})}));return a||r.push({number:t,name:n}),r},Ce=function(e,t,n,a,r){var o=!1,u=e.map((function(e,u){return t!==e.number?e:(o=!0,{number:t,name:n,maxPoints:a,jokerAllowed:r})}));return o||u.push({number:t,name:n,maxPoints:a,jokerAllowed:r}),u},Pe=function(e,t,n,a,r){var o=!1,u=e.map((function(e,u){return t!==e.round||n!==e.group?e:(o=!0,{round:t,group:n,points:a,joker:r})}));return o||u.push({round:t,group:n,points:a,joker:r}),u},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_GROUP":return we(e,t.number,t.name);default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ROUND":return Ce(e,t.number,t.name,t.maxPoints,t.jokerAllowed);default:return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SCORE":return Pe(e,t.round,t.group,t.points,t.joker);default:return e}},xe=Object(ye.b)({groups:Ie,rounds:Ne,scores:De});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Te=Object(ye.c)(xe,Ae);Te.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}(Te.getState())})),u.a.render(r.a.createElement(v.a,{store:Te},r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[118,1,2]]]);
//# sourceMappingURL=main.efc58fd9.chunk.js.map