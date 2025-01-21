"use strict";(self.webpackChunkpocket_id_docs=self.webpackChunkpocket_id_docs||[]).push([[723],{5057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"help-out/contribute","title":"Contributing","description":"I am happy that you want to contribute to Pocket ID and help to make it better! All contributions are welcome, including issues, suggestions, pull requests and more.","source":"@site/docs/help-out/contribute.md","sourceDirName":"help-out","slug":"/help-out/contribute","permalink":"/pocket-id/help-out/contribute","draft":false,"unlisted":false,"editUrl":"https://github.com/stonith404/pocket-id/edit/main/docs/docs/help-out/contribute.md","tags":[],"version":"current","frontMatter":{"id":"contribute"},"sidebar":"docsSidebar","previous":{"title":"Account recovery","permalink":"/pocket-id/troubleshooting/account-recovery"}}');var s=t(4848),r=t(8453);const l={id:"contribute"},o="Contributing",d={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Submit a Pull Request",id:"submit-a-pull-request",level:2},{value:"Setup project",id:"setup-project",level:2},{value:"Backend",id:"backend",level:3},{value:"Setup",id:"setup",level:4},{value:"Frontend",id:"frontend",level:3},{value:"Setup",id:"setup-1",level:4},{value:"Reverse Proxy",id:"reverse-proxy",level:3},{value:"Setup",id:"setup-2",level:4},{value:"Testing",id:"testing",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"contributing",children:"Contributing"})}),"\n",(0,s.jsx)(n.p,{children:"I am happy that you want to contribute to Pocket ID and help to make it better! All contributions are welcome, including issues, suggestions, pull requests and more."}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(n.p,{children:"You've found a bug, have suggestion or something else, just create an issue on GitHub and we can get in touch."}),"\n",(0,s.jsx)(n.h2,{id:"submit-a-pull-request",children:"Submit a Pull Request"}),"\n",(0,s.jsx)(n.p,{children:"Before you submit the pull request for review please ensure that"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The pull request naming follows the ",(0,s.jsx)(n.a,{href:"https://www.conventionalcommits.org",children:"Conventional Commits specification"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<type>[optional scope]: <description>"})}),"\n",(0,s.jsx)(n.p,{children:"example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"feat(share): add password protection\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"TYPE"})," can be:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"feat"})," - is a new feature"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"doc"})," - documentation only changes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fix"})," - a bug fix"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"refactor"})," - code change that neither fixes a bug nor adds a feature"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Your pull request has a detailed description"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You run ",(0,s.jsx)(n.code,{children:"npm run format"})," to format the code"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup-project",children:"Setup project"}),"\n",(0,s.jsx)(n.p,{children:"Pocket ID consists of a frontend, backend and a reverse proxy."}),"\n",(0,s.jsx)(n.h3,{id:"backend",children:"Backend"}),"\n",(0,s.jsxs)(n.p,{children:["The backend is built with ",(0,s.jsx)(n.a,{href:"https://gin-gonic.com",children:"Gin"})," and written in Go."]}),"\n",(0,s.jsx)(n.h4,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.code,{children:"backend"})," folder"]}),"\n",(0,s.jsxs)(n.li,{children:["Copy the ",(0,s.jsx)(n.code,{children:".env.example"})," file to ",(0,s.jsx)(n.code,{children:".env"})," and change the ",(0,s.jsx)(n.code,{children:"APP_ENV"})," to ",(0,s.jsx)(n.code,{children:"development"})]}),"\n",(0,s.jsxs)(n.li,{children:["Start the backend with ",(0,s.jsx)(n.code,{children:"go run cmd/main.go"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"frontend",children:"Frontend"}),"\n",(0,s.jsxs)(n.p,{children:["The frontend is built with ",(0,s.jsx)(n.a,{href:"https://kit.svelte.dev",children:"SvelteKit"})," and written in TypeScript."]}),"\n",(0,s.jsx)(n.h4,{id:"setup-1",children:"Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.code,{children:"frontend"})," folder"]}),"\n",(0,s.jsxs)(n.li,{children:["Copy the ",(0,s.jsx)(n.code,{children:".env.example"})," file to ",(0,s.jsx)(n.code,{children:".env"})]}),"\n",(0,s.jsxs)(n.li,{children:["Install the dependencies with ",(0,s.jsx)(n.code,{children:"npm install"})]}),"\n",(0,s.jsxs)(n.li,{children:["Start the frontend with ",(0,s.jsx)(n.code,{children:"npm run dev"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You're all set!"}),"\n",(0,s.jsx)(n.h3,{id:"reverse-proxy",children:"Reverse Proxy"}),"\n",(0,s.jsxs)(n.p,{children:["We use ",(0,s.jsx)(n.a,{href:"https://caddyserver.com",children:"Caddy"})," as a reverse proxy. You can use any other reverse proxy if you want but you have to configure it yourself."]}),"\n",(0,s.jsx)(n.h4,{id:"setup-2",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"caddy run --config reverse-proxy/Caddyfile"})," in the root folder."]}),"\n",(0,s.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,s.jsxs)(n.p,{children:["We are using ",(0,s.jsx)(n.a,{href:"https://playwright.dev",children:"Playwright"})," for end-to-end testing."]}),"\n",(0,s.jsx)(n.p,{children:"The tests can be run like this:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Start the backend normally"}),"\n",(0,s.jsxs)(n.li,{children:["Start the frontend in production mode with ",(0,s.jsx)(n.code,{children:"npm run build && node build/index.js"})]}),"\n",(0,s.jsxs)(n.li,{children:["Run the tests with ",(0,s.jsx)(n.code,{children:"npm run test"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);