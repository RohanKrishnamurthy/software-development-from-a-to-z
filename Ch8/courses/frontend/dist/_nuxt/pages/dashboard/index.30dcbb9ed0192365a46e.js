webpackJsonp([0],{G0dj:function(t,e,r){"use strict";e.a={props:["course"],data:function(){return{goTo:"/dashboard/"+this.course.id}}}},L0ih:function(t,e,r){"use strict";var s=r("NYxO"),a=r("n8aq");e.a={computed:Object(s.mapGetters)(["isAuthenticated","userCourses"]),middleware:"authenticated",components:{UserCourseItem:a.a},watch:{isAuthenticated:function(t){t||this.$router.push("/")}}}},NfHa:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("L0ih"),a=r("ghCC"),i=r("VU/8")(s.a,a.a,!1,null,null,null);i.options.__file="pages/dashboard/index.vue",e.default=i.exports},ghCC:function(t,e,r){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("h1",[this._v("Dashboard - my courses")]),e("v-card",[e("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:""}},this._l(this.userCourses,function(t){return e("user-course-item",{attrs:{id:t.id,course:t}})}))],1)],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},"j6k/":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticClass:"headline"},[t._v(t._s(t.course.name))])]),r("v-card-title",[r("div",[t._v(t._s(t.course.description))])]),r("v-card-actions",[r("v-btn",{attrs:{flat:"",dark:"",to:t.goTo}},[t._v("Go To Course")])],1)],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},n8aq:function(t,e,r){"use strict";var s=r("G0dj"),a=r("j6k/"),i=r("VU/8")(s.a,a.a,!1,null,null,null);i.options.__file="components/UserCourseItem.vue",e.a=i.exports}});