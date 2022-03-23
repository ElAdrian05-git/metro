"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],a={id:"configuration",title:"Configuring Metro"},s=void 0,d={unversionedId:"configuration",id:"configuration",title:"Configuring Metro",description:"A Metro config can be created in these three ways (ordered by priority):",source:"@site/../docs/Configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/metro/docs/configuration",editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Configuration.md",tags:[],version:"current",lastUpdatedAt:1648056253,formattedLastUpdatedAt:"3/23/2022",frontMatter:{id:"configuration",title:"Configuring Metro"},sidebar:"docs",previous:{title:"API",permalink:"/metro/docs/api"},next:{title:"Metro CLI Options",permalink:"/metro/docs/cli"}},p={},u=[{value:"Configuration Structure",id:"configuration-structure",level:2},{value:"General Options",id:"general-options",level:3},{value:"<code>cacheStores</code>",id:"cachestores",level:4},{value:"<code>cacheVersion</code>",id:"cacheversion",level:4},{value:"<code>projectRoot</code>",id:"projectroot",level:4},{value:"<code>watchFolders</code>",id:"watchfolders",level:4},{value:"<code>transformerPath</code>",id:"transformerpath",level:4},{value:"<code>reporter</code>",id:"reporter",level:4},{value:"<code>resetCache</code>",id:"resetcache",level:4},{value:"<code>stickyWorkers</code>",id:"stickyworkers",level:4},{value:"<code>maxWorkers</code>",id:"maxworkers",level:4},{value:"<code>hasteMapCacheDirectory</code>",id:"hastemapcachedirectory",level:4},{value:"Resolver Options",id:"resolver-options",level:3},{value:"<code>assetExts</code>",id:"assetexts",level:4},{value:"<code>sourceExts</code>",id:"sourceexts",level:4},{value:"<code>resolverMainFields</code>",id:"resolvermainfields",level:4},{value:"<code>disableHierarchicalLookup</code>",id:"disablehierarchicallookup",level:4},{value:"<code>emptyModulePath</code>",id:"emptymodulepath",level:4},{value:"<code>extraNodeModules</code>",id:"extranodemodules",level:4},{value:"<code>nodeModulesPaths</code>",id:"nodemodulespaths",level:4},{value:"<code>resolveRequest</code>",id:"resolverequest",level:4},{value:"<code>useWatchman</code>",id:"usewatchman",level:4},{value:"<code>blockList</code>",id:"blocklist",level:4},{value:"<code>hasteImplModulePath</code>",id:"hasteimplmodulepath",level:4},{value:"<code>platforms</code>",id:"platforms",level:4},{value:"Transformer Options",id:"transformer-options",level:3},{value:"<code>asyncRequireModulePath</code>",id:"asyncrequiremodulepath",level:4},{value:"<code>babelTransformerPath</code>",id:"babeltransformerpath",level:4},{value:"<code>dynamicDepsInPackages</code>",id:"dynamicdepsinpackages",level:4},{value:"<code>enableBabelRCLookup</code>",id:"enablebabelrclookup",level:4},{value:"<code>enableBabelRuntime</code>",id:"enablebabelruntime",level:4},{value:"<code>getTransformOptions</code>",id:"gettransformoptions",level:4},{value:"<code>hermesParser</code>",id:"hermesparser",level:4},{value:"<code>minifierPath</code>",id:"minifierpath",level:4},{value:"<code>minifierConfig</code>",id:"minifierconfig",level:4},{value:"<code>optimizationSizeLimit</code>",id:"optimizationsizelimit",level:4},{value:"React Native Only",id:"react-native-only",level:4},{value:"<code>assetPlugins</code>",id:"assetplugins",level:4},{value:"<code>assetRegistryPath</code>",id:"assetregistrypath",level:4},{value:"Serializer Options",id:"serializer-options",level:3},{value:"<code>getRunModuleStatement</code>",id:"getrunmodulestatement",level:4},{value:"<code>createModuleIdFactory</code>",id:"createmoduleidfactory",level:4},{value:"<code>getPolyfills</code>",id:"getpolyfills",level:4},{value:"<code>postProcessBundleSourcemap</code>",id:"postprocessbundlesourcemap",level:4},{value:"<code>getModulesRunBeforeMainModule</code>",id:"getmodulesrunbeforemainmodule",level:4},{value:"<code>processModuleFilter</code>",id:"processmodulefilter",level:4},{value:"Server Options",id:"server-options",level:3},{value:"<code>port</code>",id:"port",level:4},{value:"<code>useGlobalHotkey</code>",id:"useglobalhotkey",level:4},{value:"<code>enhanceMiddleware</code>",id:"enhancemiddleware",level:4},{value:"<code>rewriteRequestUrl</code>",id:"rewriterequesturl",level:4},{value:"<code>runInspectorProxy</code>",id:"runinspectorproxy",level:4},{value:"Merging Configurations",id:"merging-configurations",level:2},{value:"Merging Example",id:"merging-example",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Metro config can be created in these three ways (ordered by priority):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"metro.config.js")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"metro.config.json")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"metro")," field in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"))),(0,i.kt)("p",null,"You can also give a custom file to the configuration by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"--config <path/to/config>")," when calling the CLI."),(0,i.kt)("h2",{id:"configuration-structure"},"Configuration Structure"),(0,i.kt)("p",null,"The configuration is based on ",(0,i.kt)("a",{parentName:"p",href:"/metro/docs/concepts"},"our concepts"),", which means that for every module we have a separate config option. A common configuration structure in Metro looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  /* general options */\n\n  resolver: {\n    /* resolver options */\n  },\n  transformer: {\n    /* transformer options */\n  },\n  serializer: {\n    /* serializer options */\n  },\n  server: {\n    /* server options */\n  }\n};\n")),(0,i.kt)("h3",{id:"general-options"},"General Options"),(0,i.kt)("h4",{id:"cachestores"},(0,i.kt)("inlineCode",{parentName:"h4"},"cacheStores")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<CacheStore<TransformResult<>>>")),(0,i.kt)("p",null,"List where we store our ",(0,i.kt)("a",{parentName:"p",href:"/metro/docs/caching"},"caches"),"."),(0,i.kt)("h4",{id:"cacheversion"},(0,i.kt)("inlineCode",{parentName:"h4"},"cacheVersion")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Can be used to generate a key that will invalidate the whole metro cache."),(0,i.kt)("h4",{id:"projectroot"},(0,i.kt)("inlineCode",{parentName:"h4"},"projectRoot")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The root folder of your project."),(0,i.kt)("h4",{id:"watchfolders"},(0,i.kt)("inlineCode",{parentName:"h4"},"watchFolders")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("p",null,"Specify any additional (to projectRoot) watch folders, this is used to know which files to watch.\n(By default the file watching is disabled in CI environments. Also it can be manually disabled by setting the env variable ",(0,i.kt)("inlineCode",{parentName:"p"},"CI=true"),")"),(0,i.kt)("h4",{id:"transformerpath"},(0,i.kt)("inlineCode",{parentName:"h4"},"transformerPath")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The path to the transformer to use."),(0,i.kt)("h4",{id:"reporter"},(0,i.kt)("inlineCode",{parentName:"h4"},"reporter")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"{update: () => void}")),(0,i.kt)("p",null,"Used to report the status of the bundler during the bundling process."),(0,i.kt)("h4",{id:"resetcache"},(0,i.kt)("inlineCode",{parentName:"h4"},"resetCache")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether we should reset the cache when starting the build."),(0,i.kt)("h4",{id:"stickyworkers"},(0,i.kt)("inlineCode",{parentName:"h4"},"stickyWorkers")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Control whether the created workers should stick based on filename or not."),(0,i.kt)("h4",{id:"maxworkers"},(0,i.kt)("inlineCode",{parentName:"h4"},"maxWorkers")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The number of workers we should parallelize the transformer on."),(0,i.kt)("h4",{id:"hastemapcachedirectory"},(0,i.kt)("inlineCode",{parentName:"h4"},"hasteMapCacheDirectory")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The path to the haste map cache directory, defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"os.tmpdir()"),"."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resolver-options"},"Resolver Options"),(0,i.kt)("h4",{id:"assetexts"},(0,i.kt)("inlineCode",{parentName:"h4"},"assetExts")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("p",null,"An array of asset extensions to include in the bundle. For example, if you would give ",(0,i.kt)("inlineCode",{parentName:"p"},"['ttf']")," you would be able to include ",(0,i.kt)("inlineCode",{parentName:"p"},".ttf")," files in the bundle."),(0,i.kt)("h4",{id:"sourceexts"},(0,i.kt)("inlineCode",{parentName:"h4"},"sourceExts")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("p",null,"An array of source extensions to include in the bundle. For example, if you would give ",(0,i.kt)("inlineCode",{parentName:"p"},"['ts']")," you would be able to include ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," files in the bundle."),(0,i.kt)("h4",{id:"resolvermainfields"},(0,i.kt)("inlineCode",{parentName:"h4"},"resolverMainFields")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("p",null,"Specify the fields in package.json files that will be used by the module resolver to do redirections when requiring certain packages. The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"['browser', 'main']"),", so the resolver will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"browser")," field if it exists and ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," otherwise."),(0,i.kt)("h4",{id:"disablehierarchicallookup"},(0,i.kt)("inlineCode",{parentName:"h4"},"disableHierarchicalLookup")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether to disable ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders"},"looking up modules in ",(0,i.kt)("inlineCode",{parentName:"a"},"node_modules")," folders"),". This only affects the default search through the directory tree, not other Metro options like ",(0,i.kt)("inlineCode",{parentName:"p"},"extraNodeModules")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeModulesPaths"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h4",{id:"emptymodulepath"},(0,i.kt)("inlineCode",{parentName:"h4"},"emptyModulePath")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,'What module to use as the canonical "empty" module when one is needed. Defaults to using the one included in ',(0,i.kt)("inlineCode",{parentName:"p"},"metro-runtime"),". You only need to change this if Metro is installed outside of your project."),(0,i.kt)("h4",{id:"extranodemodules"},(0,i.kt)("inlineCode",{parentName:"h4"},"extraNodeModules")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"{[name:string]:string}")),(0,i.kt)("p",null,"Which other ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," to include besides the ones relative to the project directory. This is keyed by dependency name."),(0,i.kt)("h4",{id:"nodemodulespaths"},(0,i.kt)("inlineCode",{parentName:"h4"},"nodeModulesPaths")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("p",null,"This option can be used to add additional ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folders for Metro to locate third-party dependencies when resolving modules. This is useful if third-party dependencies are installed in a different location outside of the direct path of source files."),(0,i.kt)("p",null,"This option works similarly to how ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders"},"$NODE_PATH")," works for Node.js based tooling, except that ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeModulesPaths")," takes precedence over hierarchical ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," lookup."),(0,i.kt)("h4",{id:"resolverequest"},(0,i.kt)("inlineCode",{parentName:"h4"},"resolveRequest")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"?CustomResolver")),(0,i.kt)("p",null,"An optional function used to resolve requests. Particularly useful for cases where aliases or custom protocols are used. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"resolveRequest: (context, moduleName, platform) => {\n  if (moduleName.startsWith('my-custom-resolver:')) {\n    // Resolve file path logic...\n    // NOTE: Throw an error if there is no resolution.\n    return {\n      filePath: \"path/to/file\",\n      type: 'sourceFile',\n    };\n  }\n  // Optionally, chain to the standard Metro resolver.\n  return context.resolveRequest(context, moduleName, platform);\n}\n")),(0,i.kt)("h4",{id:"usewatchman"},(0,i.kt)("inlineCode",{parentName:"h4"},"useWatchman")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", it'll prevent Metro from using watchman (even if it's installed)"),(0,i.kt)("p",null,"These options are only useful with React Native projects."),(0,i.kt)("h4",{id:"blocklist"},(0,i.kt)("inlineCode",{parentName:"h4"},"blockList")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<RegExp>")),(0,i.kt)("p",null,"A RegEx defining which paths to ignore, however if a blocklisted file is required it will be brought into the dependency graph."),(0,i.kt)("h4",{id:"hasteimplmodulepath"},(0,i.kt)("inlineCode",{parentName:"h4"},"hasteImplModulePath")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The path to the haste resolver."),(0,i.kt)("h4",{id:"platforms"},(0,i.kt)("inlineCode",{parentName:"h4"},"platforms")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("p",null,'Additional platforms to look out for, For example, if you want to add a "custom" platform, and use modules ending in .custom.js, you would return ',"['custom']"," here."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transformer-options"},"Transformer Options"),(0,i.kt)("h4",{id:"asyncrequiremodulepath"},(0,i.kt)("inlineCode",{parentName:"h4"},"asyncRequireModulePath")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"What module to use for handling async requires."),(0,i.kt)("h4",{id:"babeltransformerpath"},(0,i.kt)("inlineCode",{parentName:"h4"},"babelTransformerPath")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Use a custom babel transformer (only relevant when using the default transformerPath). For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// in your babelTransformer file\nmodule.exports = ({ filename, options, plugins, src }) => {\n  // transform file...\n  return { ast: AST };\n}\n")),(0,i.kt)("h4",{id:"dynamicdepsinpackages"},(0,i.kt)("inlineCode",{parentName:"h4"},"dynamicDepsInPackages")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," (",(0,i.kt)("inlineCode",{parentName:"p"},"throwAtRuntime")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"reject"),")"),(0,i.kt)("p",null,"What should happen when a dynamic dependency is found."),(0,i.kt)("h4",{id:"enablebabelrclookup"},(0,i.kt)("inlineCode",{parentName:"h4"},"enableBabelRCLookup")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,i.kt)("p",null,"Whether we should use the ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc")," config file."),(0,i.kt)("h4",{id:"enablebabelruntime"},(0,i.kt)("inlineCode",{parentName:"h4"},"enableBabelRuntime")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean | string")," (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,i.kt)("p",null,"Whether the transformer should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/transform/runtime")," plugin."),(0,i.kt)("p",null,"If the value is a string, it is treated as a runtime version number and passed as ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," configuration. This allows you to optimize the generated babel runtime based on the\nruntime in the app's node modules confugration."),(0,i.kt)("h4",{id:"gettransformoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"getTransformOptions")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"GetTransformOptions")),(0,i.kt)("p",null,"Get the transform options."),(0,i.kt)("h4",{id:"hermesparser"},(0,i.kt)("inlineCode",{parentName:"h4"},"hermesParser")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,i.kt)("p",null,"Use the hermes-parser package to use call Hermes parser via WASM instead of the Babel parser."),(0,i.kt)("h4",{id:"minifierpath"},(0,i.kt)("inlineCode",{parentName:"h4"},"minifierPath")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Path to the minifier that minifies the code after transformation."),(0,i.kt)("h4",{id:"minifierconfig"},(0,i.kt)("inlineCode",{parentName:"h4"},"minifierConfig")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"{[key: string]: mixed}")),(0,i.kt)("p",null,"Configuration object that will be passed to the minifier (it should be serializable)."),(0,i.kt)("h4",{id:"optimizationsizelimit"},(0,i.kt)("inlineCode",{parentName:"h4"},"optimizationSizeLimit")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Define a threshold (in bytes) to disable some expensive optimizations for big files."),(0,i.kt)("h4",{id:"react-native-only"},"React Native Only"),(0,i.kt)("h4",{id:"assetplugins"},(0,i.kt)("inlineCode",{parentName:"h4"},"assetPlugins")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("p",null,"List of modules to call to modify Asset data"),(0,i.kt)("h4",{id:"assetregistrypath"},(0,i.kt)("inlineCode",{parentName:"h4"},"assetRegistryPath")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Where to fetch the assets from."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializer-options"},"Serializer Options"),(0,i.kt)("h4",{id:"getrunmodulestatement"},(0,i.kt)("inlineCode",{parentName:"h4"},"getRunModuleStatement")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"(number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string) => string")),(0,i.kt)("p",null,"Specify the format of the initial require statements that are appended at the end of the bundle. By default is ",(0,i.kt)("inlineCode",{parentName:"p"},"__r(${moduleId});"),"."),(0,i.kt)("h4",{id:"createmoduleidfactory"},(0,i.kt)("inlineCode",{parentName:"h4"},"createModuleIdFactory")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"() => (path: string) => number")),(0,i.kt)("p",null,"Used to generate the module id for ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," statements."),(0,i.kt)("h4",{id:"getpolyfills"},(0,i.kt)("inlineCode",{parentName:"h4"},"getPolyfills")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"({platform: ?string}) => $ReadOnlyArray<string>")),(0,i.kt)("p",null,"An optional list of polyfills to include in the bundle. The list defaults to a set of common polyfills for Number, String, Array, Object..."),(0,i.kt)("h4",{id:"postprocessbundlesourcemap"},(0,i.kt)("inlineCode",{parentName:"h4"},"postProcessBundleSourcemap")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"PostProcessBundleSourcemap")),(0,i.kt)("p",null,"An optional function that can modify the code and source map of the bundle before it is written. Applied once for the entire bundle."),(0,i.kt)("h4",{id:"getmodulesrunbeforemainmodule"},(0,i.kt)("inlineCode",{parentName:"h4"},"getModulesRunBeforeMainModule")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"(entryFilePath: string) => Array<string>")),(0,i.kt)("p",null,"An array of modules to be required before the entry point. It should contain the absolute path of each module. Note that this will add the additional require statements only if the passed modules are already included as part of the bundle."),(0,i.kt)("h4",{id:"processmodulefilter"},(0,i.kt)("inlineCode",{parentName:"h4"},"processModuleFilter")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"(module: Array<Module>) => boolean")),(0,i.kt)("p",null,"A filter function to discard specific modules from the output."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"server-options"},"Server Options"),(0,i.kt)("p",null,"These options are used when Metro serves the content."),(0,i.kt)("h4",{id:"port"},(0,i.kt)("inlineCode",{parentName:"h4"},"port")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Which port to listen on."),(0,i.kt)("h4",{id:"useglobalhotkey"},(0,i.kt)("inlineCode",{parentName:"h4"},"useGlobalHotkey")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether we should enable CMD+R hotkey for refreshing the bundle."),(0,i.kt)("h4",{id:"enhancemiddleware"},(0,i.kt)("inlineCode",{parentName:"h4"},"enhanceMiddleware")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"(Middleware, Server) => Middleware")),(0,i.kt)("p",null,"The possibility to add custom middleware to the server response chain."),(0,i.kt)("h4",{id:"rewriterequesturl"},(0,i.kt)("inlineCode",{parentName:"h4"},"rewriteRequestUrl")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string => string")),(0,i.kt)("p",null,"A function that will be called every time Metro processes a URL. Metro will use the return value of this function as if it were the original URL provided by the client. This applies to all incoming HTTP requests (after any custom middleware), as well as bundle URLs in ",(0,i.kt)("inlineCode",{parentName:"p"},"/symbolicate")," request payloads and within the hot reloading protocol."),(0,i.kt)("h4",{id:"runinspectorproxy"},(0,i.kt)("inlineCode",{parentName:"h4"},"runInspectorProxy")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,i.kt)("p",null,"Run Inspector Proxy server inside Metro to be able to inspect React Native code."),(0,i.kt)("h2",{id:"merging-configurations"},"Merging Configurations"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"metro-config")," package it is possible to merge multiple configurations together."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mergeConfig(...configs): MergedConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the merged configuration of two or more configuration objects.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Arrays and function based config parameters do not deeply merge and will instead override any pre-existing config parameters.\nThis allows overriding and removing default config parameters such as ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"getModulesRunBeforeMainModule")," that may not be required in your environment.")),(0,i.kt)("h4",{id:"merging-example"},"Merging Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// metro.config.js\nconst { mergeConfig } = require("metro-config");\n\nconst configA = {\n  /* general options */\n\n  resolver: {\n    /* resolver options */\n  },\n  transformer: {\n    /* transformer options */\n  },\n  serializer: {\n    /* serializer options */\n  },\n  server: {\n    /* server options */\n  }\n};\n\nconst configB = {\n  /* general options */\n\n  resolver: {\n    /* resolver options */\n  },\n  transformer: {\n    /* transformer options */\n  },\n  serializer: {\n    /* serializer options */\n  },\n  server: {\n    /* server options */\n  }\n};\n\nmodule.exports = mergeConfig(configA, configB);\n')))}m.isMDXComponent=!0}}]);