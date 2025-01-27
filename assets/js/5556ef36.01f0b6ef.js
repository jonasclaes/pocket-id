"use strict";(self.webpackChunkpocket_id_docs=self.webpackChunkpocket_id_docs||[]).push([[886],{9213:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"client-examples/proxmox","title":"Proxmox","description":"The following example variables are used, and should be replaced with your actual URLs.","source":"@site/docs/client-examples/proxmox.md","sourceDirName":"client-examples","slug":"/client-examples/proxmox","permalink":"/pocket-id/client-examples/proxmox","draft":false,"unlisted":false,"editUrl":"https://github.com/stonith404/pocket-id/edit/main/docs/docs/client-examples/proxmox.md","tags":[],"version":"current","frontMatter":{"id":"proxmox"},"sidebar":"docsSidebar","previous":{"title":"Portainer","permalink":"/pocket-id/client-examples/portainer"},"next":{"title":"Semaphore UI","permalink":"/pocket-id/client-examples/semaphore-ui"}}');var s=n(4848),i=n(8453);const r={id:"proxmox"},c="Proxmox",l={},d=[{value:"Pocket ID Setup",id:"pocket-id-setup",level:2},{value:"Proxmox Setup",id:"proxmox-setup",level:2}];function x(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"proxmox",children:"Proxmox"})}),"\n",(0,s.jsx)(o.p,{children:"The following example variables are used, and should be replaced with your actual URLs."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"proxmox.example.com"})," (The URL of your Proxmox instance.)"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"id.example.com"})," (The URL of your Pocket ID instance.)"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"pocket-id-setup",children:"Pocket ID Setup"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["In Pocket ID create a new OIDC Client, name it, for example, ",(0,s.jsx)(o.code,{children:"Proxmox"}),"."]}),"\n",(0,s.jsx)(o.li,{children:"Set a logo for this OIDC Client if you would like to."}),"\n",(0,s.jsxs)(o.li,{children:["Set the callback URL to: ",(0,s.jsx)(o.code,{children:"https://proxmox.example.com"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Copy the ",(0,s.jsx)(o.code,{children:"Client ID"}),", and the ",(0,s.jsx)(o.code,{children:"Client Secret"})," for use in the next steps."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"proxmox-setup",children:"Proxmox Setup"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Open the Proxmox console and navigate to: ",(0,s.jsx)(o.code,{children:"Datacenter"})," -> ",(0,s.jsx)(o.code,{children:"Permissions"})," -> ",(0,s.jsx)(o.code,{children:"Realms"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Add a new ",(0,s.jsx)(o.code,{children:"OpenID Connect Server"})," Realm."]}),"\n",(0,s.jsxs)(o.li,{children:["Enter ",(0,s.jsx)(o.code,{children:"https://id.example.com"})," for the ",(0,s.jsx)(o.code,{children:"Issuer URL"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Enter a name for the realm of your choice, for example, ",(0,s.jsx)(o.code,{children:"PocketID"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Paste the ",(0,s.jsx)(o.code,{children:"Client ID"})," from Pocket ID into the ",(0,s.jsx)(o.code,{children:"Client ID"})," field in Proxmox."]}),"\n",(0,s.jsxs)(o.li,{children:["Paste the ",(0,s.jsx)(o.code,{children:"Client Secret"})," from Pocket ID into the ",(0,s.jsx)(o.code,{children:"Client Key"})," field in Proxmox."]}),"\n",(0,s.jsxs)(o.li,{children:["You can check the ",(0,s.jsx)(o.code,{children:"Default"})," box if you want this to be the default realm Proxmox uses when signing in."]}),"\n",(0,s.jsxs)(o.li,{children:["Check the ",(0,s.jsx)(o.code,{children:"Autocreate Users"})," checkbox. (This will automatically create users in Proxmox if they don't exist)."]}),"\n",(0,s.jsxs)(o.li,{children:["Select ",(0,s.jsx)(o.code,{children:"username"})," for the ",(0,s.jsx)(o.code,{children:"Username Claim"})," dropdown. (This is a personal preference and controls how the username is shown, for example: ",(0,s.jsx)(o.code,{children:"username = username@PocketID"})," or ",(0,s.jsx)(o.code,{children:"email = username@example@PocketID"}),")."]}),"\n",(0,s.jsxs)(o.li,{children:["Leave the rest as defaults and click ",(0,s.jsx)(o.code,{children:"OK"})," to save the new realm."]}),"\n"]})]})}function a(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>c});var t=n(6540);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);