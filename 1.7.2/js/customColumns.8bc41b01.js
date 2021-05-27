webpackJsonp([15],{"/u4+":function(module,exports,s){var t=s("VU/8")(s("nnEb"),s("I6+X"),null,null,null);t.options.__file="D:\\MySpace\\PracticePro\\vue-easytable\\examples\\doc\\table\\customColumns\\custom-columns.md",t.esModule&&Object.keys(t.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] custom-columns.md: functional components are not supported with templates, they should use render functions."),module.exports=t.exports},"1Coa":function(module,exports,s){module.exports=s("FiTT")},FiTT:function(module,exports,s){var t=s("VU/8")(s("xT/1"),s("U9ku"),null,null,null);t.options.__file="D:\\MySpace\\PracticePro\\vue-easytable\\examples\\doc\\table\\customColumns\\main.md",t.esModule&&Object.keys(t.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] main.md: functional components are not supported with templates, they should use render functions."),module.exports=t.exports},"I6+X":function(module,exports,s){module.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("demo-box",{attrs:{jsfiddle:{html:'<template>\n    <v-table is-horizontal-resize style="width:100%" :columns="columns" :table-data="tableData" row-hover-color="#eee" row-click-color="#edf7ff" @on-custom-comp="customCompFunc"></v-table>\n</template>\n\n\n',script:'\n\n    import Vue from \'vue\'\n\n    export default{\n        data() {\n            return {\n                tableData: [\n                        {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},\n                        {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},\n                        {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},\n                        {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},\n                        {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}\n                     ],\n                    columns: [\n                        {\n                            field: \'custome\', title:\'序号\', width: 50, titleAlign: \'center\', columnAlign: \'center\',\n                            formatter: function (rowData,rowIndex,pagingIndex,field) {\n                                return rowIndex < 3 ? \'<span style="color:red;font-weight: bold;">\' + (rowIndex + 1) + \'</span>\' : rowIndex + 1\n                            }, isFrozen: true,isResize:true\n                        },\n                        {field: \'name\', title:\'姓名\', width: 80, titleAlign: \'center\',columnAlign:\'center\',isResize:true},\n                        {field: \'tel\', title: \'手机号码\', width: 150, titleAlign: \'center\',columnAlign:\'center\',isResize:true},\n                        {field: \'hobby\', title: \'爱好\', width: 150, titleAlign: \'center\',columnAlign:\'center\',isResize:true},\n                        {field: \'address\', title: \'地址\', width: 230, titleAlign: \'center\',columnAlign:\'left\',isResize:true},\n                        {field: \'custome-adv\', title: \'操作\',width: 200, titleAlign: \'center\',columnAlign:\'center\',componentName:\'table-operation\',isResize:true}\n                    ]\n\n            }\n        },\n        methods:{\n            customCompFunc(params){\n\n                console.log(params);\n\n                if (params.type === \'delete\'){ // do delete operation\n\n                    this.$delete(this.tableData,params.index);\n\n                }else if (params.type === \'edit\'){ // do edit operation\n\n                    alert(`行号：${params.index} 姓名：${params.rowData[\'name\']}`)\n                }\n\n            }\n        }\n    }\n\n    // 自定义列组件\n    Vue.component(\'table-operation\',{\n        template:`<span>\n        <a href="" @click.stop.prevent="update(rowData,index)">编辑</a>&nbsp;\n        <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>\n        </span>`,\n        props:{\n            rowData:{\n                type:Object\n            },\n            field:{\n                type:String\n            },\n            index:{\n                type:Number\n            }\n        },\n        methods:{\n            update(){\n\n               // 参数根据业务场景随意构造\n               let params = {type:\'edit\',index:this.index,rowData:this.rowData};\n               this.$emit(\'on-custom-comp\',params);\n            },\n\n            deleteRow(){\n\n                // 参数根据业务场景随意构造\n                let params = {type:\'delete\',index:this.index};\n                this.$emit(\'on-custom-comp\',params);\n\n            }\n        }\n    })\n',style:null},showDemo:!0}},[a("div",{attrs:{slot:"effectHtml"},slot:"effectHtml"},[[a("v-table",{staticStyle:{width:"100%"},attrs:{"is-horizontal-resize":"",columns:s.columns,"table-data":s.tableData,"row-hover-color":"#eee","row-click-color":"#edf7ff"},on:{"on-custom-comp":s.customCompFunc}})]],2),s._v(" "),a("div",{attrs:{slot:"codeDescription"},slot:"codeDescription"},[a("p",[a("strong",[s._v("自定义列普通用法")]),s._v("：")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("formatter")]),s._v("函数对当前数据进行简单的加工处理，这个方法接收"),a("code",[s._v("rowData")]),s._v("、"),a("code",[s._v("rowIndex")]),s._v(","),a("code",[s._v("pagingIndex")]),s._v(","),a("code",[s._v("field")]),s._v("作为回调数据；")]),s._v(" "),a("p",[a("strong",[s._v("自定义列高级用法")]),s._v("：")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("componentName")]),s._v("传递一个vue组件，这个自定义组件会接收到"),a("code",[s._v("rowData")]),s._v("、"),a("code",[s._v("field")]),s._v("、"),a("code",[s._v("index")]),s._v("作为回调数据；")]),s._v(" "),a("p",[s._v("通过传入事件"),a("code",[s._v("on-custom-comp")]),s._v("实现子组件与父组件通讯的目的；")])]),s._v(" "),a("div",{attrs:{slot:"codeHighlight"},slot:"codeHighlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-table")]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("is-horizontal-resize")]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width:100%"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":columns")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"columns"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":table-data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tableData"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("row-hover-color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"#eee"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("row-click-color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"#edf7ff"')]),s._v("\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@on-custom-comp")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"customCompFunc"')]),s._v("\n    >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-table")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        data() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tableData")]),s._v(": [\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"赵伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"156*****1987"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市黄浦区金陵东路569号17楼"')]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"李伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"182*****1538"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市奉贤区南桥镇立新路12号2楼"')]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"孙伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"161*****0097"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市崇明县城桥镇八一路739号"')]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"周伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"197*****1123"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市青浦区青浦镇章浜路24号"')]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-string"}},[s._v('"name"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"吴伟"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"tel"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"183*****6678"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"hobby"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"钢琴、书法、唱歌"')]),s._v(","),a("span",{attrs:{class:"hljs-string"}},[s._v('"address"')]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('"上海市松江区乐都西路867-871号"')]),s._v("}\n                     ],\n                    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columns")]),s._v(": [\n                        {\n                            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'custome'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'序号'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(",\n                            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}},[s._v("rowData,rowIndex,pagingIndex,field")]),s._v(") ")]),s._v("{\n                                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" rowIndex < "),a("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" ? "),a("span",{attrs:{class:"hljs-string"}},[s._v("'<span style=\"color:red;font-weight: bold;\">'")]),s._v(" + (rowIndex + "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") + "),a("span",{attrs:{class:"hljs-string"}},[s._v("'</span>'")]),s._v(" : rowIndex + "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n                            }, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("isFrozen")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n                        },\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'姓名'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("80")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'tel'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'手机号码'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'hobby'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'爱好'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'address'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'地址'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("230")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("},\n                        {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'custome-adv'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'操作'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("titleAlign")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("columnAlign")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("componentName")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'table-operation'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("isResize")]),s._v(":"),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("}\n                    ]\n\n            }\n        },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(":{\n            customCompFunc(params){\n\n                "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(params);\n\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (params.type === "),a("span",{attrs:{class:"hljs-string"}},[s._v("'delete'")]),s._v("){ "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// do delete operation")]),s._v("\n\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("delete")]),s._v("("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tableData,params.index);\n\n                }"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (params.type === "),a("span",{attrs:{class:"hljs-string"}},[s._v("'edit'")]),s._v("){ "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// do edit operation")]),s._v("\n\n                    alert("),a("span",{attrs:{class:"hljs-string"}},[s._v("`行号："),a("span",{attrs:{class:"hljs-subst"}},[s._v("${params.index}")]),s._v(" 姓名："),a("span",{attrs:{class:"hljs-subst"}},[s._v("${params.rowData["),a("span",{attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v("]}")]),s._v("`")]),s._v(")\n                }\n\n            }\n        }\n    }\n\n    "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 自定义列组件")]),s._v("\n    Vue.component("),a("span",{attrs:{class:"hljs-string"}},[s._v("'table-operation'")]),s._v(",{\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v('`<span>\n        <a href="" @click.stop.prevent="update(rowData,index)">编辑</a>&nbsp;\n        <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>\n        </span>`')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(":{\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rowData")]),s._v(":{\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(":"),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v("\n            },\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("field")]),s._v(":{\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(":"),a("span",{attrs:{class:"hljs-built_in"}},[s._v("String")]),s._v("\n            },\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("index")]),s._v(":{\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(":"),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Number")]),s._v("\n            }\n        },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(":{\n            update(){\n\n               "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 参数根据业务场景随意构造")]),s._v("\n               "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" params = {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'edit'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("index")]),s._v(":"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".index,"),a("span",{attrs:{class:"hljs-attr"}},[s._v("rowData")]),s._v(":"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rowData};\n               "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),a("span",{attrs:{class:"hljs-string"}},[s._v("'on-custom-comp'")]),s._v(",params);\n            },\n\n            deleteRow(){\n\n                "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 参数根据业务场景随意构造")]),s._v("\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" params = {"),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'delete'")]),s._v(","),a("span",{attrs:{class:"hljs-attr"}},[s._v("index")]),s._v(":"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".index};\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),a("span",{attrs:{class:"hljs-string"}},[s._v("'on-custom-comp'")]),s._v(",params);\n\n            }\n        }\n    })\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]},module.exports.render._withStripped=!0},Ncwb:function(module,exports,s){module.exports=s("/u4+")},U9ku:function(module,exports,s){module.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("demo-box",{attrs:{jsfiddle:{html:'<template>\n         <div class="mt30">\n            <h3>自适应</h3>\n\n            <div class="mt30">\n               <anchor id="custom-columns" label="自定义列" h4></anchor>\n               <custom-columns></custom-columns>\n           </div>\n        </div>\n</template>\n\n',script:"\n\n    import customColumns from './custom-columns.md'\n\n    export default{\n        name: \"custom-columns-main\",\n        components: {\n            customColumns\n        }\n    }\n",style:null},showDemo:!1}},[a("div",{attrs:{slot:"effectHtml"},slot:"effectHtml"},[[a("div",{staticClass:"mt30"},[a("h3",[s._v("自适应")]),s._v(" "),a("div",{staticClass:"mt30"},[a("anchor",{attrs:{id:"custom-columns",label:"自定义列",h4:""}}),s._v(" "),a("custom-columns")],1)])]],2),s._v(" "),a("div",{attrs:{slot:"codeDescription"},slot:"codeDescription"}),s._v(" "),a("div",{attrs:{slot:"codeHighlight"},slot:"codeHighlight"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n         "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mt30"')]),s._v(">")]),s._v("\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("自适应"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("h3")]),s._v(">")]),s._v("\n\n            "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"mt30"')]),s._v(">")]),s._v("\n               "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("anchor")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"custom-columns"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"自定义列"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("h4")]),s._v(" >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("anchor")]),s._v(">")]),s._v("\n               "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("custom-columns")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("custom-columns")]),s._v(">")]),s._v("\n           "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" customColumns "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'./custom-columns.md'")]),s._v("\n\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"custom-columns-main"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {\n            customColumns\n        }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},staticRenderFns:[]},module.exports.render._withStripped=!0},nnEb:function(module,exports,s){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=s("4bK6"),a=function(s){return s&&s.__esModule?s:{default:s}}(t);exports.default={data:function(){return{tableData:[{name:"赵伟",tel:"156*****1987",hobby:"钢琴、书法、唱歌",address:"上海市黄浦区金陵东路569号17楼"},{name:"李伟",tel:"182*****1538",hobby:"钢琴、书法、唱歌",address:"上海市奉贤区南桥镇立新路12号2楼"},{name:"孙伟",tel:"161*****0097",hobby:"钢琴、书法、唱歌",address:"上海市崇明县城桥镇八一路739号"},{name:"周伟",tel:"197*****1123",hobby:"钢琴、书法、唱歌",address:"上海市青浦区青浦镇章浜路24号"},{name:"吴伟",tel:"183*****6678",hobby:"钢琴、书法、唱歌",address:"上海市松江区乐都西路867-871号"}],columns:[{field:"custome",title:"序号",width:50,titleAlign:"center",columnAlign:"center",formatter:function(s,t,a,n){return t<3?'<span style="color:red;font-weight: bold;">'+(t+1)+"</span>":t+1},isFrozen:!0,isResize:!0},{field:"name",title:"姓名",width:80,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"tel",title:"手机号码",width:150,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"hobby",title:"爱好",width:150,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"address",title:"地址",width:230,titleAlign:"center",columnAlign:"left",isResize:!0},{field:"custome-adv",title:"操作",width:200,titleAlign:"center",columnAlign:"center",componentName:"table-operation",isResize:!0}]}},methods:{customCompFunc:function(s){console.log(s),"delete"===s.type?this.$delete(this.tableData,s.index):"edit"===s.type&&alert("行号："+s.index+" 姓名："+s.rowData.name)}}},a.default.component("table-operation",{template:'<span>\n    <a href="" @click.stop.prevent="update(rowData,index)">编辑</a>&nbsp;\n    <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>\n    </span>',props:{rowData:{type:Object},field:{type:String},index:{type:Number}},methods:{update:function(){var s={type:"edit",index:this.index,rowData:this.rowData};this.$emit("on-custom-comp",s)},deleteRow:function(){var s={type:"delete",index:this.index};this.$emit("on-custom-comp",s)}}})},"xT/1":function(module,exports,s){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=s("Ncwb"),a=function(s){return s&&s.__esModule?s:{default:s}}(t);exports.default={name:"custom-columns-main",components:{customColumns:a.default}}}});