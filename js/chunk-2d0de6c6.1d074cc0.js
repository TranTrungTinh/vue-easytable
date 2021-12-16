(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de6c6"],{"861c":function(l,e,t){"use strict";t.r(e);var o=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("div",[t("h2",[l._v("列固定")]),t("Explain"),t("ColumnFixedLeft"),t("ColumnFixedRight"),t("ColumnFixedLeftRight"),t("ColumnFixedAutoWidth")],1)},c=[],n=function(){var l=this,e=l.$createElement;l._self._c;return l._m(0)},i=[function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[l._v("1、属性"),t("code",[l._v("scroll-width")]),l._v("为滚动区域的宽度"),t("br"),l._v(" 2、当外层容器宽度小于"),t("code",[l._v("scroll-width")]),l._v("值时，将会出现横向滚动条；当外层容器宽度大于"),t("code",[l._v("scroll-width")]),l._v("值时，将会跟随容器自适应"),t("br"),l._v(" 3、列宽可以不设置、或者设置为百分比、或者为像素值（px）"),t("br"),l._v(" 4、设置了"),t("code",[l._v("scroll-width")]),l._v("属性，列宽单位"),t("strong",[l._v("强烈建议保持一致！")]),t("br")])])])}],r=t("2877"),a={},d=Object(r["a"])(a,n,i,!1,null,null,null),f=d.exports,s=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"左列固定",fileName:"column-fixed-left.md"}}),t("demo-block",[t("div",[t("p",[l._v("1、通过"),t("code",[l._v('scroll-width="1200"')]),l._v("设置滚动区域宽度，通过"),t("code",[l._v('style="width:900px"')]),l._v("设置外层容器宽度"),t("br"),l._v("2、通过"),t("code",[l._v('fixed:"left"')]),l._v("设置需要固定的左列")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[l._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    { field: "col9", key: "i", title: "Title9" },\n                    { field: "col10", key: "j", title: "Title10" },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},u=[];function y(l,e){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),t.push.apply(t,o)}return t}function b(l){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){p(l,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(t,e))}))}return l}function p(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var m={name:"component-doc",components:{"element-demo0":function(){var l=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:l.columns,"table-data":l.tableData}})]],2)},e=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9"},{field:"col10",key:"j",title:"Title10"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return b({render:l,staticRenderFns:e},t)}()}},h=m,v=Object(r["a"])(h,s,u,!1,null,null,null),k=v.exports,T=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"右列固定",fileName:"column-fixed-right.md"}}),t("demo-block",[t("div",[t("p",[l._v("1、通过"),t("code",[l._v('scroll-width="1200"')]),l._v("设置滚动区域宽度，通过"),t("code",[l._v('style="width:900px"')]),l._v("设置外层容器宽度"),t("br"),l._v("2、通过"),t("code",[l._v('fixed:"right"')]),l._v("设置需要固定的左列")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[l._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1" },\n                    { field: "col2", key: "b", title: "Title2" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},O=[];function _(l,e){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),t.push.apply(t,o)}return t}function g(l){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(Object(t),!0).forEach((function(e){w(l,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(t,e))}))}return l}function w(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var x={name:"component-doc",components:{"element-demo0":function(){var l=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:l.columns,"table-data":l.tableData}})]],2)},e=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1"},{field:"col2",key:"b",title:"Title2"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return g({render:l,staticRenderFns:e},t)}()}},j=x,D=Object(r["a"])(j,T,O,!1,null,null,null),P=D.exports,E=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"左右列固定",fileName:"column-fixed-left-right.md"}}),t("demo-block",[t("div",[t("p",[l._v("1、通过"),t("code",[l._v('scroll-width="1200"')]),l._v("设置滚动区域宽度，通过"),t("code",[l._v('style="width:900px"')]),l._v("设置外层容器宽度"),t("br"),l._v("2、通过"),t("code",[l._v('fixed:"left"')]),l._v("设置需要固定的左列;通过"),t("code",[l._v('fixed:"right"')]),l._v("设置需要固定的右列")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[l._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},C=[];function F(l,e){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),t.push.apply(t,o)}return t}function S(l){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?F(Object(t),!0).forEach((function(e){$(l,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(t,e))}))}return l}function $(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var R={name:"component-doc",components:{"element-demo0":function(){var l=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:l.columns,"table-data":l.tableData}})]],2)},e=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return S({render:l,staticRenderFns:e},t)}()}},K=R,N=Object(r["a"])(K,E,C,!1,null,null,null),L=N.exports,A=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"‘容器自适应’列固定",fileName:"column-fixed-auto-width.md"}}),t("demo-block",[t("div",[t("p",[l._v("1、通过"),t("code",[l._v('scroll-width="1600"')]),l._v("设置滚动区域宽度"),t("br"),l._v("2、不设置外层容器宽度。等同于设置"),t("code",[l._v('style="width:100%"')]),t("br"),l._v("3、改变浏览器宽度试试看。当容器宽度小于"),t("code",[l._v("scroll-width")]),l._v("时，出滚动条；大于"),t("code",[l._v("scroll-width")]),l._v("时，将会跟随容器自适应")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[l._v('<template>\n    <ve-table\n        :scroll-width="1600"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n        rowKeyFieldName="rowKey"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 10; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},J=[];function W(l,e){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),t.push.apply(t,o)}return t}function q(l){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?W(Object(t),!0).forEach((function(e){z(l,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(t,e))}))}return l}function z(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var B={name:"component-doc",components:{"element-demo0":function(){var l=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("div",[[t("ve-table",{attrs:{"scroll-width":1600,"border-y":"",columns:l.columns,"table-data":l.tableData,rowKeyFieldName:"rowKey"}})]],2)},e=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}]}},methods:{initTableData:function(){for(var l=[],e=0;e<10;e++)l.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e,col9:e,col10:e});this.tableData=l}},created:function(){this.initTableData()}};return q({render:l,staticRenderFns:e},t)}()}},G=B,H=Object(r["a"])(G,A,J,!1,null,null,null),I=H.exports,M={name:"basic-main",components:{Explain:f,ColumnFixedLeft:k,ColumnFixedRight:P,ColumnFixedLeftRight:L,ColumnFixedAutoWidth:I}},Q=M,U=Object(r["a"])(Q,o,c,!1,null,null,null);e["default"]=U.exports}}]);
//# sourceMappingURL=chunk-2d0de6c6.1d074cc0.js.map