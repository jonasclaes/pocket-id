"use strict";(self.webpackChunkpocket_id_docs=self.webpackChunkpocket_id_docs||[]).push([[754],{1169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});const c=JSON.parse('{"id":"client-examples/headscale","title":"Headscale","description":"Create OIDC Client in Pocket ID","source":"@site/docs/client-examples/headscale.md","sourceDirName":"client-examples","slug":"/client-examples/headscale","permalink":"/client-examples/headscale","draft":false,"unlisted":false,"editUrl":"https://github.com/stonith404/pocket-id/edit/main/docs/docs/client-examples/headscale.md","tags":[],"version":"current","frontMatter":{"id":"headscale"},"sidebar":"docsSidebar","previous":{"title":"Grist","permalink":"/client-examples/grist"},"next":{"title":"Hoarder","permalink":"/client-examples/hoarder"}}');var l=t(4848),s=t(8453);const i={id:"headscale"},a="Headscale",o={},r=[{value:"Create OIDC Client in Pocket ID",id:"create-oidc-client-in-pocket-id",level:2},{value:"Configure Headscale",id:"configure-headscale",level:2},{value:"(Optional) Restrict Access to Certain Groups",id:"optional-restrict-access-to-certain-groups",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"headscale",children:"Headscale"})}),"\n",(0,l.jsx)(n.h2,{id:"create-oidc-client-in-pocket-id",children:"Create OIDC Client in Pocket ID"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Create a new OIDC Client in Pocket ID (e.g., ",(0,l.jsx)(n.code,{children:"Headscale"}),")."]}),"\n",(0,l.jsxs)(n.li,{children:["Set the callback URL:  ",(0,l.jsx)(n.code,{children:"https://<HEADSCALE-DOMAIN>/oidc/callback"})]}),"\n",(0,l.jsxs)(n.li,{children:["Enable ",(0,l.jsx)(n.code,{children:"PKCE"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Copy the ",(0,l.jsx)(n.strong,{children:"Client ID"})," and ",(0,l.jsx)(n.strong,{children:"Client Secret"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"configure-headscale",children:"Configure Headscale"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Refer to the example ",(0,l.jsx)(n.a,{href:"https://github.com/juanfont/headscale/blob/main/config-example.yaml",children:(0,l.jsx)(n.code,{children:"config.yaml"})})," for full OIDC configuration options."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Add the following to ",(0,l.jsx)(n.code,{children:"config.yaml"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'oidc:\n  issuer: "https://<POCKET-ID-DOMAIN>"\n  client_id: "<CLIENT-ID>"\n  client_secret: "<CLIENT-SECRET>"\n  pkce:\n    enabled: true\n    method: S256\n'})}),"\n",(0,l.jsx)(n.h3,{id:"optional-restrict-access-to-certain-groups",children:"(Optional) Restrict Access to Certain Groups"}),"\n",(0,l.jsx)(n.p,{children:"To allow only specific groups, add:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'  scope: ["openid", "profile", "email", "groups"]\n  allowed_groups:\n    - <POCKET-ID-GROUP-NAME> #example: headscale \n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var c=t(6540);const l={},s=c.createContext(l);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);