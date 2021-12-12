(self.webpackChunkbackend_emason=self.webpackChunkbackend_emason||[]).push([[3677],{44226:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),u=a(23724),r=a(97132),s=a(68547),i=a(78862),o=a(62031),d=a(84686),c=a(49425),f=a(41798),m=a(52285),p=function(){var e=(0,r.useIntl)().formatMessage;(0,s.useFocusWhenNavigate)();var t=(0,d.useNotifyAT)().notifyStatus,a=(0,s.useNotification)(),n=e({id:"app.components.ListPluginsPage.title",defaultMessage:"Plugins"}),p=function(){t(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:n}))},g=(0,u.useQuery)("list-plugins",(function(){return(0,m.fetchPlugins)(p)}),{onError:function(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),h=g.status,v=g.data;return"success"!==h&&"error"!==h?l.default.createElement(i.Layout,null,l.default.createElement(o.Main,{"aria-busy":!0},l.default.createElement(s.LoadingIndicatorPage,null))):l.default.createElement(i.Layout,null,l.default.createElement(o.Main,null,l.default.createElement(i.HeaderLayout,{title:n,subtitle:e({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),l.default.createElement(i.ContentLayout,null,l.default.createElement(f.Table,{colCount:2,rowCount:(null===v||void 0===v?void 0:v.plugins.length)+1},l.default.createElement(f.Thead,null,l.default.createElement(f.Tr,null,l.default.createElement(f.Th,null,l.default.createElement(c.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"Settings.roles.list.header.name",defaultMessage:"Name"}))),l.default.createElement(f.Th,null,l.default.createElement(c.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"Settings.roles.list.header.description",defaultMessage:"description"}))))),l.default.createElement(f.Tbody,null,v.plugins.map((function(e){var t=e.name,a=e.displayName,n=e.description;return l.default.createElement(f.Tr,{key:t},l.default.createElement(f.Td,null,l.default.createElement(c.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},a)),l.default.createElement(f.Td,null,l.default.createElement(c.Typography,{textColor:"neutral800"},n)))})))))))};t.default=p},3505:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),u=a(68547),r=a(15482),s=a(97132),i=n(a(13240)),o=n(a(44226)),d=function(){var e=(0,(0,s.useIntl)().formatMessage)({id:"app.components.ListPluginsPage.title",defaultMessage:"Plugins"});return l.default.createElement(u.CheckPagePermissions,{permissions:i.default.marketplace.main},l.default.createElement(r.Helmet,{title:e}),l.default.createElement(o.default,null))};t.default=d},52285:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPlugins=void 0;var l=n(a(87757)),u=n(a(48926)),r=a(53777),s=function(){var e=(0,u.default)(l.default.mark((function e(t){var a,n;return l.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.axiosInstance.get("/admin/plugins");case 2:return a=e.sent,n=a.data,t(),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.fetchPlugins=s}}]);