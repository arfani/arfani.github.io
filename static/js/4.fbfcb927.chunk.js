(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[4],{109:function(e,a,t){e.exports=t.p+"static/media/pp.f5a3d354.png"},120:function(e,a,t){"use strict";t.r(a);var n=t(34),l=t(35),r=t(38),c=t(37),i=t(0),s=t.n(i),o=t(44),m=t(49),d=t(14),u=t(41),p=t(43),v=t(113),E=t(114),h=t(115),f=t(116),g=t(117),b=t(118),y=t(122),k=t(121),N=t(123),O=t(119),C=t(68),w=t.n(C),j=t(69),x=t.n(j),A=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).toggle=l.toggle.bind(Object(p.a)(l)),l.collapse=l.collapse.bind(Object(p.a)(l)),l.cs=l.cs.bind(Object(p.a)(l)),l.ConvertLangAndCollapse=l.ConvertLangAndCollapse.bind(Object(p.a)(l)),l.state={isOpen:!1},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.changeNav)}},{key:"changeNav",value:function(){var e=window.pageXOffset||document.documentElement.scrollTop,a=document.getElementById("navbar");a&&(e>40?a.classList.add("isScrollDown"):a.classList.remove("isScrollDown"))}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"collapse",value:function(){this.setState({isOpen:!1})}},{key:"ConvertLangAndCollapse",value:function(e){this.setState({isOpen:!1}),this.props.convertLang(e)}},{key:"cs",value:function(){x()(w.a).fire({title:"Not Available Yet",text:"Sorry for this issue!",type:"warning",confirmButtonText:'<i class="fa fa-thumbs-up"></i> Great!'})}},{key:"render",value:function(){var e=this,a=this.props.data.name,t=a.first,n=a.middle,l=a.last;return s.a.createElement(v.a,{className:"fixed-top",color:"light",light:!0,expand:"md",id:"navbar"},s.a.createElement(E.a,{id:"nameBrand"},t,n?" "+n:"",l?" "+l:""),s.a.createElement(h.a,{onClick:this.toggle}),s.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(g.a,{className:"ml-auto",navbar:!0},s.a.createElement(b.a,null,s.a.createElement(o.b,{exact:!0,to:"/",activeClassName:"active",className:"nav-link",onClick:this.collapse},this.props.data.lang.menus[0])),s.a.createElement(b.a,null,s.a.createElement(o.b,{to:"/experiences",activeClassName:"active",className:"nav-link",onClick:this.collapse},this.props.data.lang.menus[1])),s.a.createElement(b.a,null,s.a.createElement(o.b,{to:"/portfolios",activeClassName:"active",className:"nav-link",onClick:this.collapse},this.props.data.lang.menus[3])),s.a.createElement(y.a,{nav:!0,inNavbar:!0},s.a.createElement(k.a,{nav:!0,caret:!0,title:"Select your language"},this.props.data.lang.menus[4]),s.a.createElement(N.a,{right:!0},s.a.createElement(O.a,{onClick:function(){return e.ConvertLangAndCollapse("english")}},"English"),s.a.createElement(O.a,{onClick:function(){return e.ConvertLangAndCollapse("indo")}},"Bahasa Indonesia"),s.a.createElement(O.a,{onClick:function(){return e.ConvertLangAndCollapse("sasak")}},"Sasak (Lombok)"),s.a.createElement(O.a,{onClick:this.cs},"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"))))))}}]),t}(i.Component),L=function(e){e.data;return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"copyright"},"\xa9 2019 - ".concat((new Date).getFullYear(),".")," ",s.a.createElement("a",{href:"http://fb.com/muhammadarfanihidayat"},"rfun")))},S=t(108),D=t.n(S),P=u.b.div({enter:{y:0,opacity:1},exit:{y:-50,opacity:0}}),B=function(e){Object(r.a)(i,e);var a=Object(c.a)(i);function i(e){var l;return Object(n.a)(this,i),(l=a.call(this,e)).state={linkWA:"https://web.whatsapp.com/send?phone=6281907456710&text=Hii%20Arfan,%20",pp:t(109)},l.typeMe=l.typeStudy.bind(Object(p.a)(l)),l}return Object(l.a)(i,[{key:"componentDidMount",value:function(){(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&this.setState({linkWA:"https://api.whatsapp.com/send?phone=6281907456710&text=Hii%20Arfan,%20"}),this.typeStudy()}},{key:"componentDidUpdate",value:function(){this.typed.destroy(),this.typeStudy()}},{key:"typeStudy",value:function(){this.typed=new D.a("#prof",{strings:this.props.data.lang.profession||["No Profession","Profession Not defined"],typeSpeed:50,backSpeed:30,backDelay:1500,startDelay:1e3,cursorChar:"_",loop:!0})}},{key:"render",value:function(){var e=this.props.data,a=e.lang,t=e.links,n=e.name,l=a.desc2.map((function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("span",{className:"label"},e.label),s.a.createElement("span",{className:"value"},e.value))}));return s.a.createElement(P,null,s.a.createElement("div",{id:"home"},s.a.createElement("div",{className:"header",style:{backgroundColor:"#343a40"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{id:"photo",className:"col-md-6"},s.a.createElement("img",{src:this.state.pp,style:{width:270,height:270},alt:"Profile"})),s.a.createElement("div",{id:"id1",className:"col-md-6"},s.a.createElement("h1",{id:"name"},n.first,n.middle?" "+n.middle:"",n.last?" "+n.last:""),s.a.createElement("p",{id:"prof",title:"Education"}),s.a.createElement("div",{id:"links"},s.a.createElement("a",{href:t.github},s.a.createElement("span",{className:"fa fa-github"})),s.a.createElement("a",{href:t.facebook},s.a.createElement("span",{className:"fa fa-facebook-square"})),s.a.createElement("a",{href:t.wordpress},s.a.createElement("span",{className:"fa fa-wordpress"})),s.a.createElement("a",{href:t.linkedin},s.a.createElement("span",{className:"fa fa-linkedin-square"})))))),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{id:"about",className:"col-lg-6"},s.a.createElement("h3",null,a.subtitle1),s.a.createElement("p",null,a.desc1),s.a.createElement("a",{href:this.state.linkWA,className:"btn mb-3 btn-wa"},s.a.createElement("span",{className:"fa fa-whatsapp"}),s.a.createElement("div",{className:"label-wa"},a.labelWA))),s.a.createElement("div",{id:"id2",className:"col-lg-6"},s.a.createElement("h3",null,a.subtitle2),s.a.createElement("ul",null,l))))))}}]),i}(i.Component),W=t(110),I=t.n(W),T=t(111),F=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={swalShow:!1},l}return Object(l.a)(t,[{key:"genCanvas",value:function(){I()(document.getElementById("exp")).then((function(e){var a=e.toDataURL("image/png"),t=new T;t.addImage(a,"JPEG",0,0,210,260),t.setFontSize(12),t.setTextColor(150),t.text("phone: 081907456710 || email : arfanihidayat@gmail.com",50,293),t.save("rfunExp.pdf")}))}},{key:"render",value:function(){var e=u.b.div({enter:{staggerChildren:50}}),a=u.b.div({enter:{y:0,opacity:1},exit:{y:-50,opacity:0}}),t=this.props.data.lang,n=t.itemWorks,l=t.itemEdu,r=n.map((function(e,a){return s.a.createElement("div",{className:"timeline-item",key:a},s.a.createElement("h5",{className:"title"},e.title),s.a.createElement("span",{className:"period"},e.period),s.a.createElement("span",{className:"company"},e.company))})),c=l.map((function(e,a){return s.a.createElement("div",{className:"timeline-item",key:a},s.a.createElement("h5",{className:"title"},e.title),s.a.createElement("span",{className:"period"},e.period),s.a.createElement("span",{className:"school"},e.school))}));return s.a.createElement(e,null,s.a.createElement("div",{id:"exp"},s.a.createElement(a,null,s.a.createElement("div",{className:"header",style:{backgroundColor:"#343a40"}},s.a.createElement("h1",null,this.props.data.lang.menus[1]))),s.a.createElement(a,null,s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"block work"},s.a.createElement("div",{className:"block-title"},s.a.createElement("h3",null,this.props.data.lang.subtitleWork)),s.a.createElement("div",{className:"timeline"},r))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"block edu"},s.a.createElement("div",{className:"block-title"},s.a.createElement("h3",null,this.props.data.lang.subtitleEdu)),s.a.createElement("div",{className:"timeline"},c))))))))}}]),t}(i.Component),H=u.b.div({enter:{y:0,opacity:1},exit:{y:-50,opacity:0}}),J=u.b.div({enter:{staggerChildren:50}}),M=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data.lang.portfolios.items.slice(0).reverse().map((function(e,a){return s.a.createElement("div",{className:"col-md-4 col-sm-6",key:a},s.a.createElement("div",{className:"service-block id"+a},s.a.createElement("div",{className:"service-info"},s.a.createElement("div",{className:"service-image"},s.a.createElement("a",{href:e.linkDemo,title:"#"===e.linkDemo?"Demo isn't available":"Click for demo !"},s.a.createElement("span",{className:"fa "+e.faIcon})))),s.a.createElement("h5",null,e.title),s.a.createElement("p",null,e.tech)))}));return s.a.createElement(J,null,s.a.createElement("div",{id:"services"},s.a.createElement(H,null,s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,this.props.data.lang.menus[3]))),s.a.createElement(H,null,s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"row"},e)))))}}]),t}(i.Component),U=function(e){return s.a.createElement("div",{id:"not-found"},s.a.createElement("h2",null,"You are LOST !!"),s.a.createElement("p",null,"Use the navigation above, please..."),s.a.createElement("h5",{className:"alert alert-danger"},"Like in our live, dont use other than Al-Qur'an & Al-Hadits if you don't want to be LOST ! "))};function Y(e){var a=e.rootData,t=e.location,n=e.convertLang,l=u.b.div({enter:{opacity:1,beforeChildren:!0},exit:{opacity:0}});return document.body.style.background="#8fc63c",s.a.createElement(i.Fragment,null,s.a.createElement(A,{data:a,convertLang:n}),s.a.createElement("div",{id:"box"},s.a.createElement(u.a,null,s.a.createElement(l,{key:t.pathname},s.a.createElement(m.c,null,s.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return s.a.createElement(B,Object.assign({data:a},e))},key:"home"}),s.a.createElement(m.a,{exact:!0,path:"/experiences",render:function(e){return s.a.createElement(F,Object.assign({data:a},e))},key:"exp"}),s.a.createElement(m.a,{exact:!0,path:"/portfolios",render:function(e){return s.a.createElement(M,Object.assign({data:a},e))},key:"portfolios"}),s.a.createElement(m.a,{component:U}))))),s.a.createElement(L,{data:a}))}var q=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.rootData,t=e.convertLang;return s.a.createElement(o.a,null,s.a.createElement(m.a,{render:function(e){var n=e.location;return s.a.createElement(Y,{rootData:a,location:n,convertLang:t})}}))}}]),t}(i.Component);a.default=Object(d.b)((function(e){return{rootData:e}}),(function(e){return{convertLang:function(a){return e(function(e){return{type:"convLang",lang:e}}(a))}}}))(q)}}]);
//# sourceMappingURL=4.fbfcb927.chunk.js.map