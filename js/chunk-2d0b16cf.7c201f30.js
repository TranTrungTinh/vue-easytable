(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b16cf"],{2094:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("固定表头")]),n("Explain"),n("Base"),n("AutoHeight"),n("DynamicHeight"),n("HeaderFixedDisabled")],1)},r=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、属性"),n("code",[e._v("max-height")]),e._v("为表格的最大高度"),n("br"),e._v(" 2、表格总高度大于"),n("code",[e._v("max-height")]),e._v("值时，表格将会出现纵向滚动条"),n("br"),e._v(" 3、表格总高度小于"),n("code",[e._v("max-height")]),e._v("值时，表格将会高度自适应")])])])}],c=n("2877"),o={},s=Object(c["a"])(o,l,i,!1,null,null,null),d=s.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"基础功能",fileName:"base.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、通过"),n("code",[e._v('fixed-header="true"')]),e._v("设置开启表头固定。默认为"),n("code",[e._v("true")]),n("br"),e._v("2、通过"),n("code",[e._v("max-height")]),e._v("设置表格最大高度")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :max-height="200"\n    :fixed-header="true"\n    :columns="columns"\n    :table-data="tableData"\n    rowKeyFieldName="rowkey"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center" },\n          { field: "address", key: "d", title: "Address", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initTableData() {\n        let data = [];\n        for (let i = 0; i < 15; i++) {\n          data.push({\n            rowkey: i,\n            name: i,\n            date: i,\n            hobby: i,\n            address: i,\n          });\n        }\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initTableData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},u=[];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":200,"fixed-header":!0,columns:e.columns,"table-data":e.tableData,rowKeyFieldName:"rowkey"}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<15;t++)e.push({rowkey:t,name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return m({render:e,staticRenderFns:t},n)}()}},y=p,v=Object(c["a"])(y,b,u,!1,null,null,null),g=v.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"高度自适应",fileName:"auto-height.md"}}),n("demo-block",[n("div",[n("p",[e._v("当内容小于"),n("code",[e._v("max-height")]),e._v("设定值时，表格高度自适应")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table :max-height="200" fixed-header :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center" },\n          { field: "address", key: "d", title: "Address", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initTableData() {\n        let data = [];\n        for (let i = 0; i < 2; i++) {\n          data.push({\n            name: i,\n            date: i,\n            hobby: i,\n            address: i,\n          });\n        }\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initTableData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},D=[];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":200,"fixed-header":"",columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<2;t++)e.push({name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return j({render:e,staticRenderFns:t},n)}()}},w=k,P=Object(c["a"])(w,O,D,!1,null,null,null),E=P.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"动态高度",fileName:"dynamic-height.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、你可以使用 "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/calc()"}},[e._v("calc css 函数")]),e._v(" 实现表格动态高度。如 "),n("code",[e._v('max-height="calc(100vh - 10px)"')]),e._v(" 或者 "),n("code",[e._v('max-height="calc(100% - 10px)"')]),e._v(" 等"),n("br"),e._v("2、你可以改变浏览器高度试试")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    max-height="calc(100vh - 350px)"\n    fixed-header\n    :columns="columns"\n    :table-data="tableData"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center" },\n          { field: "address", key: "d", title: "Address", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initTableData() {\n        let data = [];\n        for (let i = 0; i < 20; i++) {\n          data.push({\n            name: i,\n            date: i,\n            hobby: i,\n            address: i,\n          });\n        }\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initTableData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},H=[];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":"calc(100vh - 350px)","fixed-header":"",columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<20;t++)e.push({name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return S({render:e,staticRenderFns:t},n)}()}},F=A,C=Object(c["a"])(F,T,H,!1,null,null,null),R=C.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"禁用固定表头",fileName:"header-fixed-disabled.md"}}),n("demo-block",[n("div",[n("p",[e._v("通过"),n("code",[e._v('fixed-header="false"')]),e._v("禁用固定头。内容过多时，表头跟随滚动")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table :max-height="200" :fixed-header="false" :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center" },\n          { field: "address", key: "d", title: "Address", align: "left" },\n        ],\n        tableData: [],\n      };\n    },\n    methods: {\n      initTableData() {\n        let data = [];\n        for (let i = 0; i < 15; i++) {\n          data.push({\n            name: i,\n            date: i,\n            hobby: i,\n            address: i,\n          });\n        }\n        this.tableData = data;\n      },\n    },\n    created() {\n      this.initTableData();\n    },\n  };\n<\/script>\n')])])])],2)],1)},J=[];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":200,"fixed-header":!1,columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<15;t++)e.push({name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return z({render:e,staticRenderFns:t},n)}()}},q=W,G=Object(c["a"])(q,B,J,!1,null,null,null),I=G.exports,L={name:"basic-main",components:{Explain:d,Base:g,AutoHeight:E,DynamicHeight:R,HeaderFixedDisabled:I}},M=L,Q=Object(c["a"])(M,a,r,!1,null,null,null);t["default"]=Q.exports}}]);
//# sourceMappingURL=chunk-2d0b16cf.7c201f30.js.map