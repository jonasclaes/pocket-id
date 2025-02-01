"use strict";(self.webpackChunkpocket_id_docs=self.webpackChunkpocket_id_docs||[]).push([[227],{6546:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"configuration/environment-variables","title":"Environment Variables","description":"Below are all the environment variables supported by Pocket ID. These should be configured in your .env  file.","source":"@site/docs/configuration/environment-variables.md","sourceDirName":"configuration","slug":"/configuration/environment-variables","permalink":"/configuration/environment-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/stonith404/pocket-id/edit/main/docs/docs/configuration/environment-variables.md","tags":[],"version":"current","frontMatter":{"id":"environment-variables"},"sidebar":"docsSidebar","previous":{"title":"Upgrading","permalink":"/setup/upgrading"},"next":{"title":"LDAP Synchronization","permalink":"/configuration/ldap"}}');var r=d(4848),s=d(8453);const i={id:"environment-variables"},c="Environment Variables",o={},h=[];function l(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"environment-variables",children:"Environment Variables"})}),"\n",(0,r.jsxs)(n.p,{children:["Below are all the environment variables supported by Pocket ID. These should be configured in your ",(0,r.jsx)(n.code,{children:".env "})," file."]}),"\n",(0,r.jsx)(n.p,{children:"Be cautious when modifying environment variables that are not recommended to change."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Recommended to change"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PUBLIC_APP_URL"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"http://localhost"})}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsx)(n.td,{children:"The URL where you will access the app."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"TRUST_PROXY"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsx)(n.td,{children:"Whether the app is behind a reverse proxy."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"MAXMIND_LICENSE_KEY"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-"})}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsxs)(n.td,{children:['License Key for the GeoLite2 Database. The license key is required to retrieve the geographical location of IP addresses in the audit log. If the key is not provided, IP locations will be marked as "unknown." You can obtain a license key for free ',(0,r.jsx)(n.a,{href:"https://www.maxmind.com/en/geolite2/signup",children:"here"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"PUID"})," and ",(0,r.jsx)(n.code,{children:"PGID"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1000"})}),(0,r.jsx)(n.td,{children:"yes"}),(0,r.jsxs)(n.td,{children:["The user and group ID of the user who should run Pocket ID inside the Docker container and owns the files that are mounted with the volume. You can get the ",(0,r.jsx)(n.code,{children:"PUID"})," and ",(0,r.jsx)(n.code,{children:"GUID"})," of your user on your host machine by using the command ",(0,r.jsx)(n.code,{children:"id"}),". For more information see ",(0,r.jsx)(n.a,{href:"https://docs.linuxserver.io/general/understanding-puid-and-pgid/#using-the-variables",children:"this article"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"DB_PROVIDER"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sqlite"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsxs)(n.td,{children:["The database provider you want to use. Currently ",(0,r.jsx)(n.code,{children:"sqlite"})," and ",(0,r.jsx)(n.code,{children:"postgres"})," are supported."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SQLITE_DB_PATH"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"data/pocket-id.db"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsxs)(n.td,{children:["The path to the SQLite database. This gets ignored if you didn't set ",(0,r.jsx)(n.code,{children:"DB_PROVIDER"})," to ",(0,r.jsx)(n.code,{children:"sqlite"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"POSTGRES_CONNECTION_STRING"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsxs)(n.td,{children:["The connection string to your Postgres database. This gets ignored if you didn't set ",(0,r.jsx)(n.code,{children:"DB_PROVIDER"})," to ",(0,r.jsx)(n.code,{children:"postgres"}),". A connection string can look like this: ",(0,r.jsx)(n.code,{children:"postgresql://user:password@host:5432/pocket-id"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"UPLOAD_PATH"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"data/uploads"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsx)(n.td,{children:"The path where the uploaded files are stored."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"INTERNAL_BACKEND_URL"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"http://localhost:8080"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsx)(n.td,{children:"The URL where the backend is accessible."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"GEOLITE_DB_PATH"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"data/GeoLite2-City.mmdb"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsx)(n.td,{children:"The path where the GeoLite2 database should be stored."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CADDY_PORT"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"80"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsx)(n.td,{children:"The port on which Caddy should listen. Caddy is only active inside the Docker container. If you want to change the exposed port of the container then you sould change this variable."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PORT"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"3000"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsx)(n.td,{children:"The port on which the frontend should listen."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BACKEND_PORT"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"8080"})}),(0,r.jsx)(n.td,{children:"no"}),(0,r.jsx)(n.td,{children:"The port on which the backend should listen"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>c});var t=d(6540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);