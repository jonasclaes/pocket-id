"use strict";(self.webpackChunkpocket_id_docs=self.webpackChunkpocket_id_docs||[]).push([[361],{5944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});const d=JSON.parse('{"id":"setup/upgrading","title":"Upgrading","description":"Updating to a New Version","source":"@site/docs/setup/upgrading.md","sourceDirName":"setup","slug":"/setup/upgrading","permalink":"/setup/upgrading","draft":false,"unlisted":false,"editUrl":"https://github.com/stonith404/pocket-id/edit/main/docs/docs/setup/upgrading.md","tags":[],"version":"current","frontMatter":{"id":"upgrading"},"sidebar":"docsSidebar","previous":{"title":"Nginx Reverse Proxy","permalink":"/setup/nginx-reverse-proxy"},"next":{"title":"Environment Variables","permalink":"/configuration/environment-variables"}}');var r=t(4848),i=t(8453);const o={id:"upgrading"},s="Upgrading",c={},a=[{value:"Docker",id:"docker",level:4},{value:"Stand-alone",id:"stand-alone",level:4}];function l(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"upgrading",children:"Upgrading"})}),"\n",(0,r.jsx)(n.p,{children:"Updating to a New Version"}),"\n",(0,r.jsx)(n.h4,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose pull\ndocker compose up -d\n"})}),"\n",(0,r.jsx)(n.h4,{id:"stand-alone",children:"Stand-alone"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop the running services:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pm2 delete pocket-id-backend pocket-id-frontend pocket-id-caddy\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following commands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cd pocket-id\n\n# Checkout the latest version\ngit fetch --tags && git checkout $(git describe --tags `git rev-list --tags --max-count=1`)\n\n# Start the backend\ncd backend/cmd\ngo build -o ../pocket-id-backend\ncd ..\npm2 start pocket-id-backend --name pocket-id-backend\n\n#\xa0Start the frontend\ncd ../frontend\nnpm install\nnpm run build\npm2 start --name pocket-id-frontend --node-args="--env-file .env" build/index.js\n\n# Optional: Start Caddy (You can use any other reverse proxy)\ncd ..\npm2 start caddy --name pocket-id-caddy -- run --config reverse-proxy/Caddyfile\n'})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var d=t(6540);const r={},i=d.createContext(r);function o(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);