"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["67342"],{87190:function(e,n,s){s.r(n),s.d(n,{frontMatter:()=>r,default:()=>h,contentTitle:()=>i,assets:()=>c,toc:()=>a,metadata:()=>d});var d=JSON.parse('{"id":"guides/docs/create-doc","title":"Create a doc","description":"Create a Markdown Document","source":"@site/docs/guides/docs/docs-create-doc.mdx","sourceDirName":"guides/docs","slug":"/create-doc","permalink":"/docs/create-doc","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/docs-create-doc.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1742470407000,"frontMatter":{"id":"create-doc","description":"Create a Markdown Document","slug":"/create-doc"},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/docs/docs-introduction"},"next":{"title":"Sidebar","permalink":"/docs/sidebar"}}'),o=s(85893),t=s(80980);let r={id:"create-doc",description:"Create a Markdown Document",slug:"/create-doc"},i="Create a doc",c={},a=[{value:"Doc front matter",id:"doc-front-matter",level:2},{value:"Doc tags",id:"doc-tags",level:2},{value:"Organizing folder structure",id:"organizing-folder-structure",level:2},{value:"Document ID",id:"document-id",level:3},{value:"Doc URLs",id:"doc-urls",level:3},{value:"Sidebars",id:"sidebars",level:3}];function l(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"create-a-doc",children:"Create a doc"})}),"\n",(0,o.jsxs)(n.p,{children:["Create a Markdown file, ",(0,o.jsx)(n.code,{children:"greeting.md"}),", and place it under the ",(0,o.jsx)(n.code,{children:"docs"})," directory."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"website # root directory of your site\n\u251C\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 greeting.md\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u251C\u2500\u2500 docusaurus.config.js\n\u251C\u2500\u2500 ...\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"---\ndescription: Create a doc page with rich content.\n---\n\n# Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n## Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n## Only h2 and h3 will be in the TOC by default.\n\nYou can configure the TOC heading levels either per-document or in the theme configuration.\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["All files prefixed with an underscore (",(0,o.jsx)(n.code,{children:"_"}),") under the ",(0,o.jsx)(n.code,{children:"docs"}),' directory are treated as "partial" pages and will be ignored by default.']}),(0,o.jsxs)(n.p,{children:["Read more about ",(0,o.jsx)(n.a,{href:"/docs/markdown-features/react#importing-markdown",children:"importing partial pages"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"doc-front-matter",children:"Doc front matter"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/markdown-features#front-matter",children:"front matter"})," is used to provide additional metadata for your doc page. Front matter is optional\u2014Docusaurus will be able to infer all necessary metadata without the front matter. For example, the ",(0,o.jsx)(n.a,{href:"#doc-tags",children:"doc tags"})," feature introduced below requires using front matter. For all possible fields, see ",(0,o.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter",children:"the API documentation"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"doc-tags",children:"Doc tags"}),"\n",(0,o.jsxs)(n.p,{children:["Tags are declared in the front matter and introduce another dimension of categorization in addition to the ",(0,o.jsx)(n.a,{href:"/docs/sidebar",children:"docs sidebar"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["It is possible to define tags inline, or to reference predefined tags declared in a ",(0,o.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-docs#tags-file",children:(0,o.jsx)(n.code,{children:"tags file"})})," (optional, usually ",(0,o.jsx)(n.code,{children:"docs/tags.yml"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"In the following example:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"docusaurus"})," references a predefined tag key declared in ",(0,o.jsx)(n.code,{children:"docs/tags.yml"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Releases"})," is an inline tag, because it does not exist in ",(0,o.jsx)(n.code,{children:"docs/tags.yml"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",metastring:'title="docs/my-doc.md"',children:"---\ntags:\n  - Releases\n  - docusaurus\n---\n\n# Title\n\nContent\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",metastring:'title="docs/tags.yml"',children:"docusaurus:\n  label: 'Docusaurus'\n  permalink: '/docusaurus'\n  description: 'Docs related to the Docusaurus framework'\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["Tags can also be declared with ",(0,o.jsx)(n.code,{children:"tags: [Demo, Getting started]"}),"."]}),(0,o.jsxs)(n.p,{children:["Read more about all the possible ",(0,o.jsx)(n.a,{href:"https://www.w3schools.io/file/yaml-arrays/",children:"Yaml array syntaxes"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"organizing-folder-structure",children:"Organizing folder structure"}),"\n",(0,o.jsxs)(n.p,{children:["How the Markdown files are arranged under the ",(0,o.jsx)(n.code,{children:"docs"})," folder can have multiple impacts on Docusaurus content generation. However, most of them can be decoupled from the file structure."]}),"\n",(0,o.jsx)(n.h3,{id:"document-id",children:"Document ID"}),"\n",(0,o.jsxs)(n.p,{children:["Every document has a unique ",(0,o.jsx)(n.code,{children:"id"}),". By default, a document ",(0,o.jsx)(n.code,{children:"id"})," is the name of the document (without the extension) relative to the root docs directory."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, the ID of ",(0,o.jsx)(n.code,{children:"greeting.md"})," is ",(0,o.jsx)(n.code,{children:"greeting"}),", and the ID of ",(0,o.jsx)(n.code,{children:"guide/hello.md"})," is ",(0,o.jsx)(n.code,{children:"guide/hello"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"website # Root directory of your site\n\u2514\u2500\u2500 docs\n   \u251C\u2500\u2500 greeting.md\n   \u2514\u2500\u2500 guide\n      \u2514\u2500\u2500 hello.md\n"})}),"\n",(0,o.jsxs)(n.p,{children:["However, the ",(0,o.jsx)(n.strong,{children:"last part"})," of the ",(0,o.jsx)(n.code,{children:"id"})," can be defined by the user in the front matter. For example, if ",(0,o.jsx)(n.code,{children:"guide/hello.md"}),"'s content is defined as below, its final ",(0,o.jsx)(n.code,{children:"id"})," is ",(0,o.jsx)(n.code,{children:"guide/part1"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"---\nid: part1\n---\n\nLorem ipsum\n"})}),"\n",(0,o.jsx)(n.p,{children:"The ID is used to refer to a document when hand-writing sidebars, or when using docs-related layout components or hooks."}),"\n",(0,o.jsx)(n.h3,{id:"doc-urls",children:"Doc URLs"}),"\n",(0,o.jsxs)(n.p,{children:["By default, a document's URL location is its file path relative to the ",(0,o.jsx)(n.code,{children:"docs"})," folder, with a few exceptions. Namely, if a file is named one the following, the file name won't be included in the URL:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Named as ",(0,o.jsx)(n.code,{children:"index"})," (case-insensitive): ",(0,o.jsx)(n.code,{children:"docs/Guides/index.md"})]}),"\n",(0,o.jsxs)(n.li,{children:["Named as ",(0,o.jsx)(n.code,{children:"README"})," (case-insensitive): ",(0,o.jsx)(n.code,{children:"docs/Guides/README.mdx"})]}),"\n",(0,o.jsxs)(n.li,{children:["Same name as parent folder: ",(0,o.jsx)(n.code,{children:"docs/Guides/Guides.md"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In all cases, the default slug would only be ",(0,o.jsx)(n.code,{children:"/Guides"}),", without the ",(0,o.jsx)(n.code,{children:"/index"}),", ",(0,o.jsx)(n.code,{children:"/README"}),", or duplicate ",(0,o.jsx)(n.code,{children:"/Guides"})," segment."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This convention is exactly the same as ",(0,o.jsx)(n.a,{href:"/docs/sidebar/autogenerated#category-index-convention",children:"the category index convention"}),". However, the ",(0,o.jsx)(n.code,{children:"isCategoryIndex"})," configuration does ",(0,o.jsx)(n.em,{children:"not"})," affect the document URL."]})}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"slug"})," front matter to change a document's URL."]}),"\n",(0,o.jsx)(n.p,{children:"For example, suppose your site structure looks like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"website # Root directory of your site\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 guide\n        \u2514\u2500\u2500 hello.md\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default ",(0,o.jsx)(n.code,{children:"hello.md"})," will be available at ",(0,o.jsx)(n.code,{children:"/docs/guide/hello"}),". You can change its URL location to ",(0,o.jsx)(n.code,{children:"/docs/bonjour"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"---\nslug: /bonjour\n---\n\nLorem ipsum\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"slug"})," will be appended to the doc plugin's ",(0,o.jsx)(n.code,{children:"routeBasePath"}),", which is ",(0,o.jsx)(n.code,{children:"/docs"})," by default. See ",(0,o.jsx)(n.a,{href:"/docs/docs-introduction#docs-only-mode",children:"Docs-only mode"})," for how to remove the ",(0,o.jsx)(n.code,{children:"/docs"})," part from the URL."]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"It is possible to use:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["absolute slugs: ",(0,o.jsx)(n.code,{children:"slug: /mySlug"}),", ",(0,o.jsx)(n.code,{children:"slug: /"}),"..."]}),"\n",(0,o.jsxs)(n.li,{children:["relative slugs: ",(0,o.jsx)(n.code,{children:"slug: mySlug"}),", ",(0,o.jsx)(n.code,{children:"slug: ./../mySlug"}),"..."]}),"\n"]})]}),"\n",(0,o.jsxs)(n.p,{children:["If you want a document to be available at the root, and have a path like ",(0,o.jsx)(n.code,{children:"https://docusaurus.io/docs/"}),", you can use the slug front matter:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"---\nid: my-home-doc\nslug: /\n---\n\nLorem ipsum\n"})}),"\n",(0,o.jsx)(n.h3,{id:"sidebars",children:"Sidebars"}),"\n",(0,o.jsxs)(n.p,{children:["When using ",(0,o.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"autogenerated sidebars"}),", the file structure will determine the sidebar structure."]}),"\n",(0,o.jsxs)(n.p,{children:["Our recommendation for file system organization is: make your file system mirror the sidebar structure (so you don't need to handwrite your ",(0,o.jsx)(n.code,{children:"sidebars.js"})," file), and use the ",(0,o.jsx)(n.code,{children:"slug"})," front matter to customize URLs of each document."]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},80980:function(e,n,s){s.d(n,{Z:()=>i,a:()=>r});var d=s(67294);let o={},t=d.createContext(o);function r(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);