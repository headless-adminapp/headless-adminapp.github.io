"use strict";(self.webpackChunkadminapp_docs=self.webpackChunkadminapp_docs||[]).push([[1476],{6012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"api-reference/plugin","title":"Plugin","description":"Plugin Step","source":"@site/docs/api-reference/plugin.md","sourceDirName":"api-reference","slug":"/api-reference/plugin","permalink":"/docs/api-reference/plugin","draft":false,"unlisted":false,"editUrl":"https://github.com/headless-adminapp/headless-adminapp.github.io/tree/main/docs/api-reference/plugin.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"API Reference","permalink":"/docs/category/api-reference"},"next":{"title":"AttachmentAttribute","permalink":"/docs/api-reference/attributes/attachment"}}');var s=t(4848),r=t(8453);const l={sidebar_position:1},c="Plugin",o={},a=[{value:"Plugin Step",id:"plugin-step",level:3},{value:"Plugin Action Paramters Context",id:"plugin-action-paramters-context",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"plugin",children:"Plugin"})}),"\n",(0,s.jsx)(n.h3,{id:"plugin-step",children:"Plugin Step"}),"\n",(0,s.jsx)(n.p,{children:"The plugin step is an object that contains the following properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logicalName"})," - The logical name of the entity. (Empty string for all entities)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"messageName"})," - Enum ",(0,s.jsx)(n.code,{children:"MessageName"}),". Possible values are:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Create"})," - Represents a create operation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Update"})," - Represents an update operation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Delete"})," - Represents a delete operation."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stage"})," - Enum ",(0,s.jsx)(n.code,{children:"ExecutionStage"}),". Possible values are:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PreOperation"})," - Represents a pre operation stage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PostOperation"})," - Represents a post operation stage."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"attributes"})," - The attributes to filter the plugin and run only for specific attributes modified or created, if empty array then it will run for all attributes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"action"})," - The function that will run when the plugin is triggered."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"plugin-action-paramters-context",children:"Plugin Action Paramters Context"}),"\n",(0,s.jsx)(n.p,{children:"The plugin context is an object that contains the following properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," - The data that is being processed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logicalName"})," - The logical name of the entity."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"})," - The id of the entity. (Pre operation of create will not have id)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"changedValues"})," - The changed values of the entity."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"snapshot"})," - The snapshot of record in db."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sdkContext"})," - The sdk context."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dbContext"})," - The db context."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);