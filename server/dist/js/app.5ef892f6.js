(function(e){function t(t){for(var n,i,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"16da":function(e,t,r){"use strict";var n=r("d92d"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{id:"logo",alt:"Vue logo",src:r("cf05")}}),n("Trimmer",{attrs:{msg:"Welcome to Trimmer App"}})],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),r("p",[e._v(" Paste copied text from pdf file here! This app will replace your text to newline-character-free ")]),r("h3",[e._v("Paste your copied text below!")]),r("div",{attrs:{id:"container"}},[r("div",{attrs:{id:"trimBox"}},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rawText,expression:"rawText"}],attrs:{id:"userInput",type:"text"},domProps:{value:e.rawText},on:{paste:this.onPaste,input:function(t){t.target.composing||(e.rawText=t.target.value)}}})]),r("h3",[e._v("Here's the result")]),r("div",[r("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.trimmedText,expression:"trimmedText",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:this.onCopy,expression:"this.onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:this.onError,expression:"this.onError",arg:"error"}],attrs:{id:"submit",type:"button"}},[e._v("COPY")]),r("p",{attrs:{id:"status"}},[e._v(" "+e._s(e.copyStatus)+" ")])]),r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.trimmedText,expression:"trimmedText"}],attrs:{disabled:"",name:"resultText",id:"resultText",cols:"80",rows:"30"},domProps:{value:e.trimmedText},on:{input:function(t){t.target.composing||(e.trimmedText=t.target.value)}}})])])])])},s=[],u=(r("d3b7"),r("ac1f"),r("5319"),r("498a"),r("96cf"),r("1da1")),c={name:"Trimmer",props:{msg:String},created:function(){},data:function(){return{rawText:"",trimmedText:"",copyStatus:""}},methods:{onPaste:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.stopPropagation(),e.preventDefault(),n=e.clipboardData,o=n.getData("Text"),t.rawText=o,r.next=7,t.trim(t.rawText);case 7:t.trimmedText=r.sent,t.$emit("click");case 9:case"end":return r.stop()}}),r)})))()},trim:function(e){return new Promise((function(t){var r=e;t(r.replace(/\n|\r/gi," "))}))},onCopy:function(e){var t=this;return this.copyStatus="< COPIED! >",setTimeout((function(){t.copyStatus=""}),1500),this.rawText="",this.trimmedText="",e},onError:function(e){alert("Failed to copy texts"+e)}}},p=c,l=(r("16da"),r("2877")),d=Object(l["a"])(p,i,s,!1,null,"4d8eef52",null),m=d.exports,f={name:"App",components:{Trimmer:m}},v=f,x=(r("034f"),Object(l["a"])(v,o,a,!1,null,null,null)),h=x.exports,b=r("4eb5"),g=r.n(b);n["a"].config.productionTip=!1,g.a.config.autoSetContainer=!0,n["a"].use(g.a),new n["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.9b06579d.png"},d92d:function(e,t,r){}});
//# sourceMappingURL=app.5ef892f6.js.map