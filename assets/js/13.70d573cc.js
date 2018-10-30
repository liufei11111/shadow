(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{172:function(n,a,t){"use strict";t.r(a);var s=t(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"minimizing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimizing","aria-hidden":"true"}},[n._v("#")]),n._v(" Minimizing")]),n._v(" "),t("p",[n._v("Shadow can automatically remove all classes of dependencies that are not used by the project, thereby minimizing the resulting shadowed JAR.")]),n._v(" "),t("div",{staticClass:"language-groovy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{attrs:{class:"token comment"}},[n._v("// Minimizing an shadow JAR")]),n._v("\nshadowJar "),t("span",{attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  "),t("span",{attrs:{class:"token function"}},[n._v("minimize")]),t("span",{attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),t("span",{attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),t("p",[n._v("A dependency can be excluded from the minimization process thereby forcing it's inclusion the shadow JAR.\nThis is useful when the dependency analyzer cannot find the usage of a class programmatically, for example if the class\nis loaded dynamically via "),t("code",[n._v("Class.forName(String)")]),n._v(".")]),n._v(" "),t("div",{staticClass:"language-groovy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{attrs:{class:"token comment"}},[n._v("// Force a class to be retained during minimization")]),n._v("\nshadowJar "),t("span",{attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  minimize "),t("span",{attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),t("span",{attrs:{class:"token function"}},[n._v("exclude")]),t("span",{attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{attrs:{class:"token function"}},[n._v("dependency")]),t("span",{attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{attrs:{class:"token string"}},[n._v("'org.scala-lang:.*:.*'")]),t("span",{attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),t("span",{attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),t("blockquote",[t("p",[n._v("Dependencies scoped as "),t("code",[n._v("api")]),n._v(' will automatically excluded from minimization and used as "entry points" on minimization.')])])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);