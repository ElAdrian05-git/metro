"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[645],{68459:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>h,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],s={id:"caching",title:"Caching"},h=void 0,r={unversionedId:"caching",id:"caching",isDocsHomePage:!1,title:"Caching",description:"Metro has a multi-layered cache: you can set up multiple caches to be used by Metro instead of one. This has several advantages, on this page we will explain how the caches work.",source:"@site/../docs/Caching.md",sourceDirName:".",slug:"/caching",permalink:"/metro/docs/caching",editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Caching.md",tags:[],version:"current",lastUpdatedAt:1651152011,formattedLastUpdatedAt:"4/28/2022",frontMatter:{id:"caching",title:"Caching"},sidebar:"docs",previous:{title:"Bundle Formats",permalink:"/metro/docs/bundling"}},l=[{value:"Why Cache?",id:"why-cache",children:[]},{value:"Cache Fetching &amp; Saving",id:"cache-fetching--saving",children:[]}],d={toc:l};function m(e){var a=e.components,t=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Metro has a multi-layered cache: you can set up multiple caches to be used by Metro instead of one. This has several advantages, on this page we will explain how the caches work."),(0,i.mdx)("h2",{id:"why-cache"},"Why Cache?"),(0,i.mdx)("p",null,"Caches give big performance benefits, they can increase the speed of a bundler with more than tenfold. However, many systems use a non-persistent cache. With Metro we have a more sophisticated way of caching with a layer system. For example, we can store the cache on a server. Because of this all bundlers connected to the same server can use the shared cache. As a result the initial build time for CI servers and local development become significantly lower."),(0,i.mdx)("p",null,"We want to store caches in multiple places as to always have a cache to fallback to. That's why there is a multi-layered cache system."),(0,i.mdx)("h2",{id:"cache-fetching--saving"},"Cache Fetching & Saving"),(0,i.mdx)("p",null,"There is an ordering mechanism to determine which cache to use. For retrieving a cache we go through the caches from ",(0,i.mdx)("em",{parentName:"p"},"top to bottom")," until we find a result, for saving a cache we do the same until we find a store that has the cache."),(0,i.mdx)("p",null,"Let's say you have two cache stores: one on a server and one on your local file system. You would specify that in this way:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const config = {\n  cacheStores: [\n    new FileStore({/*opts*/}),\n    new NetworkStore({/*opts*/})\n  ]\n}\n")),(0,i.mdx)("p",null,"Metro will first look into the ",(0,i.mdx)("inlineCode",{parentName:"p"},"FileStore")," when we retrieve a cache. If it can't find the cache there it will check ",(0,i.mdx)("inlineCode",{parentName:"p"},"NetworkStore"),", and so on. Finally if there's no cache there it will generate a new cache itself. As soon as the cache has been generated, Metro will go again from top to bottom to store the cache in ",(0,i.mdx)("em",{parentName:"p"},"all")," stores. This also happens if a cache is found. For example, if Metro finds a cache in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"NetworkStore")," it will store it in ",(0,i.mdx)("inlineCode",{parentName:"p"},"FileStore")," as well."))}m.isMDXComponent=!0}}]);