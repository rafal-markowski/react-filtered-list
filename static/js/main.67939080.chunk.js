(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(2),r=a.n(s),o=a(3),i=a(4),l=a(6),u=a(5),f=a(7),m=(a(14),function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).filterContacts=function(e){var a=e.target.value.toLowerCase(),n=t.state.contacts;t.setState({filteredContacts:n.filter(function(t){return 0===t.toLowerCase().indexOf(a)})})},t.state={contacts:["Asia","Kasia","Basia","Zosia","Stasia"]},t.state.filteredContacts=t.state.contacts,t}return Object(f.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.filteredContacts;return c.a.createElement("div",null,c.a.createElement("label",{className:"c-filter"},"Wyszukaj kontakt:",c.a.createElement("input",{type:"search",className:"c-filter__input",onInput:this.filterContacts})),this.contactList(t))}},{key:"contactList",value:function(t){return t.length>0?c.a.createElement("ul",{className:"c-contacts"},t.map(function(t){return c.a.createElement("li",{key:t,className:"c-contacts__item"},t)})):c.a.createElement("p",null,"Nie znaleziono pasuj\u0105cych kontakt\xf3w")}}]),e}(c.a.Component));r.a.render(c.a.createElement(m,null),document.querySelector("#root"))},8:function(t,e,a){t.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.67939080.chunk.js.map