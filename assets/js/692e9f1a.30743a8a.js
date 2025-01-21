"use strict";(self.webpackChunkpocket_id_docs=self.webpackChunkpocket_id_docs||[]).push([[56],{3049:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"Introduction","href":"/pocket-id/introduction","docId":"introduction","unlisted":false},{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Installation","href":"/pocket-id/setup/installation","docId":"setup/installation","unlisted":false},{"type":"link","label":"Nginx Reverse Proxy","href":"/pocket-id/setup/nginx-reverse-proxy","docId":"setup/nginx-reverse-proxy","unlisted":false},{"type":"link","label":"Upgrading","href":"/pocket-id/setup/upgrading","docId":"setup/upgrading","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Configuration","items":[{"type":"link","label":"Environment Variables","href":"/pocket-id/configuration/environment-variables","docId":"configuration/environment-variables","unlisted":false},{"type":"link","label":"LDAP Synchronization","href":"/pocket-id/configuration/ldap","docId":"configuration/ldap","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Proxy Services","href":"/pocket-id/guides/proxy-services","docId":"guides/proxy-services","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Client Examples","items":[{"type":"link","label":"Hoarder","href":"/pocket-id/client-examples/hoarder","docId":"client-examples/hoarder","unlisted":false},{"type":"link","label":"Jellyfin","href":"/pocket-id/client-examples/jellyfin","docId":"client-examples/jellyfin","unlisted":false},{"type":"link","label":"Vikunja","href":"/pocket-id/client-examples/vikunja","docId":"client-examples/vikunja","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/pocket-id/client-examples"},{"type":"category","label":"Troubleshooting","items":[{"type":"link","label":"Account recovery","href":"/pocket-id/troubleshooting/account-recovery","docId":"troubleshooting/account-recovery","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Helping Out","items":[{"type":"link","label":"Contributing","href":"/pocket-id/help-out/contribute","docId":"help-out/contribute","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"link","label":"Demo","href":"https://pocket-id.eliasschneider.com/"}]},"docs":{"client-examples/hoarder":{"id":"client-examples/hoarder","title":"Hoarder","description":"1. In Pocket-ID create a new OIDC Client, name it i.e. Hoarder","sidebar":"docsSidebar"},"client-examples/jellyfin":{"id":"client-examples/jellyfin","title":"Jellyfin","description":"Due to the current limitations of the Jellyfin SSO plugin, this integration will only work in a browser. When tested, the Jellyfin app did not work and displayed an error, even when custom menu buttons were created.","sidebar":"docsSidebar"},"client-examples/vikunja":{"id":"client-examples/vikunja","title":"Vikunja","description":"1. In Pocket-ID create a new OIDC Client, name it i.e. Vikunja","sidebar":"docsSidebar"},"configuration/environment-variables":{"id":"configuration/environment-variables","title":"Environment Variables","description":"Below are all the environment variables supported by Pocket ID. These should be configured in your .env  file.","sidebar":"docsSidebar"},"configuration/ldap":{"id":"configuration/ldap","title":"LDAP Synchronization","description":"Pocket ID can sync users and groups from an LDAP Source (lldap, OpenLDAP, Active Directory, etc.).","sidebar":"docsSidebar"},"guides/proxy-services":{"id":"guides/proxy-services","title":"Proxy Services","description":"The goal of Pocket ID is to function exclusively as an OIDC provider. As such, we don\'t have a built-in proxy provider. However, you can use other tools that act as a middleware to protect your services and support OIDC as an authentication provider.","sidebar":"docsSidebar"},"help-out/contribute":{"id":"help-out/contribute","title":"Contributing","description":"I am happy that you want to contribute to Pocket ID and help to make it better! All contributions are welcome, including issues, suggestions, pull requests and more.","sidebar":"docsSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Pocket ID is a simple OIDC provider that allows users to authenticate with their passkeys to your services.","sidebar":"docsSidebar"},"setup/installation":{"id":"setup/installation","title":"Installation","description":"Pocket ID requires a secure context, meaning it must be served over HTTPS. This is necessary because Pocket ID uses the WebAuthn API.","sidebar":"docsSidebar"},"setup/nginx-reverse-proxy":{"id":"setup/nginx-reverse-proxy","title":"Nginx Reverse Proxy","description":"To use Nginx as a reverse proxy for Pocket ID, update the configuration to increase the header buffer size. This adjustment is necessary because SvelteKit generates larger headers, which may exceed the default buffer limits.","sidebar":"docsSidebar"},"setup/upgrading":{"id":"setup/upgrading","title":"Upgrading","description":"Updating to a New Version","sidebar":"docsSidebar"},"troubleshooting/account-recovery":{"id":"troubleshooting/account-recovery","title":"Account recovery","description":"There are two ways to create a one-time access link for a user:","sidebar":"docsSidebar"}}}}')}}]);