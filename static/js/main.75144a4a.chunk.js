(this.webpackJsonpgraphs=this.webpackJsonpgraphs||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),i=n(43),s=n.n(i),d=(n(50),n(24)),h=n(25),j=n(29),o=n(28),l=(n(51),n(97)),u=n(99),b=(n(30),n(18)),x=n(15),O=(n(52),n(13)),g=Object(c.createContext)(),v=function(e){var t=Object(c.useState)([]),n=Object(x.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)({}),d=Object(x.a)(s,2),h=d[0],j=d[1];return Object(a.jsx)(g.Provider,{value:[r,i,h,j],children:e.children})},f=window.innerWidth/2,p=.8*window.innerHeight,y=15,m=-1,k=null,w=null,C=function(){var e=Object(c.useContext)(g),t=Object(x.a)(e,4),n=t[0],r=t[1],i=t[2],s=t[3],d=function(e,t){var n=(t.y-e.y)/(t.x-e.x),a=(t.x-e.x)/Math.abs(t.x-e.x),c=Math.atan(n),r=Math.cos(c)*y*a,i=Math.sin(c)*y*a,s=Math.PI/2-c,d=Math.cos(s)*y*a,h=Math.sin(s)*y*a;return{startNodeID:e.id,endNodeID:t.id,startX:e.x+r,startY:e.y+i,endX:t.x-h,endY:t.y-d}};return Object(a.jsx)("div",{children:Object(a.jsxs)(O.e,{width:window.innerWidth,height:window.innerHeight,x:0,y:0,onClick:function(e){if(0==e.evt.button){var t=e.currentTarget.getStage()._changedPointerPositions[0],a=t.x,c=t.y;if(!(a>f||c>p)){for(var h=null,j=0;j<n.length;j++){var o=n[j],l=o.x,u=o.y;if(Math.sqrt(Math.pow(a-l,2)+Math.pow(c-u,2))<22.5){h=!0,null!=w&&(k=w),w=o.id;break}}if(h){if(null!==k&&w!==k){var x={},O=Object(b.a)(n);Object.assign(x,i);var g=O[k],v=O[w],y=g.id.toString()+v.id.toString();x[y]=d(g,v),g.edges.push(y),v.edges.push(y),r(Object(b.a)(O)),s(x),k=null,w=null}}else m+=1,r((function(e){return[].concat(Object(b.a)(e),[{id:m,x:a,y:c,edges:[]}])})),k=null}}},children:[Object(a.jsx)(O.c,{children:Object(a.jsx)(O.d,{points:[0,0,f,0,f,p,0,p],stroke:"black",strokeWidth:1,closed:!0})}),Object(a.jsxs)(O.c,{children:[n.map((function(e){return Object(a.jsxs)(O.b,{x:e.x,y:e.y,draggable:!0,onDragMove:function(e){!function(e,t,a){var c={},h=Object(b.a)(n);Object.assign(c,i);var j=h[e],o=j.edges;j.x=t,j.y=a,o.forEach((function(t){var n=c[t].endNodeID===e?c[t].startNodeID:c[t].endNodeID,a=d(j,h[n]);c[t].startX=a.startX,c[t].startY=a.startY,c[t].endX=a.endX,c[t].endY=a.endY})),r(Object(b.a)(h)),s(c)}(e.target.index,e.target.attrs.x,e.target.attrs.y)},dragBoundFunc:function(e){var t=e.y<y?y:e.y>0+p-y?0+p-y:e.y;return{x:e.x>0+f-y?0+f-y:e.x<15?15:e.x,y:t}},children:[Object(a.jsx)(O.a,{radius:y,stroke:"black"}),Object(a.jsx)(O.f,{x:-8,y:-5,align:"center",width:y,fontStyle:"bold",text:e.id})]})})),Object.values(i).map((function(e){return Object(a.jsx)(O.d,{points:[e.startX,e.startY,e.endX,e.endY],stroke:"black",width:10})}))]})]})})},I=n(98),M=n(45),S=(n(93),function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={directionality:"undirected",graphWeight:"unweighted",indexType:"numberIndex"},e.getDirectionality=function(e){console.log(e)},e.changeDirectionality=function(t){e.setState({directionality:t[1]})},e.changeGraphWeight=function(t){e.setState({graphWeight:t[1]})},e.changeindexType=function(e){},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Spacer",children:[Object(a.jsx)("span",{children:Object(a.jsxs)(I.a,{type:"checkbox",value:this.state.directionality,onChange:this.changeDirectionality,children:[Object(a.jsx)(M.a,{size:"sm",variant:"dark",value:"undirected",children:"Undirected"}),Object(a.jsx)(M.a,{size:"sm",variant:"dark",value:"directed",children:"Directed"})]})}),Object(a.jsx)("span",{children:Object(a.jsxs)(I.a,{type:"checkbox",value:this.state.graphWeight,onChange:this.changeGraphWeight,children:[Object(a.jsx)(M.a,{size:"sm",variant:"dark",value:"unweighted",children:"Unweighted"}),Object(a.jsx)(M.a,{size:"sm",variant:"dark",value:"weighted",children:"weighted"})]})}),Object(a.jsx)("span",{children:Object(a.jsxs)(I.a,{type:"checkbox",value:this.state.indexType,onChange:this.changeindexType,children:[Object(a.jsx)(M.a,{size:"sm",variant:"dark",value:"numberIndex",children:"Number Index"}),Object(a.jsx)(M.a,{size:"sm",variant:"dark",value:"letterIndex",children:"Letter Index"}),Object(a.jsx)(M.a,{size:"sm",variant:"dark",value:"customindex",children:"Custom Index"})]})})]})}}]),n}(c.Component)),D=(n(94),n(96)),W=function(){var e=Object(c.useContext)(g),t=Object(x.a)(e,4),n=t[0];t[1],t[2],t[3];return Object(a.jsxs)(D.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Vertex"}),Object(a.jsx)("th",{children:"Edges"})]})}),Object(a.jsx)("tbody",{children:Array.from({length:n.length}).map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t}),Object(a.jsx)("td",{children:"1"})]})}))})]})},N=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(h.a)(n,[{key:"onGraphWeightChange",value:function(e){this.setState({graphWeight:e})}},{key:"render",value:function(){return Object(a.jsx)(v,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("span",{children:Object(a.jsx)(S,{})}),Object(a.jsx)("div",{className:"Graph-data",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(u.a,{style:{width:"20rem",height:"78.5%"},children:Object(a.jsx)(W,{})}),Object(a.jsx)(u.a,{style:{width:"50%",height:"78.5%"},children:Object(a.jsx)(C,{})})]})})]})})}}]),n}(c.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),z()}},[[95,1,2]]]);
//# sourceMappingURL=main.75144a4a.chunk.js.map