webpackJsonp([1],{"8KHa":function(t,e,i){"use strict";var s=i("Dd8w"),r=i.n(s),n=i("NYxO"),a=i("Qz2k");e.a={data:function(){return{mini:!1,radio:1,radios:"radio-1"}},computed:r()({},Object(n.mapGetters)(["userCourse"]),{videoWidth:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"100%";case"sm":return"400px";case"md":case"lg":return"640px"}},videoHeight:function(){return"360px"},answers:function(){return[this.userCourse.modules[0].lectures[0].questionAnswers[0].answer[0],this.userCourse.modules[0].lectures[0].questionAnswers[1].answer[0],this.userCourse.modules[0].lectures[0].questionAnswers[2].answer[0]]}}),methods:r()({},Object(n.mapActions)(["getSecuredCourse"])),components:{CourseModule:a.a},mounted:function(){this.getSecuredCourse({id:this.$route.params.id})}}},CVc2:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-list-group",{attrs:{"prepend-icon":"folder",value:"true"}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-title",[t._v(t._s(t.name))])],1),i("v-list-group",{attrs:{"prepend-icon":"create","sub-group":"","no-action":"",value:"true"}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-title",[t._v("Lectures")])],1),t._l(t.lectures,function(e){return i("v-list-group",{key:e.id,attrs:{"sub-group":""}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-title",[t._v(t._s(e.name))])],1),i("v-list-tile",[i("v-list-tile-title",[t._v("\n          Media\n        ")]),i("v-list-tile-action",[i("v-icon",[t._v("perm_media")])],1)],1),i("v-list-tile",[i("v-list-tile-title",[t._v("\n          Test\n        ")]),i("v-list-tile-action",[i("v-icon",[t._v("playlist_add")])],1)],1)],1)})],2),i("v-list-group",{attrs:{"sub-group":"","prepend-icon":"check_box"}},[i("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[i("v-list-tile-title",[t._v("Quiz")])],1)],1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},Qz2k:function(t,e,i){"use strict";var s=i("gngB"),r=i("CVc2"),n=i("VU/8")(s.a,r.a,!1,null,null,null);n.options.__file="components/CourseModule.vue",e.a=n.exports},gngB:function(t,e,i){"use strict";e.a={props:["lectures","name","description","id","durationMinutes"]}},oC23:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("8KHa"),r=i("snG8"),n=i("VU/8")(s.a,r.a,!1,null,null,null);n.options.__file="pages/dashboard/_id.vue",e.default=n.exports},snG8:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-navigation-drawer",{attrs:{fixed:"","hide-overlay":"",app:"","mini-variant":t.mini},on:{"update:miniVariant":function(e){t.mini=e}}},[i("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[i("v-list",[i("v-list-tile",[i("v-list-tile-title",{staticClass:"title"},[t._v("\n            "+t._s(t.userCourse.name)+"\n          ")])],1)],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[i("v-icon",[t._v("chevron_left")])],1)],1)],1),i("v-divider"),i("v-list",t._l(t.userCourse.modules,function(t){return i("course-module",{key:t.id,attrs:{name:t.name,description:t.description,durationMinutes:t.durationMinutes,id:t.id,lectures:t.lectures}})}))],1),i("span",{staticClass:"subheading"},[t._v(t._s(t.userCourse.modules[0].lectures[0].description))]),i("v-divider",{staticClass:"my-3"}),i("iframe",{attrs:{type:"text/html",width:t.videoWidth,height:t.videoHeight,src:"https://www.youtube.com/embed/C0DPdy98e4c",frameborder:"0",showinfo:"0",modestbranding:"1"}}),i("v-divider"),i("h4",[t._v("Test")]),t._l(t.userCourse.modules[0].lectures[0].questionAnswers,function(e,s){return i("div",{key:e.id},[i("p",[t._v(t._s(e.question))]),i("v-radio-group",{attrs:{column:"",mandatory:!1},model:{value:t.answers[s],callback:function(e){t.$set(t.answers,s,e)},expression:"answers[i]"}},t._l(e.answer,function(e,s){return i("v-radio",{key:s},[t._v('\n        :label="answer"\n        :value="answer"\n      ')])}))],1)})],2)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r}});