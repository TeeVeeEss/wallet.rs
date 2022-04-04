(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7867],{6852:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=["components"],o={description:"Getting started with the official IOTA Wallet Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","maven","environment variable"]},d="Getting Started with Java",s={unversionedId:"libraries/java/getting_started",id:"libraries/java/getting_started",isDocsHomePage:!1,title:"Getting Started with Java",description:"Getting started with the official IOTA Wallet Library Java binding.",source:"@site/docs/libraries/java/getting_started.md",sourceDirName:"libraries/java",slug:"/libraries/java/getting_started",permalink:"/docs/libraries/java/getting_started",editUrl:"https://github.com/iotaledger/wallet.rs/tree/dev/documentation/docs/libraries/java/getting_started.md",version:"current",frontMatter:{description:"Getting started with the official IOTA Wallet Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","maven","environment variable"]},sidebar:"docs",previous:{title:"API Reference",permalink:"/docs/libraries/python/api_reference"},next:{title:"Android development",permalink:"/docs/libraries/java/android_development"}},p=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Security",id:"security",children:[]},{value:"Installation",id:"installation",children:[{value:"Step 1: Creating the native library",id:"step-1-creating-the-native-library",children:[]},{value:"Step 2: Creating the Java archive",id:"step-2-creating-the-java-archive",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Gradle",id:"gradle-1",children:[]},{value:"Maven",id:"maven-1",children:[]}]},{value:"API Reference",id:"api-reference",children:[]},{value:"Limitations",id:"limitations",children:[]}],c={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-java"},"Getting Started with Java"),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"To use the library, we recommend you update Rust to the latest stable version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},(0,i.kt)("inlineCode",{parentName:"a"},"$ rustup update stable")),". Nightly should be fine but some changes might not be compatible."),(0,i.kt)("p",null,"Ensure you have first installed the required dependencies for the library ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/blob/dev/README.md"},"here"),". Then also install the following programs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java & JDK (Make sure $JAVA_HOME env variable) is set"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gradle.org/install/"},"Gradle")," v4 or higher or ",(0,i.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven")," installe"),(0,i.kt)("li",{parentName:"ul"},"Cargo ndk (",(0,i.kt)("inlineCode",{parentName:"li"},"cargo install cargo-ndk"),")"),(0,i.kt)("li",{parentName:"ul"},"Cargo fmt (",(0,i.kt)("inlineCode",{parentName:"li"},"rustup component add rustfmt"),")")),(0,i.kt)("p",null,"Download or clone the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/iotaledger/iota.rs.git\n")),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In a production setup, do not store passwords in the host's environment variables or in the source code.  See our ",(0,i.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/backup_security"},"backup and security recommendations")," for production setups."))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In order to build using the Wallet.rs Java bindings, you need the following two parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"JNI Native library linking ",(0,i.kt)("inlineCode",{parentName:"li"},"Rust")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"C"),", and then ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," to java ",(0,i.kt)("inlineCode",{parentName:"li"},"native")," methods (",(0,i.kt)("inlineCode",{parentName:"li"},".so")," , ",(0,i.kt)("inlineCode",{parentName:"li"},".dll")," or ",(0,i.kt)("inlineCode",{parentName:"li"},".dylib")," depending on your system)"),(0,i.kt)("li",{parentName:"ol"},"Java archive(Jar) containing ",(0,i.kt)("inlineCode",{parentName:"li"},"native")," methods which call C code. (",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),")")),(0,i.kt)("h3",{id:"step-1-creating-the-native-library"},"Step 1: Creating the native library"),(0,i.kt)("p",null,"Build the wallet library (This generates the java source code and JNI library file)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd wallet.rs/bindings/java\ncargo build --release\n")),(0,i.kt)("p",null,"Generated binaries can then be found at ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs/bindings/java/target/release")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Compiling for Android requires additional compilation instructions.\nSpecific instructions can be found in ",(0,i.kt)("a",{parentName:"p",href:"android_development"},"Android development")))),(0,i.kt)("h3",{id:"step-2-creating-the-java-archive"},"Step 2: Creating the Java archive"),(0,i.kt)("h4",{id:"generating-the-source-files-and-classes"},"Generating the source files and classes"),(0,i.kt)("p",null,"After step 1, Java source files will be generated under ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs/bindings/java/native/src/main/java/org/iota/wallet"),"."),(0,i.kt)("p",null,"If this step succeeded, we need to generate the jar file containing the newly generated Java source files."),(0,i.kt)("h4",{id:"generating-the-jar"},"Generating the jar"),(0,i.kt)("p",null,"Generating the jar can be done with your tool of preference. We provide examples for Gradle and Maven in this guide"),(0,i.kt)("h5",{id:"gradle"},"Gradle"),(0,i.kt)("p",null,"Make ",(0,i.kt)("inlineCode",{parentName:"p"},"gradlew")," executable (",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x gradlew"),") if needed, then run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd wallet.rs/bindings/java\n./gradlew jar\n")),(0,i.kt)("h5",{id:"maven"},"Maven"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd wallet.rs/bindings/java\nmvn install\n")),(0,i.kt)("p",null,"After running one of these commands, the jar can then be found at ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs/bindings/java/native/build/libs/native.jar")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"You can find more information on using the ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library's java binding in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/libraries/java/examples"},"examples section"),"."),(0,i.kt)("h3",{id:"gradle-1"},"Gradle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./gradlew examples:java-app:test --info\n")),(0,i.kt)("h3",{id:"maven-1"},"Maven"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mvn exec:exec\n")),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"API Reference can be found ",(0,i.kt)("a",{parentName:"p",href:"api_reference"},"here"),"."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Due to the fact that we are linking through C from Rust, there are a couple of limiting factors."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Classic builder patterns return a ",(0,i.kt)("inlineCode",{parentName:"li"},"clone")," after each builder call since we can only pass back to C by reference in ",(0,i.kt)("inlineCode",{parentName:"li"},"Rust"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},"Builder builder1 = new Builder();\nBuilder builder2 = builder1.setValue(true);\n\n// These are different instances, thus builder1 wont have the value set\nassertNotEquals(builder1, builder2);\n")))}u.isMDXComponent=!0},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);