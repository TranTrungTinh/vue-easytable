(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bb7c056"],{2258:function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h2",[t._v("Instance Methods")]),l("Explain"),l("ScrollTo"),l("ScrollToRowKey"),l("API",{attrs:{title:"API",anchor:"API",desc:"Instance Methods"}})],1)},o=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"content example-md-doc"},[l("div",{staticClass:"tip"},[l("p",[t._v("1、Instance methods can be accessed directly through "),l("a",{attrs:{href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"}},[t._v("ref")])])])])}],r=l("2877"),a={},s=Object(r["a"])(a,c,i,!1,null,null,null),d=s.exports,u=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"content example-md-doc"},[l("anchor",{attrs:{"is-edit":"",label:"scrollTo",fileName:"scroll-to.md"}}),l("demo-block",[l("div",[l("p",[t._v("1、Scroll the table to the specified location(px)"),l("br"),t._v("2、Params refer to "),l("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo"}},[t._v("scrollTo")])])]),l("template",{slot:"source"},[l("element-demo0")],1),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollY(1000)">Scroll vertically to 1000px</button>\n            <button class="button-demo" @click="scrollY(500)">Scroll vertically to 500px</button>\n            <button class="button-demo" @click="scrollY(0)">Scroll vertically to 0px</button>\n            <button class="button-demo" @click="scrollX(500)">Scroll horizontally to 300px</button>\n            <button class="button-demo" @click="scrollX(300)">Scroll horizontally to 200px</button>\n            <button class="button-demo" @click="scrollX(0)">Scroll horizontally to 0px</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollY(val) {\n                this.$refs["tableRef"].scrollTo({ top: val, behavior: "smooth" });\n            },\n            // scroll x\n            scrollX(val) {\n                this.$refs["tableRef"].scrollTo({ left: val, behavior: "smooth" });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},f=[];function b(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function h(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?b(Object(l),!0).forEach((function(e){y(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function y(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}var m={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("div",[l("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(1e3)}}},[t._v("Scroll vertically to 1000px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(500)}}},[t._v("Scroll vertically to 500px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(0)}}},[t._v("Scroll vertically to 0px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(500)}}},[t._v("Scroll horizontally to 300px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(300)}}},[t._v("Scroll horizontally to 200px")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(0)}}},[t._v("Scroll horizontally to 0px")])]),t._v(" "),l("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey"}})],1)]],2)},e=[],l={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],e=0;e<80;e++)t.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e,col9:e,col10:e});this.tableData=t},scrollY:function(t){this.$refs["tableRef"].scrollTo({top:t,behavior:"smooth"})},scrollX:function(t){this.$refs["tableRef"].scrollTo({left:t,behavior:"smooth"})}},created:function(){this.initTableData()}};return h({render:t,staticRenderFns:e},l)}()}},p=m,v=Object(r["a"])(p,u,f,!1,null,null,null),w=v.exports,k=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"content example-md-doc"},[l("anchor",{attrs:{"is-edit":"",label:"scrollToRowKey",fileName:"scroll-to-row-key.md"}}),l("demo-block",[l("div",[l("p",[t._v("1、Scroll the table to the location of the row key")])]),l("template",{slot:"source"},[l("element-demo0")],1),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollToRowKey(30)">滚动到rowKey为30的行</button>\n            <button class="button-demo" @click="scrollToRowKey(50)">滚动到rowKey为50的行</button>\n            <button class="button-demo" @click="scrollToRowKey(0)">滚动到rowKey为0的行</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollToRowKey(rowKey) {\n                this.$refs["tableRef"].scrollToRowKey({ rowKey: rowKey });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},x=[];function g(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function T(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?g(Object(l),!0).forEach((function(e){_(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):g(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function _(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}var O={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("div",[l("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(30)}}},[t._v("滚动到rowKey为30的行")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(50)}}},[t._v("滚动到rowKey为50的行")]),t._v(" "),l("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(0)}}},[t._v("滚动到rowKey为0的行")])]),t._v(" "),l("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey"}})],1)]],2)},e=[],l={data:function(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],e=0;e<80;e++)t.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=t},scrollToRowKey:function(t){this.$refs["tableRef"].scrollToRowKey({rowKey:t})}},created:function(){this.initTableData()}};return T({render:t,staticRenderFns:e},l)}()}},K=O,j=Object(r["a"])(K,k,x,!1,null,null,null),S=j.exports,R=l("252e"),D={name:"basic-main",components:{Explain:d,ScrollTo:w,ScrollToRowKey:S,API:R["a"]}},P=D,C=Object(r["a"])(P,n,o,!1,null,null,null);e["default"]=C.exports},"252e":function(t,e,l){"use strict";var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("tpl",{attrs:{desc:t.desc,anchor:t.anchor,"table-data":t.db.instanceMethods.data,columns:t.db.instanceMethods.columns}})],1)},o=[],c=l("3ef3"),i=l("7eb4"),r={components:{tpl:c["a"]},props:{anchor:{type:String,default:"Table Instance Methods"},desc:{type:String,default:"Table Instance Methods"}},data:function(){return{db:i["a"]}}},a=r,s=l("2877"),d=Object(s["a"])(a,n,o,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-1bb7c056.d9d7fcc9.js.map