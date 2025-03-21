"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6940"],{72188:function(e,t,n){n.r(t),n.d(t,{frontMatter:()=>d,default:()=>f,contentTitle:()=>u,assets:()=>h,toc:()=>p,metadata:()=>s});var s=JSON.parse('{"id":"api/plugins/plugin-sitemap","title":"\uD83D\uDCE6 plugin-sitemap","description":"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately.","source":"@site/docs/api/plugins/plugin-sitemap.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-sitemap","permalink":"/docs/api/plugins/@docusaurus/plugin-sitemap","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-sitemap.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1742470407000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"slug":"/api/plugins/@docusaurus/plugin-sitemap"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-pwa","permalink":"/docs/api/plugins/@docusaurus/plugin-pwa"},"next":{"title":"\uD83D\uDCE6 plugin-vercel-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-vercel-analytics"}}'),r=n(85893),i=n(80980),l=n(15398),a=n(58636),o=n(32240),c=n(66359);let d={sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},u="\uD83D\uDCE6 plugin-sitemap",h={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>CreateSitemapItemsFn</code>",id:"CreateSitemapItemsFn",level:4},{value:"Example configuration",id:"ex-config",level:3}];function m(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"-plugin-sitemap",children:"\uD83D\uDCE6 plugin-sitemap"})}),"\n","\n",(0,r.jsx)(t.p,{children:"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately."}),"\n",(0,r.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,r.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,r.jsx)(t.strong,{children:"only active in production"})," because it works on the build output."]})}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(a.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-sitemap\n"})})}),(0,r.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-sitemap\n"})})}),(0,r.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-sitemap\n"})})}),(0,r.jsx)(a.Z,{value:"bun",label:"Bun",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"bun add @docusaurus/plugin-sitemap\n"})})})]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["If you use the preset ",(0,r.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,r.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,r.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lastmod"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'date' | 'datetime' | null"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"null"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"date"})," is YYYY-MM-DD. ",(0,r.jsx)(t.code,{children:"datetime"})," is a ISO 8601 datetime. ",(0,r.jsx)(t.code,{children:"null"})," is disabled. See ",(0,r.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"changefreq"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string | null"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"'weekly'"})}),(0,r.jsxs)(t.td,{children:["See ",(0,r.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"priority"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number | null"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"0.5"})}),(0,r.jsxs)(t.td,{children:["See ",(0,r.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ignorePatterns"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string[]"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{children:"A list of glob patterns; matching route paths will be filtered from the sitemap. Note that you may need to include the base URL in here."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"filename"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sitemap.xml"})}),(0,r.jsx)(t.td,{children:"The path to the created sitemap file, relative to the output directory. Useful if you have two plugin instances outputting two files."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"createSitemapItems"})}),(0,r.jsx)(t.td,{children:(0,r.jsxs)("code",{children:[(0,r.jsx)(t.a,{href:"#CreateSitemapItemsFn",children:"CreateSitemapItemsFn"})," | undefined"]})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"undefined"})}),(0,r.jsx)(t.td,{children:"An optional function which can be used to transform and / or filter the items in the sitemap."})]})]})]})}),"\n",(0,r.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,r.jsx)(t.h4,{id:"CreateSitemapItemsFn",children:(0,r.jsx)(t.code,{children:"CreateSitemapItemsFn"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type CreateSitemapItemsFn = (params: {\n  siteConfig: DocusaurusConfig;\n  routes: RouteConfig[];\n  defaultCreateSitemapItems: CreateSitemapItemsFn;\n}) => Promise<SitemapItem[]>;\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"This plugin also respects some site config:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/api/docusaurus-config#noIndex",children:(0,r.jsx)(t.code,{children:"noIndex"})}),": results in no sitemap generated"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/api/docusaurus-config#trailingSlash",children:(0,r.jsx)(t.code,{children:"trailingSlash"})}),": determines if the URLs in the sitemap have trailing slashes"]}),"\n"]})]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["About ",(0,r.jsx)(t.code,{children:"lastmod"})]}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"lastmod"})," option will only output a sitemap ",(0,r.jsx)(t.code,{children:"<lastmod>"})," tag if plugins provide ",(0,r.jsx)(t.a,{href:"/docs/api/plugin-methods/lifecycle-apis#addRoute",children:"route metadata"})," attributes ",(0,r.jsx)(t.code,{children:"sourceFilePath"})," and/or ",(0,r.jsx)(t.code,{children:"lastUpdatedAt"}),"."]}),(0,r.jsxs)(t.p,{children:["All the official content plugins provide the metadata for routes backed by a content file (Markdown, MDX or React page components), but it is possible third-party plugin authors do not provide this information, and the plugin will not be able to output a ",(0,r.jsx)(t.code,{children:"<lastmod>"})," tag for their routes."]})]}),"\n",(0,r.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,r.jsx)(c.Z,{pluginName:"@docusaurus/plugin-sitemap",presetOptionName:"sitemap",code:"{\n  lastmod: 'date',\n  changefreq: 'weekly',\n  priority: 0.5,\n  ignorePatterns: ['/tags/**'],\n  filename: 'sitemap.xml',\n  createSitemapItems: async (params) => {\n    const {defaultCreateSitemapItems, ...rest} = params;\n    const items = await defaultCreateSitemapItems(rest);\n    return items.filter((item) => !item.url.includes('/page/'));\n  },\n}"}),"\n",(0,r.jsxs)(t.p,{children:["You can find your sitemap at ",(0,r.jsx)(t.code,{children:"/sitemap.xml"}),"."]})]})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},58636:function(e,t,n){n.d(t,{Z:()=>i});var s=n(85893);n(67294);var r=n(90496);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_pnkT",i),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>j});var s=n(85893),r=n(67294),i=n(90496),l=n(54947),a=n(3620),o=n(844),c=n(97486),d=n(32263),u=n(16971);function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var m=n(71607);function f(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let t=e.currentTarget,n=o[c.indexOf(t)].value;n!==r&&(d(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:u,...l,className:(0,i.Z)("tabs__item","tabItem_AQgk",l?.className,{"tabs__item--active":r===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:s}=e,i=function(e){let{values:t,children:n}=e;return(0,r.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,m]=(0,r.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:i})),[f,x]=function(e){let{queryString:t=!1,groupId:n}=e,s=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,r.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})},[i,s])]}({queryString:n,groupId:s}),[g,j]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[s,i]=(0,u.Nk)(n);return[s,(0,r.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:s}),b=(()=>{let e=f??g;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{b&&m(b)},[b]),{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),j(e)},[x,j,i]),tabValues:i}}(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_Qoir"),children:[(0,s.jsx)(f,{...t,...e}),(0,s.jsx)(x,{...t,...e})]})}function j(e){let t=(0,m.Z)();return(0,s.jsx)(g,{...e,children:h(e.children)},String(t))}},56497:function(e,t,n){n.d(t,{Z:()=>i});var s=n(85893);n(67294);var r=n(71607);function i(e){let{children:t,fallback:n}=e;return(0,r.Z)()?(0,s.jsx)(s.Fragment,{children:t?.()}):n??null}},32240:function(e,t,n){n.d(t,{Z:()=>o});var s=n(85893),r=n(67294),i=n(96700),l=n(3620);let a=r.forwardRef(function(e,t){let{name:n,children:a}=e,o=function(e){let t=e;for(;(0,r.isValidElement)(t);)[t]=r.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(a),c=n?`${n}-${o}`:o,d=`#${c}`,u=(0,l.k6)();return(0,i.Z)().collectAnchor(c),(0,s.jsx)("tr",{id:c,tabIndex:0,ref:u.location.hash===d?t:void 0,onClick:e=>{let t="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();t&&!n&&u.push(d)},onKeyDown:e=>{"Enter"===e.key&&u.push(d)},children:a.props.children})});function o(e){let{children:t,name:n}=e;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[i,l]=r.Children.toArray(t.props.children),o=(0,r.useRef)(null);(0,r.useEffect)(()=>{o.current?.focus()},[o]);let c=r.Children.map(l.props.children,e=>(0,s.jsx)(a,{name:n,ref:o,children:e}));return(0,s.jsxs)("table",{className:"apiTable_e8hp",children:[i,(0,s.jsx)("tbody",{children:c})]})}},66359:function(e,t,n){n.d(t,{Z:()=>u});var s=n(85893);n(67294);var r=n(35363),i=n(90158),l=n(77827),a=n(15398),o=n(58636),c=n(95998);let d=void 0;function u(e){let{code:t,pluginName:n,presetOptionName:u}=e,h=(0,i.zu)(d).path;return(0,s.jsxs)(a.Z,{groupId:"api-config-ex",children:[(0,s.jsxs)(o.Z,{value:"preset",label:(0,l.I)({message:"Preset options"}),children:[(0,s.jsx)("p",{children:(0,s.jsx)(l.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,s.jsx)(r.Z,{to:`${h}/using-plugins#docusauruspreset-classic`,children:(0,s.jsx)(l.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,s.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${u}: ${t.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,s.jsxs)(o.Z,{value:"plugin",label:(0,l.I)({message:"Plugin options"}),children:[(0,s.jsx)("p",{children:(0,s.jsx)(l.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,s.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${n}',
      // highlight-start
      ${t.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},95998:function(e,t,n){n.d(t,{Z:()=>et});var s,r={};n.r(r),n.d(r,{ButtonExample:()=>B});var i=n(85893),l=n(67294),a=n(90496),o=n(71607),c=n(10075),d=n(77827),u=n(8156),h=n(56497),p=n(85108),m=n(45245),f=n(26378);function x(){let{prism:e}=(0,f.L)(),{colorMode:t}=(0,m.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var g=n(67490);function j(e){let{children:t}=e;return(0,i.jsx)("div",{className:(0,a.Z)("playgroundHeader_Tvsk"),children:t})}function b(){return(0,i.jsx)("div",{children:"Loading..."})}function v(){return(0,i.jsx)(h.Z,{fallback:(0,i.jsx)(b,{}),children:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.Z,{fallback:e=>(0,i.jsx)(p.Ac,{...e}),children:(0,i.jsx)(c.i5,{})}),(0,i.jsx)(c.IF,{})]})})}function y(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{children:(0,i.jsx)(d.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,i.jsx)("div",{className:"playgroundPreview_mApW",children:(0,i.jsx)(v,{})})]})}function k(){let e=(0,o.Z)();return(0,i.jsx)(c.uz,{className:"playgroundEditor_TySg"},String(e))}function w(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{children:(0,i.jsx)(d.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,i.jsx)(k,{})]})}let C=e=>`${e};`;function N(e){let{children:t,transformCode:n,...s}=e,{siteConfig:{themeConfig:r}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:l}}=r,a=x(),o=s.metastring?.includes("noInline")??!1;return(0,i.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,i.jsx)(c.nu,{code:t?.replace(/\n$/,""),noInline:o,transformCode:n??C,theme:a,...s,children:"top"===l?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{}),(0,i.jsx)(w,{})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{}),(0,i.jsx)(y,{})]})})})}function B(e){return(0,i.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let I={React:l,...l,...r};var T=n(55951),S=n(6324),Z=n.n(S);let E=/title=(?<quote>["'])(?<title>.*?)\1/,L=/\{(?<range>[\d,-]+)\}/,A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},_={...A,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},$=Object.keys(A);function D(e,t){let n=e.map(e=>{let{start:n,end:s}=_[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${s})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}function F(e){let{as:t,...n}=e,s=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[s,r]=e,i=t[s];i&&"string"==typeof r&&(n[i]=r)}),n}(x());return(0,i.jsx)(t,{...n,style:s,className:(0,a.Z)(n.className,"codeBlockContainer_jDV4",T.k.common.codeBlock)})}let O={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function M(e){let{children:t,className:n}=e;return(0,i.jsx)(F,{as:"pre",tabIndex:0,className:(0,a.Z)(O.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:O.codeBlockLines,children:t})})}var R=n(50923);let P={attributes:!0,characterData:!0,childList:!0,subtree:!0};var V=n(7316);let W={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function q(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:r,getTokenProps:l}=e,o=function(e){let t=1===e.length&&"\n"===e[0].content?e[0]:void 0;return t?[{...t,content:""}]:e}(t),c=r({line:o,className:(0,a.Z)(n,s&&W.codeLine)}),d=o.map((e,t)=>(0,i.jsx)("span",{...l({token:e})},t));return(0,i.jsxs)("span",{...c,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:W.codeLineNumber}),(0,i.jsx)("span",{className:W.codeLineContent,children:d})]}):d,(0,i.jsx)("br",{})]})}var H=n(44771);function U(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Y(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let z={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function G(e){let{code:t,className:n}=e,[s,r]=(0,l.useState)(!1),o=(0,l.useRef)(void 0),c=(0,l.useCallback)(()=>{(0,H.Z)(t),r(!0),o.current=window.setTimeout(()=>{r(!1)},1e3)},[t]);return(0,l.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,i.jsx)("button",{type:"button","aria-label":s?(0,d.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,z.copyButton,s&&z.copyButtonCopied),onClick:c,children:(0,i.jsxs)("span",{className:z.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(U,{className:z.copyButtonIcon}),(0,i.jsx)(Y,{className:z.copyButtonSuccessIcon})]})})}function Q(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let X={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function J(e){let{className:t,onClick:n,isEnabled:s}=e,r=(0,d.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,s&&X.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,i.jsx)(Q,{className:X.wordWrapButtonIcon,"aria-hidden":"true"})})}function K(e){var t;let{children:n,className:s="",metastring:r,title:c,showLineNumbers:d,language:u}=e,{prism:{defaultLanguage:h,magicComments:p}}=(0,f.L)(),m=(t=u??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(s)??h,t?.toLowerCase()),g=x(),j=function(){let[e,t]=(0,l.useState)(!1),[n,s]=(0,l.useState)(!1),r=(0,l.useRef)(null),i=(0,l.useCallback)(()=>{let n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[r,e]),a=(0,l.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=r.current;s(e>t||r.current.querySelector("code").hasAttribute("style"))},[r]);return!function(e,t){let[n,s]=(0,l.useState)(),r=(0,l.useCallback)(()=>{s(e.current?.closest("[role=tabpanel][hidden]"))},[e,s]);(0,l.useEffect)(()=>{r()},[r]),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P,s=(0,R.zX)(t),r=(0,R.Ql)(n);(0,l.useEffect)(()=>{let t=new MutationObserver(s);return e&&t.observe(e,r),()=>t.disconnect()},[e,s,r])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(r,a),(0,l.useEffect)(()=>{a()},[e,a]),(0,l.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:i}}(),b=(0,o.Z)(),v=(r?.match(E)?.groups.title??"")||c,{lineClassNames:y,code:k}=function(e,t){let n=e.replace(/\n$/,""),{language:s,magicComments:r,metastring:i}=t;if(i&&L.test(i)){let e=i.match(L).groups.range;if(0===r.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=r[0].className;return{lineClassNames:Object.fromEntries(Z()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===s)return{lineClassNames:{},code:n};let l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return D(["js","jsBlock"],t);case"jsx":case"tsx":return D(["js","jsBlock","jsx"],t);case"html":return D(["js","jsBlock","html"],t);case"python":case"py":case"bash":return D(["bash"],t);case"markdown":case"md":return D(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return D(["tex"],t);case"lua":case"haskell":return D(["lua"],t);case"sql":return D(["lua","jsBlock"],t);case"wasm":return D(["wasm"],t);case"vb":case"vba":case"visual-basic":return D(["vb","rem"],t);case"vbnet":return D(["vbnet","rem"],t);case"batch":return D(["rem"],t);case"basic":return D(["rem","f90"],t);case"fsharp":return D(["js","ml"],t);case"ocaml":case"sml":return D(["ml"],t);case"fortran":return D(["f90"],t);case"cobol":return D(["cobol"],t);default:return D($,t)}}(s,r),a=n.split("\n"),o=Object.fromEntries(r.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(r.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(l);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?o[c[n]].range+=`${e},`:d[n]?o[d[n]].start=e:u[n]&&(o[u[n]].range+=`${o[u[n]].start}-${e-1},`),a.splice(e,1)}n=a.join("\n");let h={};return Object.entries(o).forEach(e=>{let[t,{range:n}]=e;Z()(n).forEach(e=>{h[e]??=[],h[e].push(t)})}),{lineClassNames:h,code:n}}(n,{metastring:r,language:m,magicComments:p}),w=function(e){let{showLineNumbers:t,metastring:n}=e;return"boolean"==typeof t?t?1:void 0:"number"==typeof t?t:function(e){let t=e?.split(" ").find(e=>e.startsWith("showLineNumbers"));if(t)return t.startsWith("showLineNumbers=")?parseInt(t.replace("showLineNumbers=",""),10):1}(n)}({showLineNumbers:d,metastring:r});return(0,i.jsxs)(F,{as:"div",className:(0,a.Z)(s,m&&!s.includes(`language-${m}`)&&`language-${m}`),children:[v&&(0,i.jsx)("div",{className:O.codeBlockTitle,children:v}),(0,i.jsxs)("div",{className:O.codeBlockContent,children:[(0,i.jsx)(V.y$,{theme:g,code:k,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:r,getTokenProps:l}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:j.codeBlockRef,className:(0,a.Z)(t,O.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,a.Z)(O.codeBlockLines,void 0!==w&&O.codeBlockLinesWithNumbering),style:void 0===w?void 0:{counterReset:`line-count ${w-1}`},children:s.map((e,t)=>(0,i.jsx)(q,{line:e,getLineProps:r,getTokenProps:l,classNames:y[t],showLineNumbers:void 0!==w},t))})})}}),b?(0,i.jsxs)("div",{className:O.buttonGroup,children:[(j.isEnabled||j.isCodeScrollable)&&(0,i.jsx)(J,{className:O.codeButton,onClick:()=>j.toggle(),isEnabled:j.isEnabled}),(0,i.jsx)(G,{className:O.codeButton,code:k})]}):null]})]})}let ee=(s=function(e){let{children:t,...n}=e,s=(0,o.Z)(),r=l.Children.toArray(t).some(e=>(0,l.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t;return(0,i.jsx)("string"==typeof r?K:M,{...n,children:r},String(s))},function(e){return e.live?(0,i.jsx)(N,{scope:I,...e}):(0,i.jsx)(s,{...e})});function et(e){return(0,i.jsx)(ee,{...e})}}}]);