(function(e){function t(t){for(var s,c,r=t[0],o=t[1],u=t[2],f=0,d=[];f<r.length;f++)c=r[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(s=!1)}s&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},i={app:0},a=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0180":function(e,t,n){"use strict";n("d6da")},"1a4d":function(e,t,n){"use strict";n("c864")},2058:function(e,t,n){},"21dc":function(e,t,n){},"23fc":function(e,t,n){},3135:function(e,t,n){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=a,e.exports=i,i.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("page-header"),n("router-view")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"banch",on:{click:function(t){return e.banchClick()}}},[e._v("성능 테스트")]),n("div",{staticClass:"dash"},[e._v("대시보드")]),[n("div",{staticClass:"sign-up"},[e._v("회원가입")]),n("div",{staticClass:"sign-in"},[e._v("로그인")])]],2)},r=[],o={name:"Header",methods:{banchClick:function(){this.$router.push({name:"Main"}).catch((function(){}))},dashClick:function(){},signUpClick:function(){},signInClick:function(){}}},u=o,l=(n("0180"),n("2877")),f=Object(l["a"])(u,c,r,!1,null,"6206e3bf",null),d=f.exports,p={name:"App",components:{PageHeader:d}},h=p,b=(n("5c0b"),Object(l["a"])(h,i,a,!1,null,null,null)),j=b.exports,m=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[e.isPlayed?n("test",{attrs:{testType:e.testType}}):n("play",{staticClass:"play"},[n("div",{staticClass:"play-area"},[n("div",{staticClass:"icon"},[e._v(e._s(e.testIcon))]),n("div",{staticClass:"title"},[e._v(e._s(e.testTitle))]),n("div",{staticClass:"description",domProps:{innerHTML:e._s(e.testDescription)}}),n("div",{staticClass:"start-btn",on:{click:function(t){return e.startClick()}}},[e._v("시작")])])])],1)},y=[],k=(n("a4d3"),n("e01a"),n("fb6a"),n("2ef0")),g=n.n(k),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"play",on:{mousedown:function(t){return e.playClick(t)}}},[e._t("default")],2)},C=[],T={name:"Play",methods:{playClick:function(e){this.$emit("mousedown",e)}}},I=T,w=(n("ac9e"),Object(l["a"])(I,_,C,!1,null,"0b545a21",null)),x=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test"},["reaction"===e.testType?n("reaction"):"sequence"===e.testType?n("sequence"):e._e()],1)},S=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reaction"},[n("play",{staticClass:"play",class:{r:e.isRed,g:e.isGreen},on:{mousedown:function(t){return e.playClick()}}},[n("div",{staticClass:"msg"},[e.isStarted?[e.isRed?n("div",[e._v("초록색이 되면 누르세요")]):e._e(),e.isRed?n("div",[e._v(". . .")]):e._e(),e.isGreen?n("div",[e._v("지금이야..!")]):e._e()]:[e.early?[n("div",[e._v("너무 일찍 눌렀어요")]),n("div",[e._v("...")]),n("div",{staticClass:"next-play",on:{click:function(t){return e.setupInit()}}},[n("div",[e._v("계속하기")])])]:[n("div",[e._v("평균 반응 속도")]),n("div",[e._v(" "+e._s(e._f("numberComma")(e._f("int")(e.playInfo.totalScore)))+"ms "+e._s(e.playInfo.count+"/"+e.maxCount)+" ")]),e.isFinished?n("div",{staticClass:"btns"},[n("div",{staticClass:"again",on:{click:function(t){return e.reset()}}},[n("div",[e._v("다시하기")])]),n("div",{staticClass:"next-play"},[n("div",[e._v("결과보기")])])]):n("div",{staticClass:"next-play",on:{click:function(t){return e.setupInit()}}},[n("div",[e._v("계속하기")])])]]],2)])],1)},z=[],R=n("5530"),q=n("c1df"),L=n.n(q),$={name:"Reaction",components:{Play:x},data:function(){return{maxCount:5,isStarted:!0,early:!1,isFinished:!1,setupId:0,playInfo:{totalScore:0,count:0,scoreList:[]},currentPlay:{startTime:L()(),waitTime:0,score:0,isGreen:!1}}},mounted:function(){this.reset()},computed:{isGreen:function(){return this.isStarted&&this.currentPlay.isGreen&&!this.isFinished},isRed:function(){return this.isStarted&&!this.currentPlay.isGreen&&!this.isFinished}},methods:{reset:function(){this.isStarted=!0,this.early=!1,this.isFinished=!1,this.setupId=0,this.playInfo={totalScore:0,count:0,scoreList:[]},this.setupInit()},setupInit:function(){var e=this;this.currentPlay=Object(R["a"])(Object(R["a"])({},this.currentPlay),{},{waitTime:g.a.random(3e3,6e3),score:0,isGreen:!1}),this.isStarted=!0,this.setupId=setTimeout((function(){e.toGreen()}),this.currentPlay.waitTime)},toGreen:function(){this.currentPlay=Object(R["a"])(Object(R["a"])({},this.currentPlay),{},{startTime:L()(),isGreen:!0})},playClick:function(){this.isStarted&&(this.currentPlay.isGreen?this.success():this.fail())},fail:function(){clearTimeout(this.setupId),this.isStarted=!1,this.early=!0},success:function(){this.isStarted=!1,this.early=!1,this.playInfo.count+=1,this.currentPlay.score=L()()-this.currentPlay.startTime,this.playInfo.scoreList.push(this.currentPlay.score),this.playInfo.totalScore=g.a.sum(this.playInfo.scoreList)/this.playInfo.count,this.checkFinish()},checkFinish:function(){this.maxCount>this.playInfo.count||(this.isFinished=!0)}}},F=$,G=(n("1a4d"),Object(l["a"])(F,P,z,!1,null,"4185b70e",null)),M=G.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sequence"},[n("play",{staticClass:"play"},[e.isFinished?n("div",{staticClass:"result-box"},[n("div",{staticClass:"score"},[e._v(e._s(e.playInfo.level)+"단계")]),n("div",{staticClass:"btns"},[n("div",{staticClass:"again",on:{click:function(t){return e.initInfo()}}},[n("div",[e._v("다시하기")])]),n("div",{staticClass:"result"},[n("div",[e._v("결과보기")])])])]):[n("div",{staticClass:"level"},[e._v(e._s(e.playInfo.level)+"단계")]),n("div",{staticClass:"tile-area"},e._l(9,(function(t){return n("div",{key:t,class:["tile","tile-num-"+t,{actived:t===e.activedTile}],on:{mousedown:function(n){return e.clickTile(t)}}})})),0)]],2)],1)},D=[],A=n("2909"),U=n("b85c"),H=n("1da1"),N=(n("d3b7"),n("96cf"),n("5e54")),J={name:"Sequence",components:{Play:x},data:function(){return{isFinished:!1,initData:{level:0,speed:600,activedTile:0},playInfo:{level:0,speed:0,tile:[0],activedTile:0,verificateTile:[0]},audio:(new N["a"]).toDestination(),sounds:["f2","g2","a2","b2","c3","d3","e3","f3","g3"]}},mounted:function(){this.initInfo(),this.audio.volume.value=-7},computed:{tileCnt:function(){return(this.playInfo.level-1)/5+1},activedTile:function(){return this.playInfo.activedTile}},methods:{initInfo:function(){this.playInfo=Object(R["a"])(Object(R["a"])({},this.playInfo),this.initData),this.playInfo.tile=[],this.isFinished=!1,this.nextLevel()},nextLevel:function(){this.playInfo.level+=1,this.addTile(),this.playTile()},addTile:function(){this.playInfo.tile.push(g.a.random(1,9))},playTile:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){var n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.playInfo.verificateTile=[],n=Object(U["a"])(e.playInfo.tile),t.prev=2,n.s();case 4:if((s=n.n()).done){t.next=12;break}return i=s.value,t.next=8,e.nextTile(i);case 8:e.btnSound(i),e.$nextTick((function(){e.playInfo.activedTile=0}));case 10:t.next=4;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),n.e(t.t0);case 17:return t.prev=17,n.f(),t.finish(17);case 20:e.playInfo.verificateTile=Object(A["a"])(e.playInfo.tile);case 21:case"end":return t.stop()}}),t,null,[[2,14,17,20]])})))()},nextTile:function(e){var t=this;return Object(H["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(n){setTimeout((function(){t.playInfo.activedTile=e,n()}),t.playInfo.speed)}));case 2:case"end":return n.stop()}}),n)})))()},clickTile:function(e){var t=this.playInfo.verificateTile;t.length&&(e===t.shift()?(this.btnSound(e),t.length||this.nextLevel()):(this.errSound(),this.isFinished=!0))},btnSound:function(e){this.audio.triggerAttackRelease(this.sounds[e-1],"60n")},errSound:function(){var e=this.audio.now();this.audio.triggerAttackRelease("b1","60n",e),this.audio.triggerAttackRelease("b1","60n",e+.15)}}},W=J,B=(n("e0ac"),Object(l["a"])(W,E,D,!1,null,"c477a15e",null)),K=B.exports,Q={name:"Test",components:{Reaction:M,Sequence:K},props:{testType:{type:String,require:!0}}},V=Q,X=(n("9089"),Object(l["a"])(V,O,S,!1,null,"2b3d14e6",null)),Y=X.exports,Z={name:"Main",components:{Play:x,Test:Y},props:{testType:{type:String,default:"banchmark"}},data:function(){return{play:!1}},computed:{testInfo:function(){return this.$store.getters.info(this.testType)},typeList:function(){return this.$store.getters.typeList},testIcon:function(){return this.testInfo.icon},testTitle:function(){return this.testInfo.title},testDescription:function(){return this.testInfo.description},isPlayed:function(){return"banchmark"!==this.testType&&this.play}},methods:{startClick:function(){if("banchmark"===this.testType){var e=this.typeList[g.a.random(0,this.typeList.length-1)],t="".concat(e[0].toUpperCase()+e.slice(1));return this.play=!1,void this.$router.push({name:t})}this.play=!0}}},ee=Z,te=(n("b55f"),Object(l["a"])(ee,v,y,!1,null,"f3c98682",null)),ne=te.exports;s["a"].use(m["a"]);var se=new m["a"]({routes:[{path:"/",name:"Main",component:ne},{path:"/test/reaction",name:"Reaction",component:ne,props:{testType:"reaction"}},{path:"/test/sequence",name:"Sequence",component:ne,props:{testType:"sequence"}},{path:"/test/aim",name:"Aim",component:ne,props:{testType:"aim"}},{path:"/test/number",name:"Number",component:ne,props:{testType:"number"}},{path:"/test/word",name:"Word",component:ne,props:{testType:"word"}},{path:"*",redirect:{name:"Main"}}],mode:"history"}),ie=(n("b64b"),n("2f62"));s["a"].use(ie["a"]);var ae=new ie["a"].Store({state:{title:{banchmark:"성능 테스트",reaction:"반응 속도",sequence:"순서 기억",aim:"표적 누르기",number:"숫자 기억하기",word:"단어 기억하기"},description:{banchmark:"주어진 테스트를 통해 성능을 확인합니다.\n    테스트는 랜덤으로 주어지며, 중복으로 등장할 수 있습니다.",reaction:"화면의 색이 변할 때 빠르게 반응하세요.\n    색이 변하기 전에 반응한 것은 반영되지 않습니다.",sequence:"타일이 생성되는 순서를 기억하세요.",aim:"30개의 표적을 빠르게 누르세요.",number:"점점 증가하는 숫자를 기억하세요.",word:"단어가 등장하면 이미 등장했던 단어인지,\n    처음 등장하는 단어인지 선택하세요."},icon:{banchmark:"",reaction:"",sequence:"",aim:"",number:"",word:""}},getters:{info:function(e){return function(t){return{title:e.title[t],description:e.description[t],icon:e.icon[t]}}},typeList:function(e){var t=Object(R["a"])({},e.title);return delete t.banchmark,Object.keys(t)}}}),ce=(n("6ed9"),n("21dc"),n("4de4"),n("a15b"),n("25f0"),n("d81d"),function(e){return e=g.a.toInteger(e),e}),re=function(e){return Object(A["a"])(e).reverse().join("")},oe=function(e){e=g.a.toString(e);var t="",n=e.indexOf(".");n>-1&&(t=e.slice(n),e=e.slice(0,n));var s=g()(Object(A["a"])(e).reverse()).chunk(3).map((function(e){return e.join("")})).join(",");return re(s)+t},ue={int:ce,stringReverse:re,numberComma:oe};function le(e){e.filter("int",ue.int),e.filter("stringReverse",ue.stringReverse),e.filter("numberComma",ue.numberComma)}s["a"].config.productionTip=!1,s["a"].use(le),new s["a"]({router:se,store:ae,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6ed9":function(e,t,n){},"8e97":function(e,t,n){},9089:function(e,t,n){"use strict";n("8e97")},"9c0c":function(e,t,n){},ac9e:function(e,t,n){"use strict";n("3135")},b55f:function(e,t,n){"use strict";n("2058")},c864:function(e,t,n){},d6da:function(e,t,n){},e0ac:function(e,t,n){"use strict";n("23fc")}});
//# sourceMappingURL=app.957db6ed.js.map