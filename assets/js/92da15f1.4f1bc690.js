"use strict";(self.webpackChunkadminapp_docs=self.webpackChunkadminapp_docs||[]).push([[5666],{9956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"getting-started/customization/commands","title":"Command Bar","description":"","source":"@site/docs/getting-started/customization/commands.md","sourceDirName":"getting-started/customization","slug":"/getting-started/customization/commands","permalink":"/docs/getting-started/customization/commands","draft":false,"unlisted":false,"editUrl":"https://github.com/headless-adminapp/headless-adminapp.github.io/tree/main/docs/getting-started/customization/commands.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Login","permalink":"/docs/getting-started/pages/login"},"next":{"title":"Custom Grid Cell","permalink":"/docs/getting-started/customization/custom-grid-cell"}}');var o=n(4848),a=n(8453);const i={},r="Command Bar",c={},d=[];function m(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"command-bar",children:"Command Bar"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const CustomCommand = {\n  type: 'button',\n  text: 'Custom Command',\n  Icon,\n  onClick: async (context) => {\n    // Your custom logic here\n  }\n}\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="config/client/experience/task.ts"',children:"import { SchemaExperienceBuilder } from '@headless-adminapp/app/builders';\nimport { taskSchema } from '../schema/task';\n\nconst builder = new SchemaExperienceBuilder(taskSchema);\n\nexport const taskSchemaExperience = builder.defineExperience({\n  viewCommands: [CustomCommand]\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);