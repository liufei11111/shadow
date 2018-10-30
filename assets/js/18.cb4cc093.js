(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{165:function(e,a,t){"use strict";t.r(a);var i=t(0),n=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Shadow is a Gradle plugin for combining dependency classes and resources with a project's into a single\noutput Jar.\nThe combined Jar is often referred to a "),t("em",[e._v("fat-jar")]),e._v(" or "),t("em",[e._v("uber-jar")]),e._v(".\nShadow utilizes "),t("code",[e._v("JarInputStream")]),e._v(" and "),t("code",[e._v("JarOutputStream")]),e._v(" to efficiently process dependent libraries\ninto the output jar without incurring the I/O overhead of expanding the jars to disk.")]),e._v(" "),t("h2",{attrs:{id:"benefits-of-shadow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-shadow","aria-hidden":"true"}},[e._v("#")]),e._v(" Benefits of Shadow")]),e._v(" "),t("p",[e._v("Shadowing a project output has 2 major use cases:")]),e._v(" "),t("ol",[t("li",[e._v("Creating an "),t("em",[e._v("executable")]),e._v(" JAR distribution")]),e._v(" "),t("li",[e._v("Bundling and relocating common dependencies in libraries to avoid classpath conflicts")])]),e._v(" "),t("h3",{attrs:{id:"executable-distributions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#executable-distributions","aria-hidden":"true"}},[e._v("#")]),e._v(" Executable Distributions")]),e._v(" "),t("p",[e._v("Executable distribution is the main use case for "),t("em",[e._v("application")]),e._v(" an be deployed and executed/run in the runtime\nenvironment.\nIn the case of Shadow, this is a single "),t("em",[e._v("uber")]),e._v(" or "),t("em",[e._v("fat")]),e._v(" JAR.\nThe JAR file contains all the application code and dependent libraries to execute (not including the standard JVM\nlibraries).\nThe shadow JAR does "),t("strong",[e._v("not")]),e._v(" include the JRE itself.\nIt must be available on the target system.")]),e._v(" "),t("p",[e._v("Executable JARs contain a JAR MANIFEST that specifies the application Main Class.\nThis allows the application to be started with a single command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ java -jar application-shadow.jar\n")])])]),t("h3",{attrs:{id:"library-bundling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#library-bundling","aria-hidden":"true"}},[e._v("#")]),e._v(" Library Bundling")]),e._v(" "),t("p",[e._v("Dependency bundling and relocation is the main use case for "),t("em",[e._v("library")]),e._v(" authors.\nThe goal of a bundled library is to create a pre-packaged dependency for other libraries or applications to utilize.\nOften in these scenarios, a library may contain a dependency that a downstream library or application also uses.\nIn "),t("em",[e._v("some")]),e._v(" cases, different versions of this common dependency can cause an issue in either the upstream library or\nthe downstream application.\nThese issues often manifest themselves as binary incompatibilities in either the library or application code.")]),e._v(" "),t("p",[e._v("By utilizing Shadow's ability to "),t("em",[e._v("relocate")]),e._v(" the package names for dependencies, a library author can ensure that the\nlibrary's dependencies will not conflict with the same dependency being declared by the downstream application.")])])}],!1,null,null,null);n.options.__file="README.md";a.default=n.exports}}]);